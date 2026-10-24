"""Trained next-action baseline: gradient boosting on the state before an action + the action itself.

A stronger comparison for E1 than the bigram table. Fitted on **train** transitions only; hyperparameters are
chosen on **val** transitions only; the test split is never seen until evaluation.

Usage: python -m eval.trained_baseline        # prints the val grid and the chosen model
"""
from __future__ import annotations

import json
from functools import lru_cache

import numpy as np

from backend import config
from backend.schema import STATUS_ORDER

STRUCTS = ["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate"]
CVS = ["c1_triangle_cleared", "c2_plate_exposed", "c3_two_structures"]
GRID = [{"learning_rate": lr, "max_iter": it, "max_leaf_nodes": leaves}
        for lr in (0.05, 0.1) for it in (100, 200) for leaves in (15, 31)]


@lru_cache(maxsize=1)
def action_vocab() -> tuple[str, ...]:
    return tuple(json.loads(config.VOCAB.read_text())["triplets"])


def features(row: dict) -> np.ndarray:
    st = row["state_before"]
    x: list[float] = []
    for name in STRUCTS:
        s = st["structures"][name]
        x += [1.0 if s["status"] == k else 0.0 for k in STATUS_ORDER]
        x += [s["exposure"], min(s["clips"], 4) / 4]
    x += [1.0 if st["cvs"][k] else 0.0 for k in CVS]
    x += [1.0 if st.get("phase_idx", 0) == i else 0.0 for i in range(7)]
    x += [1.0 if st["bleeding"] else 0.0, 1.0 if st["structures"]["common_bile_duct"]["at_risk"] else 0.0,
          st.get("gb_detach", 0.0), 1.0 if st.get("packed") else 0.0]
    x += [1.0 if row["action"] == a else 0.0 for a in action_vocab()]
    return np.asarray(x, dtype=np.float32)


def _xy(rows: list[dict]):
    rows = [r for r in rows if r["next_action"]]
    return np.stack([features(r) for r in rows]), np.asarray([r["next_action"] for r in rows]), rows


def _top3(model, X) -> list[list[str]]:
    proba = model.predict_proba(X)
    order = np.argsort(-proba, axis=1)[:, :3]
    return [[model.classes_[j] for j in idx] for idx in order]


def _top3_acc(model, X, y) -> float:
    return float(np.mean([t in p for t, p in zip(y, _top3(model, X))]))


class TrainedBaseline:
    """Fit on train, select hyperparameters on val. `fitted_ids` records exactly which rows were used."""

    def __init__(self, transitions: list[dict], grid: list[dict] | None = None):
        from sklearn.ensemble import HistGradientBoostingClassifier

        train = [r for r in transitions if r["split"] == "train"]
        val = [r for r in transitions if r["split"] == "val"]
        Xtr, ytr, tr_rows = _xy(train)
        Xva, yva, _ = _xy(val)
        self.fitted_ids = {r["_id"] for r in tr_rows}
        self.val_grid = []
        best = None
        for params in grid or GRID:
            m = HistGradientBoostingClassifier(random_state=0, early_stopping=False, **params).fit(Xtr, ytr)
            acc = _top3_acc(m, Xva, yva)
            self.val_grid.append({**params, "val_top3": round(acc, 3)})
            if best is None or acc > best[0]:
                best = (acc, params, m)
        self.val_top3, self.params, self.model = best

    def predict_top3(self, rows: list[dict]) -> list[list[str]]:
        return _top3(self.model, np.stack([features(r) for r in rows]))


SELECTION = config.DATA / "trained_baseline_selection.json"


def load_selected(transitions: list[dict]) -> TrainedBaseline:
    """Refit only the val-selected hyperparameters (written by running this module), deterministic."""
    sel = json.loads(SELECTION.read_text())
    assert sel["selected_on"] == "val"
    tb = TrainedBaseline(transitions, grid=[sel["chosen"]])
    tb.val_grid = sel["grid"]
    return tb


if __name__ == "__main__":
    from eval.next_step_eval import load_transitions

    tb = TrainedBaseline(load_transitions())
    for g in tb.val_grid:
        print(g)
    print("chosen:", tb.params, "val top-3", round(tb.val_top3, 3), "| fitted on", len(tb.fitted_ids), "train rows")
    SELECTION.write_text(json.dumps({"chosen": tb.params, "val_top3": round(tb.val_top3, 3), "selected_on": "val",
                                     "grid": tb.val_grid}, indent=1))
