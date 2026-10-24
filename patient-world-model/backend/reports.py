"""Session / episode-batch reports written by Argon (build plan call D), stored in `reports` for Atlas Search.

The report is generated only from the session's recorded events. If the Argon call fails, no report is
stored (the caller gets the exception); a placeholder is never written in its place.
"""
from __future__ import annotations

import json
import time
import uuid

from pydantic import BaseModel, Field

from backend import config, gemini, rules
from backend.schema import Patient, State


class ReportOut(BaseModel):
    text: str = Field(description="3-5 sentences: what happened, safety events, how they were handled")
    key_events: list[str] = Field(description="Up to 5 short bullet points, each tied to a time or episode")


REPORT_PROMPT = """You write the end-of-session report for a research simulation of laparoscopic cholecystectomy.
This is research simulation, not clinical advice. Use only the events below; do not invent any.

SESSION KIND: {kind}
PATIENT (synthetic): {patient}
EVENTS:
{events}
FINAL STATE: {final}"""

LOCAL_REPORTS = config.DATA / "reports_local.jsonl"


def watch_events(sink_events: list[tuple[str, dict]]) -> tuple[list[str], State | None]:
    """Compact, factual event lines from a Watch session's emitted events."""
    lines, final = [], None
    held = 0
    for coll, d in sink_events:
        if coll == "world_state" and d.get("state"):
            final = State(**d["state"])
            if d.get("held"):
                held += 1
            for c in d.get("contradictions") or []:
                lines.append(f"t={d['t']}: verification contradiction: {c}")
        elif coll == "alerts":
            lines.append(f"t={d['t']}: ALERT {d['type']}")
        elif coll == "decisions":
            lines.append(f"t={d.get('t')}: alert {d.get('type')} {d.get('decision')} by human, reason: {d.get('reason')}")
    lines.append(f"{held} frames held back (view obscured or perception error)")
    return lines, final


def episode_events(episodes: list[dict]) -> list[str]:
    out = []
    for i, e in enumerate(episodes):
        out.append(f"episode {i + 1} ({e['policy']}): {e['steps']} steps, violations={e['violations'] or 'none'}, "
                   f"injury={e['injury']}, completed={e['completed']}, reward={e['reward']}, "
                   f"lessons_used={len(e.get('lessons_used') or [])}, lesson_written={bool(e.get('lesson_written'))}")
    return out


def write(session_id: str, kind: str, patient: Patient, events: list[str], final: State | None,
          violations: list[str]) -> dict:
    out = gemini.generate_json(
        config.MODEL_ARGON,
        REPORT_PROMPT.format(kind=kind, patient=json.dumps({k: patient.model_dump()[k] for k in ("patient_id", "name", "story")}),
                             events="\n".join(events[-60:]) or "(no events)",
                             final=rules.summary(final) if final else "(none)"),
        ReportOut, thinking_level="medium")
    doc = {"_id": uuid.uuid4().hex, "session_id": session_id, "kind": kind, "patient_id": patient.patient_id,
           "text": out.text, "key_events": out.key_events, "violations": sorted(set(violations)),
           "n_events": len(events), "created_at": time.time(), "model": config.MODEL_ARGON}
    if config.MONGODB_URI:
        from backend import db

        vec = gemini.embed_one(out.text, kind="document")  # for hybrid (text + vector) search
        db.col("reports").insert_one(dict(doc, embedding=db.to_bin(vec)))
    else:
        with LOCAL_REPORTS.open("a") as f:
            f.write(json.dumps(doc) + "\n")
    return doc


def local_search(q: str, limit: int = 10) -> list[dict]:
    """Plain substring search over locally stored reports (used only when Atlas is not configured)."""
    if not LOCAL_REPORTS.exists():
        return []
    ql = q.lower()
    rows = [json.loads(l) for l in LOCAL_REPORTS.read_text().splitlines() if l.strip()]
    return [dict(r, _collection="reports") for r in rows if ql in r["text"].lower()][:limit]
