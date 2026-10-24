from backend import config, rules
from backend.rules import ARTERY, CBD, DUCT, PLATE

P2 = {"skeletonise_factor": 1.8, "bleed_factor": 2.0}
P3 = {"adhesions_at_start": True}
P4 = {"cvs_violation_is_injury": True}


def dissect(st, target, seconds, mods=None):
    for _ in range(seconds):
        st = rules.apply_second(st, [f"hook,dissect,{target}"], mods).state
    return st


def cvs_state(mods=None):
    """Duct, artery and plate dissected long enough for full CVS."""
    n = int(config.SKELETONISE_SECONDS * (mods or {}).get("skeletonise_factor", 1)) + 1
    st = rules.initial_state(mods)
    for tg in (DUCT, ARTERY, PLATE):
        st = dissect(st, tg, n, mods)
    st = dissect(st, "gallbladder", config.ADHESION_WINDOW_S + 1, mods)
    return st


def test_full_cvs_reached():
    st = cvs_state()
    assert st.cvs_count() == 3
    assert st.structures[DUCT].status == "skeletonised"


def test_clip_twice_then_cut_no_violation():
    st = cvs_state()
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    assert st.structures[DUCT].clips >= 2
    out = rules.apply_action(st, "scissors,cut,cystic_duct")
    assert out.new_violations == []
    assert out.state.structures[DUCT].status == "cut"
    assert not out.state.injury


def test_cut_without_clips():
    st = cvs_state()
    out = rules.apply_action(st, "scissors,cut,cystic_artery")
    assert rules.V_CUT_WITHOUT_CLIPS in out.new_violations


def test_clip_before_cvs():
    st = dissect(rules.initial_state(), DUCT, config.SKELETONISE_SECONDS + 1)
    st = dissect(st, ARTERY, config.SKELETONISE_SECONDS + 1)  # c1 only; plate not exposed
    assert st.cvs_count() < 3
    out = rules.apply_action(st, "clipper,clip,cystic_duct")
    assert rules.V_CLIP_BEFORE_CVS in out.new_violations
    assert out.state.structures[CBD].at_risk
    assert not out.state.injury


def test_clipped_stays_clipped():
    st = cvs_state()
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    st = rules.apply_action(st, "hook,dissect,cystic_duct").state
    st = rules.apply_action(st, "grasper,retract,cystic_duct").state
    assert st.structures[DUCT].status == "clipped"


def test_p2_skeletonises_slower():
    n = config.SKELETONISE_SECONDS + 1
    assert dissect(rules.initial_state(), DUCT, n).structures[DUCT].status == "skeletonised"
    assert dissect(rules.initial_state(P2), DUCT, n, P2).structures[DUCT].status == "dissecting"


def test_p4_clip_before_cvs_is_injury():
    st = dissect(rules.initial_state(P4), DUCT, 5, P4)
    out = rules.apply_action(st, "clipper,clip,cystic_duct", P4)
    assert out.state.injury
    assert rules.V_CBD_INJURY in out.new_violations


def test_cut_unclipped_duct_before_cvs_is_injury():
    st = dissect(rules.initial_state(), DUCT, 5)
    out = rules.apply_action(st, "scissors,cut,cystic_duct")
    assert out.state.injury
    assert rules.V_CUT_WITHOUT_CLIPS in out.new_violations


def test_unsafe_clip_then_cut_is_not_injury_for_p1():
    st = dissect(rules.initial_state(), DUCT, 5)
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    out = rules.apply_action(st, "scissors,cut,cystic_duct")
    assert not out.state.injury and out.state.structures[CBD].at_risk


def test_p3_adhesions_block_c3():
    st = cvs_state(P3)
    assert st.cvs["c1_triangle_cleared"] and not st.cvs["c3_two_structures"]
    st = dissect(st, "adhesion", config.ADHESION_CLEAR_SECONDS + 1, P3)
    st = dissect(st, "gallbladder", config.ADHESION_WINDOW_S + 1, P3)
    assert st.cvs["c3_two_structures"]


def test_bleeding_sets_and_clears():
    st = rules.apply_second(rules.initial_state(), ["irrigator,aspirate,fluid"]).state
    assert st.bleeding
    st = dissect(st, "gallbladder", config.BLEED_CLEAR_S)
    assert not st.bleeding


def test_continuous_clipping_counts_multiple_clips():
    st = cvs_state()
    for _ in range(config.CLIP_SECONDS * 2):
        st = rules.apply_second(st, ["clipper,clip,cystic_duct"]).state
    assert st.structures[DUCT].clips >= 2


def test_phase_progression():
    st = cvs_state()
    assert st.phase_idx == rules.CALOT
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    assert st.phase_idx == rules.CLIPCUT
    st = rules.apply_action(st, "clipper,clip,cystic_duct").state
    st = rules.apply_action(st, "scissors,cut,cystic_duct").state
    st = rules.apply_action(st, "hook,dissect,cystic_plate").state
    assert st.phase_idx == rules.GBDISSECT
    st = rules.apply_action(st, "grasper,pack,gallbladder").state
    assert st.phase_idx == rules.PACKAGING and not st.packed  # artery not cut, not detached
    st = rules.apply_action(st, "clipper,clip,cystic_artery").state
    st = rules.apply_action(st, "clipper,clip,cystic_artery").state
    st = rules.apply_action(st, "scissors,cut,cystic_artery").state
    for _ in range(2):
        st = rules.apply_action(st, "hook,dissect,gallbladder").state
    assert st.gb_detach >= 1.0
    st = rules.apply_action(st, "grasper,pack,gallbladder").state
    assert st.packed


def test_summary_template():
    st = cvs_state()
    s = rules.summary(st, "hook,dissect,cystic_duct")
    assert "cvs=3/3" in s and "action=hook dissect cystic_duct" in s


def test_mongo_uri_credentials_are_escaped():
    from backend.db import escaped_uri

    # Built from parts with a fake ".invalid" host so secret scanners do not mistake it for a real URI.
    scheme, host = "mongodb+srv" + "://", "@db.example.invalid/?retryWrites=true"
    raw = scheme + "user" + ":" + "p@ss:w/rd%" + host
    out = escaped_uri(raw)
    assert out == scheme + "user" + ":" + "p%40ss%3Aw%2Frd%25" + host
    assert escaped_uri(out) == out  # idempotent for already-encoded credentials
