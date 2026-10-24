"""Generate synthetic laparoscopic clips anchored to real frames, for CVS testing and robot-training data.

High-fidelity recipe (default):
  1. anchor both ends on REAL frames of the same operation (first + last frame interpolation),
  2. ground the prompt: Gemini describes the real instruments, tissue colours and what is NOT visible, and that
     description replaces {SCENE} in the prompt template,
  3. quality gate: Gemini compares the generated clip with the real anchors and rejects hallucinations
     (new or swapped instruments, invented structures, colour shifts, jumps); retries up to --tries, keeps the best.

  python generate.py --video videos/endo198.mp4 --t 132 --last-t 139 --name interp_198_132_139
  python generate.py --video videos/endo198.mp4 --t 139 --prompt prompts/veo_c3_peel.txt --name c3_peel_198   # one image
  python generate.py ... --dry-run          # write anchors, grounded prompt and settings, generate nothing

Writes videos/generated/<name>.mp4 plus <name>.json (prompt, anchors, every attempt's QC verdict). Then:
  python label.py videos/generated/<name>.mp4 --every 1 --detect-model gemini-3.8-flash --out outputs/gen_<name>.js

Model: gemini-omni-1.1-flash (Gemini Omni Flash, Interactions API, GEMINI_API_KEY). --veo uses Veo 3.1 on Vertex AI
instead (needs `gcloud auth application-default login`).
Generated footage is synthetic. Even after QC it is not ground truth: label it as AI-generated wherever it is shown.
"""
import argparse
import base64
import json
import os
import subprocess
import sys
import time

import label  # loads .env

HERE = os.path.dirname(os.path.abspath(__file__))
OMNI_MODEL = os.environ.get("OMNI_MODEL", "gemini-omni-1.1-flash")
JUDGE_MODEL = os.environ.get("JUDGE_MODEL", "gemini-4-argon")
VEO_MODEL, PROJECT, LOCATION = (os.environ.get("VEO_MODEL", "veo-3.1-generate-001"),
                                os.environ.get("VEO_PROJECT", "encode-26lon-3720"),
                                os.environ.get("VEO_LOCATION", "us-central1"))

GROUND = """You are describing two real frames (opening and closing) from one continuous laparoscopic cholecystectomy
shot, so a video model can animate between them without inventing anything. Write 5-8 short factual sentences:
- each instrument: what it is, its exact look (colour, material, insulation, tip shape), the image edge it enters
  from, and what its tip touches; say if it is present in only one of the two frames;
- the anatomy and its colours as they actually appear (gallbladder wall, liver, fat, the dissected window);
- what is NOT visible (for example: no green gallbladder fundus, no clips, no smoke) so it is not added.
Plain sentences only, no lists, no headings."""

QC = """You are a strict quality inspector for synthetic surgical video used to train robots. Image 1 is the REAL
opening frame, image 2 is the REAL closing frame. The remaining images are frames sampled in order from a
GENERATED clip that is supposed to connect them with plausible motion only.
Flag any of: an instrument that appears, disappears abruptly, is swapped or changes shape/colour; any structure,
sac, organ or fluid not present in the real frames (especially green or bile-coloured); colour, lighting or
sharpness shifts; sudden jumps or cuts; anatomy that warps implausibly; the clip not starting near image 1 or not
ending near image 2.
Return JSON only: {"pass": true|false, "score": <0-10 fidelity>, "issues": ["<short issue with frame number>"]}"""


def frame_at(path, t):
    import cv2
    cap = cv2.VideoCapture(path)
    cap.set(cv2.CAP_PROP_POS_MSEC, t * 1000)
    ok, img = cap.read()
    if not ok:
        sys.exit(f"could not read a frame at {t}s from {path}")
    return cv2.imencode(".jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 95])[1].tobytes()


def ask(client, parts, model=JUDGE_MODEL, as_json=False):
    from google.genai import types
    contents = [types.Part.from_bytes(data=p, mime_type="image/jpeg") if isinstance(p, bytes) else p for p in parts]
    cfg = types.GenerateContentConfig(response_mime_type="application/json") if as_json else None
    r = client.models.generate_content(model=model, contents=contents, config=cfg)
    return json.loads(r.text) if as_json else r.text.strip()


def omni(client, images, prompt, seconds, resolution):
    """Gemini Omni Flash through the Interactions API: 1 image = image-to-video, 2 images = first/last interpolation."""
    it = client.interactions.create(
        model=OMNI_MODEL,
        input=[{"type": "image", "data": base64.b64encode(i).decode(), "mime_type": "image/jpeg"} for i in images]
              + [{"type": "text", "text": prompt}],
        response_format={"type": "video", "aspect_ratio": "16:9", "resolution": resolution, "duration": f"{seconds}s"},
        background=True,
    )
    t0 = time.time()
    while it.status not in ("completed", "failed", "cancelled"):
        print(f"  generating... {time.time() - t0:.0f}s")
        time.sleep(10)
        it = client.interactions.get(it.id)
    if it.status != "completed" or it.output_video is None:
        raise RuntimeError(f"generation {it.status}: {str(it)[:300]}")
    v = it.output_video
    if getattr(v, "data", None):
        return base64.b64decode(v.data)
    import urllib.request
    req = urllib.request.Request(v.uri, headers={"x-goog-api-key": os.environ["GEMINI_API_KEY"]})
    return urllib.request.urlopen(req).read()


def veo(images, prompt, seconds, resolution):
    from google import genai
    from google.genai import types
    client = genai.Client(vertexai=True, project=PROJECT, location=LOCATION)
    op = client.models.generate_videos(
        model=VEO_MODEL,
        source=types.GenerateVideosSource(prompt=prompt, image=types.Image(image_bytes=images[0], mime_type="image/jpeg")),
        config=types.GenerateVideosConfig(
            aspect_ratio="16:9", number_of_videos=1, duration_seconds=seconds, generate_audio=False, resolution=resolution,
            last_frame=types.Image(image_bytes=images[1], mime_type="image/jpeg") if len(images) > 1 else None),
    )
    while not op.done:
        time.sleep(10)
        op = client.operations.get(op)
    return op.result.generated_videos[0].video.video_bytes


def browser_friendly(raw, out):
    """No audio track, a keyframe every second: plays and scrubs reliably in the page."""
    tmp = out + ".raw.mp4"
    with open(tmp, "wb") as f:
        f.write(raw)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", tmp, "-an", "-c:v", "libx264", "-crf", "18", "-g", "24",
                    "-pix_fmt", "yuv420p", "-movflags", "+faststart", out], check=True)
    os.remove(tmp)


def main():
    ap = argparse.ArgumentParser()
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--image", help="real opening frame (jpg)")
    src.add_argument("--video", help="take real frames from this video (with --t, --last-t)")
    ap.add_argument("--t", type=float, default=0)
    ap.add_argument("--last-t", type=float, help="real closing frame from the same video: first/last interpolation")
    ap.add_argument("--last-image", help="real closing frame (jpg)")
    ap.add_argument("--prompt", default=os.path.join(HERE, "prompts", "gen_interp_v1.txt"))
    ap.add_argument("--name", required=True)
    ap.add_argument("--seconds", type=int, help="default: the real gap between anchors, else 8 (model range 3-10)")
    ap.add_argument("--resolution", default="720p", choices=["720p", "1080p"])
    ap.add_argument("--tries", type=int, default=3, help="regenerate until the QC passes, keep the best")
    ap.add_argument("--no-ground", action="store_true")
    ap.add_argument("--no-qc", action="store_true")
    ap.add_argument("--veo", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    from google import genai
    client = genai.Client()

    images = [open(a.image, "rb").read() if a.image else frame_at(a.video, a.t)]
    if a.last_image:
        images.append(open(a.last_image, "rb").read())
    elif a.last_t is not None:
        images.append(frame_at(a.video, a.last_t))
    seconds = a.seconds or (max(3, min(10, round(a.last_t - a.t))) if a.last_t is not None else 8)

    out_dir = os.path.join(HERE, "videos", "generated")
    os.makedirs(out_dir, exist_ok=True)
    base = os.path.join(out_dir, a.name)
    for i, img in enumerate(images):
        with open(f"{base}.anchor{i}.jpg", "wb") as f:
            f.write(img)

    prompt = open(a.prompt).read().strip()
    if "{SCENE}" in prompt:
        scene = "" if a.no_ground else ask(client, images + [GROUND])
        prompt = prompt.replace("{SCENE}", scene or "(not described)")
    meta = {"model": VEO_MODEL if a.veo else OMNI_MODEL, "prompt_file": os.path.basename(a.prompt), "prompt": prompt,
            "anchors": [a.image or f"{a.video}@{a.t}s"] + ([a.last_image or f"{a.video}@{a.last_t}s"] if len(images) > 1 else []),
            "seconds": seconds, "resolution": a.resolution, "synthetic": True, "attempts": []}
    if a.dry_run:
        json.dump(meta, open(f"{base}.json", "w"), indent=1)
        return print(f"dry run: anchors + grounded prompt in {base}.json\n\n{prompt}")

    best, seen_issues = None, []
    for k in range(1, a.tries + 1):
        # feedback loop: defects the quality gate found in earlier attempts become explicit things to avoid
        attempt_prompt = prompt + ("\n\nA previous attempt at this exact clip had these defects. Avoid every one of them:\n- "
                                   + "\n- ".join(seen_issues) if seen_issues else "")
        print(f"attempt {k}/{a.tries} with {meta['model']}")
        t0 = time.time()
        try:
            raw = (veo(images, attempt_prompt, seconds, a.resolution) if a.veo
                   else omni(client, images, attempt_prompt, seconds, a.resolution))
        except Exception as e:
            meta["attempts"].append({"attempt": k, "error": str(e)[:300]})
            print("  failed:", str(e)[:200])
            continue
        cand = f"{base}.try{k}.mp4"
        browser_friendly(raw, cand)
        verdict = {"pass": True, "score": None, "issues": []}
        if not a.no_qc:
            frames = [frame_at(cand, s + 0.5) for s in range(seconds)]
            verdict = ask(client, images[:1] + images[-1:] + frames + [QC], as_json=True)
        meta["attempts"].append({"attempt": k, "file": os.path.basename(cand), "seconds_taken": round(time.time() - t0),
                                 "prompt_feedback": list(seen_issues), **verdict})
        seen_issues += [i for i in verdict.get("issues", []) if i not in seen_issues]
        print(f"  QC: pass={verdict.get('pass')} score={verdict.get('score')} {verdict.get('issues')}")
        if best is None or (verdict.get("score") or 0) > (best[1].get("score") or 0):
            best = (cand, verdict)
        if verdict.get("pass"):
            break
    json.dump(meta, open(f"{base}.json", "w"), indent=1)
    if not best:
        sys.exit("no attempt produced a video")
    os.replace(best[0], f"{base}.mp4")
    for k in range(1, a.tries + 1):  # drop the rejected attempts
        if os.path.exists(f"{base}.try{k}.mp4"):
            os.remove(f"{base}.try{k}.mp4")
    print(f"kept {os.path.basename(best[0])} -> {base}.mp4 (QC pass={best[1].get('pass')}, score={best[1].get('score')})")
    print(f"next: .venv/bin/python label.py {os.path.relpath(base, HERE)}.mp4 --every 1 --detect-model gemini-3.8-flash "
          f"--out outputs/gen_{a.name}.js")


if __name__ == "__main__":
    main()
