"""E1 next-action accuracy, E2 calibration, E4 rules sanity -> one `eval_runs` document.

For each sampled transition the world model sees (state_before, action) for a routine patient and
predicts `likely_next_actions`; we compare with the real `next_action`.

Baselines (all computed from train transitions only):
  - majority:  most common next action overall
  - bigram:    most common next action given the current action
  - retrieval: next actions of the nearest train transitions (Atlas Vector Search, no LLM)

Usage:
  python -m eval.next_step_eval --baselines-only            # no API calls
  python -m eval.next_step_eval --split val --n 50           # prompt tuning set
  python -m eval.next_step_eval --split test --n 200         # the headline number
"""
from __future__ import annotations

import argparse
import json
import random
import subprocess
import time
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

from backend import config, gemini, world_model
from backend.schema import Patient, State

ROUTINE = Patient(patient_id="P1", name="Routine", story="Elective, uncomplicated gallstones.", modifiers={})


def load_transitions() -> list[dict]:
    with config.TRANSITIONS.open() as f:
        return [json.loads(l) for l in f]


def sample(rows: list[dict], split: str, n: int, seed: int = 7) -> list[dict]:
    pool = [r for r in rows if r["split"] == split and r["next_action"]]
    random.Random(seed).shuffle(pool)
    return sorted(pool[:n], key=lambda r: r["_id"])


class Baselines:
    def __init__(self, train: list[dict]):
        self.majority = [a for a, _ in Counter(r["next_action"] for r in train if r["next_action"]).most_common(3)]
        by = defaultdict(Counter)
        for r in train:
            if r["next_action"]:
                by[r["action"]][r["next_action"]] += 1
        self.bigram = {a: [x for x, _ in c.most_common(3)] for a, c in by.items()}

    def predict_bigram(self, action: str) -> list[str]:
        return self.bigram.get(action, self.majority)


def topk(pred: list[str], truth: str) -> tuple[bool, bool]:
    return (bool(pred) and pred[0] == truth, truth in pred[:3])


def ece(conf_correct: list[tuple[float, bool]], bins: int = 5) -> tuple[float, list[dict]]:
    table, total, err = [], len(conf_correct), 0.0
    for b in range(bins):
        lo, hi = b / bins, (b + 1) / bins
        sel = [(c, k) for c, k in conf_correct if lo <= c < hi or (b == bins - 1 and c == 1.0)]
        if not sel:
            table.append({"bin": f"{lo:.1f}-{hi:.1f}", "n": 0, "accuracy": None, "mean_conf": None})
            continue
        acc = sum(k for _, k in sel) / len(sel)
        mc = sum(c for c, _ in sel) / len(sel)
        err += len(sel) / total * abs(acc - mc)
        table.append({"bin": f"{lo:.1f}-{hi:.1f}", "n": len(sel), "accuracy": round(acc, 3), "mean_conf": round(mc, 3)})
    return round(err, 4), table


def git_commit() -> str | None:
    try:
        return subprocess.check_output(["git", "rev-parse", "--short", "HEAD"], cwd=config.ROOT,
                                       stderr=subprocess.DEVNULL).decode().strip()
    except Exception:
        return None


def run_one(r: dict, use_argon: bool) -> dict:
    st = State(**r["state_before"])
    res = world_model.step(st, r["action"], ROUTINE, random.Random(0), use_argon=use_argon, with_frame=False,
                           strict=True)  # a failed call aborts the run; it is never scored as a prediction
    retrieval = list(dict.fromkeys(n.next_action for n in res.neighbours if n.next_action))
    return {"id": r["_id"], "truth": r["next_action"], "action": r["action"],
            "model": [a.action for a in res.likely_next_actions], "confidence": res.confidence,
            "retrieval": retrieval, "source": res.source, "n_neighbours": len(res.neighbours)}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--split", default="test", choices=["test", "val"])
    ap.add_argument("--n", type=int, default=200)
    ap.add_argument("--baselines-only", action="store_true")
    ap.add_argument("--workers", type=int, default=8)
    ap.add_argument("--name", default=None)
    a = ap.parse_args()

    rows = load_transitions()
    train = [r for r in rows if r["split"] == "train"]
    sampled = sample(rows, a.split, a.n)
    base = Baselines(train)

    metrics: dict = {"n": len(sampled), "split": a.split}
    from eval.trained_baseline import load_selected

    trained = load_selected(rows)  # fitted on train only, hyperparameters chosen on val
    assert not ({r["_id"] for r in sampled} & trained.fitted_ids), "trained baseline saw evaluation rows"
    trained_pred = dict(zip((r["_id"] for r in sampled), trained.predict_top3(sampled)))
    metrics["trained_params"] = trained.params
    hits = Counter()
    for r in sampled:
        for name, pred in (("majority", base.majority), ("bigram", base.predict_bigram(r["action"])),
                           ("trained", trained_pred[r["_id"]])):
            t1, t3 = topk(pred, r["next_action"])
            hits[f"{name}_top1"] += t1
            hits[f"{name}_top3"] += t3

    per_item = []
    if not a.baselines_only:
        config.GEMINI_MAX_CALLS = max(config.GEMINI_MAX_CALLS, 3 * len(sampled) + 20)
        with ThreadPoolExecutor(a.workers) as ex:
            per_item = list(ex.map(lambda r: run_one(r, use_argon=True), sampled))
        conf_correct = []
        for it in per_item:
            t1, t3 = topk(it["model"], it["truth"])
            hits["model_top1"] += t1
            hits["model_top3"] += t3
            conf_correct.append((it["confidence"], t1))
            if it["n_neighbours"]:
                r1, r3 = topk(it["retrieval"], it["truth"])
                hits["retrieval_top1"] += r1
                hits["retrieval_top3"] += r3
                hits["retrieval_n"] += 1
        metrics["model_source_counts"] = dict(Counter(it["source"] for it in per_item))
        metrics["ece"], metrics["calibration"] = ece(conf_correct)
        confident = [k for c, k in conf_correct if c >= 0.7]
        metrics["accuracy_when_confident"] = round(sum(confident) / len(confident), 3) if confident else None
        metrics["n_confident"] = len(confident)

    n = max(len(sampled), 1)
    for k, v in hits.items():
        if k == "retrieval_n":
            continue
        denom = hits["retrieval_n"] if k.startswith("retrieval") else n
        metrics[k] = round(v / max(denom, 1), 3)
    if hits["retrieval_n"]:
        metrics["retrieval_n"] = hits["retrieval_n"]
    baseline_best = max(metrics.get(f"{k}_top3", 0) for k in ("bigram", "majority", "retrieval", "trained"))
    metrics["best_baseline_top3"] = baseline_best
    if per_item:
        # Paired bootstrap of (model - best baseline) top-3 accuracy on the same items. A difference counts as
        # real only if the 95% CI excludes 0; a raw ">" on 200 items would overclaim a tie.
        names = {"bigram": lambda it: base.predict_bigram(it["action"]), "majority": lambda it: base.majority,
                 "retrieval": lambda it: it["retrieval"], "trained": lambda it: trained_pred[it["id"]]}
        best = max(names, key=lambda k: metrics.get(f"{k}_top3", -1))
        diffs = [int(it["truth"] in it["model"][:3]) - int(it["truth"] in names[best](it)[:3]) for it in per_item]
        rng = random.Random(0)
        boots = sorted(sum(rng.choice(diffs) for _ in diffs) / len(diffs) for _ in range(2000))
        metrics["vs_best_baseline_top3"] = {
            "baseline": best, "diff": round(sum(diffs) / len(diffs), 3),
            "ci95": [round(boots[49], 3), round(boots[1949], 3)],
            "significant": boots[49] > 0 or boots[1949] < 0,
        }

    e4_path = config.DATA / "e4_report.json"
    if e4_path.exists():
        metrics["e4"] = json.loads(e4_path.read_text())["e4"]

    doc = {
        "name": a.name or ("E1_baselines" if a.baselines_only else f"E1_{a.split}"),
        "split": a.split, "metrics": metrics, "created_at": time.time(), "git_commit": git_commit(),
        "config": {"argon": config.MODEL_ARGON, "embed": config.EMBED_MODEL, "k": config.VECTOR_K,
                   "skeletonise_s": config.SKELETONISE_SECONDS, "n": len(sampled)},
        "note": "Benchmark on public data, not clinical validation.",
    }
    print(json.dumps(metrics, indent=1))
    (config.DATA / f"eval_{doc['name']}.json").write_text(json.dumps(doc | {"items": per_item}, indent=1))
    (config.DATA / "eval_latest.json").write_text(json.dumps(doc, indent=1))
    if config.MONGODB_URI:
        from backend import db

        db.col("eval_runs").insert_one(dict(doc))
        print("written to eval_runs")
    print(f"uncached Gemini calls: {gemini.calls_made()}")


if __name__ == "__main__":
    main()
