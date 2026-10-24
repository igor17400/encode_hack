"""Dream data: the patient world model writes, renders and checks training video for a robot.

imagine -> render -> verify -> store
1. A world-model step (rules -> Atlas retrieval -> Argon) says what an action does to the patient.
2. compile_prompt() turns that TransitionResult into a video prompt, deterministically: the action and the
   VISIBLE state change. Nothing is hand-written per clip.
3. render(): Gemini Omni Flash, image-to-video from a REAL anchor frame (first/last interpolation only for the
   factual control, where both anchors come from the same real shot).
4. Two gates, both recorded, never overridden:
   - fidelity: an Argon quality inspector compares the clip with the real anchor(s) (Igor's QC prompt);
   - consistency: our eyes (the Watch perception call) label the generated frames, and what they see must
     match the world model's predicted outcome, field by field.
   A clip is a training sample only if both pass. Rejected clips are kept with their reasons.

The rendering recipe (real-frame anchoring, scene grounding, QC with defect feedback, browser-friendly
re-encode) is adapted from Igor Lima's `second-look/generate.py` (igor17400/encode_hack, main).
Generated footage is synthetic: it is labelled AI-generated everywhere and never feeds the rules or the evals
as if it were real.
"""
from __future__ import annotations

import base64
import subprocess
import time
from collections import Counter
from pathlib import Path

from pydantic import BaseModel, Field

from backend import config, gemini
from backend.schema import Action

VIDEO_MODEL = "gemini-omni-1.1-flash"
CREDIT = "Rendering recipe adapted from Igor Lima's generate.py (Second Look prototype, igor17400/encode_hack)"
STRUCTS = ("gallbladder", "cystic_duct", "cystic_artery", "cystic_plate")
NICE = {"gallbladder": "gallbladder", "cystic_duct": "cystic duct", "cystic_artery": "cystic artery",
        "cystic_plate": "cystic plate", "common_bile_duct": "common bile duct"}


# --- 1. what changed (mirrors frontend AnatomyMap.diffStates) -------------------------------------------
def diff_states(prev: dict, cur: dict) -> list[str]:
    out = []
    for n in STRUCTS:
        a, b = prev["structures"][n], cur["structures"][n]
        if a["status"] != b["status"]:
            out.append(f"{NICE[n]}: {a['status']} → {b['status']}")
        if a["clips"] != b["clips"]:
            out.append(f"{NICE[n]}: {b['clips']} clip{'' if b['clips'] == 1 else 's'}")
    ca, cb = sum(map(bool, prev["cvs"].values())), sum(map(bool, cur["cvs"].values()))
    if ca != cb:
        out.append(f"critical view of safety {ca}/3 → {cb}/3")
    if not prev["structures"]["common_bile_duct"]["at_risk"] and cur["structures"]["common_bile_duct"]["at_risk"]:
        out.append("common bile duct now at risk")
    if not prev["injury"] and cur["injury"]:
        out.append("bile duct injury")
    if not prev["bleeding"] and cur["bleeding"]:
        out.append("bleeding starts")
    return out


# --- 2. prompt compiler -----------------------------------------------------------------------------------
INSTRUMENT_LOOK = {
    "grasper": "a fenestrated laparoscopic grasper on a long straight shaft",
    "hook": "a laparoscopic electrocautery hook: a slim grey insulated shaft ending in a small bent metal tip",
    "clipper": "a laparoscopic clip applier: a long shaft with two jaws holding one small metal clip",
    "scissors": "laparoscopic scissors on a long straight shaft",
    "bipolar": "bipolar forceps on a long straight shaft",
    "irrigator": "a suction-irrigation cannula on a long straight shaft",
}
VERB_TEXT = {
    "dissect": "makes short, deliberate strokes, stripping fat and connective tissue away from the {target}",
    "retract": "holds the {target} and pulls it gently to improve the view",
    "grasp": "takes hold of the {target}",
    "clip": "closes its jaws across the {target}, leaving one small metal clip on it, then opens and withdraws",
    "cut": "cuts across the {target} between the clips",
    "coagulate": "touches the {target} briefly to seal small vessels",
    "aspirate": "suctions fluid from the {target}",
    "irrigate": "rinses the {target} with saline",
    "pack": "places the gallbladder into the {target}",
}
TARGET_TEXT = {"cystic_duct": "cystic duct", "cystic_artery": "cystic artery", "cystic_plate": "cystic plate",
               "gallbladder": "gallbladder", "liver": "liver", "adhesion": "adhesions", "specimen_bag": "specimen bag",
               "abdominal_wall_cavity": "abdominal wall", "omentum": "omentum", "fluid": "pooled fluid",
               "peritoneum": "peritoneum", "gut": "bowel", "blood_vessel": "small vessel", "cystic_pedicle": "cystic pedicle"}
STATUS_LOOK = {
    "visible": "is visible",
    "dissecting": "is partly freed: some fat and connective tissue has been stripped from it",
    "skeletonised": "is stripped clean: a smooth pale tubular structure with no fat around it",
    "clipped": "has {clips} small metal clip{s} across it",
    "cut": "is divided between its clips",
}

MOTION = ("Motion: slow, small, physically plausible movements only. The camera stays at the same distance and angle "
          "with very slight handheld drift. Instruments keep their exact shape, colour, size and entry side. Tissue "
          "moves only where an instrument touches it, deforms slightly and springs back.")
KEEP = ("Keep identical to the input image for the whole clip: the colours, the lighting, the image grain and "
        "sharpness, the circular endoscope vignette, and every anatomical structure not named above.")
FORBIDDEN_BASE = ["new, extra, swapped or reshaped instruments", "a new sac or organ appearing", "smoke",
                  "zooms, camera cuts or jumps", "text or overlays", "changes of colour, exposure or image quality",
                  "human hands"]


def describe_action(a: Action) -> str:
    target = TARGET_TEXT.get(a.target, a.target.replace("_", " "))
    look = INSTRUMENT_LOOK.get(a.instrument, f"a laparoscopic {a.instrument}")
    verb = VERB_TEXT.get(a.verb, a.verb + " the {target}").format(target=target)
    return (f"{look[0].upper() + look[1:]} comes into view along its shaft (or, if it is already in view, moves to "
            f"the {target}). It {verb}.")


def visible_outcome(state_in: dict, state_out: dict) -> list[str]:
    """Only what a camera could show. Hidden facts (bile duct at risk, CVS bookkeeping) stay in the metadata."""
    out = []
    for n in STRUCTS:
        a, b = state_in["structures"][n], state_out["structures"][n]
        if a["status"] != b["status"] or a["clips"] != b["clips"] or b["exposure"] - a["exposure"] >= 0.25:
            look = STATUS_LOOK.get(b["status"], b["status"])
            line = f"the {NICE[n]} " + look.format(clips=b["clips"], s="" if b["clips"] == 1 else "s")
            if b["status"] in ("clipped", "cut") and b["exposure"] < 1.0:
                line += ", while fat and connective tissue still surround it (it was never fully cleared)"
            out.append(line)
    if state_out.get("gb_detach", 0) - state_in.get("gb_detach", 0) >= 0.1:
        out.append("the gallbladder lifts further off the liver bed, showing raw whitish-pink tissue beneath it")
    if state_out.get("bleeding") and not state_in.get("bleeding"):
        out.append("a small trickle of bright red blood appears where the instrument worked")
    return out or ["the anatomy looks as it did at the start; only the instrument has moved"]


def handover(action: Action, in_view: list[str]) -> str:
    """Instruments already in view (from the eyes on the anchor) must not morph into the new one."""
    others = [i for i in in_view if i != action.instrument]
    if not others:
        return ""
    names = " and ".join(f"the {i}" for i in others)
    return (f"Instruments already in view: {names}. An instrument never changes into another instrument. Before the "
            f"{action.instrument} arrives, any instrument in its way slides straight back out of view along its own "
            f"shaft; the others stay where they are.")


def compile_prompt(action: Action, state_in: dict, state_out: dict, scene: str, seconds: int,
                   in_view: list[str] | None = None) -> str:
    """Deterministic: the same world-model step, scene and anchor instruments always give the same prompt."""
    forbidden = list(FORBIDDEN_BASE)
    if not (state_out.get("bleeding") and not state_in.get("bleeding")):
        forbidden.append("bleeding")
    if action.verb != "clip":
        forbidden.append("clips")
    if action.verb != "cut":
        forbidden.append("cutting")
    return "\n\n".join([
        f"Continue this exact laparoscopic cholecystectomy footage for {seconds} seconds. Same camera, viewpoint, "
        "lighting, colours, image quality and anatomy as the input image.",
        f"What is in the scene (taken from the real frame):\n{scene or '(not described)'}",
        f"One surgical step happens (chosen by a patient world model): {describe_action(action)}",
        *([h] if (h := handover(action, sorted(in_view or []))) else []),
        "By the end of the clip: " + "; ".join(visible_outcome(state_in, state_out)) + ".",
        MOTION, KEEP, "Strictly forbidden: " + "; ".join(forbidden) + ".",
    ])


INTERP_PROMPT = """Real laparoscopic cholecystectomy footage. The FIRST image is the opening frame and the SECOND image is the closing frame of the same continuous shot, a few seconds apart. Generate only the motion that connects them: the clip must start exactly on the first image and end exactly on the second image.

What is in the scene (taken from the real frames):
{scene}

""" + MOTION + "\n\n" + KEEP + "\n\nStrictly forbidden: " + "; ".join(FORBIDDEN_BASE) + "."


# --- 3. grounding, QC (Argon, cached through backend.gemini) ----------------------------------------------
GROUND = """You are describing real frame(s) from one continuous laparoscopic cholecystectomy shot, so a video
model can animate them without inventing anything. Write 5-8 short factual sentences:
- each instrument: what it is, its exact look (colour, material, insulation, tip shape), the image edge it enters
  from, and what its tip touches;
- the anatomy and its colours as they actually appear (gallbladder wall, liver, fat, any dissected window);
- what is NOT visible (for example: no clips, no smoke, no bleeding) so it is not added.
Plain sentences only, no lists, no headings."""

QC = """You are a strict quality inspector for synthetic surgical video used to train robots. The first {n_real}
image(s) are REAL anchor frame(s) (the opening frame, and if two, the closing frame). The remaining images are
frames sampled in order from a GENERATED clip that is supposed to continue from the opening frame{interp}.
Flag any of: an instrument that appears from nowhere, disappears abruptly, is swapped or changes shape/colour; any
structure, sac, organ or fluid not present in the real frame(s); colour, lighting or sharpness shifts; sudden jumps
or cuts; anatomy that warps implausibly; human hands; the clip not starting near the opening frame.
Intended action (motion of a surgical instrument is allowed and expected): {intent}
Return pass, a 0-10 fidelity score and short issues with frame numbers."""


class Scene(BaseModel):
    scene: str


class QCVerdict(BaseModel):
    passed: bool = Field(alias="pass")
    score: float = Field(ge=0, le=10)
    issues: list[str]

    model_config = {"populate_by_name": True}


def ground(images: list[Path]) -> str:
    return gemini.generate_json(config.MODEL_ARGON, GROUND, Scene, images=images, thinking_level="low").scene


def qc(anchors: list[Path], frames: list[Path], intent: str) -> dict:
    prompt = QC.format(n_real=len(anchors), interp=" and end on the closing frame" if len(anchors) > 1 else "",
                       intent=intent)
    v = gemini.generate_json(config.MODEL_ARGON, prompt, QCVerdict, images=[*anchors, *frames], thinking_level="low")
    return {"pass": v.passed, "score": v.score, "issues": v.issues}


# --- 4. rendering ------------------------------------------------------------------------------------------
def frame_at(video: Path, t: float, out: Path) -> Path:
    out.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", str(video), "-frames:v", "1", str(out)],
                   check=True)
    if not out.exists():
        raise RuntimeError(f"no frame at {t}s in {video}")
    return out


def duration(video: Path) -> float:
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(video)],
                       capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def sample_frames(video: Path, out_dir: Path, every: float = 1.0) -> list[Path]:
    d = duration(video)
    ts, t = [], every / 2
    while t < d:
        ts.append(t)
        t += every
    return [frame_at(video, t, out_dir / f"{video.stem}_s{i:02d}.png") for i, t in enumerate(ts)]


def concat(videos: list[Path], out: Path) -> None:
    """One continuous video from consecutive clips (each step starts on the previous step's last frame)."""
    lst = out.with_suffix(".txt")
    lst.write_text("".join(f"file '{v.resolve()}'\n" for v in videos))
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-an", "-c:v", "libx264",
                    "-crf", "20", "-g", "24", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(out)], check=True)
    lst.unlink()


def browser_friendly(raw: bytes, out: Path) -> None:
    """No audio track, a keyframe every second: plays and scrubs reliably in the page."""
    tmp = out.with_suffix(".raw.mp4")
    tmp.write_bytes(raw)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(tmp), "-an", "-c:v", "libx264", "-crf", "20", "-g", "24",
                    "-pix_fmt", "yuv420p", "-vf", "scale=-2:480", "-movflags", "+faststart", str(out)], check=True)
    tmp.unlink()


def render(images: list[Path], prompt: str, seconds: int, resolution: str = "720p") -> bytes:
    """Gemini Omni Flash through the Interactions API: 1 image = image-to-video, 2 = first/last interpolation.
    Counts against GEMINI_MAX_CALLS. Errors propagate: a failed render is never replaced."""
    gemini._count_call()
    c = gemini.client()
    it = gemini._with_retries(lambda: c.interactions.create(
        model=VIDEO_MODEL,
        input=[{"type": "image", "data": base64.b64encode(p.read_bytes()).decode(), "mime_type": "image/png"}
               for p in images] + [{"type": "text", "text": prompt}],
        response_format={"type": "video", "aspect_ratio": "16:9", "resolution": resolution, "duration": f"{seconds}s"},
        background=True,
    ))
    t0 = time.time()
    while it.status not in ("completed", "failed", "cancelled"):
        if time.time() - t0 > 900:
            raise TimeoutError("video generation took more than 15 minutes")
        time.sleep(10)
        it = gemini._with_retries(lambda: c.interactions.get(it.id))
    if it.status != "completed" or it.output_video is None:
        raise RuntimeError(f"generation {it.status}: {str(it)[:300]}")
    gemini._log_usage(VIDEO_MODEL, "video", 0, 0, cached=False)
    v = it.output_video
    if getattr(v, "data", None):
        return base64.b64decode(v.data)
    import urllib.request

    req = urllib.request.Request(v.uri, headers={"x-goog-api-key": config.GEMINI_API_KEY})
    return urllib.request.urlopen(req, timeout=120).read()


# --- 5. consistency: do our eyes see what the world model predicted? -------------------------------------
def _instruments(obs: dict) -> set[str]:
    inst = {x["instrument"] for x in obs.get("triplets", []) if x["confidence"] >= config.PERCEPTION_MIN_CONF}
    inst |= {b["label"] for b in obs.get("boxes", []) if b["label"] in INSTRUMENT_LOOK
             and b.get("confidence", 0) >= config.PERCEPTION_MIN_CONF}
    return inst


def _triplets(obs: dict) -> set[str]:
    return {f"{x['instrument']},{x['verb']},{x['target']}" for x in obs.get("triplets", [])
            if x["confidence"] >= config.PERCEPTION_MIN_CONF}


def consistency(action: Action, state_in: dict, state_out: dict, anchor_obs: dict, gen_obs: list[dict]) -> dict:
    """Field-by-field agreement between the eyes on the generated frames and the world model's prediction.
    A frame whose perception call failed makes the whole check fail (no partial credit from missing data)."""
    errors = [o["error"] for o in gen_obs if o.get("error")] + ([anchor_obs["error"]] if anchor_obs.get("error") else [])
    if errors or not gen_obs:
        return {"agreement": {}, "errors": errors or ["no generated frames"], "passed": False, "observed": {}}
    seen_inst = set().union(*(_instruments(o) for o in gen_obs))
    seen_trip = set().union(*(_triplets(o) for o in gen_obs))
    late = gen_obs[len(gen_obs) // 2:]  # the outcome is at the end of the clip
    phase = Counter(o.get("phase") for o in late).most_common(1)[0][0]
    views = Counter(o.get("view_quality") for o in gen_obs)
    allowed_inst = _instruments(anchor_obs) | {action.instrument}
    agreement = {
        "instrument_seen": action.instrument in seen_inst,
        "action_seen": action.key() in seen_trip,
        "no_new_instruments": seen_inst <= allowed_inst,
        "phase_matches": phase == state_out["phase"],
        "view_clear": views.get("clear", 0) * 2 >= len(gen_obs) or (state_out.get("bleeding") and not state_in.get("bleeding")),
    }
    agreement = {k: bool(v) for k, v in agreement.items()}
    return {"agreement": agreement, "errors": [], "passed": all(agreement.values()),
            "observed": {"instruments": sorted(seen_inst), "triplets": sorted(seen_trip), "phase_late": phase,
                         "view_quality": dict(views), "anchor_instruments": sorted(_instruments(anchor_obs)),
                         "expected_phase": state_out["phase"], "expected_action": action.key()}}


def factual_agreement(gen_obs: list[dict], real_obs: list[dict]) -> dict:
    """Factual control: eyes on the generated interpolation vs eyes on the real footage at the same seconds."""
    pairs = [(g, r) for g, r in zip(gen_obs, real_obs) if not g.get("error") and not r.get("error")]
    if not pairs:
        return {"n": 0, "phase_match_rate": None, "instrument_match_rate": None, "errors": True}
    return {"n": len(pairs),
            "phase_match_rate": round(sum(g.get("phase") == r.get("phase") for g, r in pairs) / len(pairs), 3),
            "instrument_match_rate": round(sum(_instruments(g) == _instruments(r) for g, r in pairs) / len(pairs), 3),
            "errors": len(pairs) < min(len(gen_obs), len(real_obs))}


def summary_text(doc: dict) -> str:
    """Searchable description of a dream clip (embedded for vector search, indexed for full-text)."""
    v = ", ".join(doc.get("violations") or []) or "no rule violations"
    return (f"{doc['kind']} dream clip; patient {doc.get('patient_id')}; action {doc.get('action')}; "
            f"risk {doc.get('risk_level')}; {v}; changes: {'; '.join(doc.get('changes') or []) or 'none'}; "
            f"{'accepted training sample' if doc.get('accepted') else 'rejected'}; anchor {doc.get('anchor', {}).get('source')}")
