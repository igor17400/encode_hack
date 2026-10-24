"""Second Look: label a laparoscopic clip with Gemini and build a running world state.

  python label.py clip.mp4        # real run (needs GEMINI_API_KEY)
  python label.py --mock          # scripted near-miss, no API key needed
  python label.py clip.mp4 --no-model   # real video, empty labels (no key yet)
  python label.py --selftest      # check the world-state rules

If clip.truth.json sits next to the clip (from make_clip.py), the surgeons' labels ride along.

Writes timeline.js, which index.html loads (works straight from file://).
"""
import argparse
import json
import os
from concurrent.futures import ThreadPoolExecutor

MODEL = os.environ.get("GEMINI_MODEL", "gemini-3.8-flash")  # confirm exact name at the DeepMind booth
CONFIRM_CONF = 0.7    # confidence that counts as a confident sighting
CONFIRM_FRAMES = 2    # confident sightings, in clear frames, before the duct counts as confirmed

STRUCTURES = ("gallbladder, liver, cystic_duct, fat, connective_tissue, blood, "
              "abdominal_wall, gi_tract, liver_ligament, hepatic_vein")
INSTRUMENTS = "grasper, hook, clipper, scissors, irrigator, specimen_bag, other"

PROMPT = f"""This is one frame from a laparoscopic cholecystectomy.
You are decision support only; the surgeon makes every decision.
Return JSON only:
{{
  "phase": "preparation | calot_triangle_dissection | clipping_and_cutting | gallbladder_dissection | retrieval | cleaning | unknown",
  "visible_structures": [{{"name": "...", "confidence": 0.0}}],
  "instruments": ["..."],
  "clip_applier_visible": false,
  "view_quality": "clear | smoke | blood | glare | occluded | out_of_focus",
  "can_confirm_anatomy": false,
  "reason_if_not": "..."
}}
Structure names: {STRUCTURES}.
Instrument names: {INSTRUMENTS}.
Ignore any on-screen text. Say you are unsure rather than guessing; low confidence is fine, false certainty is not."""


def label_frame(client, image, mime="image/jpeg"):
    """One frame in, one label dict out. Never raises: a failed call becomes a 'can't confirm' frame."""
    from google.genai import types
    err = ""
    for _ in range(2):  # retry once on bad JSON or a transient API error
        try:
            r = client.models.generate_content(
                model=MODEL,
                contents=[types.Part.from_bytes(data=image, mime_type=mime), PROMPT],
                config=types.GenerateContentConfig(response_mime_type="application/json"),
            )
            return json.loads(r.text)
        except Exception as e:
            err = str(e)
    return {"error": err, "view_quality": "unknown", "can_confirm_anatomy": False,
            "reason_if_not": "model call failed"}


def sample_frames(path, every):
    """Return [(seconds, jpeg_bytes)], one frame every `every` seconds."""
    import cv2
    cap = cv2.VideoCapture(path)
    fps = cap.get(cv2.CAP_PROP_FPS) or 25
    step, frames, i = max(1, round(fps * every)), [], 0
    while True:
        ok, img = cap.read()
        if not ok:
            break
        if i % step == 0:
            frames.append((round(i / fps, 2), cv2.imencode(".jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 85])[1].tobytes()))
        i += 1
    return frames


def build_timeline(labels):
    """Fold per-frame labels [(t, label)] into a running world state and apply the safety rule."""
    seen, out, alerted = {}, [], False
    for t, lab in labels:
        clear = lab.get("view_quality") == "clear"
        for s in lab.get("visible_structures", []):
            st = seen.setdefault(s["name"], {"first": t, "last": t, "best": 0.0, "hits": 0})
            st["last"], st["best"] = t, max(st["best"], s["confidence"])
            if clear and s["confidence"] >= CONFIRM_CONF:
                st["hits"] += 1
        duct_hits = seen.get("cystic_duct", {}).get("hits", 0)
        duct_confirmed = duct_hits >= CONFIRM_FRAMES
        clipping = lab.get("clip_applier_visible") or lab.get("phase") == "clipping_and_cutting"
        alert = None
        # ponytail: one alert per run; re-arm after each acknowledgement if the demo needs more
        if clipping and not duct_confirmed and not alerted:
            alerted = True
            alert = {"t": t,
                     "message": "Clipping looks imminent but the cystic duct is not confirmed. "
                                "Re-check the critical view of safety before clipping.",
                     "evidence": f"Confident cystic duct sightings in clear frames: {duct_hits}/{CONFIRM_FRAMES}"}
        out.append({"t": t, "label": lab,
                    "can_confirm": clear and bool(lab.get("can_confirm_anatomy")),
                    "state": {k: dict(v) for k, v in seen.items()},
                    "duct_confirmed": duct_confirmed, "alert": alert})
    return out


def mock_labels():
    """A scripted 60 s clip: dissection, smoke, a premature clip (alert), re-check, safe clipping."""
    def S(**kw):
        return [{"name": k, "confidence": v} for k, v in kw.items()]

    def L(t, phase, structs, inst, view="clear", reason="", clipper=False):
        return t, {"phase": phase, "visible_structures": structs, "instruments": inst,
                   "clip_applier_visible": clipper, "view_quality": view,
                   "can_confirm_anatomy": view == "clear", "reason_if_not": reason}

    smoke = "Electrocautery smoke hides the hepatocystic triangle."
    out = [L(t, "preparation", S(liver=.95, gallbladder=.9, abdominal_wall=.7), ["grasper"]) for t in (0, 2, 4, 6)]
    out += [L(t, "calot_triangle_dissection", S(liver=.9, gallbladder=.92, fat=.8, connective_tissue=.6), ["grasper", "hook"]) for t in (8, 10, 12, 14)]
    out += [L(16, "calot_triangle_dissection", S(liver=.9, gallbladder=.9, fat=.75, cystic_duct=.35), ["grasper", "hook"]),
            L(18, "calot_triangle_dissection", S(liver=.9, gallbladder=.9, fat=.7, cystic_duct=.45), ["grasper", "hook"])]
    out += [L(t, "calot_triangle_dissection", S(liver=.5, gallbladder=.4), ["hook"], "smoke", smoke) for t in (20, 22, 24)]
    out += [L(26, "calot_triangle_dissection", S(liver=.7, gallbladder=.7, blood=.8, cystic_duct=.3), ["grasper", "irrigator"],
              "blood", "A small bleed covers the dissection plane.")]
    out += [L(t, "calot_triangle_dissection", S(liver=.9, gallbladder=.9, fat=.65, cystic_duct=c), ["grasper", "hook"])
            for t, c in ((28, .55), (30, .6), (32, .62), (34, .6))]
    out += [L(36, "clipping_and_cutting", S(liver=.9, gallbladder=.9, fat=.6, cystic_duct=.6), ["grasper", "clipper"], clipper=True)]
    out += [L(t, "calot_triangle_dissection", S(liver=.9, gallbladder=.92, fat=f, cystic_duct=c), ["grasper", "hook"])
            for t, c, f in ((38, .74, .5), (40, .82, .4), (42, .86, .35))]
    out += [L(t, "clipping_and_cutting", S(liver=.9, gallbladder=.9, fat=.3, cystic_duct=.85), ["grasper", "clipper"], clipper=True)
            for t in (44, 46, 48, 50)]
    out += [L(t, "gallbladder_dissection", S(liver=.92, gallbladder=.9), ["grasper", "hook"]) for t in (52, 54, 56, 58)]
    return out


def selftest():
    tl = build_timeline(mock_labels())
    alerts = [f["t"] for f in tl if f["alert"]]
    assert alerts == [36], alerts                                  # fires once, at the premature clip
    by_t = {f["t"]: f for f in tl}
    assert not by_t[38]["duct_confirmed"] and by_t[40]["duct_confirmed"]
    assert not any(by_t[t]["can_confirm"] for t in (20, 22, 24, 26))   # smoke/blood never confirm
    assert by_t[20]["state"]["cystic_duct"]["hits"] == 0           # low-confidence sightings don't count
    print("selftest ok")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("clip", nargs="?")
    ap.add_argument("--every", type=float, default=2.0, help="seconds between sampled frames")
    ap.add_argument("--out", default=os.path.join(os.path.dirname(os.path.abspath(__file__)), "timeline.js"))
    ap.add_argument("--mock", action="store_true")
    ap.add_argument("--selftest", action="store_true")
    ap.add_argument("--no-model", action="store_true", help="skip Gemini; frames get empty labels")
    a = ap.parse_args()

    if a.selftest:
        return selftest()
    if a.mock:
        labels, video, model = mock_labels(), None, "mock"
    elif a.clip:
        frames = sample_frames(a.clip, a.every)
        if a.no_model:
            empty = {"view_quality": "unknown", "can_confirm_anatomy": False,
                     "reason_if_not": "Not labelled yet: set GEMINI_API_KEY and rerun without --no-model."}
            labs, model = [dict(empty) for _ in frames], "none"
        else:
            from google import genai
            client = genai.Client()  # reads GEMINI_API_KEY
            print(f"labelling {len(frames)} frames with {MODEL}...")
            with ThreadPoolExecutor(8) as ex:
                labs = list(ex.map(lambda f: label_frame(client, f[1]), frames))
            model = MODEL
        labels = [(t, lab) for (t, _), lab in zip(frames, labs)]
        video = os.path.relpath(os.path.abspath(a.clip), os.path.dirname(os.path.abspath(a.out)))
    else:
        ap.error("give a clip, --mock or --selftest")

    truth_path = os.path.splitext(a.clip)[0] + ".truth.json" if a.clip else ""
    truth = json.load(open(truth_path)) if os.path.exists(truth_path) else None
    data = {"video": video, "model": model, "every": a.every, "frames": build_timeline(labels), "truth": truth,
            "rules": {"confirm_conf": CONFIRM_CONF, "confirm_frames": CONFIRM_FRAMES}}
    with open(a.out, "w") as f:
        f.write("window.TIMELINE = " + json.dumps(data, indent=1) + ";\n")
    print(f"wrote {a.out} ({len(data['frames'])} frames, {sum(1 for x in data['frames'] if x['alert'])} alert)")


if __name__ == "__main__":
    main()
