"""E6: how often does a world-model-written clip survive both gates, and where does it fail?

Reads every demo/dreams/<name>.json written by pipeline/08_dream_clips.py (every clip that was attempted,
accepted or not) and writes:
  demo/precomputed/dreams.json          the gallery (records without attempt frames)
  demo/precomputed/eval_E6_dreams.json  the numbers, with Wilson 95% intervals and n

Descriptive only: small n, one video model, one patient. No claim that these clips improve a policy.

  python -m eval.dream_eval
"""
from __future__ import annotations

import json
import math
import time
from collections import defaultdict

from backend import config

DREAMS = config.ROOT / "demo" / "dreams"
WM_KINDS = ("safe", "counterfactual", "robot")


def wilson(k: int, n: int, z: float = 1.96) -> list[float] | None:
    if n == 0:
        return None
    p = k / n
    d = 1 + z * z / n
    c = (p + z * z / (2 * n)) / d
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return [round(max(0.0, c - h), 3), round(min(1.0, c + h), 3)]


def rate(k: int, n: int) -> dict:
    return {"k": k, "n": n, "rate": round(k / n, 3) if n else None, "ci95": wilson(k, n)}


def load() -> list[dict]:
    return [json.loads(p.read_text()) for p in sorted(DREAMS.glob("*.json"))]


def compute(docs: list[dict]) -> dict:
    wm = [d for d in docs if d["kind"] in WM_KINDS]
    rendered = [d for d in wm if d.get("video")]
    attempts = [a for d in wm for a in d["attempts"] if not a.get("skipped")]
    render_ok = [a for a in attempts if not a.get("error")]
    fields = defaultdict(lambda: [0, 0])
    for d in rendered:
        for f, ok in ((d.get("consistency") or {}).get("agreement") or {}).items():
            fields[f][0] += bool(ok)
            fields[f][1] += 1
    by_kind = {}
    for k in WM_KINDS:
        ds = [d for d in wm if d["kind"] == k]
        by_kind[k] = {"clips": len(ds), "accepted": rate(sum(d["accepted"] for d in ds), len(ds))}
    factual = [d for d in docs if d["kind"] == "factual" and d.get("consistency")]
    fa = [d["consistency"]["factual"] for d in factual if d["consistency"].get("factual", {}).get("n")]
    base = [d for d in docs if d["kind"] == "baseline"]
    eps = [d for d in docs if d["kind"] == "robot_episode"]
    bfields = defaultdict(lambda: [0, 0])
    for d in base:
        for f, ok in ((d.get("consistency") or {}).get("agreement") or {}).items():
            bfields[f][0] += bool(ok)
            bfields[f][1] += 1
    wm_intent_free = {f: rate(*fields[f]) for f in ("no_new_instruments", "view_clear") if f in fields}
    return {
        "name": "E6_dreams", "created_at": time.time(),
        "video_model": sorted({d["model"] for d in wm}),
        "world_model_clips": len(wm),
        "renders": {"attempts": len(attempts), "succeeded": len(render_ok)},
        "fidelity_pass": rate(sum(bool((d.get("fidelity") or {}).get("pass")) for d in rendered), len(rendered)),
        "consistency_pass": rate(sum(bool((d.get("consistency") or {}).get("passed")) for d in rendered), len(rendered)),
        "accepted": rate(sum(d["accepted"] for d in wm), len(wm)),
        "agreement_by_field": {f: rate(*v) for f, v in sorted(fields.items())},
        "by_kind": by_kind,
        "fidelity_scores": [(d.get("fidelity") or {}).get("score") for d in rendered],
        "robot_episodes": [{"name": e["name"], "steps": len(e["steps"]), "duration_s": e["duration"],
                            "accepted_steps": e["accepted_steps"]} for e in eps],
        "factual_control": {
            "clips": len(factual),
            "fidelity_pass": rate(sum(bool((d.get("fidelity") or {}).get("pass")) for d in factual), len(factual)),
            "phase_match_rate_mean": round(sum(x["phase_match_rate"] for x in fa) / len(fa), 3) if fa else None,
            "instrument_match_rate_mean": round(sum(x["instrument_match_rate"] for x in fa) / len(fa), 3) if fa else None,
            "frames": sum(x["n"] for x in fa),
        },
        "hand_prompted_baseline": {
            "clips": len(base), "model": sorted({d["model"] for d in base}),
            "fidelity_pass": rate(sum(bool((d.get("fidelity") or {}).get("pass")) for d in base), len(base)),
            "intent_free_checks": {f: rate(*v) for f, v in sorted(bfields.items())},
            "world_model_same_checks": wm_intent_free,
        },
        "notes": [
            "Every attempted clip is counted, rejected ones included; a failed render, QC or perception call counts as a failure.",
            "Fidelity = an Argon inspector against the real anchor frame(s). Consistency = our Flash eyes on the generated "
            "frames must see the action and phase the world model predicted, and no invented instruments.",
            "Descriptive only: small n, one video model, one patient (P2). Not evidence that the clips improve a policy.",
            "Samples are video + action triplet + predicted state, not robot kinematics.",
        ],
    }


def gallery(docs: list[dict]) -> list[dict]:
    order = {"robot_episode": -1, "robot": 0, "counterfactual": 1, "safe": 2, "factual": 3, "baseline": 4}
    out = []
    for d in docs:
        d = {k: v for k, v in d.items() if k != "text"}
        out.append(d)
    return sorted(out, key=lambda d: (order.get(d["kind"], 9), d["name"]))


def main():
    docs = load()
    res = compute(docs)
    config.PRECOMPUTED.joinpath("dreams.json").write_text(json.dumps(gallery(docs), indent=1, default=str))
    config.PRECOMPUTED.joinpath("eval_E6_dreams.json").write_text(json.dumps(res, indent=1))
    if config.MONGODB_URI:
        try:
            from backend import db

            db.col("eval_runs").insert_one(dict(res))
        except Exception as e:
            print(f"(eval_runs not written: {e})")
    print(json.dumps({k: res[k] for k in ("world_model_clips", "renders", "fidelity_pass", "consistency_pass",
                                          "accepted", "agreement_by_field")}, indent=1))


if __name__ == "__main__":
    main()
