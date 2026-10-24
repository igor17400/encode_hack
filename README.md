# Second Look

A patient world model for laparoscopic cholecystectomy. Second Look tracks the patient's anatomy state, predicts what each surgical action does to it, and scores whether a simulated robot acted safely. It is built on Gemini and MongoDB Atlas and grounded in real, labelled surgical video (CholecT50).

> **Research simulator, not a medical device.** Patients are synthetic. Nothing here is clinical advice.

Pixel world models (e.g. NVIDIA Cosmos-H) show what the camera would see. Second Look knows what is happening to the patient and whether the robot did the right thing.

## How it works

- **Rule engine** (`backend/rules.py`): deterministic surgical facts.
  - A clipped duct stays clipped.
  - Cutting needs two clips.
  - Clipping needs the critical view of safety (CVS proxy).
  - These are the source of truth and of the safety reward.
- **World-model step** (`backend/world_model.py`):
  1. The rules apply the action.
  2. Atlas Vector Search retrieves the 5 most similar *real* transitions (train videos only, same phase).
  3. `gemini-4-argon` predicts risk, bleeding risk, explanation and likely next actions, citing those transitions.
  4. The rules have the final say on hard constraints.
  5. The closest real reference frame is attached and always labelled "closest real frame".
- **Atlas**: transitions, frames, sessions, world state, predictions and alerts all live there. The SSE stream is fed by Atlas change streams.

## Architecture

```mermaid
flowchart LR
  subgraph Offline pipeline
    D[CholecT50<br/>50 operations, triplet labels per second] --> R[Rule engine<br/>anatomy state, CVS proxy, violations]
    R --> T[Transitions + reference frames<br/>templated summaries]
    T --> E[gemini-embedding-2<br/>768-d]
  end
  E --> A[(MongoDB Atlas<br/>Vector Search · Atlas Search · change streams)]
  subgraph FastAPI backend
    W[Watch<br/>Flash perception → rules<br/>Argon verification] --> A
    I[Imagine<br/>rules + retrieved real transitions → Argon] <--> A
    S[Robot simulator<br/>Flash agent, Argon lessons] <--> A
  end
  A -- change streams → SSE --> UI[React UI<br/>Watch · Imagine · Train the robot · Evidence]
```

The rule engine has the final say on hard facts in every mode. The model cannot un-cut a structure or mark CVS met.

## Setup

### 1. Gemini API key (hackathon credits)
1. Redeem the credit code from the Google DeepMind booth onto a Google Cloud billing account.
2. Open [aistudio.google.com](https://aistudio.google.com) → **API keys** → **Create API key** → choose the Cloud project that holds the credits.
3. Check the key shows a **paid** tier, not "Free". Free-tier rate limits break parallel calls. Set a budget alert in Cloud Billing.
4. Copy `.env.example` to `.env` and set `GEMINI_API_KEY=...`.

### 2. MongoDB Atlas ($100 credit)
1. Open [cloud.mongodb.com](https://cloud.mongodb.com). Create an organisation, then go to **Billing** and apply the credit code *before* creating anything.
2. Create a project, then **Create cluster**. Choose **M10** (or **Flex** if M10's weekend cost is too high) on AWS eu-west-2. Do not use the free M0: it allows only 3 search indexes and we need 5. Write the hourly price in `DECISIONS.md`.
3. **Database Access**: add one database user with a password. **Network Access**: add your current IP, or `0.0.0.0/0` for the weekend only.
4. **Connect → Drivers → Python**: copy the `mongodb+srv://...` string into `.env` as `MONGODB_URI=...` (fill in the password), and set `DB_NAME=second_look`.
5. Pause or terminate the cluster after judging.

### 3. Install and run
```bash
uv venv .venv && uv pip install -r requirements.txt      # or: python -m venv .venv && pip install -r requirements.txt
source .venv/bin/activate
python -m backend.db --ping                               # Atlas reachable
python pipeline/01_download.py --images                   # labels for 50 videos + reference frames (≤5 GB)
python pipeline/02_build_states.py                        # per-second states; prints E4 sanity check
python pipeline/03_transitions.py                         # transitions + frame index
python pipeline/05_patients.py                            # synthetic patients -> Atlas
python pipeline/04_embed_load.py                          # embed + load Atlas + create indexes
python -m eval.live_acceptance                            # M0/M3/M4 acceptance checks
python -m eval.next_step_eval --split val --n 50          # prompt tuning (never on test)
python -m eval.next_step_eval --split test --n 200        # E1 + E2 headline number
python -m eval.perception_eval --n 200                    # E3 perception
python -m eval.agent_eval --patients P2 P4 --episodes 10  # E5 robot safety (biggest Gemini job)
python demo/record.py --mode live                         # record every demo path for the fallback
uvicorn backend.api:app --reload                          # API on :8000 (docs at /docs)
```
Tests that need no credentials: `pytest`. Offline demo (no Wi-Fi, no keys): `DEMO_MODE=precomputed uvicorn backend.api:app`.

Frontend (Vite + React + Tailwind, `frontend/`):
```bash
cd frontend && npm install && npm run dev                 # http://localhost:5173, talks to the API on :8000
```
Set `VITE_API_BASE` if the API runs elsewhere. Routes, SSE events and shapes: [docs/API.md](docs/API.md).

**No silent fallbacks in evaluation.** The evals and agent runs call the world model with `strict=True`. A failed Gemini or Atlas call stops the run instead of being scored as a prediction. The live app may fall back to a rules-only result; it is always labelled `source: rules_only`.

## Modes

- **Watch** (`backend/perception.py`):
  - `gemini-3.8-flash` labels one frame every ≥ 2 s, using the dataset vocabulary only.
  - Confident triplets (≥ 0.6) update the state through the rules.
  - If smoke, blood or glare hide the anatomy, the state is held and the UI shows "view obscured, can't confirm".
  - Every ~30 s, `gemini-4-argon` checks for contradictions. It can only move statuses forward; it can never un-cut a structure or mark CVS met.
  - Safety violations raise an alert that pauses playback until a human Acknowledges or Overrides, with a reason.
- **Imagine** (`backend/world_model.py`): branch "what if action X now?" from any state. Returns the predicted state, risk, explanation, cited real transitions and the closest real frame.
- **Train the robot** (`backend/agent.py`, `backend/simulator.py`):
  - A Flash agent picks actions from 17 real triplets, playing a synthetic patient.
  - After an unsafe episode, Argon writes a one-sentence lesson. The lesson is embedded into Atlas and retrieved by vector search in later episodes.
  - This is in-context learning: no weights are trained.
  - Baselines: random actions, and expert replay of real test operations.

## Results so far (offline parts)

| Check | Result | Sample |
| --- | --- | --- |
| E4: real videos flagged `clip_before_cvs` by the CVS proxy | 20% | 50 videos |
| E4: real videos with a CBD injury / `cut_without_two_clips` | 0% / 0% | 50 videos |
| Phase inference vs real phases | 78% | 1,128 keyframes, 5 videos |
| E1 baselines, next action (top-1 / top-3) | majority 21% / 46%; bigram 30% / 56% | 200 test transitions |
| E5 expert replay (real surgeons through the simulator): violations per episode | P1 0.0, P2 0.2, P4 0.0 (P3 2.0: synthetic adhesions are never cleared) | 10 test videos |
| E5 random policy: violations per episode / injury rate | P1 3.1 / 40%; P4 1.9 / 90% | 10 episodes |

## Live results (real Gemini calls)

| Check | Result | Sample |
| --- | --- | --- |
| E1 next action, top-1 / top-3: Second Look (Argon + retrieval) | 30.0% / 56.0% | 200 test transitions from 10 unseen operations |
| E1 trained baseline (gradient boosting on state + action; fit on train, tuned on val) | **39.5% / 67.5%** | same 200 |
| E1 simple baselines, top-1 / top-3: bigram · retrieval only · most common | 29.5% / 55.5% · 28.0% / 53.0% · 21.0% / 45.5% | same 200 |
| E1 Argon vs trained baseline, top-3, paired bootstrap | −11.5 pts, 95% CI −18 to −5: **Argon is significantly worse** | same 200 |
| E1 Argon vs bigram, top-3 | +0.5 pts, 95% CI −7 to +8: a tie | same 200 |
| E2 calibration (ECE, 5 bins) | 0.24. Accuracy rises with confidence (21% → 38% → 58%) but it is overconfident | same 200 |
| E3 perception (`gemini-3.8-flash`): triplet precision / recall | 27% / 28% | 200 test frames (VID73, VID74), 264 labelled triplets |
| E3: cystic duct / cystic artery / cystic plate recall | 53% / 26% / 88% | 17 / 23 / 16 labelled |
| E5 Gemini agent (P2, P4): violations and injury rate per episode | 0.0 and 0% for both patients, with or without lessons | 10 episodes per cell, rules dynamics, max 25 steps |
| E5 completion rate: agent / agent + lessons / expert replay | P2 30% / 50% / 100%; P4 90% / 100% / 100% | 10 episodes per cell |
| E5 with the **Argon world model as the simulator**: agent violations / injury rate | 0.0 and 0% (P2 and P4, with or without lessons); random: P2 3.8 / 40%, P4 2.2 / 100% | 5 episodes per cell; 529 steps, all from Argon |

Reading these honestly:
- **Next-action prediction: a small trained model beats Gemini.**
  - Gradient boosting on 3,000 train transitions gets 67.5% top-3 against Argon's 56.0%. Argon ties the bigram table.
  - Second Look's value is the grounded, explainable, rule-checked world model and the safety simulator, not next-action accuracy. A trained predictor could be plugged in for next-action suggestions.
  - Per the build plan, we lead with safety (E5) and perception (E3) instead of claiming a win.
  - One prompt change was tuned on validation only (defining `confidence` as the probability that the top prediction is right). It cut validation ECE from about 0.45 to 0.16 without changing accuracy. The test set was then run once.
- **The Gemini agent stayed safe in every episode,** against 40–90% injuries for random actions. It completes P2 less often because the inflamed patient needs more dissection than 25 steps of 10 s allow.
- **No lessons were written,** because there was no unsafe agent episode. "With lessons" therefore ran under the same condition as "without", and the completion difference is sampling noise. This run does not show whether lessons help.
- **Perception is the weak link.** In a live Watch run on the demo clip, Flash misreads caused an early `clip_before_cvs` alert. Argon verification flagged the inconsistencies (see `DECISIONS.md`).
- With the Argon world model as the simulator, the agent was again never unsafe, so no lessons were written and the lessons mechanism remains untested (completion gaps between "agent" and "agent + lessons" are noise at n=5).

## Atlas features used

| Feature | What it does here |
| --- | --- |
| Vector Search: `transitions` | Retrieves the real transitions the world model must cite (filtered to train split + phase) |
| Vector Search: `frames` | Finds the closest real frame to an imagined state |
| Vector Search: `lessons` | Robot agent memory (milestone M6) |
| Atlas Search: `reports`, `lessons` | "Search past runs" box |
| Change streams | Push `world_state`, `predictions` and `alerts` to the browser over SSE |
| Binary vectors | Embeddings stored as float32 `BinData` to keep storage small |

## Honest notes

- **Phases are inferred** from triplets: the Hugging Face copy has no phase labels. Checked against real phases on 1,128 keyframes from the Challenge Validation set, the inference is 78% accurate.
- **CVS is a proxy**: CholecT50 has no CVS labels. After tuning, it flags 20% of real operations as `clip_before_cvs` (see `DECISIONS.md`).
- **"Train the robot"** means in-context learning through lessons stored in Atlas. No model weights are trained.

## Models and data

- Models: `gemini-4-argon` (world model), `gemini-3.8-flash` (perception, agent), `gemini-embedding-2` (768-dim).
- Data:
  - **CholecT50** (CAMMA, University of Strasbourg), CC BY-NC-SA 4.0, via the [Hugging Face copy](https://huggingface.co/datasets/Voxel51/cholect50) and the official Challenge Validation set.
  - Cite: C.I. Nwoye et al., *Rendezvous: Attention Mechanisms for the Recognition of Surgical Action Triplets in Endoscopic Videos*, Medical Image Analysis 78 (2022) 102433.
  - Split: C.I. Nwoye, N. Padoy, *Data Splits and Metrics for Benchmarking Methods on Surgical Action Triplet Datasets*, arXiv:2204.05235.
- Patients are synthetic and hand-written. No real patient data.
