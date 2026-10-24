"""Dream data: prompt compiler, state diff, consistency gate. No credentials needed."""
import json

from backend import config, rules, videogen
from backend.schema import Action

REC = config.PRECOMPUTED / "imagine_P2_clipper_clip_cystic_duct_endo166_60.json"


def _rec():
    return json.loads(REC.read_text())


def _obs(trips=(), phase="clipping-and-cutting", view="clear", boxes=()):
    return {"triplets": [dict(zip(("instrument", "verb", "target"), t.split(",")), confidence=0.9) for t in trips],
            "phase": phase, "view_quality": view, "boxes": list(boxes)}


def test_prompt_is_deterministic_and_names_action_and_changes():
    r = _rec()
    a = Action(**r["action"])
    p1 = videogen.compile_prompt(a, r["state_in"], r["state_out"], "scene text", 6, ["hook", "grasper"])
    p2 = videogen.compile_prompt(a, r["state_in"], r["state_out"], "scene text", 6, ["grasper", "hook"])
    assert p1 == p2
    assert "clip applier" in p1 and "cystic duct" in p1 and "1 small metal clip" in p1
    assert "never fully cleared" in p1  # clipped while exposure < 1: the unsafe look is rendered
    assert "the hook" in p1 and "never changes into another instrument" in p1
    forbidden = p1.split("Strictly forbidden:")[1]
    assert "clips" not in forbidden and "cutting" in forbidden  # a clip action may show a clip, not a cut


def test_hidden_facts_stay_out_of_the_prompt():
    r = _rec()
    p = videogen.compile_prompt(Action(**r["action"]), r["state_in"], r["state_out"], "", 6)
    assert "common bile duct" not in p  # at risk, but hidden from the camera
    assert "common bile duct now at risk" in videogen.diff_states(r["state_in"], r["state_out"])


def test_diff_states_matches_frontend_wording():
    a = rules.initial_state().model_dump()
    b = json.loads(json.dumps(a))
    b["structures"]["cystic_duct"].update(status="clipped", clips=2)
    b["cvs"]["c1_triangle_cleared"] = True
    b["bleeding"] = True
    assert videogen.diff_states(a, b) == ["cystic duct: unseen → clipped", "cystic duct: 2 clips",
                                         "critical view of safety 0/3 → 1/3", "bleeding starts"]


def test_consistency_passes_only_when_eyes_see_the_prediction():
    r = _rec()
    a = Action(**r["action"])
    anchor = _obs(["hook,dissect,cystic_duct", "grasper,retract,gallbladder"], phase="carlot-triangle-dissection")
    good = [_obs(["grasper,retract,gallbladder"]), _obs(["clipper,clip,cystic_duct"]), _obs(["clipper,clip,cystic_duct"])]
    c = videogen.consistency(a, r["state_in"], r["state_out"], anchor, good)
    assert c["passed"] and all(c["agreement"].values())
    # an invented instrument fails one field, and the overall check
    bad = good + [_obs(["scissors,cut,cystic_duct"])]
    c = videogen.consistency(a, r["state_in"], r["state_out"], anchor, bad)
    assert not c["passed"] and c["agreement"]["no_new_instruments"] is False
    # the action never seen
    c = videogen.consistency(a, r["state_in"], r["state_out"], anchor, [_obs(["grasper,retract,gallbladder"])] * 3)
    assert not c["passed"] and not c["agreement"]["action_seen"]


def test_failed_perception_is_never_a_pass():
    r = _rec()
    a = Action(**r["action"])
    frames = [_obs(["clipper,clip,cystic_duct"]), {"triplets": [], "error": "perception failed: 503"}]
    c = videogen.consistency(a, r["state_in"], r["state_out"], _obs(), frames)
    assert c["passed"] is False and c["errors"]
    assert videogen.consistency(a, r["state_in"], r["state_out"], _obs(), [])["passed"] is False


def test_low_confidence_sightings_do_not_count():
    r = _rec()
    a = Action(**r["action"])
    weak = _obs(["clipper,clip,cystic_duct"])
    weak["triplets"][0]["confidence"] = config.PERCEPTION_MIN_CONF - 0.1
    c = videogen.consistency(a, r["state_in"], r["state_out"], _obs(), [weak] * 3)
    assert not c["agreement"]["action_seen"]


def test_factual_agreement_ignores_failed_frames():
    g = [_obs(["hook,dissect,cystic_duct"]), {"error": "x"}]
    real = [_obs(["hook,dissect,cystic_duct"]), _obs()]
    fa = videogen.factual_agreement(g, real)
    assert fa["n"] == 1 and fa["phase_match_rate"] == 1.0 and fa["errors"]
