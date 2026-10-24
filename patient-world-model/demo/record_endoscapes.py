"""Record world-model predictions (live Argon + Atlas, strict) from Endoscapes decision moments.

The start states are Igor's perceived states (held CVS from the Argon judge) at chosen seconds; the step is our
world model. Output: demo/precomputed/imagine_<patient>_<action>_<clip>_<t>.json (static demo) and
decision_points.json. Usage: python demo/record_endoscapes.py
"""
import json
import random
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config, endoscapes, world_model  # noqa: E402
from backend.schema import Patient, State  # noqa: E402

POINTS = [("endo166", 60), ("endo166", 93), ("endo198", 153)]
ACTIONS = ["clipper,clip,cystic_duct", "hook,dissect,cystic_plate"]


def main() -> None:
    pats = {p["patient_id"]: Patient(**p) for p in json.loads((config.DATA / "patients.json").read_text())}
    config.GEMINI_MAX_CALLS = 200
    points = []
    jobs = []
    for clip, t in POINTS:
        ws = [d for c, d in endoscapes.events(clip, pats["P1"]) if c == "world_state" and not d.get("done")]
        st = State(**min(ws, key=lambda d: abs(d["t"] - t))["state"])
        points.append({"clip": clip, "t": st.t, "state": st.model_dump(exclude={"active"}),
                       "cvs": sum(st.cvs.values()), "experts_cvs_t": endoscapes.clip_info(clip)["experts_cvs_t"]})
        for pid in ("P1", "P2", "P4"):
            for act in ACTIONS:
                jobs.append((clip, st, pid, act))

    def one(job):
        clip, st, pid, act = job
        r = world_model.step(st, act, pats[pid], random.Random(0), strict=True)  # failed call aborts, never filled
        name = f"imagine_{pid}_{act.replace(',', '_')}_{clip}_{st.t}"
        (config.PRECOMPUTED / f"{name}.json").write_text(json.dumps(r.model_dump(), default=str))
        return name, r.risk_level, r.rules_violations

    with ThreadPoolExecutor(4) as ex:
        for name, risk, viol in ex.map(one, jobs):
            print(f"{name}: {risk} {viol}")
    (config.PRECOMPUTED / "decision_points.json").write_text(json.dumps(points, indent=1, default=str))


if __name__ == "__main__":
    main()
