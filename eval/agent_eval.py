"""E5 agent safety: mean violations / injuries / completion per episode, per patient and policy.

Usage:
  python -m eval.agent_eval --policies random expert_replay --dynamics rules        # no API calls
  python -m eval.agent_eval --patients P2 P4 --episodes 10                          # full E5 (Gemini)
"""
from __future__ import annotations

import argparse
import json
import random
import time
import uuid

from backend import agent, config, gemini, simulator
from backend.schema import Patient
from eval import splits


def patients() -> dict[str, Patient]:
    return {p["patient_id"]: Patient(**p) for p in json.loads((config.DATA / "patients.json").read_text())}


def summarise(eps: list[dict]) -> dict:
    n = max(len(eps), 1)
    return {"episodes": len(eps),
            "mean_violations": round(sum(e["n_violations"] for e in eps) / n, 2),
            "injury_rate": round(sum(e["injury"] for e in eps) / n, 2),
            "completion_rate": round(sum(e["completed"] for e in eps) / n, 2),
            "mean_reward": round(sum(e["reward"] for e in eps) / n, 1),
            "violations_per_episode": [e["n_violations"] + (1 if e["injury"] else 0) for e in eps]}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--patients", nargs="+", default=["P2", "P4"])
    ap.add_argument("--policies", nargs="+", default=["random", "agent", "agent_lessons", "expert_replay"])
    ap.add_argument("--episodes", type=int, default=10)
    ap.add_argument("--dynamics", default="world_model", choices=["world_model", "rules"])
    ap.add_argument("--seed", type=int, default=1)
    a = ap.parse_args()

    run_id = f"e5_{int(time.time())}"
    pats = patients()
    test_videos = splits.load()["test"]
    config.GEMINI_MAX_CALLS = max(config.GEMINI_MAX_CALLS, 4000)
    results: dict = {}
    for pid in a.patients:
        p = pats[pid]
        # Fresh lesson memory per patient and run, so "with lessons" starts from zero.
        store = agent.LessonStore(scope=f"{run_id}_{pid}")
        for pol in a.policies:
            eps = []
            for i in range(a.episodes):
                kw = {}
                if pol == "expert_replay":
                    kw["expert_video"] = test_videos[i % len(test_videos)]
                ep = simulator.run_episode(
                    p, pol, rng=random.Random(a.seed * 1000 + i), dynamics=a.dynamics,
                    lessons=store if pol == "agent_lessons" else None, batch_id=run_id,
                    sample_key=f"e5-seed{a.seed}-{pid}-ep{i}", **kw)
                simulator.save_episode(ep)
                eps.append(ep)
                print(f"{pid} {pol:14s} ep{i}: steps={ep['steps']:3d} viol={ep['n_violations']} "
                      f"injury={ep['injury']} done={ep['completed']} reward={ep['reward']}")
            results.setdefault(pid, {})[pol] = summarise(eps)
        results[pid]["lessons"] = [l.model_dump() for l in store.all()] if "agent_lessons" in a.policies else []

    doc = {"name": "E5_agent", "run_id": run_id, "metrics": results, "created_at": time.time(),
           "config": {"episodes": a.episodes, "dynamics": a.dynamics, "max_steps": simulator.MAX_STEPS,
                      "policies": a.policies, "patients": a.patients},
           "note": "In-context learning through lessons stored in Atlas; no weights are trained."}
    print(json.dumps({pid: {k: v for k, v in r.items() if k != "lessons"} for pid, r in results.items()}, indent=1))
    (config.DATA / "eval_E5_agent.json").write_text(json.dumps(doc, indent=1, default=str))
    if config.MONGODB_URI:
        from backend import db

        db.col("eval_runs").insert_one(json.loads(json.dumps(doc, default=str)))
    print(f"uncached Gemini calls: {gemini.calls_made()}")


if __name__ == "__main__":
    main()
