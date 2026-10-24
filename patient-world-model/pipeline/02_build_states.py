"""Replay every video's per-second triplets through the rules -> per-second anatomy states.

Also prints the E4 rules sanity check (share of real videos flagged `clip_before_cvs`, should be
under ~20%) and the accuracy of inferred phases against the Challenge Validation real phases.

Usage: python pipeline/02_build_states.py [--no-write]
"""
import argparse
import json
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, rules  # noqa: E402
from backend.schema import State  # noqa: E402


def replay(seconds: dict[str, list[str]]) -> list[State]:
    """seconds: {"t": [triplet, ...]} (1 fps). Missing seconds count as no triplets."""
    ts = sorted(int(t) for t in seconds)
    st = rules.initial_state()
    out = []
    for t in range(ts[0], ts[-1] + 1):
        trips = [x for x in seconds.get(str(t), []) if "null_verb" not in x]
        st = rules.apply_second(st, trips, t=t).state
        out.append(st)
    return out


def e4(all_states: dict[str, list[State]]) -> dict:
    flagged = Counter()
    for v, states in all_states.items():
        for name in set(states[-1].violations):
            flagged[name] += 1
    n = len(all_states)
    return {"videos": n, **{k: round(c / n, 3) for k, c in flagged.items()}}


def phase_accuracy(all_states: dict[str, list[State]]) -> dict:
    p = config.DATA / "challenge_phases.json"
    if not p.exists():
        return {}
    real = json.loads(p.read_text())
    hit = tot = 0
    confusion = Counter()
    for v, frames in real.items():
        if v not in all_states:
            continue
        by_t = {s.t: s for s in all_states[v]}
        for t, ph in frames.items():
            s = by_t.get(int(t))
            if s is None:
                continue
            tot += 1
            hit += s.phase == ph
            confusion[(ph, s.phase)] += 1
    return {"frames": tot, "accuracy": round(hit / max(tot, 1), 3),
            "top_confusions": [f"{a} -> {b}: {c}" for (a, b), c in confusion.most_common(8) if a != b]}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-write", action="store_true")
    args = ap.parse_args()
    labels = json.loads(config.LABELS.read_text())
    all_states = {v: replay(sec) for v, sec in labels.items()}

    if not args.no_write:
        config.STATES.mkdir(parents=True, exist_ok=True)
        for v, states in all_states.items():
            (config.STATES / f"{v}.json").write_text(
                json.dumps([s.model_dump(exclude={"active"}) for s in states])
            )

    rep = {"e4": e4(all_states), "phase_check": phase_accuracy(all_states)}
    final = [s[-1] for s in all_states.values()]
    rep["final_cvs_mean"] = round(sum(s.cvs_count() for s in final) / len(final), 2)
    rep["videos_with_injury"] = sum(s.injury for s in final)
    print(json.dumps(rep, indent=1))
    (config.DATA / "e4_report.json").write_text(json.dumps(rep, indent=1))


if __name__ == "__main__":
    main()
