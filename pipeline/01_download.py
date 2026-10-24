"""Download CholecT50 labels (all 50 videos) and a small set of images.

Sources (checked 24 Oct 2026):
- Hugging Face `Voxel51/cholect50`: `samples.json` (~500 MB) holds per-second triplet labels for all
  50 videos (no phase field). Images are separate files under `data/NNN/`, fetched selectively.
- CholecT50 Challenge Validation zip: 5 videos, keyframe labels *with phases*, plus PNG frames.

Outputs: data/labels.json, data/vocab.json, data/split.json, data/challenge_phases.json,
and (with --images) reference frames under data/frames/.

Usage: python pipeline/01_download.py [--images] [--frame-every 5] [--max-gb 5]
"""
import argparse
import json
import shutil
import sys
import urllib.request
import zipfile
from collections import Counter, defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config  # noqa: E402
from eval import splits  # noqa: E402

HF_REPO = "Voxel51/cholect50"
VAL_ZIP_URL = "https://s3.unistra.fr/camma_public/datasets/cholect50/CholecT50-Challenge-Validation.zip"


def labels_of(field: dict | None) -> list[str]:
    return [c["label"] for c in ((field or {}).get("classifications") or [])]


def fetch_samples() -> None:
    if config.HF_SAMPLES.exists():
        return
    from huggingface_hub import hf_hub_download

    print("Downloading samples.json from Hugging Face ...")
    p = hf_hub_download(HF_REPO, "samples.json", repo_type="dataset", local_dir=config.RAW)
    print("  ->", p)


def fetch_challenge_val() -> None:
    if config.CHALLENGE_VAL.exists():
        return
    z = config.RAW / "CholecT50-Challenge-Validation.zip"
    if not z.exists():
        print("Downloading Challenge Validation zip ...")
        urllib.request.urlretrieve(VAL_ZIP_URL, z)
    with zipfile.ZipFile(z) as f:
        f.extractall(config.RAW)


def build_labels() -> tuple[dict, dict]:
    print("Parsing samples.json ...")
    samples = json.loads(config.HF_SAMPLES.read_text())["samples"]
    labels: dict[str, dict[int, list[str]]] = defaultdict(dict)
    paths: dict[str, dict[int, str]] = defaultdict(dict)
    vocab_counts = {k: Counter() for k in ("instruments", "verbs", "targets", "triplets")}
    for r in samples:
        v, t = r["video_id"], int(r["frame_number"])
        labels[v][t] = labels_of(r.get("triplets"))
        paths[v][t] = r["filepath"].lstrip("./")
        for k in vocab_counts:
            vocab_counts[k].update(labels_of(r.get(k)))
    return labels, {"counts": vocab_counts, "paths": paths}


def challenge_phases() -> tuple[list[str], dict]:
    """Phase names from the official label JSON, plus real per-keyframe phases for 5 videos."""
    out, names = {}, None
    for f in sorted((config.CHALLENGE_VAL / "labels").glob("VID*.json")):
        d = json.loads(f.read_text())
        cat = d["categories"]["phase"]
        names = [cat[str(i)] for i in range(len(cat))]
        per_frame = {}
        for fid, insts in d["annotations"].items():
            if insts:
                per_frame[int(fid)] = names[int(insts[0][14])]
        out[f.stem] = per_frame
    return names or [], out


def fetch_images(paths: dict, split: dict, every: int, max_gb: float) -> None:
    """Reference frames: 1 every `every` s from train videos; plus the Challenge Validation PNGs."""
    from huggingface_hub import hf_hub_download

    config.FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    # Challenge Validation PNGs are already local: copy them in as frames.
    n_local = 0
    for vdir in (config.CHALLENGE_VAL / "videos").glob("VID*"):
        dst = config.FRAMES_DIR / vdir.name
        dst.mkdir(exist_ok=True)
        for png in vdir.glob("*.png"):
            if not png.stem.isdigit():  # the zip ships a few duplicates like "000921 (1).png"
                continue
            target = dst / f"{int(png.stem):06d}.png"
            if not target.exists():
                shutil.copy(png, target)
                n_local += 1
    print(f"Copied {n_local} Challenge Validation frames.")

    budget = max_gb * 1e9
    used = sum(f.stat().st_size for f in config.FRAMES_DIR.rglob("*.png"))
    for v in split["train"]:
        for t in sorted(paths[v]):
            if t % every:
                continue
            dst = config.FRAMES_DIR / v / f"{t:06d}.png"
            if dst.exists():
                continue
            if used > budget:
                print("Image budget reached.")
                return
            p = Path(hf_hub_download(HF_REPO, paths[v][t], repo_type="dataset", local_dir=config.RAW / "hf"))
            dst.parent.mkdir(exist_ok=True)
            shutil.move(p, dst)
            used += dst.stat().st_size
        print(f"  {v}: done ({used / 1e9:.2f} GB)")


def fetch_clip(paths: dict, video: str, t_from: int, t_to: int, every: int, overwrite: bool = True) -> int:
    """Frames for one demo clip window (any split), e.g. 1 every 2 s for Watch mode.

    Overwrites frames already in the window (e.g. 706x396 Challenge Validation copies) so the clip uses one
    source at one resolution (HF, 854x480). The originals stay in data/raw/cholect50-challenge-val."""
    from huggingface_hub import hf_hub_download

    dst_dir = config.FRAMES_DIR / video
    dst_dir.mkdir(parents=True, exist_ok=True)
    n = 0
    for t in range(t_from, t_to + 1, every):
        if t not in paths[video]:
            continue
        dst = dst_dir / f"{t:06d}.png"
        if dst.exists() and not overwrite:
            continue
        p = Path(hf_hub_download(HF_REPO, paths[video][t], repo_type="dataset", local_dir=config.RAW / "hf"))
        shutil.move(p, dst)
        n += 1
    # Remove frames in the window that are not on the clip grid (other sources / spacing).
    for f in dst_dir.glob("*.png"):
        t = int(f.stem) if f.stem.isdigit() else -1
        if t_from <= t <= t_to and (t - t_from) % every:
            f.unlink()
    return n


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--images", action="store_true")
    ap.add_argument("--clip", nargs=3, metavar=("VIDEO", "T_FROM", "T_TO"),
                    help="only download frames for this clip window (uses --frame-every), then exit")
    ap.add_argument("--frame-every", type=int, default=5)
    ap.add_argument("--max-gb", type=float, default=5.0)
    args = ap.parse_args()

    config.RAW.mkdir(parents=True, exist_ok=True)
    if args.clip:
        paths = {v: {int(t): p for t, p in d.items()} for v, d in
                 json.loads((config.DATA / "frame_paths.json").read_text()).items()}
        v, a_, b_ = args.clip
        print(f"downloaded {fetch_clip(paths, v, int(a_), int(b_), args.frame_every)} frames for {v} {a_}-{b_}")
        return
    fetch_samples()
    fetch_challenge_val()

    labels, extra = build_labels()
    phase_list, real_phases = challenge_phases()
    counts = extra["counts"]
    vocab = {
        "instruments": sorted(counts["instruments"]),
        "verbs": sorted(counts["verbs"]),
        "targets": sorted(counts["targets"]),
        "triplets": [t for t, _ in counts["triplets"].most_common()],
        "triplet_counts": dict(counts["triplets"].most_common()),
        "phases": phase_list,
        "source": "HF Voxel51/cholect50 (triplets); CholecT50 Challenge Validation labels (phases)",
    }
    config.VOCAB.write_text(json.dumps(vocab, indent=1))
    config.LABELS.write_text(json.dumps({v: {str(t): l for t, l in sorted(d.items())} for v, d in labels.items()}))
    (config.DATA / "frame_paths.json").write_text(json.dumps(extra["paths"]))
    (config.DATA / "challenge_phases.json").write_text(json.dumps(real_phases))

    sp = splits.build(list(labels))
    config.SPLIT.write_text(json.dumps(sp, indent=1))

    print(f"videos={len(labels)} frames={sum(len(d) for d in labels.values())}")
    print("vocab:", {k: len(v) for k, v in vocab.items() if isinstance(v, list)})
    print("split:", {k: len(v) for k, v in sp.items()})
    assert not (set(sp["train"]) & set(sp["test"])), "train/test overlap"

    if args.images:
        fetch_images(extra["paths"], sp, args.frame_every, args.max_gb)


if __name__ == "__main__":
    main()
