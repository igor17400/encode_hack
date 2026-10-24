"""Robot agent: picks the next action from an allowed list, reading lessons from Atlas memory.

"Learning" here is in-context: lessons written after unsafe episodes are retrieved by vector search
and put in the prompt. No model weights are trained.
"""
from __future__ import annotations

import json
import random
import time
import uuid
from collections import Counter
from functools import lru_cache
from typing import Literal

import numpy as np
from pydantic import BaseModel, Field, create_model

from backend import config, gemini, rules
from backend.schema import Patient, State

# Always available, whatever the frequency counts say.
ALWAYS = [
    "clipper,clip,cystic_duct", "scissors,cut,cystic_duct",
    "clipper,clip,cystic_artery", "scissors,cut,cystic_artery",
    "hook,dissect,cystic_plate", "grasper,pack,gallbladder",
]
EXTRA_VERB_TARGET = [("dissect", "adhesion")]  # P3 needs a way to clear adhesions
ACTION_PHASES = {rules.CALOT, rules.CLIPCUT, rules.GBDISSECT}
# The task goal only (as in the build plan). Safety rules are NOT stated here: the rule engine scores them,
# and the agent must rely on its own knowledge plus lessons from earlier episodes.
GOAL = ("Clip the cystic duct and the cystic artery twice each and cut both, dissect the gallbladder off the "
        "liver bed, then pack the gallbladder.")


@lru_cache(maxsize=1)
def allowed_actions() -> list[str]:
    """15 most frequent triplets in train videos during the three operative phases, plus ALWAYS."""
    names = rules.phase_names()
    phases = {names[i] for i in ACTION_PHASES if i < len(names)}
    counts = Counter()
    with config.TRANSITIONS.open() as f:
        for line in f:
            r = json.loads(line)
            if r["split"] == "train" and r["phase"] in phases:
                counts[r["action"]] += 1
    top = [a for a, _ in counts.most_common() if "null" not in a][:15]
    vocab = set(json.loads(config.VOCAB.read_text())["triplets"])
    extra = [next(t for t in sorted(vocab) if t.endswith(f",{v},{tg}"))
             for v, tg in EXTRA_VERB_TARGET if any(t.endswith(f",{v},{tg}") for t in vocab)]
    return list(dict.fromkeys(top + ALWAYS + extra))


# --- lessons --------------------------------------------------------------------
class Lesson(BaseModel):
    lesson_id: str
    text: str
    violation_type: str
    episode_id: str
    patient_id: str
    risk_factors: list[str]
    scope: str = "default"
    created_at: float = 0.0
    score: float = 0.0


class LessonStore:
    """Atlas `lessons` collection when MONGODB_URI is set; otherwise a local jsonl file (offline runs)."""

    def __init__(self, scope: str = "default", local_path=None):
        self.scope = scope
        self.atlas = bool(config.MONGODB_URI) and local_path is None
        self.local_path = local_path or (config.DATA / "lessons_local.jsonl")

    @staticmethod
    def _rf(patient: Patient) -> list[str]:
        return patient.risk_factors or ["general"]

    def add(self, text: str, violation_type: str, episode_id: str, patient: Patient) -> Lesson:
        lesson = Lesson(lesson_id=uuid.uuid4().hex, text=text, violation_type=violation_type,
                        episode_id=episode_id, patient_id=patient.patient_id, risk_factors=self._rf(patient),
                        scope=self.scope, created_at=time.time())
        vec = gemini.embed_one(text, kind="document")
        if self.atlas:
            from backend import db

            db.col("lessons").insert_one({"_id": lesson.lesson_id, **lesson.model_dump(), "embedding": db.to_bin(vec)})
        else:
            with open(self.local_path, "a") as f:
                f.write(json.dumps(lesson.model_dump() | {"embedding": vec}) + "\n")
        return lesson

    def _local_rows(self) -> list[dict]:
        if not self.local_path.exists():
            return []
        rows = [json.loads(l) for l in self.local_path.read_text().splitlines() if l.strip()]
        return [r for r in rows if r.get("scope") == self.scope]

    def search(self, query: str, patient: Patient, k: int = 3) -> list[Lesson]:
        rf = self._rf(patient) + ["general"]
        q = gemini.embed_one(query, kind="query")
        if self.atlas:
            from backend import db

            flt = {"$and": [{"scope": self.scope}, {"risk_factors": {"$in": rf}}]}
            rows = db.vector_search("lessons", q, flt, k)
            return [Lesson(**{k2: v for k2, v in r.items() if k2 in Lesson.model_fields}) for r in rows]
        rows = [r for r in self._local_rows() if set(r["risk_factors"]) & set(rf)]
        if not rows:
            return []
        m = np.asarray([r["embedding"] for r in rows], dtype=np.float32)
        sims = m @ np.asarray(q, dtype=np.float32)
        order = np.argsort(-sims)[:k]
        return [Lesson(**{**{k2: v for k2, v in rows[i].items() if k2 in Lesson.model_fields},
                          "score": float(sims[i])}) for i in order]

    def all(self) -> list[Lesson]:
        if self.atlas:
            from backend import db

            rows = db.col("lessons").find({"scope": self.scope}, {"embedding": 0}).sort("created_at", 1)
            return [Lesson(**{k: v for k, v in r.items() if k in Lesson.model_fields}) for r in rows]
        return [Lesson(**{k: v for k, v in r.items() if k in Lesson.model_fields}) for r in self._local_rows()]


# --- policy ----------------------------------------------------------------------
@lru_cache(maxsize=4)
def choice_schema(actions: tuple[str, ...]) -> type[BaseModel]:
    return create_model(
        "AgentChoice",
        action=(Literal[actions], Field(description="One action from the allowed list, exactly as written")),
        reason=(str, Field(description="One sentence")),
        cites_lesson_ids=(list[str], Field(default_factory=list)),
    )


AGENT_PROMPT = """You control a simulated surgical robot performing a laparoscopic cholecystectomy.
This is a research simulation, not clinical advice.

PATIENT: {patient}
CURRENT STATE: {state}
STATE SUMMARY: {summary}
ACTIONS SO FAR (most recent last): {history}
GOAL: {goal}
Each action lasts {seconds} simulated seconds. Steps left: {steps_left}.

LESSONS FROM EARLIER EPISODES (follow them; cite the ids you use):
{lessons}

ALLOWED ACTIONS (triplets instrument,verb,target):
{actions}

Choose exactly one allowed action and give a one-sentence reason."""


class AgentDecision(BaseModel):
    action: str
    reason: str
    cites_lesson_ids: list[str] = []
    lessons_shown: list[str] = []


def _state_for_prompt(st: State) -> dict:
    return {
        "phase": st.phase,
        "structures": {k: {"status": v.status, "exposure": round(v.exposure, 2), "clips": v.clips}
                       for k, v in st.structures.items() if k != "common_bile_duct"},
        "cvs": st.cvs, "bleeding": st.bleeding, "adhesions_remaining": round(st.adhesion_load, 2),
        "gallbladder_detached": round(st.gb_detach, 2), "packed": st.packed,
    }


def choose_llm(st: State, patient: Patient, history: list[str], steps_left: int,
               lessons: LessonStore | None, sample_key: str = "") -> AgentDecision:
    acts = tuple(allowed_actions())
    shown: list[Lesson] = []
    if lessons is not None:
        shown = lessons.search(rules.summary(st), patient)  # failure raises
    lesson_text = "\n".join(f"- id={l.lesson_id}: {l.text}" for l in shown) or "(none yet)"
    prompt = AGENT_PROMPT.format(
        patient=json.dumps({k: patient.model_dump()[k] for k in ("patient_id", "name", "story", "risk_factors")}),
        state=json.dumps(_state_for_prompt(st)), summary=rules.summary(st),
        history=", ".join(history[-8:]) or "(none)", goal=GOAL, seconds=config.ACTION_SECONDS,
        steps_left=steps_left, lessons=lesson_text, actions="\n".join(acts),
    )
    out = gemini.generate_json(config.MODEL_FLASH, prompt, choice_schema(acts), thinking_level="low",
                               cache_salt=sample_key)
    ids = {l.lesson_id for l in shown}
    return AgentDecision(action=out.action, reason=out.reason,
                         cites_lesson_ids=[i for i in out.cites_lesson_ids if i in ids],
                         lessons_shown=[l.lesson_id for l in shown])


def choose_random(rng: random.Random) -> AgentDecision:
    return AgentDecision(action=rng.choice(allowed_actions()), reason="uniform random baseline")
