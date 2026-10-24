# Second Look

A safety copilot for laparoscopic cholecystectomy (keyhole gallbladder removal), built at Encode London 2026
(Oct 23–25, 2026). It watches the endoscope video, keeps a running memory of what it has seen, and checks the
**critical view of safety (CVS)** before the cystic duct and artery are clipped. It is decision support only: the
surgeon makes every decision.

> **No model was trained or fine-tuned.** Every result comes from off-the-shelf multimodal models (Gemini, optionally
> OpenAI) used zero-shot, guided by prompts in `prompts/`. The surgeons' labels in the dataset are used **only to
> score** the model, never as input to it.

---

## 1. Why this exists

Bile duct injury happens when a surgeon clips the main bile duct thinking it is the cystic duct. The guideline that
prevents it is the critical view of safety: before clipping, three criteria must be visible.

| | Criterion | Meaning |
|---|---|---|
| C1 | Two structures | Only the cystic duct and the cystic artery are seen entering the gallbladder |
| C2 | Hepatocystic triangle cleared | Fat and fibrous tissue removed, full-thickness "windows" visible through the triangle |
| C3 | Cystic plate | The lower third of the gallbladder is lifted off the liver bed, exposing the cystic plate |

All three = CVS achieved. In the dataset, surgeons reached CVS in only 6.1% of labelled frames (42% of operations).

---

## 2. How it works

```
video ──▶ sample 1 frame/s ──┬─▶ CVS model (gemini-4-argon, prompts/v2.txt) ──▶ C1/C2/C3 scores, phase, anatomy, view quality
                             └─▶ detection model (gemini-3.8-flash, prompts/detect_v1.txt) ──▶ boxes for duct, artery, windows, plate
                                              │
                                              ▼
                          world state (build_timeline in label.py)
                          · per-structure memory: first/last seen, best confidence, confident sightings
                          · cystic duct "confirmed" after 2 sightings at ≥ 0.7 confidence in clear frames
                          · each CVS criterion "achieved" after 3 labelled frames in a row say yes, "lost" after 3 no
                          · safety rule: clip applier visible (or phase = clipping) while duct not confirmed ──▶ one alert
                                              │
                                              ▼
                          outputs/<run>.js  ──▶  index.html (operating-room screen, replays the run in sync with the video)
```

**Inference is precomputed.** `label.py` calls the models once and saves everything to `outputs/<run>.js`. Pressing
Play in `index.html` makes no API calls; it reads the saved answer for the current second. This keeps the demo
deterministic, offline and free to replay. A live version would run the same `label_frame` + `build_timeline` code in
a loop on a camera feed.

Both models are called **in parallel per frame** (thread pool of 16): the CVS judgement benefits from the strongest
model, box detection is fast and cheap on Flash.

---

## 3. Data

**Endoscapes2023** from the CAMMA lab (University of Strasbourg / IHU Strasbourg / IRCAD). 201 laparoscopic
cholecystectomies recorded at IHU Strasbourg (2015–2019), 22 surgeons, patient consent and ethics approval.

- 58,813 frames at 1 fps covering the dissection phase only, up to the first clip.
- 11,090 frames (one every 5 s) labelled for C1/C2/C3 by **three surgeons independently**; the CSV stores their
  average, a criterion is met when ≥ 0.5 (majority). Annotation protocol: Mascagni et al., arXiv:2106.10916.
- Inter-rater agreement is modest (Cohen's kappa 0.33 / 0.53 / 0.44 for C1/C2/C3), so 100% agreement is not a
  realistic target.
- Official split: 120 train / 41 val / 40 test videos. **We only score on test videos** (198 and 166).

Licence: **CC BY-NC-SA 4.0**, non-commercial, credit CAMMA. Papers: Murali et al., arXiv:2312.12429 (2023);
Mascagni et al., *Scientific Data* 12:331 (2025). Sources: https://github.com/CAMMA-public/Endoscapes,
https://physionet.org/content/endoscapes-2023/1.0.0/

The full 6.3 GB zip lives at `../data/endoscapes.zip` (git-ignored). The frames for operations 198 and 166 were
extracted to `../data/endoscapes/test/`.

---

## 4. Files

```
second-look/
├── index.html          operating-room screen (open directly in a browser, works from file://)
├── label.py            frames ▶ models ▶ world state ▶ outputs/<run>.js   (core pipeline, has --selftest)
├── make_clip.py        Endoscapes frames ▶ videos/endo<vid>.mp4 + videos/endo<vid>.truth.json
├── eval.py             older cystic-duct detection eval on CholecSeg8k masks (has --selftest)
├── prompts/
│   ├── v1.txt          first CVS prompt (too conservative: models said "no" to everything)
│   ├── v2.txt          CVS prompt built from the CAMMA annotation protocol (default)
│   └── detect_v1.txt   box detection prompt
├── outputs/            one file per run, plus runs.js (index of runs, read by the run picker)
├── videos/             endo198.mp4 (2:34), endo166.mp4 (1:33) + surgeons' CVS labels (*.truth.json)
├── requirements.txt    google-genai, opencv-python, numpy, openai
└── .env                API keys (git-ignored, you create it)
```

---

## 5. Setup and running

```bash
cd second-look
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
```

Create `second-look/.env` (git-ignored; `label.py` loads it automatically):

```
GEMINI_API_KEY=...
OPENAI_API_KEY=...            # optional, only for --provider openai
GEMINI_MODEL=gemini-4-argon   # optional; the code default is gemini-3.8-flash
OPENAI_MODEL=gpt-6.1-sol      # optional
```

Free-tier Gemini keys allow 5 requests/minute; `label.py` waits and retries on 429, but enable billing for full
clips.

### View the demo

Open `index.html` in a browser. URL parameters:

- `?run=<name>` loads `outputs/<name>.js` (default `timeline`). The **Details** button also has a run picker.
- `?t=<seconds>` starts at that time, e.g. `index.html?t=125` to watch the CVS moments.

Space toggles play. "Structures: on/off" toggles the boxes.

### Reproduce the default run (what the screen shows)

```bash
GEMINI_MODEL=gemini-4-argon .venv/bin/python label.py videos/endo198.mp4 --every 1 \
  --detect-model gemini-3.8-flash --out outputs/v2_argon_boxes.js
cp outputs/v2_argon_boxes.js outputs/timeline.js
```

About 3 minutes and roughly $3 (154 frames × 2 models).

### Other commands

```bash
.venv/bin/python label.py --selftest                              # world-state and scoring rules
.venv/bin/python label.py videos/endo198.mp4 --every 1 --keyframes \
  --prompt prompts/v2.txt --out outputs/my_run.js                 # only the 25 surgeon-labelled frames, cheap
.venv/bin/python label.py videos/endo198.mp4 --every 1 --keyframes \
  --provider openai --out outputs/v2_openai.js                    # same prompt on OpenAI
.venv/bin/python label.py --rebuild outputs/*.js                  # re-apply world-state rules, no model calls
.venv/bin/python label.py videos/endo198.mp4 --no-model --every 1 --out outputs/empty.js  # video, no labels
.venv/bin/python label.py --mock --out outputs/mock.js            # scripted 60 s near-miss with a drawn stand-in
.venv/bin/python make_clip.py 166                                 # build another clip (needs frames in ../data/endoscapes/*/)
```

Do not run `--mock` without `--out`: it overwrites `outputs/timeline.js`, the default view.

`label.py` options: `--every` seconds between frames (default 2), `--keyframes`, `--prompt`, `--provider
gemini|openai`, `--detect-model`, `--detect-prompt`, `--out`, `--rebuild`, `--no-model`, `--mock`, `--selftest`.

---

## 6. Output format (`outputs/<run>.js`)

A JSON object wrapped as `window.TIMELINE = {...};` so the page can load it from `file://` (browsers block `fetch`
there). Strip the prefix to read it as JSON.

```jsonc
{
  "video": "videos/endo198.mp4",          // relative to index.html
  "model": "gemini-4-argon", "prompt": "v2.txt", "detect_model": "gemini-3.8-flash",
  "every": 1.0,
  "truth": [{"t": 139, "C1": 0.67, "C2": 1.0, "C3": 0.67}],    // surgeons, every 5 s (from make_clip.py)
  "agreement": {"keyframes": 25, "C1": 0.92, "C1_caught": [4, 6], ...},
  "rules": {"confirm_conf": 0.7, "confirm_frames": 2},
  "frames": [{
    "t": 139.0,
    "label": {                            // raw model answer, plus "boxes" from the detection model
      "cvs": {"c1": 0.65, "c2": 0.45, "c3": 0.15}, "cvs_evidence": "...",
      "phase": "calot_triangle_dissection", "view_quality": "clear",
      "visible_structures": [{"name": "cystic_duct", "confidence": 0.8}], "instruments": ["grasper"],
      "clip_applier_visible": false, "can_confirm_anatomy": false, "reason_if_not": "...",
      "boxes": [{"label": "hepatocystic_window", "box_2d": [617, 547, 766, 642], "confidence": 0.88}]
    },                                    // box_2d = [ymin, xmin, ymax, xmax], 0–1000 of image height/width
    "can_confirm": false,
    "state": {"cystic_duct": {"first": 57, "last": 139, "best": 0.85, "hits": 2}},
    "duct_confirmed": true,
    "cvs_state": {"c1": {"on": true, "since": 132}, "c2": {...}, "c3": {...}, "cvs": {"on": false, "since": null}},
    "events": [{"what": "c1", "on": true, "since": 132}],   // state changes at this frame (toasts, timeline pins)
    "alert": null                         // or {"t", "message", "evidence"}
  }]
}
```

`C1_caught: [4, 6]` means: of the 6 keyframes where surgeons said C1 was met, the model also said yes on 4. Report
this next to agreement, because agreement alone flatters a model that always says "no" (CVS is rare).

---

## 7. Results so far (operation 198, test split, 25 surgeon-labelled keyframes)

| Model | Prompt | C1 caught | C2 caught | C3 caught | Agreement C1 / C2 / C3 |
|---|---|---|---|---|---|
| gemini-3.8-flash | v1 | 0/6 | 0/6 | 0/2 | 76 / 76 / 92% |
| gemini-4-argon | v1 | 0/6 | 0/6 | 0/2 | 76 / 76 / 92% |
| gemini-3.8-flash | v2 | 0/6 | 0/6 | 0/2 | 76 / 76 / 92% |
| **gemini-4-argon** | **v2** | **4/6** | **3/6** | 0/2 | **92 / 88 / 92%** |
| gpt-6.1-sol | v2 | 1/6 | 1/6 | 0/2 | 60 / 72 / 76% (many false yes) |

What we learned:

- Prompt v1 made every model answer "no": all-`false` example JSON, "say you are unsure", no cystic artery or
  plate in the vocabulary. Prompt v2 states the protocol's achieved / not-achieved rules and asks for probabilities.
- A bigger model is what makes use of the better task description (Argon improves, Flash does not).
- **The model never declares full CVS on this case.** Surgeons mark it at 2:19–2:24 (the screen flags this as
  "Experts: safe to clip · 2:19"). Argon holds C1 and C2 from 2:12 but C3 (cystic plate) only scores yes on 6
  scattered frames, never 3 in a row. It fails safe (never says "safe" too early) but would produce a false alarm
  when the surgeon clips at about 2:30.
- With `gemini-4-argon` on prompt v1, the safety alert fired at 2:29 when a clipper appeared: correct detection, but a
  false alarm by the surgeons' standard (CVS had been achieved).

**Operation 166** (test split, 13 keyframes, `outputs/v2_argon_boxes_166.js`, gemini-4-argon v2 + Flash boxes):
C1 caught 4/7, C2 3/6, **C3 4/5**; agreement 77 / 77 / 85%. No false "yes" before the surgeons' first C1 at 0:59.
The held state declares **CVS achieved at 1:09 (held since 1:07)**; surgeons mark it from 1:04. It drops at 1:13
(camera moves, C3 raw score falls) and is re-declared at 1:24. So on this case the system says "safe" about 5 s after
the experts, never before.

Costs: about $0.005 per frame on Flash, $0.013 on Argon (introductory 2026 prices).

---

## 8. The screen (`index.html`)

Designed as an intra-operative display: dark and low-glare, the endoscope image dominates, colour only carries
meaning (green safe, amber not yet, red stop), large type readable from 2–3 m, no scrolling.

- **Top bar:** LIVE badge (pulses while playing), operation, dissection clock, Structures toggle, Details.
- **Video:** phase and view-quality tags; boxes for cystic duct (amber, green once confirmed), cystic artery,
  windows, cystic plate; floating names for gallbladder and liver; red outline during an alert.
- **Right panel:** safety alert (Re-check / Proceed, glove-sized buttons, decision logged) when one fires; CVS status
  ("Not yet · 2 of 3 criteria met" or "Achieved") with each criterion's held state, "Achieved at m:ss" and the
  frame's raw score; cystic duct status with sightings and the model's reason.
- **Toasts** over the image when a criterion is achieved or lost, and when the experts' CVS moment is reached.
- **Timeline:** phase lane, green C1/C2/C3/CVS pins where the model reached each, white "Experts: safe to clip" flag.
- **Details dialog:** run picker, agreement stats, world state, raw model output, decision log.

---

## 9. Known limitations and next steps

- Two test operations scored (198, 166). The other 38 test videos are in the zip; extract and run more before
  quoting numbers as general.
- C3 is the weak criterion. Next: few-shot examples from training-split frames (C3 yes/no), and a world-state rule
  that remembers dissection progress (2 confident yeses within 10 s, kept unless contradicted).
- Single still frames; surgeons judge from motion. Next: 3–5 consecutive frames per call.
- The safety rule keys on the cystic duct only; it should key on the held CVS state.
- Endoscapes ends at the first clip, so true near-misses are rare in this footage.
- Decision log lives in the page; MongoDB Atlas storage is planned.
- Phase 2: OR audio through the Gemini Live API (`gemini-3.8-live`): transcribe "clip", "cut", "is that the duct?" as
  world-state events, so "clip requested by voice while CVS not achieved" raises an alert.
- Med-Gemini is research-only (no API); MedGemma is open but trained on radiology, pathology, dermatology and
  ophthalmology, not surgical video, so it is a comparison, not the main model.

---

## 10. Notes for agents working on this repo

- Use `.venv/bin/python` (the system Python lacks cv2 and genai).
- Never print or commit `.env`. API keys are read from the environment after `.env` is loaded.
- Prompts are plain text files; changing a prompt means a new run (`--out outputs/<name>.js`), so keep old prompts
  and outputs for comparison.
- Rule changes in `build_timeline` do not need new model calls: run `label.py --rebuild outputs/*.js`
  (skip `runs.js`), then `label.py --selftest`.
- `outputs/runs.js` is regenerated after every run; the page reads it for the run picker.
- The video files are 1 frame per second rendered at 25 fps, so video time in seconds equals the dataset frame
  index, and boxes for second `t` apply until `t + 1`.
- The user reloads the page themselves; do not open browsers on their behalf. Headless Chrome screenshots work for
  checking: `--headless=new --virtual-time-budget=4000 --screenshot=out.png "file://.../index.html?t=139"`.
