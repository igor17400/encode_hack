"""Endoscapes adapter: CVS numbering, sensed CVS in the rules, and the decision point."""
from backend import endoscapes, rules
from backend.schema import Patient

P1 = Patient(patient_id="P1", name="Routine", story="")


def test_cvs_numbering_maps_camma_to_ours():
    held = {"c1": {"on": True}, "c2": {"on": False}, "c3": {"on": True}}
    assert endoscapes.sensed(held) == {"c3_two_structures": True, "c1_triangle_cleared": False, "c2_plate_exposed": True}


def test_sensed_cvs_drives_clip_decision_then_simulation_uses_anatomy():
    st = rules.initial_state()
    st.cvs_sensor = {"c1_triangle_cleared": False, "c2_plate_exposed": False, "c3_two_structures": True}
    st.cvs = dict(st.cvs_sensor)
    out = rules.apply_action(st, "clipper,clip,cystic_duct")
    assert rules.V_CLIP_BEFORE_CVS in out.new_violations      # judged against the sensed CVS (1/3)
    assert out.state.cvs_sensor is None and out.state.cvs_source == "proxy"


def test_full_sensed_cvs_allows_clip():
    st = rules.initial_state()
    st.cvs_sensor = {"c1_triangle_cleared": True, "c2_plate_exposed": True, "c3_two_structures": True}
    st.cvs = dict(st.cvs_sensor)
    assert rules.apply_action(st, "clipper,clip,cystic_duct").new_violations == []


def test_op166_stream_matches_igors_run_and_ends_at_decision_point():
    ev = endoscapes.events("endo166", P1)
    run = endoscapes.load_run("endo166")
    states = [d for c, d in ev if c == "world_state" and not d.get("done")]
    assert len(states) == len(run["frames"])
    for d, fr in zip(states, run["frames"]):  # our sensed CVS equals Igor's held state, every second
        assert d["state"]["cvs"] == endoscapes.sensed(fr["cvs_state"])
    assert ev[-1][1]["decision_point"] is True
    info = endoscapes.clip_info("endo166")
    assert info["experts_cvs_t"] is not None and info["agreement"]["keyframes"] == 13


def test_cvs_since_is_igors_hold_start_in_our_keys():
    from backend import endoscapes
    from backend.schema import Patient

    run = endoscapes.load_run("endo166")
    by_t = {int(d["t"]): d for c, d in endoscapes.events("endo166", Patient(patient_id="P1", name="x", story="x"))
            if c == "world_state" and not d.get("done")}
    for fr in run["frames"]:
        t = int(fr["t"])
        want = {endoscapes.TO_OURS[c]: v["since"] for c, v in fr["cvs_state"].items() if c in endoscapes.TO_OURS and v["on"]}
        assert by_t[t]["cvs_since"] == want
