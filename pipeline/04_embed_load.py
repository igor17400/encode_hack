"""Embed transition / frame summaries and load them into Atlas, then create indexes.

Usage: python pipeline/04_embed_load.py [--estimate] [--limit N] [--skip-frames]
  --estimate   print how many texts would be embedded and exit (no API calls)
"""
import argparse
import json
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, db, gemini  # noqa: E402


def read_jsonl(p: Path, limit: int | None) -> list[dict]:
    rows = []
    with p.open() as f:
        for line in f:
            rows.append(json.loads(line))
            if limit and len(rows) >= limit:
                break
    return rows


def load(collection: str, rows: list[dict], chunk: int = 500) -> None:
    from pymongo import ReplaceOne

    texts = [r["summary"] for r in rows]
    uniq = sorted(set(texts))
    print(f"{collection}: {len(rows)} rows, {len(uniq)} unique summaries to embed")
    vecs = dict(zip(uniq, gemini.embed(uniq, kind="document")))
    ops = []
    for r in rows:
        r["embedding"] = db.to_bin(vecs[r["summary"]])
        ops.append(ReplaceOne({"_id": r["_id"]}, r, upsert=True))
        if len(ops) >= chunk:
            db.col(collection).bulk_write(ops, ordered=False)
            ops = []
    if ops:
        db.col(collection).bulk_write(ops, ordered=False)


def load_videos() -> None:
    labels = json.loads(config.LABELS.read_text())
    split = json.loads(config.SPLIT.read_text())
    for v, sec in labels.items():
        sp = next((k for k, vs in split.items() if v in vs), "train")
        ts = [int(t) for t in sec]
        states = json.loads((config.STATES / f"{v}.json").read_text())
        spans, cur = [], None
        for s in states:
            if not cur or cur["phase"] != s["phase"]:
                cur = {"phase": s["phase"], "start": s["t"], "end": s["t"]}
                spans.append(cur)
            cur["end"] = s["t"]
        db.col("videos").replace_one({"video_id": v}, {
            "video_id": v, "split": sp, "duration_s": max(ts) - min(ts) + 1, "phase_spans": spans,
            "phases_inferred": True,
        }, upsert=True)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--estimate", action="store_true")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--skip-frames", action="store_true")
    a = ap.parse_args()

    tr = read_jsonl(config.TRANSITIONS, a.limit)
    fr = [] if a.skip_frames or not config.FRAMES_INDEX.exists() else read_jsonl(config.FRAMES_INDEX, a.limit)
    n_unique = len({r["summary"] for r in tr}) + len({r["summary"] for r in fr})
    print(f"transitions={len(tr)} frames={len(fr)} unique texts={n_unique} "
          f"(~{(n_unique + gemini.EMBED_BATCH - 1) // gemini.EMBED_BATCH} embed requests before cache)")
    if a.estimate:
        return

    gemini.reset_counter()
    config.GEMINI_MAX_CALLS = max(config.GEMINI_MAX_CALLS, n_unique // gemini.EMBED_BATCH + 20)
    t0 = time.time()
    print("ping:", db.ping())
    print("indexes created:", db.ensure_indexes())
    load_videos()
    load("transitions", tr)
    if fr:
        load("frames", fr)
    print(f"embed model in use: {gemini.embed_model_in_use()}  dim={config.EMBED_DIM}")
    db.wait_for_search_indexes()
    print(f"done in {time.time() - t0:.0f}s; uncached Gemini calls: {gemini.calls_made()}")


if __name__ == "__main__":
    main()
