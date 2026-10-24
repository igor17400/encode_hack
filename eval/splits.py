"""Video-level train / val / test split. Test videos never enter retrieval, lessons or prompt tuning.

Uses the official CholecT50 split from the CAMMA dataloader (`split_selector('cholect50')`,
https://github.com/CAMMA-public/cholect50/blob/master/dataloader_pth.py). `val` videos are used
only for prompt tuning; retrieval filters to `split == "train"`.
"""
import json

from backend import config

OFFICIAL = {
    "train": [1, 15, 26, 40, 52, 65, 79, 2, 18, 27, 43, 56, 66, 92, 4, 22, 31, 47, 57, 68, 96,
              5, 23, 35, 48, 60, 70, 103, 13, 25, 36, 49, 62, 75, 110],
    "val": [8, 12, 29, 50, 78],
    "test": [6, 51, 10, 73, 14, 74, 32, 80, 42, 111],
}


def vid(n: int) -> str:
    return f"VID{n:02d}"


def build(video_ids: list[str]) -> dict[str, list[str]]:
    present = set(video_ids)
    split = {k: sorted(vid(n) for n in v if vid(n) in present) for k, v in OFFICIAL.items()}
    unassigned = present - {v for vs in split.values() for v in vs}
    split["train"] += sorted(unassigned)
    return split


def load() -> dict[str, list[str]]:
    return json.loads(config.SPLIT.read_text())


def split_of(video_id: str, split: dict | None = None) -> str:
    split = split or load()
    for k, vs in split.items():
        if video_id in vs:
            return k
    return "train"


if __name__ == "__main__":
    labels = json.loads(config.LABELS.read_text())
    sp = build(list(labels))
    config.SPLIT.write_text(json.dumps(sp, indent=1))
    print({k: len(v) for k, v in sp.items()})
