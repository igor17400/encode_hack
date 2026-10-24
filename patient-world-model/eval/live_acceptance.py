"""Live acceptance checks for M0, M3 and M4 (needs GEMINI_API_KEY and MONGODB_URI).

Usage: python -m eval.live_acceptance [--m0] [--m3] [--m4]   (no flag = all)
"""
import argparse
import json
import random
import time
import uuid

from pydantic import BaseModel

from backend import config, db, gemini, rules, world_model
from backend.schema import Patient


def ok(cond: bool, msg: str) -> None:
    print(("PASS " if cond else "FAIL ") + msg)
    if not cond:
        raise SystemExit(1)


def m0() -> None:
    print("M0:", db.ping())

    class Hello(BaseModel):
        greeting: str

    before = gemini.calls_made()
    a = gemini.generate_json(config.MODEL_FLASH, "Say hello in one word.", Hello, thinking_level="low")
    mid = gemini.calls_made()
    b = gemini.generate_json(config.MODEL_FLASH, "Say hello in one word.", Hello, thinking_level="low")
    ok(a == b and gemini.calls_made() == mid and mid - before <= 1, "generate_json valid + second call cached")


def m3() -> None:
    test_vid = json.loads(config.SPLIT.read_text())["test"][0]
    states = json.loads((config.STATES / f"{test_vid}.json").read_text())
    st = rules.State(**states[len(states) // 3])
    q = gemini.embed_one(rules.summary(st, "hook,dissect,cystic_duct"))
    t0 = time.time()
    rows = world_model.retrieve_transitions(q, st.phase)
    dt = time.time() - t0
    ok(len(rows) == 5, f"5 neighbours returned ({len(rows)})")
    ok(all(r["split"] == "train" for r in rows), "all neighbours from train split")
    ok(all(r["phase"] == st.phase for r in rows), f"all neighbours in phase {st.phase}")
    ok(dt < 1.0, f"vector search {dt * 1000:.0f} ms < 1 s")
    f = world_model.retrieve_frame(q, st.phase)
    ok(f is not None and (config.FRAMES_DIR / f["path"]).exists(), f"frame path loads: {f and f['path']}")


def m4() -> None:
    pats = {p["patient_id"]: Patient(**p) for p in json.loads((config.DATA / "patients.json").read_text())}
    p2 = pats["P2"]
    st = rules.initial_state(p2.modifiers)
    for tg in ("cystic_duct", "cystic_artery", "cystic_duct"):
        st = rules.apply_action(st, f"hook,dissect,{tg}", p2.modifiers).state
    sid = uuid.uuid4().hex
    db.col("sessions").insert_one({"_id": sid, "session_id": sid, "mode": "imagine", "patient_id": "P2",
                                   "created_at": time.time(), "note": "acceptance"})
    r1 = world_model.step(st, "clipper,clip,cystic_duct", p2, random.Random(0), session_id=sid)
    print("  clip duct:", r1.risk_level, r1.cited_transition_ids, "|", r1.explanation)
    ok(r1.risk_level in ("high", "injury"), "P2 clip cystic_duct -> high/injury")
    ok(len(r1.cited_transition_ids) >= 2, f"≥2 cited transitions ({len(r1.cited_transition_ids)})")
    r2 = world_model.step(st, "hook,dissect,cystic_plate", p2, random.Random(0), session_id=sid)
    print("  dissect plate:", r2.risk_level, r2.cited_transition_ids, "|", r2.explanation)
    ok(r2.risk_level == "low", "P2 dissect cystic_plate -> low")
    ok(db.col("predictions").count_documents({"session_id": sid}) == 2, "2 predictions written")
    ok(db.col("world_state").count_documents({"session_id": sid}) == 2, "2 world_state docs written")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    for m in ("m0", "m3", "m4"):
        ap.add_argument(f"--{m}", action="store_true")
    a = ap.parse_args()
    run_all = not (a.m0 or a.m3 or a.m4)
    if a.m0 or run_all:
        m0()
    if a.m3 or run_all:
        m3()
    if a.m4 or run_all:
        m4()
