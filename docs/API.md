# Second Look API: frontend guide

The backend is FastAPI on `http://localhost:8000`, with interactive docs at `/docs`. Every route returns the same shapes in live mode and in `DEMO_MODE=precomputed`, so you can build the whole UI against precomputed mode now.

## Run the backend without keys or data

```bash
cd second-look
uv venv .venv && uv pip install -r requirements.txt
DEMO_MODE=precomputed .venv/bin/uvicorn backend.api:app --port 8000
```

Precomputed mode reads `demo/precomputed/*.json` and `demo/clips/frames/`. Both are in the repo, so you don't need `data/`, Gemini or Atlas. CORS is open.

Recordings are made with `python demo/record.py --mode offline|live`. The current recordings were made **offline**, so every result says so:

- `source: "rules_only"` on Imagine results.
- `source: "labels"` on Watch events.
- No lesson texts yet.

They will be re-recorded live with the same shapes. Show `source` in small print; don't hide it.

## The demo flow and the calls behind it

| Tab | Calls |
| --- | --- |
| Watch | `GET /clips` → `GET /patients` → `POST /sessions {mode:"watch", patient_id, video_id}` → open `GET /stream/{session_id}` → `POST /sessions/{id}/watch {speed}` |
| Imagine | `GET /branch_point` → `POST /sessions {mode:"imagine", patient_id, video_id}` → `POST /sessions/{id}/imagine {action, state}` (or `/rollout {actions, state}`) |
| Train the robot | `POST /episodes {patient_id, n_episodes, policy}` → open `GET /stream/{batch_id}` → `GET /episodes?patient_id=` → `GET /lessons` |
| Evidence | `GET /eval/latest` (E1), `GET /eval/latest?name=E5_agent` / `E5_world_model` / `E3_perception`, `GET /stats` (dataset facts computed from the pipeline), `GET /usage`, `GET /search?q=` |

Demo specifics:

- **Watch:** use `VID74` with patient **P1** (a safe operation, no alerts) or **P3** (adhesions). For P3, the same real actions trigger a `clip_before_cvs` alert at t=504.
- **Alerts:** an alert **pauses** playback until you call `POST /alerts/{id}/decision {decision: "ack" | "override", reason}`. A reason is required.
- **Imagine:** the demo buttons are "Clip duct now" (`clipper,clip,cystic_duct`) and "Keep dissecting plate" (`hook,dissect,cystic_plate`), from the branch point state. Recorded for P1, P2 and P4.
- **Train the robot:** policies are `random`, `expert_replay`, `agent`, `agent_lessons`. The offline recordings only have `random` and `expert_replay` until the live run.

More routes:
- `GET /clips` now lists **Endoscapes clips** (`source: "endoscapes"`, `op`, `video`, `experts_cvs_t`, `model_cvs_t`, `agreement`) alongside the CholecT50 clip. Watch on an Endoscapes clip replays Igor's recorded run (no model calls) and ends with `state.decision_point: true`.
- `GET /clip_video/{name}`: mp4 for a clip (`clips[i].video`).
- `GET /expert_views?clip=&t=`: how surgeons judged visually similar views (nearest cached second; verdicts per criterion, `score`, `source`).
- `GET /recorded/{name}`: a recorded demo file from `demo/precomputed` (used by the Story screen), read-only.
- `GET /similar_frames?path=VID74/000501.png&k=3`: closest real train frames by image similarity (`score`, `path`, `video_id`, `t`).
- `GET /reports?session_id=`: Argon session and batch reports.
- `GET /episodes?patient_id=&dynamics=rules|world_model` and `GET /episodes/{episode_id}` (full `trace`).
- `GET /search?q=`: hybrid results with `_collection`, `matched` (`text` / `vector`) and `score`.
- SSE `report` event: the end-of-Watch session report.
- Static build: `VITE_STATIC=1` uses `src/staticApi.js` (same routes, recorded data); `scripts/build_static.sh` builds `dist-static/`.

Images: `GET /frames/{path}`, where `path` is e.g. `VID74/000435.png` from any `frame_path` or `frame.path` field.

## SSE: `GET /stream/{id}`

Use `new EventSource(url)` and listen per event name. Each `data` field is JSON.

| event | when | key fields |
| --- | --- | --- |
| `hello` | on connect | `session_id`, `demo_mode` |
| `observation` | Watch: each frame (one every ≥ 2 s of video) | `t`, `frame_path`, `labels[] {instrument, verb, target, confidence}`, `view_quality`, `can_confirm`, `reason_if_not`, `source` |
| `state` | Watch / Imagine: new anatomy state | `t`, `state` (State), `source` (`perception` / `labels` / `argon` / `rules`), `held`, `banner`, `frame_path`, `contradictions?`, `done?` |
| `alert` | safety violation | `_id`, `t`, `type`, `frame_path`, `evidence[] {path, summary, label}`, `paused` |
| `prediction` | Imagine step | a TransitionResult |
| `episode_step` | each robot step | `episode_id`, `step`, `action`, `reason`, `violations[]`, `reward`, `cum_reward`, `risk_level`, `injury`, `completed`, `cites_lesson_ids[]` |
| `episode` | episode finished | `episode_id`, `policy`, `steps`, `n_violations`, `injury`, `completed`, `reward`, `lessons_used[]`, `lesson_written`, `index` |
| `ping` | every 15 s idle | none |

How to use the Watch events:

- **Banner:** when `state.held` is true, show `state.banner`. It is either "view obscured, can't confirm" or, when the perception call itself failed, "perception error, state not updated" (`error` is set on the event).
- **End of playback:** `state.done: true` marks the end.
- **Alert modal:** on `alert`, open the modal with the 3 evidence frames side by side, plus Acknowledge and Override buttons (Override asks for a reason).

## Shapes

**State** (the anatomy panel):

```jsonc
{
  "t": 435,
  "phase": "carlot-triangle-dissection",  // dataset spelling; phase_inferred=true → label it "inferred"
  "phase_inferred": true,
  "structures": {                          // show gallbladder, cystic_duct, cystic_artery, cystic_plate
    "cystic_duct": {"status": "skeletonised", "exposure": 1.0, "clips": 0, "at_risk": false}
    // status order: unseen → visible → dissecting → skeletonised → clipped → cut
  },
  "cvs": {"c1_triangle_cleared": true, "c2_plate_exposed": true, "c3_two_structures": false},
  "bleeding": false,
  "view_quality": "clear",
  "violations": ["clip_before_cvs"],
  "injury": false,
  "gb_detach": 0.0,
  "packed": false
}
```

Ignore `common_bile_duct`: it is a hidden structure. Show it only as "CBD at risk" when `structures.common_bile_duct.at_risk` is true. Ignore `active`, `last_bleed_t`, `adhesion_*` and `phase_idx`.

**TransitionResult** (the Imagine result card):

```jsonc
{
  "state_in": State,
  "state_out": State,                     // diff these for before → after
  "action": {"instrument": "clipper", "verb": "clip", "target": "cystic_duct"},
  "rules_violations": ["clip_before_cvs"],
  "risk_level": "low | moderate | high | injury",
  "bleeding_risk": 0.1,
  "bled": false,
  "explanation": "≤ 2 sentences",
  "cited_transition_ids": ["VID31_00412"],
  "neighbours": [{"id", "video_id", "phase", "summary", "action", "state_after_summary", "next_action", "score"}],
  "likely_next_actions": [{"action": "hook,dissect,cystic_plate", "probability": 0.6}],
  "confidence": 0.7,
  "cannot_tell": ["..."],
  "frame": {"path": "VID31/000415.png", "label": "closest real frame", "summary": "..."},  // may be null
  "source": "argon | rules_only",
  "note": "Research simulation, not clinical advice.",
  "alert_ids": ["..."]
}
```

- A cited transition's detail comes from `GET /transitions/{id}`. This route needs live mode (Atlas).
- `GET /eval/latest` returns `{name, split, metrics, created_at, note}`.
  - E1 metrics: `model_top1`, `model_top3`, `bigram_top3`, `majority_top3`, `retrieval_top3`, `n`, `calibration[] {bin, n, accuracy, mean_conf}`, `ece`.
  - The current file has **baselines only** (no `model_*` yet), so render the card so it handles missing model numbers.
- `GET /eval/latest?name=E5_agent` returns `metrics[patient_id][policy] = {mean_violations, injury_rate, completion_rate, mean_reward, violations_per_episode[]}`. Use this for the violations-per-episode chart.

## Guardrails the UI must keep

These come from the build plan.

- Every prediction screen says **"Research simulation"**. Never use "diagnosis", and never tell a surgeon what to do.
- The Imagine image is always labelled **"closest real frame"**. Never call it generated.
- Every alert needs Acknowledge or Override, and both carry a reason.
- "Train the robot" means lessons stored in Atlas. Never claim that model weights or a physical robot were trained.
- The Evidence tab shows "benchmark on public data, not clinical validation", with sample sizes next to every number.
