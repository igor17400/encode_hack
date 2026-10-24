"""World-model step: (state, action, patient) -> TransitionResult.

1. Rules give the hard facts (structures, clips, CVS, violations). Argon can never override them.
2. Atlas Vector Search retrieves the k most similar *real* train transitions.
3. Argon predicts what rules cannot (risk, bleeding risk, explanation, next actions) and must cite them.
4. The closest real reference frame to the predicted state is attached (never a generated image).
"""
from __future__ import annotations

import json
import random
import time
import uuid
from collections import Counter

from backend import config, gemini, rules
from backend.schema import Action, Neighbour, NextAction, Patient, State, StepSchema, TransitionResult

RISK_ORDER = ["low", "moderate", "high", "injury"]

ARGON_STEP_PROMPT = """You are the dynamics model of a surgical simulator for laparoscopic cholecystectomy.
This is research simulation, not clinical advice.

PATIENT: {patient_json}
CURRENT STATE: {state_json}
PROPOSED ACTION: {action_json}
HARD RESULT FROM RULES (do not contradict): {rules_out_json}
SIMILAR REAL TRANSITIONS FROM RECORDED OPERATIONS:
{neighbours}

Predict what happens to this patient. Ground every claim in the real transitions
above and cite their ids. If they do not support a prediction, say so and lower
confidence. Prefer "cannot tell" to guessing.

Output rules:
- risk_level is one of low | moderate | high | injury. It must be at least "{risk_floor}" because of the hard result.
- explanation: at most 2 sentences.
- cited_transition_ids: only ids from the list above.
- likely_next_actions: the top 3 next actions as 'instrument,verb,target' triplets, each with a probability.
- confidence: your probability (0-1) that the FIRST of likely_next_actions is the surgeon's actual next action.
  Be calibrated: if predictions like this are right about 4 times in 10, say 0.4.
"""


# --- retrieval / persistence (module-level so tests can replace them) ----------
def retrieve_transitions(query_vec: list[float], phase: str, k: int = config.VECTOR_K) -> list[dict]:
    from backend import db

    flt = {"split": "train", "phase": phase}
    rows = db.vector_search("transitions", query_vec, flt, k, project={"state_before": 0, "state_after": 0})
    if len(rows) < 2:  # rare phase: drop the phase filter, never the split filter
        rows = db.vector_search("transitions", query_vec, {"split": "train"}, k,
                                project={"state_before": 0, "state_after": 0})
    return rows


def retrieve_frame(query_vec: list[float], phase: str) -> dict | None:
    from backend import db

    rows = db.vector_search("frames", query_vec, {"split": "train", "phase": phase}, 1, project={"state": 0})
    if not rows:
        rows = db.vector_search("frames", query_vec, {"split": "train"}, 1, project={"state": 0})
    return rows[0] if rows else None


def persist(session_id: str | None, result: TransitionResult) -> str | None:
    if not session_id:
        return None
    from backend import db

    pid = uuid.uuid4().hex
    now = time.time()
    db.col("predictions").insert_one({
        "_id": pid, "session_id": session_id, "created_at": now,
        "state_in": result.state_in.model_dump(), "action": result.action.key(),
        "retrieved_ids": [n.id for n in result.neighbours],
        "argon_out": {k: getattr(result, k) for k in ("risk_level", "bleeding_risk", "explanation",
                                                       "cited_transition_ids", "confidence", "cannot_tell")}
        | {"likely_next_actions": [a.model_dump() for a in result.likely_next_actions]},
        "rules_verdict": result.rules_violations, "state_out": result.state_out.model_dump(),
        "frame_id": (result.frame or {}).get("_id"), "source": result.source,
    })
    db.col("world_state").insert_one({
        "_id": uuid.uuid4().hex, "session_id": session_id, "t": result.state_out.t, "created_at": now,
        "state": result.state_out.model_dump(), "source": result.source, "confidence": result.confidence,
        "prediction_id": pid,
    })
    return pid


def evidence_for(state: State, k: int = 3) -> list[dict]:
    """The k nearest real train frames to a state: evidence shown next to an alert."""
    try:
        from backend import db

        q = gemini.embed_one(rules.summary(state), kind="query")
        rows = db.vector_search("frames", q, {"split": "train"}, k, project={"state": 0})
        return [{"id": str(r["_id"]), "path": r["path"], "video_id": r.get("video_id"), "t": r.get("t"),
                 "summary": r.get("summary"), "score": r.get("score"), "label": "closest real frame"} for r in rows]
    except Exception as e:
        print(f"[world_model] evidence unavailable: {e}")
        return []


# --- helpers ------------------------------------------------------------------
def risk_floor(rules_violations: list[str], state_out: State) -> str:
    if state_out.injury or rules.V_CBD_INJURY in rules_violations:
        return "injury"
    if rules.V_CLIP_BEFORE_CVS in rules_violations or rules.V_CUT_WITHOUT_CLIPS in rules_violations:
        return "high"
    return "low"


def max_risk(a: str, b: str) -> str:
    return a if RISK_ORDER.index(a) >= RISK_ORDER.index(b) else b


def _neighbour(d: dict) -> Neighbour:
    return Neighbour(id=str(d["_id"]), video_id=d.get("video_id", ""), phase=d.get("phase", ""),
                     summary=d.get("summary", ""), action=d.get("action", ""),
                     state_after_summary=d.get("state_after_summary", ""), next_action=d.get("next_action"),
                     score=float(d.get("score", 0.0)))


def _neighbours_text(ns: list[Neighbour]) -> str:
    if not ns:
        return "(none retrieved)"
    return "\n".join(
        f"- id={n.id} | before: {n.summary} | after: {n.state_after_summary} | next_action: {n.next_action}"
        for n in ns
    )


def _compact_state(s: State) -> dict:
    d = s.model_dump(exclude={"active", "last_bleed_t", "adhesion_last_seen"})
    d["structures"] = {k: {kk: vv for kk, vv in v.items() if kk != "name"} for k, v in d["structures"].items()}
    return d


def _rules_only(neighbours: list[Neighbour], floor: str, patient: Patient, action: Action) -> StepSchema:
    base = config.BASE_BLEED_RISK.get(action.verb, config.BASE_BLEED_RISK["default"])
    risk = base * patient.modifiers.get("bleed_factor", 1.0)
    counts = Counter(n.next_action for n in neighbours if n.next_action)
    total = sum(counts.values()) or 1
    return StepSchema(
        risk_level=floor, bleeding_risk=min(1.0, risk),
        explanation="Rules-only result (world model unavailable): hard constraints applied; "
                    "next actions are the most common among retrieved real transitions.",
        cited_transition_ids=[n.id for n in neighbours[:3]],
        likely_next_actions=[NextAction(action=a, probability=c / total) for a, c in counts.most_common(3)],
        confidence=0.0, cannot_tell=["no learned-model prediction: rules only"],
    )


# --- the step -----------------------------------------------------------------
def step(state: State, action: Action | str, patient: Patient, rng: random.Random | None = None,
         session_id: str | None = None, *, seconds: int | None = None, use_argon: bool = True,
         retrieve: bool = True, with_frame: bool = True, strict: bool = False) -> TransitionResult:
    """use_argon=False / retrieve=False give cheap rules-only dynamics (simulator baselines, offline).

    strict=True (evals, agent runs): a failed retrieval or Argon call raises instead of falling back,
    so a fallback can never be counted as a model prediction.
    """
    rng = rng or random.Random()
    if isinstance(action, str):
        action = Action.parse(action)

    # 1. hard facts
    rout = rules.apply_action(state, action, patient.modifiers, seconds)
    floor = risk_floor(rout.new_violations, rout.state)

    # 2-3. retrieval
    neighbours: list[Neighbour] = []
    try:
        if not retrieve:
            raise RuntimeError("retrieval disabled")
        q = gemini.embed_one(rules.summary(state, action), kind="query")
        neighbours = [_neighbour(d) for d in retrieve_transitions(q, state.phase)]
    except Exception as e:  # no DB / no key: keep going on rules (live app only)
        if retrieve:
            if strict:
                raise
            print(f"[world_model] retrieval unavailable: {e}")

    # 4. Argon
    source = "argon"
    try:
        if not use_argon:
            raise RuntimeError("Argon disabled")
        prompt = ARGON_STEP_PROMPT.format(
            patient_json=json.dumps(patient.model_dump()),
            state_json=json.dumps(_compact_state(state)),
            action_json=json.dumps(action.model_dump()),
            rules_out_json=json.dumps({"violations": rout.new_violations, "events": rout.events,
                                       "state_after": _compact_state(rout.state)}),
            neighbours=_neighbours_text(neighbours),
            risk_floor=floor,
        )
        out = gemini.generate_json(config.MODEL_ARGON, prompt, StepSchema, thinking_level="high")
    except Exception as e:
        if use_argon:
            if strict:
                raise
            print(f"[world_model] Argon unavailable, rules-only: {e}")
        out = _rules_only(neighbours, floor, patient, action)
        source = "rules_only"

    # 5. merge: rules own the anatomy; Argon owns the soft predictions
    st = rout.state.model_copy(deep=True)
    valid_ids = {n.id for n in neighbours}
    cited = [c for c in out.cited_transition_ids if c in valid_ids]
    bled = rng.random() < out.bleeding_risk
    if bled:
        st.bleeding = True
        st.last_bleed_t = st.t
    risk = max_risk(out.risk_level, floor)

    # 6. closest real frame
    frame = None
    try:
        if not with_frame:
            raise RuntimeError("frame disabled")
        fq = gemini.embed_one(rules.summary(st), kind="query")
        f = retrieve_frame(fq, st.phase)
        if f:
            frame = {"_id": str(f["_id"]), "path": f["path"], "video_id": f.get("video_id"), "t": f.get("t"),
                     "summary": f.get("summary"), "score": f.get("score"), "label": "closest real frame"}
    except Exception as e:
        if with_frame:
            print(f"[world_model] frame retrieval unavailable: {e}")

    result = TransitionResult(
        state_in=state, action=action, state_out=st, rules_violations=rout.new_violations,
        risk_level=risk, bleeding_risk=out.bleeding_risk, bled=bled, explanation=out.explanation,
        cited_transition_ids=cited, neighbours=neighbours, likely_next_actions=out.likely_next_actions[:3],
        confidence=out.confidence,
        cannot_tell=out.cannot_tell, frame=frame, source=source,
    )

    # 7. write back to Atlas
    try:
        result.prediction_id = persist(session_id, result)
    except Exception as e:
        print(f"[world_model] persist failed: {e}")
    return result
