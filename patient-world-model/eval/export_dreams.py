"""Export accepted dream clips as a training manifest (JSONL), one sample per clip.

  python -m eval.export_dreams --out data/dreams_train.jsonl [--include-rejected]

Each line: video, anchor, action triplet, state before, predicted state after, reward (simulator reward terms for
that step), violation flags, both gate verdicts and provenance (world-model record, cited CholecT50 transitions).
Samples are video + action + outcome at the level of surgical action triplets, NOT robot kinematics: a low-level
policy would also need an inverse-dynamics model to recover tool motion.
"""
from __future__ import annotations

import argparse
import json

from backend import config, simulator
from eval.dream_eval import WM_KINDS, load


def reward(doc: dict) -> int:
    r = simulator.REWARD["step"] + sum(simulator.REWARD.get(v, 0) for v in doc.get("violations") or [])
    after, before = doc["state_after_predicted"], doc["state_before"]
    if after.get("bleeding") and not before.get("bleeding"):
        r += simulator.REWARD["bleeding"]
    return r


def sample(doc: dict) -> dict:
    return {"video": f"demo/dreams/{doc['video']}", "synthetic": True, "video_model": doc["model"],
            "anchor": doc["anchor"], "patient_id": doc["patient_id"], "action": doc["action"],
            "state_before": doc["state_before"], "state_after": doc["state_after_predicted"],
            "changes": doc["changes"], "risk_level": doc["risk_level"], "violations": doc["violations"],
            "reward": reward(doc), "accepted": doc["accepted"], "fidelity": doc["fidelity"],
            "consistency": (doc.get("consistency") or {}).get("agreement"),
            "provenance": {"world_model_record": doc.get("world_model_record"), "episode": doc.get("episode"),
                           "step": doc.get("step"), "cited_transition_ids": doc.get("cited_transition_ids"),
                           "world_model_source": doc.get("world_model_source")}}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=str(config.DATA / "dreams_train.jsonl"))
    ap.add_argument("--include-rejected", action="store_true")
    a = ap.parse_args()
    docs = [d for d in load() if d["kind"] in WM_KINDS and d.get("video") and (d["accepted"] or a.include_rejected)]
    with open(a.out, "w") as f:
        for d in docs:
            f.write(json.dumps(sample(d)) + "\n")
    # Episodes: the continuous video with its per-step label track (accepted steps flagged for training).
    eps = [d for d in load() if d["kind"] == "robot_episode"]
    with open(a.out.replace(".jsonl", "_episodes.jsonl"), "w") as f:
        for e in eps:
            f.write(json.dumps({"video": f"demo/dreams/{e['video']}", "synthetic": True, "video_model": e["model"],
                                "patient_id": e["patient_id"], "policy": e["policy"], "anchor": e["anchor"],
                                "duration_s": e["duration"],
                                "steps": [{k: s[k] for k in ("step", "t_start", "t_end", "action", "state_before",
                                                             "state_after", "risk_level", "violations", "accepted")}
                                          for s in e["steps"]]}) + "\n")
    print(f"wrote {len(docs)} samples to {a.out} and {len(eps)} episodes")


if __name__ == "__main__":
    main()
