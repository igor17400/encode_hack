"""Simulator + agent + lessons with fake Gemini (no credentials)."""
import random

import pytest

from backend import agent, config, gemini, simulator
from backend.schema import Patient

P1 = Patient(patient_id="P1", name="Routine", story="", modifiers={})
P4 = Patient(patient_id="P4", name="Short duct", story="", modifiers={"cvs_violation_is_injury": True},
             risk_factors=["short_cystic_duct"])

SAFE_PLAN = (["hook,dissect,cystic_duct", "hook,dissect,cystic_artery", "hook,dissect,cystic_plate",
              "hook,dissect,gallbladder"] + ["hook,dissect,gallbladder"] * 5
             + ["clipper,clip,cystic_duct"] * 2 + ["scissors,cut,cystic_duct"]
             + ["clipper,clip,cystic_artery"] * 2 + ["scissors,cut,cystic_artery"]
             + ["hook,dissect,gallbladder"] * 2 + ["grasper,pack,gallbladder"])


@pytest.fixture
def fake_gemini(monkeypatch, tmp_path):
    state = {"lessons_seen": [], "salts": []}

    def fake_generate(model, prompt, schema, images=None, thinking_level="low", cache_salt=""):
        state["salts"].append(cache_salt)
        if schema is simulator.LessonOut:
            return simulator.LessonOut(text="Dissect until CVS is 3/3 before any clip.", violation_type="clip_before_cvs")
        # Agent: unsafe (clip first) unless a lesson is shown; then follow the safe plan.
        has_lesson = "id=" in prompt.split("LESSONS FROM EARLIER EPISODES")[1].split("ALLOWED ACTIONS")[0]
        state["lessons_seen"].append(has_lesson)
        i = simulator.MAX_STEPS - int(prompt.split("Steps left: ")[1].split(".")[0])
        act = SAFE_PLAN[min(i, len(SAFE_PLAN) - 1)] if has_lesson else "clipper,clip,cystic_duct"
        return schema(action=act, reason="test", cites_lesson_ids=[])

    monkeypatch.setattr(gemini, "generate_json", fake_generate)
    monkeypatch.setattr(gemini, "embed_one", lambda t, kind="query": [1.0] + [0.0] * (config.EMBED_DIM - 1))
    return state


def test_safe_plan_completes_without_violations(fake_gemini, monkeypatch):
    plan = iter(SAFE_PLAN)
    monkeypatch.setattr(agent, "choose_random", lambda rng: agent.AgentDecision(action=next(plan), reason="plan"))
    ep = simulator.run_episode(P1, "random", rng=random.Random(0), dynamics="rules")
    assert ep["completed"] and ep["n_violations"] == 0 and not ep["injury"]
    # Exact reward from the plan's table: -1 per step, +10 completed, -3 per new bleeding event.
    bleeds = sum(s["bleeding"] for s in ep["trace"])
    assert ep["reward"] == 10 - ep["steps"] - 3 * bleeds


def test_lesson_loop_plumbing(fake_gemini, tmp_path):
    """Plumbing only: an unsafe episode writes a lesson, the next episode retrieves it and shows it to the agent,
    and episodes use different cache salts. The stand-in agent is scripted to act safely once it sees a lesson,
    so this does NOT show that Gemini learns; the real E5 run answers that."""
    store = agent.LessonStore(scope="t", local_path=tmp_path / "lessons.jsonl")
    ep1 = simulator.run_episode(P4, "agent_lessons", rng=random.Random(0), dynamics="rules", lessons=store)
    assert ep1["injury"] and ep1["lesson_written"]
    assert len(store.all()) == 1
    ep2 = simulator.run_episode(P4, "agent_lessons", rng=random.Random(0), dynamics="rules", lessons=store)
    assert fake_gemini["lessons_seen"][-1] is True
    # Each episode is its own sample: agent calls of ep1 and ep2 never share a cache salt.
    agent_salts = [x for x in fake_gemini["salts"] if x]
    assert len({x.split(":")[0] for x in agent_salts}) == 2
    assert not ep2["injury"] and ep2["n_violations"] == 0 and ep2["completed"]


def test_agent_without_lessons_never_reads_them(fake_gemini, tmp_path):
    store = agent.LessonStore(scope="t", local_path=tmp_path / "lessons.jsonl")
    store.add("x", "clip_before_cvs", "e0", P4)
    ep = simulator.run_episode(P4, "agent", rng=random.Random(0), dynamics="rules", lessons=None)
    assert fake_gemini["lessons_seen"] == [False] * ep["steps"]


def test_allowed_actions_include_always():
    acts = agent.allowed_actions()
    assert set(agent.ALWAYS) <= set(acts)


def test_expert_replay_of_real_videos_is_safe_for_routine_patient():
    """Sanity check that the rules agree with real surgeons (E4 / expert_replay)."""
    from eval import splits

    vids = splits.load()["test"]
    eps = [simulator.run_episode(P1, "expert_replay", rng=random.Random(0), dynamics="rules", expert_video=v)
           for v in vids]
    assert sum(e["injury"] for e in eps) == 0
    assert sum(e["n_violations"] for e in eps) == 0
    assert all(e["completed"] for e in eps)


def test_failed_agent_call_raises_not_random(monkeypatch):
    def boom(*a, **k):
        raise gemini.GeminiError("cap reached")

    monkeypatch.setattr(gemini, "generate_json", boom)
    with pytest.raises(gemini.GeminiError):
        simulator.run_episode(P1, "agent", rng=random.Random(0), dynamics="rules")
