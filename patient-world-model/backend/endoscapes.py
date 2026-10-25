"""Endoscapes clips from Igor's Second Look prototype (igor17400/encode_hack, main) as Watch sessions.

His runs are precomputed real model output per second: Gemini Argon judges the CAMMA critical-view-of-safety
criteria from the frame (prompt v2), Gemini Flash draws approximate boxes, and his temporal rules hold each
criterion. Surgeons' labels (3 annotators, every 5 s) are the truth. We turn each second into our world-model
state so the patient model can continue from what the "eyes" saw. No model is called here.

Numbering differs: Igor/CAMMA C1 = two structures, C2 = hepatocystic triangle cleared, C3 = cystic plate.
"""
from __future__ import annotations

import asyncio
import json
import time
import uuid
from functools import lru_cache
from pathlib import Path

from backend import config, rules
from backend.schema import Patient, State

DIR = config.ROOT / "demo" / "endoscapes"
CLIPS = {
    "endo166": {"run": "v2_argon_boxes_166.js", "video": "endo166.mp4", "truth": "endo166.truth.json", "op": 166},
    "endo198": {"run": "v2_argon_boxes.js", "video": "endo198.mp4", "truth": "endo198.truth.json", "op": 198},
}
# Igor / CAMMA criterion -> our CVS key.
TO_OURS = {"c1": "c3_two_structures", "c2": "c1_triangle_cleared", "c3": "c2_plate_exposed"}
PHASES = {"preparation": rules.PREP, "calot_triangle_dissection": rules.CALOT, "clipping_and_cutting": rules.CLIPCUT,
          "gallbladder_dissection": rules.GBDISSECT}
STRUCTURE_LABELS = {"cystic_duct", "cystic_artery", "cystic_plate", "gallbladder"}
MIN_CONF = 0.6


@lru_cache(maxsize=4)
def load_run(clip: str) -> dict:
    spec = CLIPS[clip]
    s = (DIR / spec["run"]).read_text()
    run = json.loads(s[s.index("{"): s.rindex("}") + 1])  # file is `window.TIMELINE = {...};`
    run["truth"] = json.loads((DIR / spec["truth"]).read_text())
    return run


def experts_cvs_time(truth: list[dict]) -> float | None:
    """First surgeon keyframe where all three criteria are met by majority (>= 0.5)."""
    for k in truth:
        if all(k[c] >= 0.5 for c in ("C1", "C2", "C3")):
            return k["t"]
    return None


def clip_info(clip: str) -> dict:
    run = load_run(clip)
    ts = [f["t"] for f in run["frames"]]
    model_cvs = next((f["t"] for f in run["frames"] if f["cvs_state"].get("cvs", {}).get("on")), None)
    return {"model_cvs_t": model_cvs,"video_id": clip, "source": "endoscapes", "op": CLIPS[clip]["op"], "video": CLIPS[clip]["video"],
            "t_start": 0, "t_end": int(max(ts)), "n_frames": len(ts), "model": run["model"],
            "detect_model": run.get("detect_model"), "prompt": run.get("prompt"),
            "experts_cvs_t": experts_cvs_time(run["truth"]), "agreement": run.get("agreement"),
            "credit": "Endoscapes2023 (CAMMA, CC BY-NC-SA 4.0) · run by Igor Lima (Second Look prototype)"}


def sensed(cvs_state: dict) -> dict[str, bool]:
    return {ours: bool(cvs_state.get(theirs, {}).get("on")) for theirs, ours in TO_OURS.items()}


def frame_state(prev: State, frame: dict) -> State:
    """Our world-model state after one second of Igor's perception (held CVS + structures seen)."""
    st = prev.model_copy(deep=True)
    st.t = int(frame["t"])
    lab = frame["label"]
    st.phase_idx = max(st.phase_idx, PHASES.get(lab.get("phase"), st.phase_idx))
    st.phase = rules.phase_name(st.phase_idx)
    st.phase_inferred = False
    seen = {v["name"] for v in lab.get("visible_structures", []) if v.get("confidence", 0) >= MIN_CONF}
    seen |= {b["label"] for b in lab.get("boxes", []) if b.get("confidence", 0) >= MIN_CONF}
    for name in STRUCTURE_LABELS & seen:
        rules._upgrade(st.structures[name], "visible")
    cvs = sensed(frame["cvs_state"])
    # A held criterion implies the anatomy it describes (derived, so the simulated future starts consistent).
    if cvs["c1_triangle_cleared"]:
        for n in ("cystic_duct", "cystic_artery"):
            st.structures[n].exposure = 1.0
            rules._upgrade(st.structures[n], "skeletonised")
    if cvs["c2_plate_exposed"]:
        st.structures["cystic_plate"].exposure = 1.0
        rules._upgrade(st.structures["cystic_plate"], "skeletonised")
    st.cvs_sensor, st.cvs_source, st.cvs = cvs, "sensor", cvs
    st.view_quality = lab.get("view_quality") or "clear"
    return st


def events(clip: str, patient: Patient) -> list[tuple[str, dict]]:
    """The clip as our Watch event stream: observations (with boxes), world states, alerts, criterion changes."""
    run = load_run(clip)
    info = clip_info(clip)
    truth = {int(k["t"]): k for k in run["truth"]}
    st = rules.initial_state(patient.modifiers)
    st.phase_inferred = False
    out: list[tuple[str, dict]] = []
    for fr in run["frames"]:
        t = int(fr["t"])
        lab = fr["label"]
        # Veil only for a real view problem; "can't confirm anatomy yet" is normal early dissection, not a veil.
        held = lab.get("view_quality") not in (None, "clear")
        out.append(("observations", {
            "_id": uuid.uuid4().hex, "t": t, "frame_path": None, "source": "endoscapes_run",
            "labels": [], "instruments": lab.get("instruments", []),
            "structures": [{"name": v["name"], "confidence": v.get("confidence")} for v in lab.get("visible_structures", [])],
            "boxes": lab.get("boxes", []), "cvs_raw": lab.get("cvs"), "cvs_evidence": lab.get("cvs_evidence"),
            "clip_applier_visible": lab.get("clip_applier_visible"), "view_quality": lab.get("view_quality") or "clear",
            "can_confirm": fr.get("can_confirm", True), "reason_if_not": lab.get("reason_if_not", ""),
            "expert": truth.get(t), "created_at": time.time()}))
        prev = st
        st = frame_state(st, fr)
        changes = [f"{TO_OURS[e['what']].replace('_', ' ')} {'achieved' if e['on'] else 'lost'} (Argon, held)"
                   for e in fr.get("events", []) if e.get("what") in TO_OURS]
        if fr.get("events") and any(e.get("what") == "cvs" for e in fr["events"]):
            changes += ["critical view of safety " + ("ACHIEVED" if fr["cvs_state"]["cvs"]["on"] else "lost")]
        out.append(("world_state", {
            "_id": uuid.uuid4().hex, "t": t, "state": st.model_dump(exclude={"active"}), "source": "endoscapes_run",
            "confidence": 1.0 if not held else 0.0, "held": held,
            "banner": f"view: {lab.get('view_quality')}, can't confirm" if held else None, "changes": changes,
            "anatomy_confirmable": bool(fr.get("can_confirm", True)),
            "duct_confirmed": fr.get("duct_confirmed"),
            # when each held criterion started holding (Igor's `since`), in our CVS keys
            "cvs_since": {TO_OURS[c]: fr["cvs_state"][c].get("since") for c in TO_OURS if fr["cvs_state"].get(c, {}).get("on")},
            "created_at": time.time()}))
        if fr.get("alert"):
            a = fr["alert"]
            out.append(("alerts", {
                "_id": uuid.uuid4().hex, "t": t, "type": "clip_without_confirmed_duct",
                "message": a.get("message"), "evidence": [], "decision": None, "reason": None, "paused": True,
                "created_at": time.time()}))
    out.append(("world_state", {
        "_id": uuid.uuid4().hex, "t": info["t_end"], "state": st.model_dump(exclude={"active"}), "source": "end",
        "confidence": 1.0, "done": True, "decision_point": True,
        "note": "Endoscapes footage ends at the first clip: the decision the world model can now imagine.",
        "created_at": time.time()}))
    return out


async def replay(session_id: str, clip: str, patient: Patient, sink, speed: float = 1.0) -> None:
    """Stream the clip through a sink (Atlas in live mode, the in-page bus offline). Alerts never pause the
    stream; the viewer decides beside the video."""
    for coll, doc in events(clip, patient):
        doc = dict(doc, session_id=session_id)
        sink.emit(coll, doc)
        if coll == "world_state" and speed > 0:
            await asyncio.sleep(1.0 / speed)  # Igor's runs are 1 frame per second of video
