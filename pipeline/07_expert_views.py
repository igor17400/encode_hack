"""Precompute "how surgeons judged similar views" for the demo clips (read-only queries to Igor's library).

For one frame every --every seconds of each Watch clip: extract the frame (Endoscapes mp4s, or our CholecT50
frames), embed the image with gemini-embedding-2, and run the contrastive $vectorSearch against Igor's
`expert_frames`. Writes demo/precomputed/expert_views_<clip>.json. Never writes to Igor's database.

Usage: python pipeline/07_expert_views.py [--every 5] [--workers 4]
"""
import argparse
import json
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, endoscapes, experts, gemini  # noqa: E402


def endo_frames(clip: str, every: int, tmp: Path) -> list[tuple[int, Path]]:
    mp4 = endoscapes.DIR / endoscapes.CLIPS[clip]["video"]
    t_end = endoscapes.clip_info(clip)["t_end"]
    out = []
    for t in range(0, t_end + 1, every):  # video seconds == dataset frame index (1 fps rendered at 25 fps)
        f = tmp / f"{clip}_{t:04d}.jpg"
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-ss", f"{t + 0.5}", "-i", str(mp4), "-frames:v", "1",
                        "-q:v", "3", str(f)], check=True)
        out.append((t, f))
    return out


def cholect_frames(video: str, t_from: int, t_to: int, every: int) -> list[tuple[int, Path]]:
    d = config.FRAMES_DIR / video
    return [(t, d / f"{t:06d}.png") for t in range(t_from, t_to + 1)
            if (t - t_from) % every == 0 and (d / f"{t:06d}.png").exists()]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--every", type=int, default=5)
    ap.add_argument("--workers", type=int, default=4)
    a = ap.parse_args()
    config.GEMINI_MAX_CALLS = 400
    clips = json.loads((config.PRECOMPUTED / "clips.json").read_text())
    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        for c in clips:
            v = c["video_id"]
            frames = (endo_frames(v, a.every, tmp) if c.get("source") == "endoscapes"
                      else cholect_frames(v, c["t_start"], c["t_end"], a.every))

            def one(item):
                t, path = item
                return t, experts.similar_expert_views(gemini.embed_images([path])[0])

            with ThreadPoolExecutor(a.workers) as ex:
                res = dict(ex.map(one, frames))
            out = config.PRECOMPUTED / f"expert_views_{v}.json"
            out.write_text(json.dumps({"clip": v, "every": a.every, "by_t": {str(t): r for t, r in sorted(res.items())},
                                       "source": "Igor's Endoscapes expert library (read-only), gemini-embedding-2"},
                                      indent=1, default=str))
            print(f"{v}: {len(res)} frames -> {out.name}")
    print("uncached Gemini calls:", gemini.calls_made())


if __name__ == "__main__":
    main()
