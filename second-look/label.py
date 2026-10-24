"""Second Look: label a laparoscopic clip with Gemini and build a running world state.

  python label.py clip.mp4        # real run (needs GEMINI_API_KEY)
  python label.py --mock          # scripted near-miss, no API key needed
  python label.py clip.mp4 --no-model   # real video, empty labels (no key yet)
  python label.py clip.mp4 --every 1 --keyframes   # only the surgeons' keyframes (free tier friendly)
  python label.py --selftest      # check the world-state rules

If clip.truth.json sits next to the clip (from make_clip.py), the surgeons' labels ride along.

Writes outputs/<name>.js; index.html loads outputs/timeline.js, or index.html?run=<name> (works straight from file://).
"""

import argparse
import json
import os
import re
import time
from concurrent.futures import ThreadPoolExecutor

# ponytail: minimal .env loader (KEY=value lines), python-dotenv if it ever needs quoting rules
_env = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
if os.path.exists(_env):
    for _line in open(_env):
        if "=" in _line and not _line.lstrip().startswith("#"):
            _k, _v = _line.strip().split("=", 1)
            os.environ.setdefault(_k.strip(), _v.strip().strip('"').strip("'"))

MODEL = os.environ.get(
    "GEMINI_MODEL", "gemini-3.8-flash"
)  # confirm exact name at the DeepMind booth
CONFIRM_CONF = 0.7  # confidence that counts as a confident sighting
CVS_HOLD = 3  # a criterion counts as achieved (or lost) only after this many labelled frames in a row agree
CONFIRM_FRAMES = (
    2  # confident sightings, in clear frames, before the duct counts as confirmed
)

OPENAI_MODEL = os.environ.get("OPENAI_MODEL", "gpt-6.1-sol")

HERE = os.path.dirname(os.path.abspath(__file__))
# prompts live in prompts/ so they can be read and edited without touching code; --prompt picks one
PROMPT_PATH = os.path.join(HERE, "prompts", "v2.txt")
PROMPT = open(PROMPT_PATH).read()


def is_yes(v):
    """CVS answers may be booleans (prompt v1) or probabilities (v2): yes means >= 0.5."""
    try:
        return float(v or 0) >= 0.5
    except (TypeError, ValueError):
        return False


def _ask(client, image, mime, prompt=None, model=None):
    """Send one frame + prompt to Gemini or OpenAI, return the reply text."""
    prompt, model = prompt or PROMPT, model or MODEL
    if hasattr(client, "responses"):  # openai.OpenAI
        import base64
        r = client.responses.create(
            model=model,
            input=[{"role": "user", "content": [
                {"type": "input_image", "image_url": f"data:{mime};base64,{base64.b64encode(image).decode()}", "detail": "high"},
                {"type": "input_text", "text": prompt}]}],
            text={"format": {"type": "json_object"}},
        )
        return r.output_text
    from google.genai import types
    r = client.models.generate_content(
        model=model,
        contents=[types.Part.from_bytes(data=image, mime_type=mime), prompt],
        config=types.GenerateContentConfig(response_mime_type="application/json"),
    )
    return r.text


def label_frame(client, image, mime="image/jpeg", prompt=None, model=None):
    """One frame in, one label dict out. Never raises: a failed call becomes a 'can't confirm' frame."""
    err, fails, waits = "", 0, 0
    while (
        fails < 2 and waits < 20
    ):  # retry once on bad JSON or an API error; rate limits wait instead
        try:
            return json.loads(_ask(client, image, mime, prompt, model))
        except Exception as e:
            err = str(e)
            if (
                "429" in err
            ):  # free tier is 5 requests/min: wait as long as the API asks
                waits += 1
                m = re.search(r"retryDelay': '(\d+)", err)
                time.sleep(int(m.group(1)) + 1 if m else 15)
            else:
                fails += 1
    return {
        "error": err,
        "view_quality": "unknown",
        "can_confirm_anatomy": False,
        "reason_if_not": "model call failed",
    }


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
            frames.append(
                (
                    round(i / fps, 2),
                    cv2.imencode(".jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 85])[
                        1
                    ].tobytes(),
                )
            )
        i += 1
    return frames


def build_timeline(labels):
    """Fold per-frame labels [(t, label)] into a running world state and apply the safety rule."""
    seen, out, alerted = {}, [], False
    crit = {c: {"on": False, "since": None, "yes": 0, "no": 0, "start": None} for c in ("c1", "c2", "c3")}
    cvs_on = False
    for t, lab in labels:
        # CVS criteria with hysteresis, so one odd frame neither announces nor withdraws a criterion
        events, cvs = [], lab.get("cvs")
        if isinstance(cvs, dict):
            for c, st in crit.items():
                if is_yes(cvs.get(c)):
                    st["start"] = t if st["yes"] == 0 else st["start"]
                    st["yes"], st["no"] = st["yes"] + 1, 0
                else:
                    st["yes"], st["no"] = 0, st["no"] + 1
                if not st["on"] and st["yes"] >= CVS_HOLD:
                    st["on"], st["since"] = True, st["start"]
                    events.append({"what": c, "on": True, "since": st["start"]})
                elif st["on"] and st["no"] >= CVS_HOLD:
                    st["on"], st["since"] = False, None
                    events.append({"what": c, "on": False})
            now_on = all(st["on"] for st in crit.values())
            if now_on != cvs_on:
                cvs_on = now_on
                events.append({"what": "cvs", "on": now_on, "since": max(st["since"] for st in crit.values()) if now_on else None})
        cvs_state = {c: {"on": st["on"], "since": st["since"]} for c, st in crit.items()}
        cvs_state["cvs"] = {"on": cvs_on, "since": max(st["since"] for st in crit.values()) if cvs_on else None}
        clear = lab.get("view_quality") == "clear"
        for s in lab.get("visible_structures", []):
            st = seen.setdefault(
                s["name"], {"first": t, "last": t, "best": 0.0, "hits": 0}
            )
            st["last"], st["best"] = t, max(st["best"], s["confidence"])
            if clear and s["confidence"] >= CONFIRM_CONF:
                st["hits"] += 1
        duct_hits = seen.get("cystic_duct", {}).get("hits", 0)
        duct_confirmed = duct_hits >= CONFIRM_FRAMES
        clipping = (
            lab.get("clip_applier_visible")
            or lab.get("phase") == "clipping_and_cutting"
        )
        alert = None
        # ponytail: one alert per run; re-arm after each acknowledgement if the demo needs more
        if clipping and not duct_confirmed and not alerted:
            alerted = True
            alert = {
                "t": t,
                "message": "Clipping looks imminent but the cystic duct is not confirmed. "
                "Re-check the critical view of safety before clipping.",
                "evidence": f"Confident cystic duct sightings in clear frames: {duct_hits}/{CONFIRM_FRAMES}",
            }
        out.append(
            {
                "t": t,
                "label": lab,
                "can_confirm": clear and bool(lab.get("can_confirm_anatomy")),
                "state": {k: dict(v) for k, v in seen.items()},
                "duct_confirmed": duct_confirmed,
                "alert": alert,
                "cvs_state": cvs_state,
                "events": events,
            }
        )
    return out


def mock_labels():
    """A scripted 60 s clip: dissection, smoke, a premature clip (alert), re-check, safe clipping."""

    def S(**kw):
        return [{"name": k, "confidence": v} for k, v in kw.items()]

    def L(t, phase, structs, inst, view="clear", reason="", clipper=False):
        return t, {
            "phase": phase,
            "visible_structures": structs,
            "instruments": inst,
            "clip_applier_visible": clipper,
            "view_quality": view,
            "can_confirm_anatomy": view == "clear",
            "reason_if_not": reason,
        }

    smoke = "Electrocautery smoke hides the hepatocystic triangle."
    out = [
        L(
            t,
            "preparation",
            S(liver=0.95, gallbladder=0.9, abdominal_wall=0.7),
            ["grasper"],
        )
        for t in (0, 2, 4, 6)
    ]
    out += [
        L(
            t,
            "calot_triangle_dissection",
            S(liver=0.9, gallbladder=0.92, fat=0.8, connective_tissue=0.6),
            ["grasper", "hook"],
        )
        for t in (8, 10, 12, 14)
    ]
    out += [
        L(
            16,
            "calot_triangle_dissection",
            S(liver=0.9, gallbladder=0.9, fat=0.75, cystic_duct=0.35),
            ["grasper", "hook"],
        ),
        L(
            18,
            "calot_triangle_dissection",
            S(liver=0.9, gallbladder=0.9, fat=0.7, cystic_duct=0.45),
            ["grasper", "hook"],
        ),
    ]
    out += [
        L(
            t,
            "calot_triangle_dissection",
            S(liver=0.5, gallbladder=0.4),
            ["hook"],
            "smoke",
            smoke,
        )
        for t in (20, 22, 24)
    ]
    out += [
        L(
            26,
            "calot_triangle_dissection",
            S(liver=0.7, gallbladder=0.7, blood=0.8, cystic_duct=0.3),
            ["grasper", "irrigator"],
            "blood",
            "A small bleed covers the dissection plane.",
        )
    ]
    out += [
        L(
            t,
            "calot_triangle_dissection",
            S(liver=0.9, gallbladder=0.9, fat=0.65, cystic_duct=c),
            ["grasper", "hook"],
        )
        for t, c in ((28, 0.55), (30, 0.6), (32, 0.62), (34, 0.6))
    ]
    out += [
        L(
            36,
            "clipping_and_cutting",
            S(liver=0.9, gallbladder=0.9, fat=0.6, cystic_duct=0.6),
            ["grasper", "clipper"],
            clipper=True,
        )
    ]
    out += [
        L(
            t,
            "calot_triangle_dissection",
            S(liver=0.9, gallbladder=0.92, fat=f, cystic_duct=c),
            ["grasper", "hook"],
        )
        for t, c, f in ((38, 0.74, 0.5), (40, 0.82, 0.4), (42, 0.86, 0.35))
    ]
    out += [
        L(
            t,
            "clipping_and_cutting",
            S(liver=0.9, gallbladder=0.9, fat=0.3, cystic_duct=0.85),
            ["grasper", "clipper"],
            clipper=True,
        )
        for t in (44, 46, 48, 50)
    ]
    out += [
        L(
            t,
            "gallbladder_dissection",
            S(liver=0.92, gallbladder=0.9),
            ["grasper", "hook"],
        )
        for t in (52, 54, 56, 58)
    ]
    return out


def cvs_agreement(frames, truth):
    """Per criterion vs the surgeons at their keyframes (nearest sampled frame): agreement, and how many
    of the frames where surgeons said yes Gemini also caught (agreement alone flatters a model that always says no)."""
    rows = []
    for k in truth or []:
        f = min(frames, key=lambda f: abs(f["t"] - k["t"]))
        cvs = f["label"].get("cvs")
        if abs(f["t"] - k["t"]) <= 1 and isinstance(cvs, dict):
            rows.append([(is_yes(cvs.get(c.lower())), k[c] >= 0.5) for c in ("C1", "C2", "C3")])
    if not rows:
        return None
    out = {"keyframes": len(rows)}
    for i, c in enumerate(("C1", "C2", "C3")):
        out[c] = sum(g == t for g, t in (r[i] for r in rows)) / len(rows)
        out[c + "_caught"] = [sum(g and t for g, t in (r[i] for r in rows)), sum(t for _, t in (r[i] for r in rows))]
    return out


def selftest():
    tl = build_timeline(mock_labels())
    alerts = [f["t"] for f in tl if f["alert"]]
    assert alerts == [36], alerts  # fires once, at the premature clip
    by_t = {f["t"]: f for f in tl}
    assert not by_t[38]["duct_confirmed"] and by_t[40]["duct_confirmed"]
    assert not any(
        by_t[t]["can_confirm"] for t in (20, 22, 24, 26)
    )  # smoke/blood never confirm
    assert (
        by_t[20]["state"]["cystic_duct"]["hits"] == 0
    )  # low-confidence sightings don't count
    fr = [
        {"t": 0, "label": {"cvs": {"c1": True, "c2": False, "c3": False}}},
        {"t": 5, "label": {}},
    ]
    tr = [{"t": 0, "C1": 1, "C2": 1, "C3": 0}, {"t": 5, "C1": 1, "C2": 1, "C3": 1}]
    assert cvs_agreement(fr, tr) == {"keyframes": 1, "C1": 1.0, "C2": 0.0, "C3": 1.0,
                                    "C1_caught": [1, 1], "C2_caught": [0, 1], "C3_caught": [0, 0]}
    yes3 = {"cvs": {"c1": 0.9, "c2": 0.9, "c3": 0.9}}
    no = {"cvs": {"c1": 0.1, "c2": 0.1, "c3": 0.1}}
    tl = build_timeline([(0, no), (1, yes3), (2, no), (3, yes3), (4, yes3), (5, yes3), (6, no), (7, no), (8, no)])
    assert not tl[1]["cvs_state"]["cvs"]["on"]                     # one odd frame is not enough
    assert tl[5]["cvs_state"]["cvs"] == {"on": True, "since": 3}   # announced at 5, achieved since 3
    assert [e["what"] for e in tl[5]["events"]] == ["c1", "c2", "c3", "cvs"]
    assert not tl[8]["cvs_state"]["c1"]["on"] and tl[7]["cvs_state"]["c1"]["on"]
    print("selftest ok")


def write_runs_index(folder):
    """outputs/runs.js lists every run so the page can offer a picker (file:// pages can't list folders)."""
    import glob
    runs = []
    for p in sorted(glob.glob(os.path.join(folder, "*.js"))):
        name = os.path.basename(p)[:-3]
        if name == "runs":
            continue
        s = open(p).read()
        d = json.loads(s[s.index("{"):s.rindex("}") + 1])
        runs.append({"name": name, "model": d.get("model"), "prompt": d.get("prompt", "v1.txt"),
                     "frames": len(d["frames"]), "video": d.get("video")})
    with open(os.path.join(folder, "runs.js"), "w") as f:
        f.write("window.RUNS = " + json.dumps(runs, indent=1) + ";\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("clip", nargs="?")
    ap.add_argument(
        "--every", type=float, default=2.0, help="seconds between sampled frames"
    )
    ap.add_argument(
        "--out",
        default=os.path.join(HERE, "outputs", "timeline.js"),
    )
    ap.add_argument("--mock", action="store_true")
    ap.add_argument("--selftest", action="store_true")
    ap.add_argument(
        "--no-model", action="store_true", help="skip Gemini; frames get empty labels"
    )
    ap.add_argument(
        "--keyframes",
        action="store_true",
        help="only label frames the surgeons labelled (fewer calls)",
    )
    ap.add_argument("--prompt", help="prompt file (default prompts/v2.txt)")
    ap.add_argument("--provider", choices=["gemini", "openai"], default="gemini")
    ap.add_argument("--rebuild", nargs="+", metavar="OUTPUT", help="re-apply the world-state rules to existing outputs/*.js (no model calls)")
    ap.add_argument("--detect-model", help="second Gemini model run in parallel for boxes, e.g. gemini-3.8-flash")
    ap.add_argument("--detect-prompt", default=os.path.join(HERE, "prompts", "detect_v1.txt"))
    a = ap.parse_args()
    global PROMPT, MODEL
    if a.prompt:
        PROMPT = open(a.prompt).read()
    if a.provider == "openai":
        MODEL = OPENAI_MODEL

    if a.selftest:
        return selftest()
    if a.rebuild:
        for p in a.rebuild:
            txt = open(p).read()
            d = json.loads(txt[txt.index("{"):txt.rindex("}") + 1])
            d["frames"] = build_timeline([(f["t"], f["label"]) for f in d["frames"]])
            d["agreement"] = cvs_agreement(d["frames"], d.get("truth"))
            with open(p, "w") as f:
                f.write("window.TIMELINE = " + json.dumps(d, indent=1) + ";\n")
            print(f"rebuilt {p}: " + ", ".join(f"{e['what']} {'on' if e['on'] else 'off'} at {fr['t']:g}" for fr in d["frames"] for e in fr["events"]))
        return
    if a.mock:
        labels, video, model = mock_labels(), None, "mock"
    elif a.clip:
        truth_path = os.path.splitext(a.clip)[0] + ".truth.json"
        frames = sample_frames(a.clip, a.every)
        if a.keyframes:
            keep = {k["t"] for k in json.load(open(truth_path))}
            frames = [f for f in frames if f[0] in keep]
        if a.no_model:
            empty = {
                "view_quality": "unknown",
                "can_confirm_anatomy": False,
                "reason_if_not": "Not labelled yet: set GEMINI_API_KEY and rerun without --no-model.",
            }
            labs, model = [dict(empty) for _ in frames], "none"
        else:
            if a.provider == "openai":
                from openai import OpenAI
                client = OpenAI()  # reads OPENAI_API_KEY
            else:
                from google import genai
                client = genai.Client()  # reads GEMINI_API_KEY
            print(f"labelling {len(frames)} frames with {MODEL}...")
            with ThreadPoolExecutor(16) as ex:
                jobs = [ex.submit(label_frame, client, f[1]) for f in frames]
                if a.detect_model:  # boxes come from a second model, called in parallel with the CVS model
                    from google import genai
                    dclient, dprompt = genai.Client(), open(a.detect_prompt).read()
                    djobs = [ex.submit(label_frame, dclient, f[1], "image/jpeg", dprompt, a.detect_model) for f in frames]
                labs = [j.result() for j in jobs]
                if a.detect_model:
                    for lab, dj in zip(labs, djobs):
                        lab["boxes"] = dj.result().get("boxes", [])
            model = MODEL
            errs = [l["error"] for l in labs if "error" in l]
            if errs:
                print(
                    f"{len(errs)}/{len(labs)} calls failed, first error: {errs[0][:300]}"
                )
        labels = [(t, lab) for (t, _), lab in zip(frames, labs)]
        video = os.path.relpath(os.path.abspath(a.clip), HERE)  # relative to index.html, not the output
    else:
        ap.error("give a clip, --mock or --selftest")

    truth_path = os.path.splitext(a.clip)[0] + ".truth.json" if a.clip else ""
    truth = json.load(open(truth_path)) if os.path.exists(truth_path) else None
    frames = build_timeline(labels)
    agree = cvs_agreement(frames, truth)
    if agree:
        print(f"{model} vs surgeons on CVS criteria: " + json.dumps(agree))
    data = {
        "video": video,
        "model": model,
        "prompt": os.path.basename(a.prompt or PROMPT_PATH),
        "detect_model": a.detect_model,
        "every": a.every,
        "frames": frames,
        "truth": truth,
        "agreement": agree,
        "rules": {"confirm_conf": CONFIRM_CONF, "confirm_frames": CONFIRM_FRAMES},
    }
    with open(a.out, "w") as f:
        f.write("window.TIMELINE = " + json.dumps(data, indent=1) + ";\n")
    write_runs_index(os.path.dirname(os.path.abspath(a.out)))
    print(
        f"wrote {a.out} ({len(data['frames'])} frames, {sum(1 for x in data['frames'] if x['alert'])} alert)"
    )


if __name__ == "__main__":
    main()
