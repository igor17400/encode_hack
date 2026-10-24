"""Forecast -> reality scoring and the recorded VID74 file. No credentials needed."""
import json

from backend import config, forecast, rules

REC = config.PRECOMPUTED / "forecast_VID74.json"


def test_rank():
    assert forecast.rank(["a", "b", "c"], "a") == 1
    assert forecast.rank(["a", "b", "c"], "c") == 3
    assert forecast.rank(["a", "b", "c", "d"], "d") is None  # only the top 3 count
    assert forecast.rank(["a"], None) is None


def test_anatomy_check():
    a = rules.initial_state().model_dump()
    b = json.loads(json.dumps(a))
    b["structures"]["cystic_duct"].update(status="clipped", clips=1)
    c = forecast.anatomy_check(a, b)
    assert c["cystic_duct"]["match"] is False and c["gallbladder"]["match"] and c["cvs"]["match"]
    assert all(v["match"] for v in forecast.anatomy_check(b, b).values())


def test_public_forecast_hides_truth():
    f = {"t": 1, "action": "x", "world_model": {}, "truth": {"next_action": "y"}, "scores": {}}
    assert "truth" not in forecast.public_forecast(f) and "scores" not in forecast.public_forecast(f)


def test_recorded_file_is_consistent():
    doc = json.loads(REC.read_text())
    assert doc["split"] == "test"  # held out: never retrieved from, never trained on
    rows = {}
    with config.TRANSITIONS.open() as fh:
        for line in fh:
            r = json.loads(line)
            if r["video_id"] == doc["video"]:
                rows[r["_id"]] = r
    for f in doc["forecasts"]:
        r = rows[f["id"]]
        assert f["truth"]["next_action"] == r["next_action"]  # truth is the dataset's label
        assert f["truth"]["t"] is None or f["truth"]["t"] > f["t"]  # forecast made before the moment it predicts
        for who in ("world_model", "trained", "bigram"):
            top = [a["action"] if isinstance(a, dict) else a for a in f[who]["top3"]]
            assert f["scores"][who]["rank"] == forecast.rank(top, r["next_action"])  # ranks recomputed, not typed
    assert doc["clip_score"] == forecast.clip_score(doc["forecasts"])
