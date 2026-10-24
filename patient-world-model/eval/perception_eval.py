"""E3 perception: Flash triplets on test frames vs CholecT50 labels.

Precision / recall per instrument and per target (cystic_duct first), triplet-level micro P/R, and
accuracy on frames Flash confirmed vs frames it held back ("can't confirm").

Usage: python -m eval.perception_eval [--n 200]
"""
from __future__ import annotations

import argparse
import json
import random
import time
from collections import Counter
from concurrent.futures import ThreadPoolExecutor

from backend import config, gemini, perception
from eval import splits


# Test frames come from one fixed source: the official CholecT50 Challenge Validation PNGs (test-split
# videos only), independent of whatever else is downloaded into data/frames.
FRAME_SOURCE = config.CHALLENGE_VAL / "videos"


def frame_path(v: str, t: int):
    return FRAME_SOURCE / v / f"{t:06d}.png"


def test_frames(n: int, seed: int = 3) -> list[tuple[str, int]]:
    labels = json.loads(config.LABELS.read_text())
    pool = []
    for v in splits.load()["test"]:
        d = FRAME_SOURCE / v
        if d.exists():
            pool += [(v, int(p.stem)) for p in d.glob("*.png") if p.stem.isdigit() and int(p.stem) > 0
                     and str(int(p.stem)) in labels.get(v, {})]
    pool.sort()  # deterministic order before the seeded shuffle
    random.Random(seed).shuffle(pool)
    return sorted(pool[:n])


def pr(tp: int, fp: int, fn: int) -> dict:
    p = tp / (tp + fp) if tp + fp else None
    r = tp / (tp + fn) if tp + fn else None
    return {"precision": round(p, 3) if p is not None else None, "recall": round(r, 3) if r is not None else None,
            "support": tp + fn}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--n", type=int, default=200)
    ap.add_argument("--workers", type=int, default=8)
    a = ap.parse_args()
    labels = json.loads(config.LABELS.read_text())
    frames = test_frames(a.n)
    config.GEMINI_MAX_CALLS = max(config.GEMINI_MAX_CALLS, 2 * len(frames) + 10)

    def run(vt):
        v, t = vt
        obs = perception.observe_flash(frame_path(v, t))
        return v, t, obs

    with ThreadPoolExecutor(a.workers) as ex:
        results = list(ex.map(run, frames))

    counts = {k: Counter() for k in ("instrument", "target")}
    trip = Counter()
    by_conf = {True: Counter(), False: Counter()}
    for v, t, obs in results:
        truth = [x.split(",") for x in labels[v][str(t)] if "null" not in x]
        pred = [(x["instrument"], x["verb"], x["target"]) for x in obs["triplets"]
                if x["confidence"] >= config.PERCEPTION_MIN_CONF]
        for k, idx in (("instrument", 0), ("target", 2)):
            ts, ps = {x[idx] for x in truth}, {x[idx] for x in pred}
            for c in ts | ps:
                counts[k][(c, "tp")] += c in ts and c in ps
                counts[k][(c, "fp")] += c in ps and c not in ts
                counts[k][(c, "fn")] += c in ts and c not in ps
        ts, ps = {tuple(x) for x in truth}, set(pred)
        confirmed = obs["view_quality"] == "clear" and obs["can_confirm_anatomy"]
        for bucket in (trip, by_conf[confirmed]):
            bucket["tp"] += len(ts & ps)
            bucket["fp"] += len(ps - ts)
            bucket["fn"] += len(ts - ps)
            bucket["frames"] += 1

    def per_class(k):
        classes = sorted({c for c, _ in counts[k]}, key=lambda c: (c != "cystic_duct", c))
        return {c: pr(counts[k][(c, "tp")], counts[k][(c, "fp")], counts[k][(c, "fn")]) for c in classes}

    metrics = {
        "n_frames": len(results), "videos": sorted({v for v, _ in frames}),
        "frame_source": "CholecT50 Challenge Validation PNGs (706x396)",
        "triplets_micro": pr(trip["tp"], trip["fp"], trip["fn"]),
        "confirmed": {"frames": by_conf[True]["frames"], **pr(by_conf[True]["tp"], by_conf[True]["fp"], by_conf[True]["fn"])},
        "held_back": {"frames": by_conf[False]["frames"], **pr(by_conf[False]["tp"], by_conf[False]["fp"], by_conf[False]["fn"])},
        "view_quality": dict(Counter(o["view_quality"] for _, _, o in results)),
        "per_instrument": per_class("instrument"), "per_target": per_class("target"),
    }
    doc = {"name": "E3_perception", "split": "test", "metrics": metrics, "created_at": time.time(),
           "config": {"model": config.MODEL_FLASH, "min_conf": config.PERCEPTION_MIN_CONF},
           "note": "Benchmark on public data, not clinical validation."}
    print(json.dumps(metrics, indent=1))
    (config.DATA / "eval_E3_perception.json").write_text(json.dumps(doc | {"items": [
        {"video_id": v, "t": t, "obs": o} for v, t, o in results]}, indent=1))
    if config.MONGODB_URI:
        from backend import db

        db.col("eval_runs").insert_one(dict(doc))
    print(f"uncached Gemini calls: {gemini.calls_made()}")


if __name__ == "__main__":
    main()
