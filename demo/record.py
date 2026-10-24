"""Record every demo path to demo/precomputed/*.json for DEMO_MODE=precomputed.

Runs in-process, in one explicit mode:
  --mode offline  rules + replay of the real dataset labels; no API calls. Every result says so
                  (`source: rules_only` / `labels`). Agent policies are not recorded (they need Gemini).
  --mode live     Gemini + Atlas for everything. Any failed call aborts the recording: nothing is
                  filled in with a fallback.

Usage: python demo/record.py --mode offline|live [--video VID74] [--t-from 380] [--t-to 560] [--episodes 10]
"""
import argparse
import asyncio
import json
import random
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import agent, config, perception, rules, simulator, world_model  # noqa: E402
from backend.schema import Patient, State  # noqa: E402
from eval import splits  # noqa: E402

OUT = config.PRECOMPUTED
DEMO_ACTIONS = ["clipper,clip,cystic_duct", "hook,dissect,cystic_plate"]
LIVE = False  # set from --mode in main()


def write(name: str, obj) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / f"{name}.json").write_text(json.dumps(obj, indent=1, default=str))
    print(f"  wrote {name}.json")


def patients() -> dict[str, Patient]:
    return {p["patient_id"]: Patient(**p) for p in json.loads((config.DATA / "patients.json").read_text())}


def branch_point(video: str) -> dict:
    """Last moment before the first clip where CVS is not yet met: 'clip now' vs 'keep dissecting'."""
    states = [State(**s) for s in json.loads((config.STATES / f"{video}.json").read_text())]
    first_clip = next((s.t for s in states if any(x.clips for x in s.structures.values())), states[-1].t)
    pre = [s for s in states if s.t < first_clip and s.phase_idx >= rules.CALOT]
    cand = [s for s in pre if s.cvs_count() < 3] or pre or states
    s = cand[-1]
    return {"video_id": video, "t": s.t, "first_clip_t": first_clip, "state": s.model_dump(exclude={"active"})}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--video", default="VID74")
    ap.add_argument("--t-from", type=int, default=None)
    ap.add_argument("--t-to", type=int, default=None)
    ap.add_argument("--episodes", type=int, default=10)
    ap.add_argument("--patients", nargs="+", default=["P2", "P4"])
    ap.add_argument("--mode", required=True, choices=["offline", "live"])
    a = ap.parse_args()
    global LIVE
    LIVE = a.mode == "live"
    if LIVE and not (config.GEMINI_API_KEY and config.MONGODB_URI):
        raise SystemExit("--mode live needs GEMINI_API_KEY and MONGODB_URI")
    print(f"Recording ({'LIVE' if LIVE else 'OFFLINE: rules-only / label replay'}) -> {OUT}")
    pats = patients()

    # Static data the API needs when data/ is absent (fresh clone).
    write("patients", list(json.loads((config.DATA / "patients.json").read_text())))
    write("actions", agent.allowed_actions())
    vocab = json.loads(config.VOCAB.read_text())
    write("vocab", {k: vocab[k] for k in ("instruments", "verbs", "targets", "phases", "triplets")})
    write(f"states_{a.video}", json.loads((config.STATES / f"{a.video}.json").read_text()))

    # Clips: the demo video.
    frames = perception.clip_frames(a.video, a.t_from, a.t_to)
    write("clips", [{"video_id": a.video, "n_frames": len(frames), "t_start": frames[0][0], "t_end": frames[-1][0]}])

    # Branch point + imagine results for P1 and P2 (the patient changes the answer).
    bp = branch_point(a.video)
    write("branch_point", bp)
    st = State(**bp["state"])
    for pid in ("P1", "P2", "P4"):
        for act in DEMO_ACTIONS:
            r = world_model.step(st, act, pats[pid], random.Random(0), use_argon=LIVE, retrieve=LIVE, with_frame=LIVE,
                                 strict=LIVE)
            write(f"imagine_{pid}_{act.replace(',', '_')}", r.model_dump())

    # Watch timeline around the branch point (defaults: 2 min before -> 1 min after first clip).
    t_from = a.t_from if a.t_from is not None else max(0, bp["first_clip_t"] - 120)
    t_to = a.t_to if a.t_to is not None else bp["first_clip_t"] + 60
    events = []
    for pid in ("P1", "P3"):  # P3's adhesions make the same real actions unsafe -> a real alert
        sink = perception.MemorySink()
        asyncio.run(perception.run_watch("recording", a.video, pats[pid], sink, t_from=t_from, t_to=t_to,
                                         source="flash" if LIVE else "labels", verify=LIVE))
        ev = [[c, {k: v for k, v in d.items() if k != "session_id"}] for c, d in sink.events]
        events += ev
        write(f"watch_{a.video}_{pid}", {"video_id": a.video, "patient_id": pid, "t_from": t_from, "t_to": t_to,
                                         "frames": sum(1 for c, _ in ev if c == "observations"), "events": ev,
                                         "alerts": sum(1 for c, _ in ev if c == "alerts"),
                                         "source": "flash" if LIVE else "labels"})

    n_win = len(perception.clip_frames(a.video, t_from, t_to))
    write("clips", [{"video_id": a.video, "n_frames": n_win, "t_start": t_from, "t_end": t_to,
                     "watch_patients": ["P1", "P3"], "branch_t": bp["t"]}])

    # Episodes per patient: random, expert replay, and (live only) agent without / with lessons.
    policies = ["random", "expert_replay"] + (["agent", "agent_lessons"] if LIVE else [])
    test_videos = splits.load()["test"]
    all_lessons = []
    for pid in a.patients:
        store = agent.LessonStore(scope=f"demo_{pid}", local_path=None if LIVE else OUT / f"_lessons_{pid}.jsonl")
        eps = []
        for pol in policies:
            for i in range(a.episodes):
                kw = {"expert_video": test_videos[i % len(test_videos)]} if pol == "expert_replay" else {}
                # Same seeds, sample keys and dynamics as eval/agent_eval.py (seed 1), so the recorded episodes
                # are the E5 episodes (served from cache) and the robot tab matches the Evidence table.
                ep = simulator.run_episode(pats[pid], pol, rng=random.Random(1000 + i), dynamics="rules",
                                           lessons=store if pol == "agent_lessons" else None,
                                           sample_key=f"e5-seed1-{pid}-ep{i}", **kw)
                ep.pop("final_state", None)
                eps.append(ep)
            print(f"  {pid} {pol}: mean violations "
                  f"{sum(e['n_violations'] for e in eps if e['policy'] == pol) / a.episodes:.1f}")
        write(f"episodes_{pid}", eps)
        if "agent_lessons" in policies:
            for l in store.all():
                d = l.model_dump()
                d["times_cited"] = sum(l.lesson_id in e["lessons_used"] for e in eps)
                all_lessons.append(d)
    write("lessons", all_lessons)

    # Eval cards.
    for name in ("eval_latest", "eval_E5_agent", "eval_E3_perception"):
        p = config.DATA / f"{name}.json"
        if p.exists():
            d = json.loads(p.read_text())
            d.pop("items", None)
            write(name, d)
    if LIVE:  # real Gemini usage totals from Atlas; offline recordings made no calls, so no usage file
        from backend import db

        write("usage", db.usage_totals())
    else:
        (OUT / "usage.json").unlink(missing_ok=True)
    from backend import stats

    write("stats", stats.compute())

    # Copy the frames the recordings reference into the repo so the offline demo needs no download.
    refs = {d.get("frame_path") or d.get("path") for _, d in events}
    for name in OUT.glob("imagine_*.json"):
        f = json.loads(name.read_text()).get("frame")
        if f:
            refs.add(f["path"])
    dst_root = Path(__file__).resolve().parent / "clips" / "frames"
    refs = set(filter(None, refs))
    n = 0
    for rel in refs:
        src, dst = config.FRAMES_DIR / rel, dst_root / rel
        if src.exists() and (not dst.exists() or dst.read_bytes() != src.read_bytes()):
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy(src, dst)
            n += 1
    stale = [f for f in dst_root.rglob("*.png") if str(f.relative_to(dst_root)) not in refs]
    for f in stale:
        f.unlink()
    print(f"  copied {n} referenced frames to demo/clips/frames/, removed {len(stale)} unreferenced")


if __name__ == "__main__":
    main()
