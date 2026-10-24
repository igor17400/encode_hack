"""Turn one Endoscapes2023 operation (frames at 1 per second) into an mp4 plus the surgeons' CVS labels.

  python make_clip.py 198     # -> videos/endo198.mp4 and videos/endo198.truth.json

Endoscapes2023 (CAMMA, CC BY-NC-SA 4.0) covers dissection up to the first clip or cut.
Expects the dataset unzipped at ../data/endoscapes.
"""
import csv
import glob
import json
import os
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data", "endoscapes")


def main(vid):
    frame_no = lambda p: int(p.rsplit("_", 1)[1][:-4])
    # 'all/' in the zip only holds links into these split folders
    frames = sorted(glob.glob(os.path.join(DATA, "*", f"{vid}_*.jpg")), key=frame_no)
    if not frames:
        sys.exit(f"no frames for operation {vid} under {DATA}/{{train,val,test}}")
    os.makedirs(os.path.join(HERE, "videos"), exist_ok=True)
    out = os.path.join(HERE, "videos", f"endo{vid}.mp4")

    # one source frame per second of video, so video time == seconds into the dissection
    with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False) as f:
        for p in frames:
            f.write(f"file '{p}'\nduration 1\n")
        f.write(f"file '{frames[-1]}'\n")  # concat demuxer drops the last duration otherwise
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", f.name,
                    "-vf", "fps=25,format=yuv420p", "-c:v", "libx264", "-crf", "20", out], check=True)
    os.unlink(f.name)

    # surgeons' consensus CVS criteria (average of 3 annotators), one keyframe every 5 s
    index = {frame_no(p): i for i, p in enumerate(frames)}
    truth = [{"t": index[int(r["frame"])], "C1": float(r["C1"]), "C2": float(r["C2"]), "C3": float(r["C3"])}
             for r in csv.DictReader(open(os.path.join(DATA, "all_metadata.csv")))
             if r["vid"] == str(vid) and r["is_ds_keyframe"] == "True" and int(r["frame"]) in index]
    truth.sort(key=lambda x: x["t"])
    with open(out.replace(".mp4", ".truth.json"), "w") as f:
        json.dump(truth, f)
    print(f"wrote {out} ({len(frames)} s) and {len(truth)} CVS keyframes")


if __name__ == "__main__":
    main(sys.argv[1])
