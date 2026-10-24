# CLAUDE.md: Second Look (patient world model)

Research simulator for laparoscopic cholecystectomy. **Eyes** (Igor's Endoscapes CVS judge) see what is true now. The
**patient world model** (this repo) predicts what an action does to the patient: rule engine, then Gemini Argon grounded
in real CholecT50 transitions via MongoDB Atlas, then a 3D patient model and a robot simulator.

Research simulation on public data. Never present output as clinical advice.

## Layout
```
backend/   config, schema (State/Action/...), rules.py (hard facts, CVS proxy), gemini.py (cached, strict),
           db.py (Atlas: indexes, vector/hybrid search, retries), world_model.py (step), perception.py (Watch),
           agent.py + simulator.py (robot, lessons), reports.py, endoscapes.py (Igor's runs -> our state),
           experts.py (Igor's expert library, READ-ONLY), videogen.py (dream data: prompt compiler, Omni Flash
           render, fidelity + consistency gates), stats.py, api.py (FastAPI + SSE)
pipeline/  01_download .. 07_expert_views   (data -> states -> transitions -> Atlas; image embeddings; expert views)
           08_dream_clips (world-model steps -> AI-generated training video, verified, -> Atlas dream_clips)
demo/record_forecasts.py   VID74 forecasts (E1-identical calls) + truth -> precomputed/forecast_VID74.json
eval/      next_step_eval (E1/E2 + bootstrap), trained_baseline, perception_eval (E3), agent_eval (E5), merge_e5,
           dream_eval (E6 -> demo/precomputed/dreams.json + eval_E6_dreams.json), export_dreams (JSONL manifest),
           live_acceptance, splits
demo/      record.py (--mode offline|live), record_endoscapes.py, precomputed/*.json (recorded live runs),
           clips/ (mp4 + JPEG frames), endoscapes/ (Igor's runs + clips, vendored, credited)
frontend/  Vite + React + Tailwind + three.js. src/api.js switches HTTP vs src/staticApi.js (VITE_STATIC=1)
tests/     pytest (no credentials needed). frontend/src/lib/statespace.test.mjs (node)
DECISIONS.md  every deviation / finding, newest first. Read it before changing behaviour.
```

## Commands
```bash
.venv/bin/python -m pytest -q                         # all tests (offline)
node frontend/src/lib/statespace.test.mjs
.venv/bin/python -m backend.db --ping                  # Atlas
uvicorn backend.api:app --port 8000                    # live backend (needs .env)
DEMO_MODE=precomputed uvicorn backend.api:app          # offline backend from demo/precomputed
cd frontend && npm run dev                             # UI on :5173 -> API :8000
cd frontend && ./scripts/build_static.sh               # static demo -> dist-static/ (page.html for the Artifact)
python demo/record.py --mode live --t-from 381 --t-to 561   # re-record demo (costs Gemini calls)
python -m eval.next_step_eval --split test --n 200 --workers 4
python -m eval.agent_eval --patients P2 P4 --episodes 5 --dynamics world_model --name <name>
python pipeline/08_dream_clips.py --dry-run                 # compiled prompts only, no video calls
python pipeline/08_dream_clips.py --max-renders 36          # Omni Flash renders (~75 s each) + gates; resumable
python -m eval.dream_eval && python -m eval.export_dreams   # E6 numbers, gallery JSON, training manifest
```
`.env` (gitignored, never commit or print): `GEMINI_API_KEY`, `MONGODB_URI`, `DB_NAME`, `EXPERT_MONGODB_URI` (Igor's
cluster), optional `GEMINI_MAX_CALLS`, `DEMO_MODE`.

## Invariants (do not break)
- **Rules have the final say.**
  - The model never un-cuts a structure, adds clips, or marks CVS met.
  - Argon corrections in Watch may only set `visible`/`dissecting` (`perception.CORRECTABLE`).
  - Rule violations set a risk floor the model cannot go below.
- **No silent fallbacks in evaluation.**
  - Evals and agent runs call `world_model.step(..., strict=True)`.
  - A failed call raises and is never scored.
  - Never substitute random actions, placeholder reports or "occluded" for an API error.
  - Retries (`gemini._with_retries`, `db._retry`) only repeat the *same* call.
- **Splits.**
  - Retrieval filters `split == "train"`.
  - Tune prompts / hyperparameters on `val`; run `test` once.
  - The trained baseline asserts it never saw eval rows.
- **Independent samples.** Simulator episodes pass a `cache_salt` / `sample_key`, so a cache hit never stands in for a new episode.
- **Honest reporting.**
  - Report CIs (paired bootstrap), sample sizes, ties and losses.
  - Current truth: a gradient-boosting baseline beats Argon on next-action (67.5% vs 56% top-3).
  - The lessons mechanism is untested (the agent was never unsafe).
- **UI numbers come from data** (eval JSON, `/stats`), never hand-typed. Approximations are labelled ("approximate boxes", "closest real frame", "AI-generated").
- **Dream clips are synthetic.** Labelled "AI-generated" everywhere, never fed to the rules or evals as real footage.
  Every attempt is kept (rejected ones too). A failed render / QC / perception call is a failure, never a pass.
  The consistency gate needs the exact predicted triplet; do not loosen gates after seeing results.
- **Forecast → reality.** Truth is shown only when the video reaches it (`lib/forecast.js`). Forecasts come from
  state_before + current action + train-split retrieval only; every forecast is shown, misses included.
- **Plain language in the UI.** Use `lib/describe.js` (`actionShort`, `actionSentence`, `stateLines`), not raw triplets.
- **Igor's database is read-only.** `experts._ReadOnly` exposes only `aggregate`, with no `$out`/`$merge`. Never write to it.

## Domain gotchas
- **CVS numbering:** CAMMA/Igor C1 = two structures → our `c3_two_structures`; C2 = triangle cleared → `c1_triangle_cleared`; C3 = cystic plate → `c2_plate_exposed` (`endoscapes.TO_OURS`).
- **Sensed CVS:** `State.cvs_sensor` (perceived) overrides the action proxy. `rules.apply_action` judges the first second against it, then clears it (a simulated future has no camera).
- **Igor's `can_confirm`** means "anatomy not yet confirmable", not an obscured view. Only `view_quality != clear` veils the video.
- **CholecT50 has no phase labels in the HF copy,** so phases are inferred (78% vs real) and CVS is a proxy (20% of real ops flagged). Endoscapes has real CVS labels but no actions.
- **The perception prompt changed (boxes),** so the recorded E3 numbers belong to the older prompt.

## Technical gotchas
- `gemini-3.8-flash` rejects `thinking_level="minimal"`; use `low`.
- Spending-cap 429s are not transient: they raise immediately.
- Atlas small tier: connection-pool timeouts (code 407) under parallel vector search. Use ≤4 workers; `db._retry` handles transient errors.
- `/frames/{path}` is a catch-all, so new frame routes need other names (e.g. `/similar_frames`).
- Demo frames are stored as JPEG; the API falls back from `.png` to `.jpg`.
- General-purpose image embeddings cluster around 0.985 similarity: weak discrimination. Show scores; never use them as votes.
- **Static mode mirrors precomputed mode:** add a route to `backend/api.py` AND `frontend/src/staticApi.js`. Recorded Imagine files are keyed `imagine_<pid>_<action>[_<clip>_<t>]`.
- **Artifact publish:** max 255 files per publish, so send only changed files plus `null` for removed old assets. Rebuild with `build_static.sh` first. The Artifact URL is in the README / plan.

## Git workflow
- Remote `igor` = github.com/igor17400/encode_hack. **Never push to `main`.**
- `world-model`: this repo (project at root).
- `combined`: Igor's `main` + this repo under `patient-world-model/`. Update it from a clone with:
  ```bash
  git fetch wm world-model && git merge -X subtree=patient-world-model/ wm/world-model
  ```
- Before committing: run the tests, then a secret scan (no keys, URIs with passwords, or cluster hosts in tracked files).
- End commit messages with: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

- Gemini Omni Flash (`gemini-omni-1.1-flash`) is reached through `client.interactions.create(..., background=True)`
  and polled; Veo 3.1 on the API key is `veo-3.1-generate-preview` (the `-001` name is Vertex only).
- Video models morph an instrument already in view into the requested one; `videogen.handover()` adds an explicit
  rule built from what the eyes see in the anchor frame.

## Ideas for next iterations
- **Test lessons where the agent can fail:** harder patients, a weaker policy, or longer horizons.
- **Use a trained model where it wins:** the gradient-boosting predictor for next-action suggestions, with Argon kept for grounded explanations.
- **Score the eyes on more Endoscapes test operations** (needs the 6.3 GB dataset); feed multi-frame clips to the CVS judge.
- **Better image embeddings** (surgical-domain) for frame similarity and the expert library.
- **Dream data:** an inverse-dynamics model to turn accepted clips into tool-motion labels; more video models
  (Veo 3.1) on the same gates; feed accepted counterfactual clips to the perception eval as hard negatives.
- **Atlas:** Automated Embedding; per-second outputs as time series; decisions as an audit log.
