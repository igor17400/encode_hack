"""Watch mode: real surgical frames -> Flash observations -> rules -> live anatomy state.

- Flash labels each frame (1 every >= 2 s) with triplets from the dataset vocabulary only.
- Triplets with confidence >= PERCEPTION_MIN_CONF go through the rules. If the view is not clear or
  Flash cannot confirm anatomy, anatomy is NOT updated ("view obscured, can't confirm").
- Every ~30 s of video, Argon reviews the window and reports contradictions; it may only *advance*
  statuses the rules allow (never un-cut, never touch CVS).
- On a safety violation an alert is raised and playback pauses until Acknowledge / Override.

source="labels" replays the dataset's ground-truth labels instead of Flash (offline / fallback).
"""
from __future__ import annotations

import asyncio
import json
import time
import uuid
from functools import lru_cache
from pathlib import Path
from typing import Literal, Protocol

from pydantic import BaseModel, Field, create_model

from backend import config, gemini, rules, world_model
from backend.schema import STATUS_ORDER, STRUCTURES, Patient, State

VIEW_QUALITY = ("clear", "smoke", "blood", "glare", "occluded", "out_of_focus")
BOX_STRUCTURES = ("gallbladder", "cystic_duct", "cystic_artery", "cystic_plate", "liver", "hepatocystic_window")
FRAME_EVERY_S = 2
VERIFY_EVERY_S = 30
MAX_CONCURRENCY = 8
ALERT_TYPES = {rules.V_CLIP_BEFORE_CVS, rules.V_CUT_WITHOUT_CLIPS, rules.V_CBD_INJURY}


@lru_cache(maxsize=1)
def vocab() -> dict:
    return json.loads(config.VOCAB.read_text())


@lru_cache(maxsize=1)
def perception_schema() -> type[BaseModel]:
    v = vocab()
    lit = lambda xs: Literal[tuple(x for x in xs if not x.startswith("null"))]  # noqa: E731
    Trip = create_model("ObservedTriplet", instrument=(lit(v["instruments"]), ...), verb=(lit(v["verbs"]), ...),
                        target=(lit(v["targets"]), ...), confidence=(float, Field(ge=0, le=1)))
    # Display-only boxes (Gemini's native [ymin, xmin, ymax, xmax] on a 0-1000 grid). Never fed to the rules.
    box_labels = tuple(BOX_STRUCTURES) + tuple(x for x in v["instruments"] if not x.startswith("null"))
    Box = create_model("Box", label=(Literal[box_labels], ...),
                       box_2d=(list[int], Field(description="[ymin, xmin, ymax, xmax], each 0-1000")),
                       confidence=(float, Field(ge=0, le=1)))
    return create_model(
        "Observation",
        triplets=(list[Trip], Field(description="Every instrument action visible; empty if none")),
        phase=(Literal[tuple(v["phases"])], ...),
        view_quality=(Literal[VIEW_QUALITY], ...),
        can_confirm_anatomy=(bool, ...),
        reason_if_not=(str, Field(default="")),
        boxes=(list[Box], Field(default_factory=list, description="Approximate boxes for visible structures and instruments")),
    )


PERCEPTION_PROMPT = """You label one frame of a laparoscopic cholecystectomy video (research simulation).
Report every visible surgical action as (instrument, verb, target) using ONLY these vocabularies:
instruments: {instruments}
verbs: {verbs}
targets: {targets}
Give each triplet a confidence 0-1. Report the surgical phase ({phases}).
view_quality: clear unless smoke, blood, glare, occlusion or blur prevents seeing anatomy.
can_confirm_anatomy: true only if you can actually see the structures you label. Prefer "cannot confirm"
to guessing; if false, say why in reason_if_not.
boxes: approximate bounding boxes for the visible structures ({structures}) and instruments, as
box_2d = [ymin, xmin, ymax, xmax] on a 0-1000 grid, each with a confidence. Only boxes you can actually see."""


class Correction(BaseModel):
    structure: Literal[tuple(s for s in STRUCTURES if s != "common_bile_duct")]
    status: Literal[tuple(STATUS_ORDER)]
    clips: int | None = None
    reason: str = ""


class VerifySchema(BaseModel):
    contradictions: list[str]
    corrections: list[Correction]
    confidence: float = Field(ge=0, le=1)


VERIFY_PROMPT = """You verify a live anatomy tracker for laparoscopic cholecystectomy (research simulation).
CURRENT STATE (from rules): {state}
LAST OBSERVATIONS (t: triplets | view):
{window}
List contradictions between observations and state, or impossible sequences (e.g. "duct cut before any clip").
Propose corrections only if the observations clearly support them. Statuses: {statuses}."""


# --- sinks: where events go -------------------------------------------------------
class Sink(Protocol):
    def emit(self, collection: str, doc: dict) -> None: ...
    async def wait_decision(self, alert_id: str) -> dict | None: ...


class AtlasSink:
    """Writes to Atlas; the SSE endpoint picks inserts up through change streams."""

    def __init__(self, pause_timeout_s: float = 600):
        from backend import db

        self.db = db
        self.pause_timeout_s = pause_timeout_s

    def emit(self, collection: str, doc: dict) -> None:
        self.db.col(collection).insert_one(doc)

    async def wait_decision(self, alert_id: str) -> dict | None:
        deadline = time.time() + self.pause_timeout_s
        while time.time() < deadline:
            a = await asyncio.to_thread(self.db.col("alerts").find_one, {"_id": alert_id})
            if a and a.get("decision"):
                return a
            await asyncio.sleep(0.5)
        return None


class MemorySink:
    """Collects events in order (tests, precomputed recording). Alerts auto-acknowledge."""

    def __init__(self):
        self.events: list[tuple[str, dict]] = []

    def emit(self, collection: str, doc: dict) -> None:
        self.events.append((collection, doc))

    async def wait_decision(self, alert_id: str) -> dict | None:
        return {"decision": "ack", "reason": "auto (recording)"}


# --- frames -------------------------------------------------------------------------
def clip_frames(video_id: str, t_from: int | None = None, t_to: int | None = None) -> list[tuple[int, Path]]:
    d = config.FRAMES_DIR / video_id
    out, last = [], None
    for p in sorted(d.glob("*.png"), key=lambda p: int(p.stem)):
        t = int(p.stem)
        if (t_from is not None and t < t_from) or (t_to is not None and t > t_to):
            continue
        if last is None or t - last >= FRAME_EVERY_S:
            out.append((t, p))
            last = t
    return out


def state_before(video_id: str, t: int, patient: Patient) -> State:
    """Starting mid-operation: replay the real labels up to t-1 through the rules, with this patient's
    modifiers (the same real actions on a sicker patient can leave CVS unmet)."""
    st = rules.initial_state(patient.modifiers)
    if t <= 0 or not config.LABELS.exists():
        p = config.STATES / f"{video_id}.json"
        if t > 0 and p.exists():
            prior = [s for s in json.loads(p.read_text()) if s["t"] < t]
            return State(**prior[-1]) if prior else st
        return st
    seconds = _labels()[video_id]
    ts = sorted(int(x) for x in seconds)
    for sec in range(ts[0], t):
        trips = [x for x in seconds.get(str(sec), []) if "null" not in x]
        st = rules.apply_second(st, trips, patient.modifiers, t=sec).state
    return st


@lru_cache(maxsize=1)
def _labels() -> dict:
    return json.loads(config.LABELS.read_text())


def observe_flash(path: Path) -> dict:
    v = vocab()
    prompt = PERCEPTION_PROMPT.format(
        instruments=", ".join(v["instruments"]), verbs=", ".join(x for x in v["verbs"] if not x.startswith("null")),
        targets=", ".join(x for x in v["targets"] if not x.startswith("null")), phases=", ".join(v["phases"]),
        structures=", ".join(BOX_STRUCTURES))
    out = gemini.generate_json(config.MODEL_FLASH, prompt, perception_schema(), images=[path], thinking_level="low")
    return out.model_dump()


def observe_labels(video_id: str, t: int) -> dict:
    labels = _labels()[video_id]
    trips = [x for x in labels.get(str(t), []) if "null" not in x]
    return {"triplets": [dict(zip(("instrument", "verb", "target"), x.split(",")), confidence=1.0) for x in trips],
            "phase": None, "view_quality": "clear", "can_confirm_anatomy": True, "reason_if_not": ""}


def accepted_triplets(obs: dict) -> list[str]:
    return [f"{x['instrument']},{x['verb']},{x['target']}" for x in obs["triplets"]
            if x["confidence"] >= config.PERCEPTION_MIN_CONF]


# Argon may only advance what is purely observational. Clipped / cut / skeletonised and clip counts are hard
# facts: they change only through observed triplets passing the rules (which also raise the violations).
CORRECTABLE = ("visible", "dissecting")


def apply_corrections(st: State, ver: VerifySchema) -> tuple[State, list[str]]:
    """Rules have the final say: only forward moves to observational statuses; contradictions are reported."""
    st = st.model_copy(deep=True)
    applied = []
    for c in ver.corrections:
        x = st.structures[c.structure]
        if c.status in CORRECTABLE and STATUS_ORDER.index(c.status) > STATUS_ORDER.index(x.status):
            x.status = c.status
            applied.append(f"{c.structure} -> {c.status}")
    return st, applied


# --- the watch loop ------------------------------------------------------------------
async def run_watch(
    session_id: str, video_id: str, patient: Patient, sink: Sink, *,
    t_from: int | None = None, t_to: int | None = None, source: Literal["flash", "labels"] = "flash",
    speed: float = 0.0, verify: bool = True, init_state: State | None = None, report: bool = False,
) -> State:
    """speed: 0 = as fast as possible; 1 = real time (one frame every FRAME_EVERY_S seconds)."""
    log: list[tuple[str, dict]] = []  # everything this session emitted, for the end-of-session report

    def emit(collection: str, doc: dict) -> None:
        log.append((collection, doc))
        sink.emit(collection, doc)

    frames = clip_frames(video_id, t_from, t_to)
    if not frames:
        raise ValueError(f"no frames on disk for {video_id} in [{t_from}, {t_to}]")
    sem = asyncio.Semaphore(MAX_CONCURRENCY)

    async def observe(t: int, p: Path) -> dict:
        async with sem:
            if source == "labels":
                return observe_labels(video_id, t)
            try:
                return await asyncio.to_thread(observe_flash, p)
            except Exception as e:
                # Not a view problem: report it as an error. Anatomy is not updated from a failed call.
                return {"triplets": [], "phase": None, "view_quality": "error", "can_confirm_anatomy": False,
                        "reason_if_not": "", "error": f"perception call failed: {e}"}

    tasks = [asyncio.create_task(observe(t, p)) for t, p in frames]  # prefetch, bounded by the semaphore
    st = init_state or state_before(video_id, frames[0][0], patient)
    st.t = frames[0][0] - 1
    window: list[dict] = []
    last_verify = frames[0][0]
    prev_t = frames[0][0] - 1

    for (t, p), task in zip(frames, tasks):
        obs = await task
        now = time.time()
        rel = str(p.relative_to(config.FRAMES_DIR))
        emit("observations", {"_id": uuid.uuid4().hex, "session_id": session_id, "t": t, "frame_path": rel,
                                   "labels": obs["triplets"], "phase": obs.get("phase"), "boxes": obs.get("boxes", []),
                                   "view_quality": obs["view_quality"], "can_confirm": obs["can_confirm_anatomy"],
                                   "reason_if_not": obs.get("reason_if_not", ""), "error": obs.get("error"),
                                   "source": source,
                                   "created_at": now})
        failed = "error" in obs
        held = obs["view_quality"] != "clear" or not obs["can_confirm_anatomy"]
        new_v: list[str] = []
        if held:
            st = st.model_copy(deep=True)
            st.t = t
            st.view_quality = "unknown" if failed else (obs["view_quality"] if obs["view_quality"] != "clear" else "occluded")
        else:
            trips = accepted_triplets(obs)
            # Hold the observed triplets over the seconds since the previous frame.
            for sec in range(prev_t + 1, t + 1):
                out = rules.apply_second(st, trips, patient.modifiers, t=sec)
                st = out.state
                new_v += out.new_violations
            st.view_quality = "clear"
        prev_t = t
        window.append({"t": t, "triplets": accepted_triplets(obs), "view": obs["view_quality"]})

        emit("world_state", {"_id": uuid.uuid4().hex, "session_id": session_id, "t": t,
                                  "state": st.model_dump(exclude={"active"}), "source": source if source == "labels" else "perception",
                                  "confidence": 1.0 if not held else 0.0, "held": held,
                                  "banner": ("perception error, state not updated" if failed
                                             else "view obscured, can't confirm" if held else None),
                                  "error": obs.get("error"),
                                  "frame_path": rel, "created_at": time.time()})

        for v in dict.fromkeys(x for x in new_v if x in ALERT_TYPES):
            aid = uuid.uuid4().hex
            emit("alerts", {"_id": aid, "session_id": session_id, "t": t, "type": v, "created_at": time.time(),
                                 "frame_path": rel, "evidence": world_model.evidence_for(st), "decision": None, "reason": None,
                                 "paused": True})
            dec = await sink.wait_decision(aid)
            if dec:
                log.append(("decisions", {"t": t, "type": v, "decision": dec.get("decision"), "reason": dec.get("reason")}))

        if verify and source == "flash" and t - last_verify >= VERIFY_EVERY_S:
            last_verify = t
            try:
                ver = await asyncio.to_thread(
                    gemini.generate_json, config.MODEL_ARGON,
                    VERIFY_PROMPT.format(state=rules.summary(st),
                                         window="\n".join(f"{w['t']}: {w['triplets']} | {w['view']}" for w in window[-15:]),
                                         statuses=", ".join(STATUS_ORDER)),
                    VerifySchema, None, "medium")
                st, applied = apply_corrections(st, ver)
                emit("world_state", {"_id": uuid.uuid4().hex, "session_id": session_id, "t": t,
                                          "state": st.model_dump(exclude={"active"}), "source": "argon",
                                          "confidence": ver.confidence * (0.6 if ver.contradictions else 1.0),
                                          "contradictions": ver.contradictions, "corrections_applied": applied,
                                          "created_at": time.time()})
            except Exception as e:
                print(f"[watch] verification skipped: {e}")

        if speed > 0:
            await asyncio.sleep(FRAME_EVERY_S / speed)

    emit("world_state", {"_id": uuid.uuid4().hex, "session_id": session_id, "t": prev_t,
                              "state": st.model_dump(exclude={"active"}), "source": "end", "confidence": 1.0,
                              "done": True, "created_at": time.time()})
    if report:
        from backend import reports

        try:
            events, final = reports.watch_events(log)
            doc = reports.write(session_id, "watch", patient, events, final, st.violations)
            emit("report_events", {k: v for k, v in doc.items() if k != "_id"} | {"_id": uuid.uuid4().hex,
                                                                                  "report_id": doc["_id"]})
        except Exception as e:  # no report is better than an invented one
            print(f"[watch] session report not written: {e}")
    return st
