"""Forecast -> reality scoring for real, held-out operations.

A forecast is made from what is known at that moment only: the state before, the action now happening, and
train-split retrieval. It is checked later against what the surgeon actually did next (CholecT50 labels) and
against the anatomy the real labels produce. Risk and bleeding cannot be checked: CholecT50 has no complication
labels.
"""
from __future__ import annotations

STRUCTS = ("gallbladder", "cystic_duct", "cystic_artery", "cystic_plate")


def rank(top: list[str], truth: str | None) -> int | None:
    """1-based rank of the truth in a top-3 forecast, None if missed (or nothing to check)."""
    if not truth:
        return None
    top = list(top)[:3]
    return top.index(truth) + 1 if truth in top else None


def anatomy_check(predicted: dict, real: dict) -> dict:
    """Per-structure agreement of the predicted after-state with the real one (status and clip count), plus CVS."""
    out = {}
    for n in STRUCTS:
        p, r = predicted["structures"][n], real["structures"][n]
        out[n] = {"predicted": p["status"], "real": r["status"], "clips_predicted": p["clips"], "clips_real": r["clips"],
                  "match": p["status"] == r["status"] and p["clips"] == r["clips"]}
    cp, cr = sum(map(bool, predicted["cvs"].values())), sum(map(bool, real["cvs"].values()))
    out["cvs"] = {"predicted": cp, "real": cr, "match": cp == cr}
    return out


def public_forecast(f: dict) -> dict:
    """The part that may be shown before the reveal (no truth fields)."""
    return {k: v for k, v in f.items() if k not in ("truth", "scores")}


def clip_score(forecasts: list[dict]) -> dict:
    """Top-1 / top-3 hits per forecaster over forecasts that have a truth to check."""
    checkable = [f for f in forecasts if f["truth"]["next_action"]]
    out = {"n": len(checkable)}
    for who in ("world_model", "trained", "bigram"):
        ranks = [f["scores"][who]["rank"] for f in checkable]
        out[who] = {"top1": sum(r == 1 for r in ranks), "top3": sum(r is not None for r in ranks)}
    anat = [f["scores"]["anatomy"] for f in checkable]
    out["anatomy_all_match"] = sum(all(v["match"] for v in a.values()) for a in anat)
    return out
