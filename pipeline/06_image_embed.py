"""Multimodal frame search: embed frame IMAGES (gemini-embedding-2) into frames.image_embedding.

A bounded subset of train frames (1 every --every s, at most --max frames, spread evenly over videos) so a
live Watch frame can find visually similar real frames. Cached by image bytes; reruns are free.

Usage: python pipeline/06_image_embed.py [--every 10] [--max 2000] [--workers 8]
"""
import argparse
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, db, gemini  # noqa: E402


def select(every: int, cap: int) -> list[dict]:
    rows = list(db.col("frames").find({"split": "train"}, {"_id": 1, "path": 1, "t": 1, "video_id": 1}))
    rows = [r for r in rows if r["t"] % every == 0 and (config.FRAMES_DIR / r["path"]).exists()]
    by_video: dict[str, list] = {}
    for r in sorted(rows, key=lambda r: (r["video_id"], r["t"])):
        by_video.setdefault(r["video_id"], []).append(r)
    per = max(1, cap // max(1, len(by_video)))
    out = []
    for v, rs in by_video.items():  # even spacing within each video
        step = max(1, len(rs) // per)
        out += rs[::step][:per]
    return out[:cap]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--every", type=int, default=10)
    ap.add_argument("--max", type=int, default=2000)
    ap.add_argument("--workers", type=int, default=8)
    a = ap.parse_args()
    rows = select(a.every, a.max)
    config.GEMINI_MAX_CALLS = len(rows) + 20
    print(f"embedding {len(rows)} frame images from {len({r['video_id'] for r in rows})} train videos")

    def one(r):
        vec = gemini.embed_images([config.FRAMES_DIR / r["path"]])[0]  # raises on failure: nothing invented
        db.col("frames").update_one({"_id": r["_id"]}, {"$set": {"image_embedding": db.to_bin(vec)}})
        return 1

    with ThreadPoolExecutor(a.workers) as ex:
        done = sum(ex.map(one, rows))
    n = db.col("frames").count_documents({"image_embedding": {"$exists": True}})
    print(f"done: {done} embedded this run; frames with image_embedding in Atlas: {n}; "
          f"uncached calls: {gemini.calls_made()}")


if __name__ == "__main__":
    main()
