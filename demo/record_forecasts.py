"""Record world-model forecasts on a real held-out operation, with what actually happened, for Watch's
forecast -> reality overlay.

  python demo/record_forecasts.py --video VID74 --t-from 381 --t-to 561

For every real transition in the window: the world model's forecast (the same call as the E1 evaluation:
rules -> train-split Atlas retrieval -> Argon, strict), the trained gradient-boosting and bigram forecasts for the
same moment, and the truth (the surgeon's real next action and the anatomy the real labels produce). Also copies
the 200 E1 held-out forecasts to demo/precomputed/forecast_ledger.json for the Evidence ledger.
"""
from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, forecast  # noqa: E402
from eval.next_step_eval import Baselines, load_transitions, run_one, ROUTINE  # noqa: E402
from eval.trained_baseline import load_selected  # noqa: E402


def record(video: str, t_from: int, t_to: int) -> dict:
    rows = load_transitions()
    split = {r["video_id"]: r["split"] for r in rows}[video]
    if split == "train":
        sys.exit(f"{video} is a training video: forecasts on it would not be held out")
    train = [r for r in rows if r["split"] == "train"]
    bl, tb = Baselines(train), load_selected(rows)
    assert not ({r["_id"] for r in rows if r["video_id"] == video} & tb.fitted_ids), "trained baseline saw this video"
    vid = sorted((r for r in rows if r["video_id"] == video), key=lambda r: r["t_start"])
    # every transition overlapping the window: the one already in progress when the clip starts comes first
    window = [r for r in vid if r["t_start"] <= t_to and r["t_end"] >= t_from]
    trained_top = tb.predict_top3(window)
    out = []
    for i, r in enumerate(window):
        j = vid.index(r)
        nxt = vid[j + 1] if j + 1 < len(vid) else None
        res = run_one(r, use_argon=True)  # identical to the E1 call: strict, train-split retrieval, Argon
        from backend import world_model  # full result (state_out, explanation) for display; same cached call
        from backend.schema import State
        import random

        full = world_model.step(State(**r["state_before"]), r["action"], ROUTINE, random.Random(0), with_frame=False,
                                strict=True)
        wm_top = [a.action for a in full.likely_next_actions]
        assert wm_top == res["model"], "display call differs from the evaluated call"
        f = {
            "id": r["_id"], "t": r["t_start"], "t_end": r["t_end"], "phase": r["phase"], "action": r["action"],
            "state_before": r["state_before"],
            "world_model": {"top3": [a.model_dump() for a in full.likely_next_actions], "risk_level": full.risk_level,
                            "bleeding_risk": full.bleeding_risk, "confidence": full.confidence,
                            "state_out": json.loads(full.state_out.model_dump_json()),
                            "rules_violations": full.rules_violations, "explanation": full.explanation,
                            "cited_transition_ids": full.cited_transition_ids, "source": full.source,
                            # what the engine used: the 5 real moments Atlas retrieved, and the rules' risk floor
                            "neighbours": [{"id": n.id, "video_id": n.video_id, "summary": n.summary, "action": n.action,
                                            "next_action": n.next_action, "score": round(n.score, 4)}
                                           for n in full.neighbours],
                            "risk_floor": world_model.risk_floor(full.rules_violations, full.state_out)},
            "trained": {"top3": trained_top[i]},
            "bigram": {"top3": bl.predict_bigram(r["action"])},
            "truth": {"next_action": r["next_action"], "t": nxt["t_start"] if nxt else None,
                      "state_after": r["state_after"], "in_clip": bool(nxt and nxt["t_start"] <= t_to)},
        }
        f["scores"] = {
            "world_model": {"rank": forecast.rank(wm_top, r["next_action"])},
            "trained": {"rank": forecast.rank(trained_top[i], r["next_action"])},
            "bigram": {"rank": forecast.rank(f["bigram"]["top3"], r["next_action"])},
            "anatomy": forecast.anatomy_check(f["world_model"]["state_out"], r["state_after"]),
        }
        out.append(f)
        print(f"  {r['t_start']:>4}s {r['action']:<28} wm={wm_top} truth={r['next_action']} "
              f"rank={f['scores']['world_model']['rank']}")
    return {"video": video, "split": split, "window": [t_from, t_to], "patient": ROUTINE.patient_id,
            "forecasts": out, "clip_score": forecast.clip_score(out), "created_at": time.time(),
            "note": ("Forecasts use only the state before, the current action and train-split retrieval. Truth is "
                     "CholecT50's labels. Risk and bleeding cannot be checked (no complication labels).")}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--video", default="VID74")
    ap.add_argument("--t-from", type=int, default=381)
    ap.add_argument("--t-to", type=int, default=561)
    a = ap.parse_args()
    doc = record(a.video, a.t_from, a.t_to)
    (config.PRECOMPUTED / f"forecast_{a.video}.json").write_text(json.dumps(doc, indent=1))
    print(json.dumps(doc["clip_score"], indent=1))
    e1 = json.loads((config.DATA / "eval_E1_test.json").read_text())
    ledger = {"name": e1["name"], "split": e1["split"], "metrics": {k: e1["metrics"].get(k) for k in (
        "n", "model_top1", "model_top3", "trained_top1", "trained_top3", "bigram_top1", "bigram_top3",
        "vs_best_baseline_top3")}, "items": e1["items"]}
    (config.PRECOMPUTED / "forecast_ledger.json").write_text(json.dumps(ledger))
    if config.MONGODB_URI:
        from backend import db

        db.col("forecasts").delete_many({"video": a.video})
        db.col("forecasts").insert_many([dict(f, _id=f"{a.video}_{f['t']}", video=a.video) for f in doc["forecasts"]])
    print(f"wrote forecast_{a.video}.json ({len(doc['forecasts'])} forecasts) and forecast_ledger.json")


if __name__ == "__main__":
    main()
