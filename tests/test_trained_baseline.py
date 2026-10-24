"""The trained baseline must never see val/test rows and must be deterministic."""
from eval.next_step_eval import load_transitions
from eval.trained_baseline import TrainedBaseline

SMALL = [{"learning_rate": 0.05, "max_iter": 20, "max_leaf_nodes": 15}]


def test_fitted_on_train_only_and_deterministic():
    rows = load_transitions()
    a = TrainedBaseline(rows, grid=SMALL)
    split_of = {r["_id"]: r["split"] for r in rows}
    assert a.fitted_ids and all(split_of[i] == "train" for i in a.fitted_ids)
    test_rows = [r for r in rows if r["split"] == "test"][:50]
    b = TrainedBaseline(rows, grid=SMALL)
    assert a.predict_top3(test_rows) == b.predict_top3(test_rows)
