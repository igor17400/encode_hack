"""Episode loop: a policy acts, the world model moves the patient, the rules score it.

Policies: random | agent (no lessons) | agent_lessons | expert_replay (a real test video replayed).
Dynamics: "world_model" (retrieval + Argon each step) or "rules" (rules + base bleed risk; no API calls).
"""
from __future__ import annotations

import json
import random
import time
import uuid
from typing import Callable, Literal

from pydantic import BaseModel

from backend import agent, config, gemini, rules, world_model
from backend.schema import Patient, State

Policy = Literal["random", "agent", "agent_lessons", "expert_replay"]
MAX_STEPS = 25

REWARD = {"step": -1, "completed": 10, rules.V_CLIP_BEFORE_CVS: -20, rules.V_CUT_WITHOUT_CLIPS: -10,
          rules.V_CBD_INJURY: -50, "bleeding": -3}


class LessonOut(BaseModel):
    text: str
    violation_type: str


LESSON_PROMPT = """You review a simulated laparoscopic cholecystectomy episode run by a robot agent.
This is research simulation, not clinical advice.

PATIENT: {patient}
EPISODE TRACE (step: state before -> action -> violations):
{trace}

Write ONE general, reusable rule (1-2 sentences) that would have prevented the first violation, phrased so
it applies to future patients with similar risk factors (e.g. "With an inflamed gallbladder, keep dissecting
the cystic plate until it is fully exposed before any clip"). Do not mention step numbers or ids.
violation_type must be the violation the rule prevents."""


def completed(st: State) -> bool:
    s = st.structures
    return st.packed and all(s[n].status == "cut" and s[n].clips >= 2 for n in rules.CLIPPABLE)


def expert_actions(video_id: str) -> list[tuple[str, int]]:
    """Real action sequence of a video from the operative phases: (action, duration_s)."""
    names = rules.phase_names()
    keep = {names[i] for i in (rules.PREP, rules.CALOT, rules.CLIPCUT, rules.GBDISSECT, rules.PACKAGING)}
    out = []
    with config.TRANSITIONS.open() as f:
        for line in f:
            r = json.loads(line)
            if r["video_id"] == video_id and r["phase"] in keep:
                out.append((r["t_start"], r["action"], r["duration_s"]))
    return [(a, d) for _, a, d in sorted(out)]


def write_lesson(patient: Patient, trace: list[dict], episode_id: str, store: agent.LessonStore) -> agent.Lesson | None:
    first_bad = next((i for i, s in enumerate(trace) if s["violations"]), None)
    if first_bad is None:
        return None
    window = trace[max(0, first_bad - 6): first_bad + 1]
    lines = "\n".join(f"{s['step']}: {s['summary_before']} -> {s['action']} -> {s['violations'] or 'ok'}" for s in window)
    out = gemini.generate_json(config.MODEL_ARGON,
                               LESSON_PROMPT.format(patient=json.dumps(patient.model_dump()), trace=lines),
                               LessonOut, thinking_level="high")
    return store.add(out.text, out.violation_type or trace[first_bad]["violations"][0], episode_id, patient)


def run_episode(
    patient: Patient,
    policy: Policy,
    *,
    rng: random.Random | None = None,
    dynamics: Literal["world_model", "rules"] = "world_model",
    lessons: agent.LessonStore | None = None,
    write_lessons: bool = True,
    expert_video: str | None = None,
    max_steps: int = MAX_STEPS,
    on_step: Callable[[dict], None] | None = None,
    episode_id: str | None = None,
    batch_id: str | None = None,
    sample_key: str | None = None,
) -> dict:
    """sample_key makes each episode an independent Gemini sample (reproducible from cache for the same key).
    Defaults to the episode id, so two episodes never share cached agent decisions."""
    rng = rng or random.Random()
    eid = episode_id or uuid.uuid4().hex
    sample_key = sample_key or eid
    st = rules.initial_state(patient.modifiers)
    use_wm = dynamics == "world_model"
    plan = expert_actions(expert_video) if policy == "expert_replay" else None
    if policy == "expert_replay" and not plan:
        raise ValueError(f"no transitions for expert video {expert_video}")
    n_steps = len(plan) if plan else max_steps
    history: list[str] = []
    trace: list[dict] = []
    reward, lessons_used = 0, set()

    for i in range(n_steps):
        if plan:
            action, seconds = plan[i]
            dec = agent.AgentDecision(action=action, reason=f"real action from {expert_video}")
        else:
            seconds = None
            if policy == "random":
                dec = agent.choose_random(rng)
            else:
                # A failed agent call raises: never substitute another policy's action.
                dec = agent.choose_llm(st, patient, history, n_steps - i,
                                       lessons if policy == "agent_lessons" else None,
                                       sample_key=f"{sample_key}:{policy}")
        lessons_used.update(dec.cites_lesson_ids)

        res = world_model.step(st, dec.action, patient, rng, seconds=seconds,
                               use_argon=use_wm and not plan, retrieve=use_wm and not plan, with_frame=False,
                               strict=True)
        step_r = REWARD["step"] if not plan else 0
        for v in res.rules_violations:
            step_r += REWARD.get(v, 0)
        newly_bleeding = res.state_out.bleeding and not st.bleeding
        if newly_bleeding:
            step_r += REWARD["bleeding"]
        st_next = res.state_out
        done = completed(st_next)
        if done:
            step_r += REWARD["completed"]
        reward += step_r

        rec = {"episode_id": eid, "batch_id": batch_id, "step": i, "action": dec.action, "reason": dec.reason,
               "cites_lesson_ids": dec.cites_lesson_ids, "violations": res.rules_violations,
               "risk_level": res.risk_level, "bleeding": newly_bleeding, "reward": step_r,
               "cum_reward": reward, "summary_before": rules.summary(st), "summary_after": rules.summary(st_next),
               "injury": st_next.injury, "completed": done, "source": res.source}
        trace.append(rec)
        if on_step:
            on_step(rec)
        history.append(dec.action)
        st = st_next
        if st.injury or done:
            break

    all_v = [v for s in trace for v in s["violations"]]
    ep = {
        "_id": eid, "episode_id": eid, "batch_id": batch_id, "patient_id": patient.patient_id, "policy": policy,
        "dynamics": dynamics, "expert_video": expert_video, "steps": len(trace), "violations": all_v,
        "n_violations": len([v for v in all_v if v != rules.V_CBD_INJURY]), "injury": st.injury,
        "completed": completed(st), "reward": reward, "lessons_used": sorted(lessons_used),
        "final_state": st.model_dump(exclude={"active"}), "trace": trace, "created_at": time.time(),
        "lesson_written": None,
    }
    if all_v and write_lessons and lessons is not None and policy in ("agent", "agent_lessons"):
        les = write_lesson(patient, trace, eid, lessons)  # failure raises: no silent gaps in memory
        ep["lesson_written"] = les.lesson_id if les else None
    return ep


def save_episode(ep: dict) -> None:
    if not config.MONGODB_URI:
        return
    from backend import db

    db.col("episodes").replace_one({"_id": ep["_id"]}, ep, upsert=True)
