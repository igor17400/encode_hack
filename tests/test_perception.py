"""Watch mode with fake Flash / Argon (no credentials)."""
import asyncio
import json

import pytest

from backend import config, gemini, perception, rules, world_model
from backend.schema import Patient

P1 = Patient(patient_id="P1", name="Routine", story="")
P3 = Patient(patient_id="P3", name="Prior surgery", story="", modifiers={"adhesions_at_start": True},
             risk_factors=["adhesions"])


@pytest.fixture(autouse=True)
def no_evidence(monkeypatch):
    monkeypatch.setattr(world_model, "evidence_for", lambda st, k=3: [{"id": "x", "path": "VID01/000005.png"}])


def run(patient, sink, **kw):
    return asyncio.run(perception.run_watch("s", "VID74", patient, sink, t_from=381, t_to=561, **kw))


def test_label_replay_safe_patient_has_no_alerts():
    sink = perception.MemorySink()
    run(P1, sink, source="labels")
    assert not [d for c, d in sink.events if c == "alerts"]
    assert sink.events[-1][1].get("done")


def test_adhesions_patient_raises_alert_with_evidence():
    sink = perception.MemorySink()
    run(P3, sink, source="labels")
    alerts = [d for c, d in sink.events if c == "alerts"]
    assert alerts and alerts[0]["type"] == rules.V_CLIP_BEFORE_CVS and alerts[0]["evidence"]


def test_obscured_view_holds_anatomy(monkeypatch):
    calls = {"n": 0}

    def fake_flash(path):
        calls["n"] += 1
        smoky = calls["n"] % 2 == 0
        return {"triplets": [{"instrument": "hook", "verb": "dissect", "target": "cystic_duct", "confidence": 0.9}],
                "phase": None, "view_quality": "smoke" if smoky else "clear",
                "can_confirm_anatomy": not smoky, "reason_if_not": "smoke" if smoky else ""}

    monkeypatch.setattr(perception, "observe_flash", fake_flash)
    sink = perception.MemorySink()
    run(P1, sink, source="flash", verify=False)
    states = [d for c, d in sink.events if c == "world_state" and "held" in d]
    held = [d for d in states if d["held"]]
    assert held and all(d["banner"] == "view obscured, can't confirm" for d in held)
    for prev, cur in zip(states, states[1:]):
        if cur["held"]:
            assert cur["state"]["structures"] == prev["state"]["structures"]


def test_low_confidence_triplets_ignored():
    obs = {"triplets": [{"instrument": "clipper", "verb": "clip", "target": "cystic_duct", "confidence": 0.3},
                        {"instrument": "hook", "verb": "dissect", "target": "cystic_plate", "confidence": 0.8}]}
    assert perception.accepted_triplets(obs) == ["hook,dissect,cystic_plate"]


def test_corrections_cannot_undo_rules():
    st = rules.initial_state()
    st.structures["cystic_duct"].status = "cut"
    ver = perception.VerifySchema(contradictions=["x"], confidence=0.5, corrections=[
        perception.Correction(structure="cystic_duct", status="dissecting"),
        perception.Correction(structure="cystic_artery", status="skeletonised"),
        perception.Correction(structure="cystic_plate", status="visible"),
    ])
    out, applied = perception.apply_corrections(st, ver)
    assert out.structures["cystic_duct"].status == "cut"
    assert out.structures["cystic_artery"].status == "unseen"
    assert out.structures["cystic_plate"].status == "visible" and len(applied) == 1


def test_corrections_cannot_set_hard_facts():
    """Argon must not clip, cut or add clips directly: that would bypass the rules' violation checks."""
    st = rules.initial_state()
    st.structures["cystic_duct"].status = "clipped"
    st.structures["cystic_duct"].clips = 1
    ver = perception.VerifySchema(contradictions=[], confidence=0.5, corrections=[
        perception.Correction(structure="cystic_duct", status="cut"),
        perception.Correction(structure="cystic_artery", status="clipped", clips=2),
    ])
    out, applied = perception.apply_corrections(st, ver)
    assert out.structures["cystic_duct"].status == "clipped" and out.structures["cystic_duct"].clips == 1
    assert out.structures["cystic_artery"].status == "unseen" and out.structures["cystic_artery"].clips == 0
    assert applied == []


def test_perception_schema_uses_dataset_vocab():
    schema = perception.perception_schema().model_json_schema()
    targets = schema["$defs"]["ObservedTriplet"]["properties"]["target"]["enum"]
    vocab = json.loads(config.VOCAB.read_text())["targets"]
    assert set(targets) == {t for t in vocab if not t.startswith("null")}


def test_failed_perception_call_is_an_error_not_an_obscured_view(monkeypatch):
    def boom(path):
        raise RuntimeError("429 cap")

    monkeypatch.setattr(perception, "observe_flash", boom)
    sink = perception.MemorySink()
    run(P1, sink, source="flash", verify=False)
    obs = [d for c, d in sink.events if c == "observations"]
    states = [d for c, d in sink.events if c == "world_state" and "held" in d]
    assert all(o["error"] and o["view_quality"] == "error" for o in obs)
    assert all(s["banner"] == "perception error, state not updated" for s in states)
