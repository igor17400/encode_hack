import pytest

from eval.merge_e5 import merge


def part(pid, pol, viol, done, sources):
    n = len(viol)
    return {"run_id": f"r_{pid}_{pol}", "config": {"episodes": n, "max_steps": 25},
            "metrics": {pid: {pol: {"episodes": n, "mean_violations": round(sum(viol) / n, 2), "injury_rate": 0.0,
                                    "completion_rate": round(sum(done) / n, 2), "mean_reward": 0,
                                    "violations_per_episode": viol, "completed_per_episode": done,
                                    "step_sources": sources}, "lessons": []}}}


def test_merge_combines_parts_and_counts_sources():
    doc = merge([part("P2", "agent", [0, 1], [True, False], {"argon": 30}),
                 part("P2", "random", [3, 2], [False, False], {"argon": 20})], None)
    assert set(doc["metrics"]["P2"]) == {"agent", "random", "lessons"}
    assert doc["config"]["step_sources"] == {"argon": 50}


def test_merge_rejects_duplicate_parts():
    with pytest.raises(ValueError):
        merge([part("P2", "agent", [0], [True], {}), part("P2", "agent", [1], [True], {})], None)


def test_merge_detects_inconsistent_completion():
    bad = part("P4", "agent", [0, 0], [True, True], {})
    bad["metrics"]["P4"]["agent"]["completion_rate"] = 0.5  # does not match the per-episode list
    with pytest.raises(AssertionError):
        merge([bad], None)
