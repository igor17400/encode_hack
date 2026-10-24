"""Merge the parallel E5 world-model runs (one file per patient/policy) into eval_E5_world_model.json.

Metrics are recomputed from the per-episode lists of each part (not averaged averages). Expert replay is taken
from the rules-dynamics run: it replays real surgeons' actions and is the rules sanity check in both settings.

Usage: python -m eval.merge_e5 [--parts 'E5wm_*'] [--expert-from E5_agent]
"""
import argparse
import glob
import json
import time
from collections import Counter

from backend import config


def merge(parts: list[dict], expert: dict | None) -> dict:
    metrics: dict = {}
    for part in parts:
        for pid, by_pol in part["metrics"].items():
            dst = metrics.setdefault(pid, {"lessons": []})
            dst["lessons"] += by_pol.get("lessons", [])
            for pol, r in by_pol.items():
                if pol == "lessons":
                    continue
                if pol in dst:
                    raise ValueError(f"duplicate part for {pid}/{pol}")
                dst[pol] = r
    for pid, m in metrics.items():
        for pol, r in m.items():
            if pol == "lessons":
                continue
            v = r["violations_per_episode"]
            c = r.get("completed_per_episode")
            n = len(v)
            assert n == r["episodes"], f"{pid}/{pol}: episode count mismatch"
            r["mean_violations_check"] = round(sum(v) / n, 2)
            if c is not None:
                assert round(sum(c) / n, 2) == r["completion_rate"], f"{pid}/{pol}: completion mismatch"
        if expert and pid in expert["metrics"] and "expert_replay" in expert["metrics"][pid]:
            m["expert_replay"] = dict(expert["metrics"][pid]["expert_replay"], note="from the rules-dynamics run")
    sources = Counter()
    for m in metrics.values():
        for pol, r in m.items():
            if pol not in ("lessons", "expert_replay"):
                sources.update(r.get("step_sources", {}))
    return {"name": "E5_world_model", "metrics": metrics, "created_at": time.time(),
            "config": {"episodes": parts[0]["config"]["episodes"], "dynamics": "world_model",
                       "max_steps": parts[0]["config"]["max_steps"], "parts": [p["run_id"] for p in parts],
                       "step_sources": dict(sources)},
            "note": "In-context learning through lessons stored in Atlas; no weights are trained."}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--parts", default="E5wm_*")
    ap.add_argument("--expert-from", default="E5_agent")
    a = ap.parse_args()
    files = sorted(glob.glob(str(config.DATA / f"eval_{a.parts}.json")))
    parts = [json.load(open(f)) for f in files]
    if not parts:
        raise SystemExit("no part files found")
    exp_path = config.DATA / f"eval_{a.expert_from}.json"
    expert = json.load(open(exp_path)) if exp_path.exists() else None
    doc = merge(parts, expert)
    (config.DATA / "eval_E5_world_model.json").write_text(json.dumps(doc, indent=1, default=str))
    if config.MONGODB_URI:
        from backend import db

        db.col("eval_runs").insert_one(json.loads(json.dumps(doc, default=str)))
    print(f"merged {len(parts)} parts; step sources: {doc['config']['step_sources']}")
    for pid, m in doc["metrics"].items():
        for pol, r in m.items():
            if pol != "lessons":
                print(pid, pol, {k: r[k] for k in ("episodes", "mean_violations", "injury_rate", "completion_rate")})
        print(pid, "lessons written:", len(m["lessons"]))


if __name__ == "__main__":
    main()
