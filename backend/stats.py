"""Dataset / pipeline facts for the UI, computed from the pipeline outputs (nothing typed in by hand)."""
import json

from backend import config


def compute() -> dict:
    out: dict = {"models": {"world_model": config.MODEL_ARGON, "perception_agent": config.MODEL_FLASH,
                            "embedding": config.EMBED_MODEL, "embedding_dim": config.EMBED_DIM}}
    if config.TRANSITIONS.exists():
        with config.TRANSITIONS.open() as f:
            out["n_transitions"] = sum(1 for _ in f)
    if config.FRAMES_INDEX.exists():
        with config.FRAMES_INDEX.open() as f:
            out["n_reference_frames"] = sum(1 for _ in f)
    if config.LABELS.exists():
        labels = json.loads(config.LABELS.read_text())
        out["n_videos"] = len(labels)
        out["n_labelled_seconds"] = sum(len(v) for v in labels.values())
    if config.SPLIT.exists():
        out["split"] = {k: len(v) for k, v in json.loads(config.SPLIT.read_text()).items()}
    rep = config.DATA / "e4_report.json"
    if rep.exists():
        r = json.loads(rep.read_text())
        out["e4"] = r.get("e4")
        out["phase_check"] = {k: r["phase_check"][k] for k in ("frames", "accuracy")} if r.get("phase_check") else None
    return out
