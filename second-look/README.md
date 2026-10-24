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
                             ┌─▶ (optional, --examples) embed frame ▶ MongoDB Atlas $vectorSearch ▶ similar expert-labelled frames ─┐
video ──▶ sample 1 frame/s ──┼─▶ CVS model (gemini-4-argon, prompts/v2.txt) ◀──────────────────────────────────────────────────────┘
                             │      ──▶ C1/C2/C3 scores, phase, anatomy, view quality
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
├── library.py          expert-labelled frame library in MongoDB Atlas: build, upload, query (has --selftest)
├── eval.py             older cystic-duct detection eval on CholecSeg8k masks (has --selftest)
├── prompts/
│   ├── v1.txt          first CVS prompt (too conservative: models said "no" to everything)
│   ├── v2.txt          CVS prompt built from the CAMMA annotation protocol (default)
│   ├── detect_v1.txt   box detection prompt
│   └── examples_header.txt  instructions placed before retrieved expert examples (--examples)
├── outputs/            one file per run, plus runs.js (index of runs, read by the run picker)
├── videos/             endo198.mp4 (2:34), endo166.mp4 (1:33) + surgeons' CVS labels (*.truth.json),
│                       video_test.mp4 (10 s, unlabelled clip from outside Endoscapes)
├── requirements.txt    google-genai, opencv-python, numpy, openai, pymongo
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
MONGODB_HOST=cluster-encode.xxxxx.mongodb.net   # Atlas cluster address (not secret)
MONGODB_USER=igor             # optional, default igor
DB_PASSWORD=...               # Atlas database user password
# or instead of the three above: MONGODB_URI=mongodb+srv://user:pass@host/...
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

## 6. MongoDB Atlas: how it works and why we need it

### The problem it solves

A model judging one frame in isolation has no sense of how strict expert surgeons are. Our clearest failure: on
operation 198 Gemini 4 Argon never accepted C3 (cystic plate), even when the surgeons did. Surgeons learn the bar
from hundreds of labelled views; the model has seen none from this dataset. The training split of Endoscapes holds
6,960 frames that three surgeons labelled for C1/C2/C3. Atlas makes that experience **searchable by appearance**, so
for any live frame we can pull up "how did experts label views that look like this one?"

This is retrieval, not training. No model weights change; the expert frames are looked up at inference time.

### What is stored

Cluster `cluster-encode` (Atlas M10, AWS São Paulo), database `second_look`, collection `expert_frames`:

```jsonc
{
  "_id": "88_31575.jpg",           // <training video>_<frame number>
  "video": 88, "frame": 31575, "split": "train",
  "cvs": {"C1": 0.67, "C2": 0.0, "C3": 0.67},     // average of the three surgeons
  "met": {"C1": true, "C2": false, "C3": true},   // majority (>= 0.5)
  "annotators": {"annotator_1": "...", "annotator_2": "...", "annotator_3": "..."},
  "embedding": [768 floats]          // gemini-embedding-2 of the image
}
```

3,437 documents: every training keyframe where surgeons marked at least one criterion (1,088 C1, 780 C2, 1,245 C3,
369 full CVS) plus 1,500 random frames where they marked none. **Only training-split videos are stored**, so the test
operations we score on (198, 166) can never retrieve themselves.

Vector index `frame_vectors` (Atlas Vector Search):

```json
{"fields": [
  {"type": "vector", "path": "embedding", "numDimensions": 768, "similarity": "cosine"},
  {"type": "filter", "path": "video"},
  {"type": "filter", "path": "met.C1"}, {"type": "filter", "path": "met.C2"}, {"type": "filter", "path": "met.C3"}
]}
```

The filter fields matter: they let one query ask "the most similar frame **where experts said C3 was met**" and
another "the most similar frame **where they said it was not**".

### How it is built (`library.py build`, then `upload`)

1. Read `endoscapes/all_metadata.csv` and `train_vids.txt` straight from the dataset zip.
2. Pick keyframes from training videos (positives for any criterion + 1,500 negatives, fixed seed).
3. Extract each JPEG to `../data/library/frames/` and embed it with `gemini-embedding-2` (768 dimensions, 16 in
   parallel). Writes `../data/library/library.jsonl`. About 3,400 embedding calls, well under $1.
4. `upload` inserts the documents in batches of 500 and creates the vector index (it becomes queryable in about a
   minute).

### How it is used at inference (`label.py --examples`)

For each sampled frame of the video being labelled:

1. Embed the frame with `gemini-embedding-2`.
2. Run six filtered `$vectorSearch` queries: for each of C1, C2, C3, the nearest expert frame where it **was** met
   and the nearest where it **was not** (duplicates dropped, so about five examples):
   ```js
   {$vectorSearch: {index: "frame_vectors", path: "embedding", queryVector: [...], numCandidates: 100, limit: 5,
                    filter: {"met.C3": true}}},
   {$project: {embedding: 0, score: {$meta: "vectorSearchScore"}}}
   ```
3. Send Gemini 4 Argon the examples first (each image followed by a caption such as *"experts said C1 yes (0.67), C2
   no (0.00), C3 yes (0.67)"*), then `prompts/examples_header.txt` telling it to calibrate on, not copy, the
   experts, then the frame to judge and the usual prompt.
4. The captions of the examples used are saved in the frame's label (`label.examples`) for display and audit.

`EXAMPLES_MODE=cvs` switches to a balanced variant: the two nearest full-CVS frames and the two nearest no-criterion
frames. Retrieval runs in parallel before labelling; each query takes about 2 s from London to the São Paulo cluster,
which is fine because labelling is precomputed.

```bash
.venv/bin/python library.py build          # extract + embed training keyframes
.venv/bin/python library.py upload         # insert into Atlas, create the vector index
.venv/bin/python library.py query some_frame.jpg
GEMINI_MODEL=gemini-4-argon .venv/bin/python label.py videos/endo198.mp4 --every 1 --examples \
  --detect-model gemini-3.8-flash --out outputs/v2_argon_rag_198.js
```

### What it changed (honest result)

| Run | Caught C1 | C2 | C3 | Total | Full CVS declared |
|---|---|---|---|---|---|
| Op 198, no examples | 4/6 | 3/6 | 0/2 | 7/14 | never |
| Op 198, Atlas examples | 4/6 | **4/6** | **1/2** | **9/14** | never |
| Op 166, no examples | 4/7 | 3/6 | **4/5** | **11/18** | **1:09** (experts 1:04) |
| Op 166, Atlas examples | **5/7** | 1/6 | 1/5 | 7/18 | never |

On 198 retrieval did what we hoped: C3 caught for the first time, and a stray early C2 at 1:12 disappeared (C2 now
turns on at 2:01, inside the surgeons' window). On 166 it made the model too cautious. Most retrieved neighbours are
"not achieved" because CVS is rare even among similar views, which pulls answers toward "no". The balanced variant was
not better on the 38 keyframes. Across both operations: 18/32 without examples, 16/32 with. Two operations is too
small a sample to settle it, so the default screen uses runs **without** examples, and retrieval stays available as
an option.

Embedding similarity scores are all around 0.97–0.99: general-purpose embeddings see every laparoscopic frame as
alike. That is why the neighbours are used as calibration examples for the judge, never as a vote.

### Why MongoDB and not a local vector file

- **One store for vectors and labels.** The embedding sits next to the surgeons' scores and per-annotator votes, so
  a single query filters on labels and ranks by similarity. No separate vector database to keep in sync.
- **Filtered vector search** is what makes the contrastive "met vs not met" retrieval a single query per side.
- **It scales past a laptop.** All 11,090 labelled frames, or several datasets, fit without changing code; the
  library is shared by every machine running the labeller.
- **The same database can hold the rest of a real deployment** (planned, see below): per-second model outputs as
  a time-series collection, the alert and Re-check/Proceed decisions as an audit log (who overrode what, when and
  why), and change streams pushing new events to the operating-room screen live.

### Planned next for Atlas

1. A "similar expert-labelled views" strip on the screen: the 2–3 nearest training frames with the surgeons'
   verdicts, as evidence the surgeon can see, independent of whether they are fed to the judge.
2. The decision log (alerts, Re-check / Proceed, reason) written to an `events` collection instead of living in the
   page.

---

## 7. Output format (`outputs/<run>.js`)

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

## 8. Results so far (operation 198, test split, 25 surgeon-labelled keyframes)

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

## 9. The screen (`index.html`)

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

## 10. Known limitations and next steps

- Two test operations scored (198, 166). The other 38 test videos are in the zip; extract and run more before
  quoting numbers as general.
- C3 is the weak criterion. Next: few-shot examples from training-split frames (C3 yes/no), and a world-state rule
  that remembers dissection progress (2 confident yeses within 10 s, kept unless contradicted).
- Single still frames; surgeons judge from motion. Next: 3–5 consecutive frames per call.
- The safety rule keys on the cystic duct only; it should key on the held CVS state.
- Endoscapes ends at the first clip, so true near-misses are rare in this footage.
- Decision log lives in the page; writing it to Atlas is planned (section 6).
- Retrieved expert examples help on one operation and hurt on the other; needs more test operations and better
  balancing before it becomes the default.
- Phase 2: OR audio through the Gemini Live API (`gemini-3.8-live`): transcribe "clip", "cut", "is that the duct?" as
  world-state events, so "clip requested by voice while CVS not achieved" raises an alert.
- Med-Gemini is research-only (no API); MedGemma is open but trained on radiology, pathology, dermatology and
  ophthalmology, not surgical video, so it is a comparison, not the main model.

---

## 11. Notes for agents working on this repo

- Use `.venv/bin/python` (the system Python lacks cv2 and genai).
- Never print or commit `.env`. MongoDB connection comes from `library.mongo_uri()` (MONGODB_URI, or
  MONGODB_HOST + MONGODB_USER + DB_PASSWORD).
- The Atlas library holds training-split frames only; never upload test-split frames (198, 166 and the other 38 test
  videos) or retrieval leaks the answers. API keys are read from the environment after `.env` is loaded.
- Prompts are plain text files; changing a prompt means a new run (`--out outputs/<name>.js`), so keep old prompts
  and outputs for comparison.
- Rule changes in `build_timeline` do not need new model calls: run `label.py --rebuild outputs/*.js`
  (skip `runs.js`), then `label.py --selftest`.
- `outputs/runs.js` is regenerated after every run; the page reads it for the run picker.
- The video files are 1 frame per second rendered at 25 fps, so video time in seconds equals the dataset frame
  index, and boxes for second `t` apply until `t + 1`.
- The user reloads the page themselves; do not open browsers on their behalf. Headless Chrome screenshots work for
  checking: `--headless=new --virtual-time-budget=4000 --screenshot=out.png "file://.../index.html?t=139"`.
