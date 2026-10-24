"""Deterministic rule engine: triplets -> anatomy state, CVS proxy, safety violations.

The rules hold surgical facts that must always be true (a clipped duct stays clipped, cutting needs
two clips, clipping needs the critical view of safety). The world model can never override them.
"""
from __future__ import annotations

import json
from functools import lru_cache

from backend import config
from backend.schema import STATUS_ORDER, STRUCTURES, Action, RulesOut, State, StructureState

DUCT, ARTERY, PLATE, GB, CBD = "cystic_duct", "cystic_artery", "cystic_plate", "gallbladder", "common_bile_duct"
CLIPPABLE = (DUCT, ARTERY)
BLEED_VERBS = ("coagulate", "aspirate", "irrigate")
BLEED_TARGETS = ("blood_vessel", "fluid")

# CholecT50 phase indices (official order, names come from data/vocab.json).
PREP, CALOT, CLIPCUT, GBDISSECT, PACKAGING, CLEANING, EXTRACTION = range(7)

V_CLIP_BEFORE_CVS = "clip_before_cvs"
V_CUT_WITHOUT_CLIPS = "cut_without_two_clips"
V_CBD_INJURY = "cbd_injury"


@lru_cache(maxsize=1)
def phase_names() -> list[str]:
    for path in (config.VOCAB, config.PRECOMPUTED / "vocab.json"):
        if path.exists():
            phases = json.loads(path.read_text()).get("phases")
            if phases:
                return phases
    return [f"phase_{i}" for i in range(7)]


def phase_name(idx: int) -> str:
    names = phase_names()
    return names[idx] if idx < len(names) else f"phase_{idx}"


def phase_index(name: str) -> int:
    names = phase_names()
    return names.index(name) if name in names else 0


EPS = 1e-6  # float accumulation: ten steps of 0.1 must reach 1.0


def _full(x: float) -> bool:
    return x >= 1.0 - EPS


def _add(x: float, d: float) -> float:
    y = x + d
    return 1.0 if _full(y) else min(1.0, y)


def _rank(status: str) -> int:
    return STATUS_ORDER.index(status)


def _upgrade(s: StructureState, status: str) -> None:
    """Statuses only move forward: a clipped duct never becomes 'dissecting' again."""
    if _rank(status) > _rank(s.status):
        s.status = status


def initial_state(modifiers: dict | None = None) -> State:
    modifiers = modifiers or {}
    st = State(
        structures={n: StructureState(name=n) for n in STRUCTURES},
        phase=phase_name(PREP),
        phase_idx=PREP,
    )
    if modifiers.get("adhesions_at_start"):
        st.adhesion_load = 1.0
        st.adhesion_last_seen = 0
    return st


def compute_cvs(st: State) -> dict[str, bool]:
    s = st.structures
    c1 = _full(s[DUCT].exposure) and _full(s[ARTERY].exposure)
    c2 = _full(s[PLATE].exposure)
    recent_adhesion = st.adhesion_last_seen is not None and st.t - st.adhesion_last_seen <= config.ADHESION_WINDOW_S
    c3 = c1 and st.adhesion_load <= 0 and not recent_adhesion
    return {"c1_triangle_cleared": c1, "c2_plate_exposed": c2, "c3_two_structures": c3}


def _infer_phase(st: State, verb: str, target: str) -> int:
    s = st.structures
    cand = st.phase_idx
    if verb == "dissect" and target in (DUCT, ARTERY, PLATE, GB, "cystic_pedicle"):
        cand = max(cand, CALOT)
    if verb in ("clip", "cut") and target in CLIPPABLE:
        cand = max(cand, CLIPCUT)
    if verb == "dissect" and target in (PLATE, GB) and any(s[n].status == "cut" for n in CLIPPABLE):
        cand = max(cand, GBDISSECT)
    if all(s[n].status == "cut" for n in CLIPPABLE):
        cand = max(cand, GBDISSECT)
    if verb == "pack" or target == "specimen_bag":
        cand = max(cand, PACKAGING)
    if st.phase_idx >= PACKAGING and verb in BLEED_VERBS:
        cand = max(cand, CLEANING)
    return cand


def apply_second(
    state: State,
    triplets: list[str],
    modifiers: dict | None = None,
    t: int | None = None,
    phase_label: str | None = None,
    multi_clip: bool = True,
) -> RulesOut:
    """Apply one second of on-screen triplets ('instrument,verb,target') to the previous state."""
    modifiers = modifiers or {}
    st = state.model_copy(deep=True)
    st.t = state.t + 1 if t is None else t
    s = st.structures
    skel = config.SKELETONISE_SECONDS * modifiers.get("skeletonise_factor", 1.0)
    cvs_before = state.cvs_count()
    new_v: list[str] = []
    events: list[str] = []

    active = {trip: state.active.get(trip, 0) + 1 for trip in triplets}
    st.active = active

    for trip in triplets:
        _, verb, target = trip.split(",")
        run = active[trip]
        onset = run == 1
        targets = [DUCT, ARTERY] if target == "cystic_pedicle" else [target]

        for tg in targets:
            if tg not in s or tg == CBD:
                continue
            x = s[tg]
            if verb in ("grasp", "retract"):
                _upgrade(x, "visible")
            elif verb == "dissect":
                _upgrade(x, "dissecting")
                x.exposure = _add(x.exposure, 1.0 / skel)
                if _full(x.exposure):
                    _upgrade(x, "skeletonised")

        if verb == "dissect" and target == GB and config.PLATE_FROM_GB_DISSECT > 0:
            p = s[PLATE]
            p.exposure = _add(p.exposure, config.PLATE_FROM_GB_DISSECT / skel)
            _upgrade(p, "visible")

        if verb == "clip" and target in CLIPPABLE:
            x = s[target]
            if onset and x.clips == 0 and cvs_before < 3:
                new_v.append(V_CLIP_BEFORE_CVS)
                s[CBD].at_risk = True
                if modifiers.get("cvs_violation_is_injury"):
                    st.injury = True
                    new_v.append(V_CBD_INJURY)
            if onset or (multi_clip and run % config.CLIP_SECONDS == 0):
                x.clips += 1
                _upgrade(x, "clipped")
                events.append(f"clip {target} ({x.clips})")

        if verb == "cut" and target in CLIPPABLE and onset:
            x = s[target]
            if x.clips < 2:
                new_v.append(V_CUT_WITHOUT_CLIPS)
            if x.clips == 0 and cvs_before < 3:
                new_v.append(V_CLIP_BEFORE_CVS)
                s[CBD].at_risk = True
            # Cutting a duct that was never clipped, before the structures were identified.
            if target == DUCT and x.clips == 0 and cvs_before < 3:
                st.injury = True
                new_v.append(V_CBD_INJURY)
            _upgrade(x, "cut")
            events.append(f"cut {target}")

        if verb in BLEED_VERBS and target in BLEED_TARGETS:
            if not st.bleeding:
                events.append("bleeding")
            st.bleeding = True
            st.last_bleed_t = st.t

        if target == "adhesion":
            st.adhesion_last_seen = st.t
            if verb == "dissect":
                st.adhesion_load = max(0.0, st.adhesion_load - 1.0 / config.ADHESION_CLEAR_SECONDS)
                if st.adhesion_load < EPS:
                    st.adhesion_load = 0.0

        if verb == "dissect" and target in (GB, PLATE) and all(s[n].status == "cut" for n in CLIPPABLE):
            st.gb_detach = _add(st.gb_detach, 1.0 / config.GB_DETACH_SECONDS)

        # Packing: the "pack" verb, or handling the specimen bag (how most real videos label it).
        if (verb == "pack" and target == GB) or (target == "specimen_bag" and verb in ("grasp", "retract", "pack")):
            if _full(st.gb_detach):
                if not st.packed:
                    events.append("gallbladder packed")
                st.packed = True
            elif onset:
                events.append("pack attempted before gallbladder detached")

        st.phase_idx = _infer_phase(st, verb, target)

    if st.bleeding and st.last_bleed_t is not None and st.t - st.last_bleed_t >= config.BLEED_CLEAR_S:
        st.bleeding = False

    # Dedupe: one CBD injury per state.
    if V_CBD_INJURY in new_v and V_CBD_INJURY in state.violations:
        new_v = [v for v in new_v if v != V_CBD_INJURY]
    new_v = list(dict.fromkeys(new_v))
    st.violations = state.violations + new_v
    st.cvs = compute_cvs(st)

    if phase_label is not None:
        st.phase = phase_label
        st.phase_idx = phase_index(phase_label)
        st.phase_inferred = False
    else:
        st.phase = phase_name(st.phase_idx)
    return RulesOut(state=st, new_violations=new_v, events=events)


def apply_action(
    state: State, action: Action | str, modifiers: dict | None = None, seconds: int | None = None
) -> RulesOut:
    """One discrete simulator action = `seconds` of the same triplet, starting fresh (counts as one onset)."""
    if isinstance(action, str):
        action = Action.parse(action)
    # A real recorded segment (explicit seconds) may hold several clips; a discrete simulator action is one.
    multi_clip = seconds is not None
    seconds = seconds or config.ACTION_SECONDS
    cur = state.model_copy(deep=True)
    cur.active = {}
    new_v: list[str] = []
    events: list[str] = []
    for _ in range(seconds):
        out = apply_second(cur, [action.key()], modifiers, multi_clip=multi_clip)
        cur = out.state
        new_v += out.new_violations
        events += out.events
        if cur.injury:
            break
    return RulesOut(state=cur, new_violations=new_v, events=list(dict.fromkeys(events)))


_SHORT = {GB: "gb", DUCT: "duct", ARTERY: "artery", PLATE: "plate"}


def summary(state: State, action: Action | str | None = None) -> str:
    """Templated text that gets embedded. No LLM."""
    s = state.structures
    parts = [f"phase={state.phase}"]
    for name, short in _SHORT.items():
        x = s[name]
        clips = f" clips={x.clips}" if x.clips else ""
        parts.append(f"{short}={x.status} {x.exposure:.1f}{clips}")
    parts.append(f"cvs={state.cvs_count()}/3")
    parts.append(f"bleeding={'yes' if state.bleeding else 'no'}")
    if s[CBD].at_risk:
        parts.append("cbd=at_risk")
    if action is not None:
        a = Action.parse(action) if isinstance(action, str) else action
        parts.append(f"action={a.label()}")
    return "; ".join(parts)
