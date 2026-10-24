"""Score Gemini's cystic duct detection against CholecSeg8k masks.

  python eval.py /path/to/cholecseg8k --videos video12 video17 --n 100
  python eval.py /path/to/cholecseg8k --show-values   # check the mask value for the cystic duct
  python eval.py --selftest

Hold out whole videos, not frames, and keep these videos out of any reference library.
"""
import argparse
import glob
import json
import os
import random
from concurrent.futures import ThreadPoolExecutor

DUCT_VALUE = 25       # cystic duct in *_endo_watershed_mask.png (community mapping): verify with --show-values
PRESENT_FRAC = 0.01   # ground truth: duct present if it covers > 1% of pixels
PRED_CONF = 0.5       # prediction: duct present if named with confidence >= this


def score(rows):
    """rows: [{truth, pred, confident}] -> recall, precision, and the value of holding back."""
    tp = sum(r["truth"] and r["pred"] for r in rows)
    fp = sum(not r["truth"] and r["pred"] for r in rows)
    fn = sum(r["truth"] and not r["pred"] for r in rows)
    conf = [r for r in rows if r["confident"]]
    held = [r for r in rows if not r["confident"]]

    def acc(rs):
        return sum(r["truth"] == r["pred"] for r in rs) / len(rs) if rs else None

    return {"n": len(rows), "duct_frames": tp + fn,
            "recall": tp / (tp + fn) if tp + fn else None,
            "precision": tp / (tp + fp) if tp + fp else None,
            "accuracy_when_confident": acc(conf), "accuracy_when_held_back": acc(held),
            "held_back_rate": len(held) / len(rows) if rows else None}


def selftest():
    rows = [{"truth": True, "pred": True, "confident": True},
            {"truth": True, "pred": False, "confident": False},
            {"truth": False, "pred": True, "confident": False},
            {"truth": False, "pred": False, "confident": True}]
    s = score(rows)
    assert (s["recall"], s["precision"], s["held_back_rate"]) == (0.5, 0.5, 0.5), s
    assert (s["accuracy_when_confident"], s["accuracy_when_held_back"]) == (1.0, 0.0), s
    print("selftest ok")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?")
    ap.add_argument("--videos", nargs="+", default=["video12", "video17"])
    ap.add_argument("--n", type=int, default=100)
    ap.add_argument("--show-values", action="store_true")
    ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    if a.selftest:
        return selftest()
    if not a.root:
        ap.error("give the CholecSeg8k folder")

    import cv2
    paths = sorted(p for p in glob.glob(os.path.join(a.root, "**", "*_endo.png"), recursive=True)
                   if any(v in p.split(os.sep) for v in a.videos))
    if not paths:
        ap.error(f"no frames found for {a.videos} under {a.root}")
    mask_of = lambda p: cv2.imread(p.replace("_endo.png", "_endo_watershed_mask.png"), cv2.IMREAD_GRAYSCALE)
    if a.show_values:
        import numpy as np
        return print("mask values:", np.unique(mask_of(paths[0])))

    from google import genai
    from label import MODEL, label_frame
    client = genai.Client()
    picked = random.Random(0).sample(paths, min(a.n, len(paths)))
    print(f"labelling {len(picked)} frames from {a.videos} with {MODEL}...")
    with ThreadPoolExecutor(8) as ex:
        labels = list(ex.map(lambda p: label_frame(client, open(p, "rb").read(), "image/png"), picked))

    rows = []
    for p, lab in zip(picked, labels):
        duct = max((s.get("confidence", 0) for s in lab.get("visible_structures", []) if s.get("name") == "cystic_duct"), default=0)
        rows.append({"frame": os.path.relpath(p, a.root),
                     "truth": bool((mask_of(p) == DUCT_VALUE).mean() > PRESENT_FRAC),
                     "pred": duct >= PRED_CONF, "pred_conf": duct,
                     "confident": bool(lab.get("can_confirm_anatomy")), "label": lab})
    s = score(rows)
    print(json.dumps(s, indent=1))
    pct = lambda x: "n/a" if x is None else f"{x:.0%}"
    print(f"\nOn {s['n']} frames from {len(a.videos)} operations it had never seen, it found the cystic duct "
          f"{pct(s['recall'])} of the time, and when it said it was sure, it was right {pct(s['accuracy_when_confident'])} of the time.")
    with open("eval_results.json", "w") as f:
        json.dump({"model": MODEL, "videos": a.videos, "summary": s, "rows": rows}, f, indent=1)


if __name__ == "__main__":
    main()
