"""World-model merge logic with Gemini and Atlas replaced by fakes (no credentials needed)."""
import random

import pytest

from backend import config, gemini, rules, world_model
from backend.schema import NextAction, Patient, StepSchema

P1 = Patient(patient_id="P1", name="Routine", story="", modifiers={})
P2 = Patient(patient_id="P2", name="Acute", story="", modifiers={"skeletonise_factor": 1.8, "bleed_factor": 2.0},
             risk_factors=["inflammation"])

NEIGHBOURS = [
    {"_id": f"VID01_{i:05d}", "video_id": "VID01", "phase": "carlot-triangle-dissection",
     "summary": "s", "action": "hook,dissect,cystic_duct", "state_after_summary": "a",
     "next_action": "hook,dissect,cystic_plate", "score": 0.9}
    for i in range(5)
]


def mid_dissection(mods):
    st = rules.initial_state(mods)
    for tg in ("cystic_duct", "cystic_artery"):
        st = rules.apply_action(st, f"hook,dissect,{tg}", mods).state
    return st


@pytest.fixture
def fakes(monkeypatch):
    calls = {"argon": 0}
    monkeypatch.setattr(gemini, "embed_one", lambda text, kind="query": [0.0] * config.EMBED_DIM)
    monkeypatch.setattr(world_model, "retrieve_transitions", lambda q, phase, k=5: NEIGHBOURS)
    monkeypatch.setattr(world_model, "retrieve_frame",
                        lambda q, phase: {"_id": "VID01_00100", "path": "VID01/000100.png", "score": 0.8})
    monkeypatch.setattr(world_model, "persist", lambda sid, r: "pred1" if sid else None)

    def fake_generate(model, prompt, schema, images=None, thinking_level="low"):
        calls["argon"] += 1
        assert "do not contradict" in prompt and "VID01_00000" in prompt
        return StepSchema(risk_level="low", bleeding_risk=0.0, explanation="ok",
                          cited_transition_ids=["VID01_00000", "VID01_00001", "NOT_A_REAL_ID"],
                          likely_next_actions=[NextAction(action="hook,dissect,cystic_plate", probability=0.6)],
                          confidence=0.8, cannot_tell=[])

    monkeypatch.setattr(gemini, "generate_json", fake_generate)
    return calls


def test_rules_floor_overrides_argon_low_risk(fakes):
    st = mid_dissection(P2.modifiers)
    r = world_model.step(st, "clipper,clip,cystic_duct", P2, random.Random(0), session_id="s1")
    assert rules.V_CLIP_BEFORE_CVS in r.rules_violations
    assert r.risk_level in ("high", "injury")
    assert len(r.cited_transition_ids) >= 2
    assert "NOT_A_REAL_ID" not in r.cited_transition_ids
    assert r.state_out.structures["cystic_duct"].status == "clipped"
    assert r.prediction_id == "pred1"
    assert r.frame and r.frame["label"] == "closest real frame"


def test_safe_action_low_risk(fakes):
    st = mid_dissection(P2.modifiers)
    r = world_model.step(st, "hook,dissect,cystic_plate", P2, random.Random(0))
    assert r.risk_level == "low" and r.rules_violations == []
    assert r.source == "argon"


def test_rules_only_fallback(fakes, monkeypatch):
    def boom(*a, **k):
        raise gemini.GeminiError("no key")

    monkeypatch.setattr(gemini, "generate_json", boom)
    st = mid_dissection(P1.modifiers)
    r = world_model.step(st, "clipper,clip,cystic_duct", P1, random.Random(0))
    assert r.source == "rules_only" and r.risk_level == "high"
    assert r.likely_next_actions[0].action == "hook,dissect,cystic_plate"


def test_bleeding_sampled_from_argon(fakes, monkeypatch):
    monkeypatch.setattr(gemini, "generate_json", lambda *a, **k: StepSchema(
        risk_level="moderate", bleeding_risk=1.0, explanation="x", cited_transition_ids=[],
        likely_next_actions=[], confidence=0.9, cannot_tell=[]))
    r = world_model.step(rules.initial_state(), "hook,dissect,cystic_artery", P1, random.Random(0))
    assert r.bled and r.state_out.bleeding
    assert r.confidence == 0.9  # the model's own confidence, never adjusted


def test_strict_mode_raises_instead_of_falling_back(fakes, monkeypatch):
    def boom(*a, **k):
        raise gemini.GeminiError("cap reached")

    monkeypatch.setattr(gemini, "generate_json", boom)
    with pytest.raises(gemini.GeminiError):
        world_model.step(rules.initial_state(), "hook,dissect,cystic_duct", P1, random.Random(0), strict=True)


def test_strict_mode_raises_on_retrieval_failure(fakes, monkeypatch):
    def boom(*a, **k):
        raise RuntimeError("no Atlas")

    monkeypatch.setattr(world_model, "retrieve_transitions", boom)
    with pytest.raises(RuntimeError):
        world_model.step(rules.initial_state(), "hook,dissect,cystic_duct", P1, random.Random(0), strict=True)
