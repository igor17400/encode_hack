"""Pydantic models shared by the pipeline, world model and API."""
from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field

STRUCTURES = ["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate", "common_bile_duct"]
STATUS_ORDER = ["unseen", "visible", "dissecting", "skeletonised", "clipped", "cut"]


class StructureState(BaseModel):
    name: str
    status: str = "unseen"   # unseen | visible | dissecting | skeletonised | clipped | cut
    exposure: float = 0.0    # 0..1, grows with dissection seconds on this target
    clips: int = 0
    at_risk: bool = False    # only used for the hidden common_bile_duct


class State(BaseModel):
    t: int = 0
    phase: str = ""
    phase_idx: int = 0                   # index into the CholecT50 phase list (official order)
    phase_inferred: bool = True
    structures: dict[str, StructureState]
    cvs: dict[str, bool] = Field(
        default_factory=lambda: {"c1_triangle_cleared": False, "c2_plate_exposed": False, "c3_two_structures": False}
    )
    bleeding: bool = False
    view_quality: str = "clear"
    violations: list[str] = []
    injury: bool = False
    packed: bool = False
    gb_detach: float = 0.0               # 0..1, gallbladder dissected off the liver bed (after both cuts)
    # Bookkeeping used by the rules, not shown in the UI.
    active: dict[str, int] = {}          # triplet -> consecutive seconds it has been on screen
    last_bleed_t: int | None = None
    adhesion_last_seen: int | None = None
    adhesion_load: float = 0.0           # P3 starts at 1.0; dissecting adhesions clears it
    # CVS perceived directly from pixels (e.g. the Endoscapes CVS judge). When set, it is the state's CVS;
    # a simulated action clears it and the rules continue from the anatomy.
    cvs_sensor: dict[str, bool] | None = None
    cvs_source: str = "proxy"            # proxy (from actions) | sensor (perceived)

    def cvs_count(self) -> int:
        return sum(self.cvs.values())


class Action(BaseModel):
    instrument: str
    verb: str
    target: str

    @classmethod
    def parse(cls, s: str) -> "Action":
        i, v, t = s.split(",")
        return cls(instrument=i, verb=v, target=t)

    def key(self) -> str:
        return f"{self.instrument},{self.verb},{self.target}"

    def label(self) -> str:
        return f"{self.instrument} {self.verb} {self.target}"


class Patient(BaseModel):
    patient_id: str
    name: str
    story: str
    modifiers: dict = {}
    risk_factors: list[str] = []


class RulesOut(BaseModel):
    state: State
    new_violations: list[str] = []
    events: list[str] = []


class NextAction(BaseModel):
    action: str = Field(description="Triplet 'instrument,verb,target' from the vocabulary")
    probability: float


class StepSchema(BaseModel):
    """What Argon returns for one world-model step."""
    risk_level: Literal["low", "moderate", "high", "injury"]
    bleeding_risk: float = Field(ge=0, le=1)
    explanation: str
    cited_transition_ids: list[str]
    likely_next_actions: list[NextAction]
    confidence: float = Field(ge=0, le=1)
    cannot_tell: list[str]


class Neighbour(BaseModel):
    id: str
    video_id: str
    phase: str
    summary: str
    action: str
    state_after_summary: str
    next_action: str | None
    score: float = 0.0


class TransitionResult(BaseModel):
    prediction_id: str | None = None
    state_in: State
    action: Action
    state_out: State
    rules_violations: list[str]
    risk_level: str
    bleeding_risk: float
    bled: bool
    explanation: str
    cited_transition_ids: list[str]
    neighbours: list[Neighbour]
    likely_next_actions: list[NextAction]
    confidence: float
    cannot_tell: list[str]
    frame: dict | None = None
    source: Literal["argon", "rules_only"] = "argon"
    note: str = "Research simulation, not clinical advice."
