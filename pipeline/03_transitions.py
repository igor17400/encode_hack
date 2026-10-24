"""Per-second states -> action-segment transitions (+ reference-frame index).

One segment = consecutive seconds with the same primary action (the most consequential triplet on
screen; see PRIORITY). Each transition stores state_before / action / state_after / next_action and a
templated `summary` (no LLM) that gets embedded.

Usage: python pipeline/03_transitions.py
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, rules  # noqa: E402
from backend.schema import State  # noqa: E402
from eval import splits  # noqa: E402

# Higher = more consequential. grasp/retract are mostly background holding.
PRIORITY = {"cut": 9, "clip": 8, "pack": 7, "coagulate": 6, "dissect": 5, "aspirate": 4, "irrigate": 4,
            "grasp": 2, "retract": 1, "null_verb": 0}
TARGET_BONUS = {"cystic_duct": 0.3, "cystic_artery": 0.3, "cystic_plate": 0.2, "cystic_pedicle": 0.2,
                "adhesion": 0.2, "blood_vessel": 0.2}


def primary(triplets: list[str]) -> str | None:
    best, score = None, -1.0
    for t in triplets:
        _, v, tg = t.split(",")
        if v == "null_verb":
            continue
        s = PRIORITY.get(v, 0) + TARGET_BONUS.get(tg, 0)
        if s > score:
            best, score = t, s
    return best


MAX_GAP_S = 3  # unlabelled seconds bridged inside one segment


def segments(seconds: dict[str, list[str]]) -> list[tuple[int, int, str, list[str]]]:
    ts = sorted(int(t) for t in seconds)
    out, cur = [], None
    for t in range(ts[0], ts[-1] + 1):
        trips = seconds.get(str(t), [])
        p = primary(trips)
        if p is None:
            if cur and t - cur[1] > MAX_GAP_S:
                out.append(cur)
                cur = None
            continue
        if cur and p == cur[2]:
            cur[1] = t
            cur[3].update(trips)
            continue
        if cur:
            out.append(cur)
        cur = [t, t, p, set(trips)]
    if cur:
        out.append(cur)
    return [(a, b, p, sorted(s)) for a, b, p, s in out]


def main() -> None:
    labels = json.loads(config.LABELS.read_text())
    split = splits.load()
    n_tr = 0
    with config.TRANSITIONS.open("w") as ftr:
        for v, seconds in labels.items():
            states = [State(**s) for s in json.loads((config.STATES / f"{v}.json").read_text())]
            by_t = {s.t: s for s in states}
            t0 = states[0].t
            segs = segments(seconds)
            sp = splits.split_of(v, split)
            for i, (a, b, act, trips) in enumerate(segs):
                before = by_t.get(a - 1) or rules.initial_state()
                after = by_t[b]
                nxt = segs[i + 1][2] if i + 1 < len(segs) else None
                row = {
                    "_id": f"{v}_{a:05d}",
                    "video_id": v, "split": sp, "t_start": a, "t_end": b, "duration_s": b - a + 1,
                    "phase": before.phase if a > t0 else after.phase,
                    "action": act, "triplets": trips,
                    "state_before": before.model_dump(exclude={"active"}),
                    "state_after": after.model_dump(exclude={"active"}),
                    "next_action": nxt,
                    "violations": after.violations[len(before.violations):],
                    "summary": rules.summary(before, act),
                    "state_after_summary": rules.summary(after),
                }
                ftr.write(json.dumps(row) + "\n")
                n_tr += 1

    # Reference frames: every PNG we have on disk, with its derived state.
    n_fr = 0
    with config.FRAMES_INDEX.open("w") as ffr:
        for vdir in sorted(config.FRAMES_DIR.glob("VID*")):
            v = vdir.name
            sp_path = config.STATES / f"{v}.json"
            if not sp_path.exists():
                continue
            by_t = {s["t"]: s for s in json.loads(sp_path.read_text())}
            for png in sorted(vdir.glob("*.png")):
                t = int(png.stem)
                if t not in by_t:
                    continue
                st = State(**by_t[t])
                ffr.write(json.dumps({
                    "_id": f"{v}_{t:05d}", "video_id": v, "t": t, "split": splits.split_of(v, split),
                    "path": str(png.relative_to(config.FRAMES_DIR)), "phase": st.phase,
                    "triplets": labels[v].get(str(t), []), "state": st.model_dump(exclude={"active"}),
                    "summary": rules.summary(st),
                }) + "\n")
                n_fr += 1
    print(f"transitions={n_tr} frames={n_fr}")


if __name__ == "__main__":
    main()
