# Decisions and deviations from the build plan

Newest first. Each entry: what changed, why.

## 2026-10-24 (pass 4b: boxes on our own clip)

- The Flash perception schema gains optional display-only `boxes` (structures + instruments, `[ymin, xmin, ymax, xmax]` 0–1000). The rules never read them.
- This changes the perception prompt. The recorded E3 numbers (P 27% / R 28%) were measured with the earlier prompt and stay as recorded; they are not mixed with the new prompt.

## 2026-10-24 (pass 4: frontend redesign + Igor's "eyes")

- **Combined with Igor's main-branch prototype.**
  - Igor's precomputed Endoscapes runs and clips are vendored into `demo/endoscapes/` (credited, CC BY-NC-SA): Gemini Argon CVS judgement, Flash boxes, surgeons' truth.
  - `backend/endoscapes.py` turns them into our Watch stream. CVS numbering is mapped (CAMMA C1 two structures → our c3; C2 triangle → c1; C3 plate → c2), and a test checks every second against Igor's held state.
  - Reproduced Igor's results: op 166, model CVS at 1:09 vs surgeons 1:04; op 198, never declared.
- **Sensed CVS in the rules.**
  - `State.cvs_sensor` makes the perceived CVS the state's CVS.
  - A simulated action is judged against it for its first second, then continues from anatomy, since a simulated future has no camera.
  - Recorded results: op 166, "clip now" at 1:00 is high (injury for P4); at 1:33 it is low for all patients; op 198 at the end is high.
- **Igor's expert library, read-only.**
  - `backend/experts.py` exposes only `$vectorSearch` (no write stages) against his `expert_frames` (3,437 surgeon-labelled training frames).
  - Results are precomputed by `pipeline/07_expert_views.py` (~5 s latency from London).
  - His DB holds verdicts and embeddings but not images, so the UI shows verdicts.
  - The credential lives only in `.env` (gitignored); Igor should rotate it after the event.
- **Frontend redesign.**
  - A 3D patient model (three.js, bundled) that assembles from the state stream: structures fade in when seen, a fatty sheath dissolves with exposure, clips pop on, a cut opens a gap, the bile duct pulses at risk.
  - The video HUD overlays boxes, action chips, rule-engine change toasts, and alert / can't-confirm veils.
  - An anatomy map, a state timeline (model vs surgeons), a state-space future tree and robot trajectories, and a Story screen built from one recorded decision.
  - Veils only for real view problems (Igor's `can_confirm` means "anatomy not yet confirmable", not an obscured view).

## 2026-10-24 (pass 3: finishing the plan and deploying)

- **Trained next-action baseline.**
  - `HistGradientBoostingClassifier` on state_before + action features, fit on train only (asserted).
  - Grid over learning rate, iterations and leaves, scored on val. lr=0.1 diverged (val top-3 0.08–0.20); chosen: lr 0.05, 200 iterations, 15 leaves (val 0.68).
  - Test (n=200): 39.5% / 67.5% top-1 / top-3. Argon is 11.5 pts worse at top-3 (paired bootstrap 95% CI −18 to −5).
  - Reported as is. The eval now reports a CI against the best baseline instead of a bare `>`.
- **E5 with Argon world-model dynamics.** 5 parallel processes, 5 episodes per cell, seed 2, `strict=True`. Every step records its source.
  - The random baseline was split into one process per patient to finish in time. The killed run's 2 partial episodes were deleted from Atlas so the exports contain only complete runs.
  - Expert replay in that table comes from the rules run (it replays real actions).
- **Hybrid search.** Atlas `$rankFusion` over `$search` and `$vectorSearch` for lessons and reports, with `scoreDetails` showing which pipeline matched. Reports are embedded on write (`reports_vec` index). Cluster errors return 502; there is no fallback.
- **Multimodal frame search.**
  - gemini-embedding-2 image embeddings for 1,776 train frames (1 every 10 s, from the 25 train videos with frames on disk), in the `frames_img_vec` index. `/similar_frames` serves them.
  - Similarity scores are tightly bunched (~0.985) and neighbours lean to the most common scene, so this general-purpose embedding discriminates laparoscopic frames weakly. The UI shows the score and labels results "closest real frames by image similarity".
- **Static Artifact deploy.**
  - `frontend/src/staticApi.js` mirrors the backend's precomputed mode in the browser (same routes and events). Anything not recorded returns "runs in the live demo".
  - `frontend/scripts/build_static.sh` bundles `demo/precomputed` and JPEG frames.
- **Route naming.** The new image-similarity route is `/similar_frames`, not `/frames/similar`, because the `/frames/{path}` catch-all would shadow it.

## 2026-10-24 (live runs and integrity fixes)

- **No silent fallbacks in evaluation.**
  - `world_model.step(strict=True)` raises on a failed retrieval or Argon call; the evals and agent runs use it.
  - A failed agent call raises instead of substituting a random action.
  - A failed perception call is reported as `error`, never as an "obscured view".
  - The confidence cap (0.4 when nothing was cited) is removed, so the model's own confidence is reported unchanged. The rules-only fallback reports confidence 0, not a made-up 0.3.
- **Agent goal no longer states the safety rules.** The first version told the agent "never clip before CVS 3/3, never cut with fewer than two clips". That gives away what the rule engine scores and would make any lessons comparison meaningless. The goal is now the task only, as in the plan.
- **Independent samples per episode.** Gemini responses are cached by prompt, and rules-only dynamics are nearly deterministic, so 10 "agent" episodes could have been cache replays of one episode. Each episode now passes a `cache_salt` (`e5-seed{s}-{patient}-ep{i}`). Every episode is a fresh sample, and rerunning the same eval stays reproducible from the cache.
  - Bug found while adding it: the salt was added to every key, even when empty, which invalidated all earlier cache entries. Fixed so that an empty salt leaves the key unchanged.
- **E3 reproducibility.** The first E3 run sampled frames in filesystem glob order, which is not deterministic.
  - Rerun with a sorted-then-seeded sample, reading frames from a fixed source (the Challenge Validation PNGs).
  - Rebuilding the sample now gives the same 200 frames.
  - Run 1 is kept as `data/eval_E3_perception_run1_nondeterministic.json`. On the 63 frames both runs share, Flash gave the same answer 18 times.
- **Demo clip frames.** The Challenge Validation PNGs (706x396) and the HF frames (854x480) at the same `t` are different images, so mixing them would make playback jump in size and jitter.
  - The VID74 demo window (t=381–561) now uses only HF frames, one every 2 s (91 frames), plus a real-time mp4 at `demo/clips/VID74_381-561.mp4`.
  - With denser frames, P3's real alert is at t=501.
- **Live Watch check (Flash + Argon, VID74 t=381–561, patient P3, 100 calls).**
  - All 91 frames were rated `clear`, so "can't confirm" was not exercised on this clip (E3 shows Flash does hold back on blood and glare elsewhere).
  - Triplet recall vs labels on the window: 41/128.
  - Flash misreads produced an early `clip_before_cvs` alert at t=391 (the real first clip is at t=501).
  - Argon verification flagged real inconsistencies at confidence ~0.5.
- **Guardrail fix from that run.** An Argon correction set `cystic_duct -> cut` directly. That bypassed the rules' `cut_without_two_clips` check and advanced the state on a misread. Corrections may now only advance observational statuses (`visible`, `dissecting`). Clipped / cut / skeletonised and clip counts change only through observed triplets passing the rules. A test and a mutation check guard this.
- **Session reports (plan call D).** Argon writes a report at the end of a live Watch session and of an agent episode batch, using only that session's recorded events. If the call fails, no report is stored. Reports go to Atlas `reports`, or to a local jsonl file when Atlas is not configured.

## 2026-10-24 (M5–M7)

- **Episode goal needs "detached".** Added `State.gb_detach`: 20 s of gallbladder or plate dissection after both cuts. Packing only counts once the gallbladder is detached.
- **Packing in real videos.** Most real videos label packing as `grasp specimen_bag` rather than `pack`, so specimen-bag handling counts as packing. Before this, expert replay completed 40% of episodes; now 100%.
- **Clip counting per action.**
  - A discrete simulator / Imagine action places **one** clip.
  - A real recorded segment replayed with its duration keeps counting multiple clips (one per 4 s).
  - Without the second rule, expert replay showed false `cut_without_two_clips`. A regression test guards this.
- **Float threshold bug.** Ten steps of 0.1 summed to 0.999…, so exposure never reached 1.0 and CVS never completed in the simulator. Fixed with an epsilon (`rules._full`). E4 numbers did not change.
- **Adhesion triplet.** The data has `bipolar,dissect,adhesion` (no hook version). It is added to the agent's action space for P3.
- **Watch starts mid-operation.** The state before the clip window comes from replaying the real labels through the rules *with the patient's modifiers*. Consequences:
  - In VID74 (test), P1 produces no alerts.
  - P3 (synthetic adhesions never cleared by the real surgeon) gets a real `clip_before_cvs` alert at t=504.
  - No test video has a real clip-before-CVS under the proxy; only VID12, a val video, does. That is why the Watch alert demo uses P3.
- **Watch alerts in recordings.** The recorder auto-acknowledges alerts. On replay, alerts pause until a real decision.
- **E5 dynamics.**
  - `--dynamics world_model` runs retrieval and Argon on every step.
  - `--dynamics rules` uses the rules plus a base bleed risk, with no API calls. Use it for cheap baselines.
  - Expert replay always uses the rules, since it is the rules sanity check.
- **Lesson memory scope.** Lessons carry a `scope` (one fresh scope per E5 run and patient), so "agent with lessons" always starts from zero. `risk_factors` defaults to `["general"]` so the vector-search filter works for P1.
- **Precomputed mode is self-contained.**
  - `demo/record.py` writes patients, actions, vocab, demo states, clips, the branch point, Imagine results, Watch timelines (P1 and P3), episodes, lessons and eval cards.
  - It also copies the referenced frames to `demo/clips/frames/`.
  - A fresh clone with no `data/` runs the full demo.
  - The current recordings are offline (rules-only / label replay) and labelled as such. Re-record after the live run.
- **Frontend is a teammate's job.** The backend contract is in `docs/API.md`.

## 2026-10-24

- **Data source.** Labels for all 50 videos come from Hugging Face `Voxel51/cholect50`. The labels sit in a single `samples.json` (~500 MB, 100,863 frames at 1 fps); the plan expected separate label files. That copy has no phase field. Real phases come from the CholecT50 Challenge Validation zip (5 videos: 68, 70, 73, 74, 75), whose labels cover only keyframes (~240 per video). The zip's PNGs are also used as frames. The official Google form has not been submitted yet (it needs the team's identity).
- **Phase vocabulary.** Taken from the official label JSON: `preparation, carlot-triangle-dissection, clipping-and-cutting, gallbladder-dissection, gallbladder-packaging, cleaning-and-coagulation, gallbladder-extraction` (the dataset's own spelling, "carlot"). Phases are **inferred** from triplets (`rules._infer_phase`); checked against the real phases on 1,128 keyframes: **78.3% accuracy**. Extraction is never inferred.
- **Split.** We use the official CholecT50 split from the CAMMA dataloader (`split_selector('cholect50')`): 35 train / 5 val / 10 test videos. Retrieval filters to `split == "train"`; `val` is for prompt tuning only.
- **Instruments.** 6 in the data (no null instrument class); verbs 10; targets 15; triplets 100.
- **CVS proxy tuning (E4).** With `SKELETONISE_SECONDS=20`, 60% of real videos were flagged `clip_before_cvs`, almost all because the cystic plate is rarely labelled as a target before clipping. Surgeons expose it while dissecting the gallbladder. Changes:
  - `PLATE_FROM_GB_DISSECT = 0.5`: each second of `dissect gallbladder` adds half a second of plate exposure.
  - `SKELETONISE_SECONDS = 10`.
  - Result: **20% of real videos flagged** (10/50). The remaining cases are mostly videos where the artery is first dissected after the duct is clipped.
- **Clip counting.** A clip counts at the onset of a clip triplet and again every `CLIP_SECONDS=4` s of continuous clipping, because the labels merge several consecutive clips. Real videos: 0% `cut_without_two_clips`.
- **CBD injury rule.** The plan scores CBD injury but does not define it outside P4. Defined as:
  - P4: any `clip_before_cvs`.
  - All patients: cutting a cystic duct that was never clipped, before CVS.
  - The first version also counted cutting after an unsafe clip. That flagged 20% of real (uneventful) operations, so it was dropped. Real videos now: 0 injuries.
- **Segments.** Segmented by *primary action*, not the full triplet set. The primary action is the most consequential triplet on screen: cut > clip > pack > coagulate > dissect > aspirate/irrigate > grasp > retract, with a small bonus for duct, artery and plate. Gaps of up to 3 unlabelled seconds are bridged. Full-set segmentation splits constantly on background retraction. Result: 4,505 transitions; next action differs from the current one in 94% of them.
- **Embedding load.** Synchronous batched `embed_content` calls (100 texts each, one `Content` per text), not the Batch API. There are only ~1.6k unique summaries, so cost is negligible and it is simpler to debug.
- **Cache.** One sqlite file (`.cache/gemini.sqlite`) instead of one file per response. Embeddings are stored as float32 bytes.

## To record when live

- Atlas tier and hourly price:
- Embedding model name that worked (`gemini-embedding-2` or `-preview`):
- Per-token prices (also in `backend/config.py` → `PRICES`):
