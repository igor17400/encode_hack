"""Session reports: built only from recorded events; a failed call stores nothing.

Gemini is replaced by a stand-in here (unit test only) so we can check what is sent and stored.
"""
import asyncio
import json

import pytest

from backend import config, gemini, perception, reports, world_model
from backend.schema import Patient

P3 = Patient(patient_id="P3", name="Prior surgery", story="adhesions", modifiers={"adhesions_at_start": True},
             risk_factors=["adhesions"])


@pytest.fixture
def local_store(tmp_path, monkeypatch):
    monkeypatch.setattr(config, "MONGODB_URI", "")
    monkeypatch.setattr(reports, "LOCAL_REPORTS", tmp_path / "reports.jsonl")
    monkeypatch.setattr(world_model, "evidence_for", lambda st, k=3: [])
    return tmp_path / "reports.jsonl"


def test_watch_report_uses_real_session_events(local_store, monkeypatch):
    seen = {}

    def stand_in(model, prompt, schema, images=None, thinking_level="low", cache_salt=""):
        seen["prompt"] = prompt
        return reports.ReportOut(text="Clip before CVS at t=504 was overridden.", key_events=["t=504 alert"])

    monkeypatch.setattr(gemini, "generate_json", stand_in)
    sink = perception.MemorySink()
    asyncio.run(perception.run_watch("s1", "VID74", P3, sink, t_from=381, t_to=561, source="labels", report=True))
    # The prompt carries the real alert and the human decision from this session.
    assert "ALERT clip_before_cvs" in seen["prompt"]
    assert "ack by human" in seen["prompt"]
    rows = [json.loads(l) for l in local_store.read_text().splitlines()]
    assert len(rows) == 1 and rows[0]["session_id"] == "s1" and rows[0]["violations"] == ["clip_before_cvs"]


def test_failed_report_call_stores_nothing(local_store, monkeypatch):
    def boom(*a, **k):
        raise gemini.GeminiError("429")

    monkeypatch.setattr(gemini, "generate_json", boom)
    sink = perception.MemorySink()
    asyncio.run(perception.run_watch("s2", "VID74", P3, sink, t_from=381, t_to=561, source="labels", report=True))
    assert not local_store.exists()


def test_episode_events_are_factual():
    eps = [{"policy": "agent", "steps": 19, "violations": [], "injury": False, "completed": True, "reward": -9,
            "lessons_used": [], "lesson_written": None}]
    line = reports.episode_events(eps)[0]
    assert "19 steps" in line and "violations=none" in line and "completed=True" in line
