"""FastAPI backend: sessions, Watch, Imagine, robot episodes, alerts, eval, SSE.

Live mode streams Atlas change streams over SSE. DEMO_MODE=precomputed serves recorded JSON from
demo/precomputed/ with the same shapes and timing, through an in-memory event bus (no network needed).

Run: uvicorn backend.api:app --reload
"""
from __future__ import annotations

import asyncio
import json
import random
import threading
import time
import uuid
from collections import defaultdict
from contextlib import asynccontextmanager
from typing import Literal

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from sse_starlette.sse import EventSourceResponse

from backend import agent, config, perception, rules, simulator, world_model
from backend.schema import Action, Patient, State, TransitionResult

ALERT_VIOLATIONS = {rules.V_CLIP_BEFORE_CVS, rules.V_CUT_WITHOUT_CLIPS, rules.V_CBD_INJURY}
STREAM_COLLECTIONS = {"world_state": "state", "predictions": "prediction", "alerts": "alert",
                      "observations": "observation", "episode_steps": "episode_step", "episodes": "episode"}
PRECOMPUTED = config.DEMO_MODE == "precomputed"
NOTE = "Research simulation, not clinical advice."


def _db():
    from backend import db

    return db


# --- in-memory bus (precomputed mode) ---------------------------------------------
class Bus:
    def __init__(self):
        self.subs: dict[str, list[asyncio.Queue]] = defaultdict(list)
        self.history: dict[str, list[tuple[str, dict]]] = defaultdict(list)

    def publish(self, sid: str, collection: str, doc: dict) -> None:
        item = (STREAM_COLLECTIONS.get(collection, collection), doc)
        self.history[sid].append(item)
        for q in self.subs[sid]:
            q.put_nowait(item)

    def subscribe(self, sid: str) -> asyncio.Queue:
        q: asyncio.Queue = asyncio.Queue()
        self.subs[sid].append(q)
        return q


bus = Bus()
memory_alerts: dict[str, dict] = {}
memory_sessions: dict[str, dict] = {}


class BusSink:
    """Perception sink for precomputed mode: publish to the bus, pause on alerts until a decision."""

    def __init__(self, sid: str):
        self.sid = sid

    def emit(self, collection: str, doc: dict) -> None:
        doc = dict(doc, session_id=self.sid)
        if collection == "alerts":
            memory_alerts[doc["_id"]] = doc
        bus.publish(self.sid, collection, doc)

    async def wait_decision(self, alert_id: str) -> dict | None:
        for _ in range(1200):
            if memory_alerts.get(alert_id, {}).get("decision"):
                return memory_alerts[alert_id]
            await asyncio.sleep(0.5)
        return None


@asynccontextmanager
async def lifespan(app: FastAPI):
    if config.MONGODB_URI and not PRECOMPUTED:
        try:
            created = await asyncio.to_thread(_db().ensure_indexes)
            print("[api] indexes ok", created or "")
        except Exception as e:
            print(f"[api] Atlas unavailable at startup: {e}")
    yield


app = FastAPI(title="Second Look", lifespan=lifespan, description=f"{NOTE} Patients are synthetic.")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
DEMO_FRAMES = config.ROOT / "demo" / "clips" / "frames"  # frames the recordings use, committed to the repo


@app.get("/frames/{path:path}")
def frame(path: str):
    """Reference / demo frames: data/frames first, then the committed demo copies."""
    for root in (config.FRAMES_DIR, DEMO_FRAMES):
        f = (root / path).resolve()
        if f.is_file() and root.resolve() in f.parents:
            return FileResponse(f, media_type="image/png")
    raise HTTPException(404, "frame not found")


# --- helpers ------------------------------------------------------------------
def pc(name: str):
    """Recorded JSON for precomputed mode (None if missing or in live mode)."""
    p = config.PRECOMPUTED / f"{name}.json"
    if PRECOMPUTED and p.exists():
        return json.loads(p.read_text())
    return None


def load_patients() -> dict[str, Patient]:
    p = config.DATA / "patients.json"
    if not p.exists():
        p = config.PRECOMPUTED / "patients.json"
    if not p.exists():
        raise HTTPException(500, "run pipeline/05_patients.py first")
    return {d["patient_id"]: Patient(**d) for d in json.loads(p.read_text())}


def get_patient(pid: str) -> Patient:
    pats = load_patients()
    if pid not in pats:
        raise HTTPException(404, f"unknown patient {pid}")
    return pats[pid]


def video_state_at(video_id: str, t: int) -> State:
    p = config.STATES / f"{video_id}.json"
    if not p.exists():
        p = config.PRECOMPUTED / f"states_{video_id}.json"
    if not p.exists():
        raise HTTPException(404, f"no states for {video_id}")
    states = json.loads(p.read_text())
    return State(**min(states, key=lambda s: abs(s["t"] - t)))


def get_session(sid: str) -> dict:
    if PRECOMPUTED or sid in memory_sessions:
        if sid not in memory_sessions:
            raise HTTPException(404, "session not found")
        return memory_sessions[sid]
    s = _db().col("sessions").find_one({"_id": sid})
    if not s:
        raise HTTPException(404, "session not found")
    return s


def latest_state(sid: str) -> State | None:
    if PRECOMPUTED:
        return memory_sessions.get(sid, {}).get("state")
    d = _db().col("world_state").find_one({"session_id": sid}, sort=[("created_at", -1)])
    return State(**d["state"]) if d else None


def raise_alerts(sid: str, r: TransitionResult) -> list[str]:
    kinds = [v for v in r.rules_violations if v in ALERT_VIOLATIONS]
    if r.risk_level in ("high", "injury") and not kinds:
        kinds = [f"risk_{r.risk_level}"]
    ids = []
    for k in dict.fromkeys(kinds):
        aid = uuid.uuid4().hex
        doc = {"_id": aid, "session_id": sid, "t": r.state_out.t, "type": k, "created_at": time.time(),
               "action": r.action.key(), "prediction_id": r.prediction_id,
               "evidence_ids": [n.id for n in r.neighbours[:3]],
               "evidence": [n.model_dump() for n in r.neighbours[:3]], "decision": None, "reason": None}
        if PRECOMPUTED:
            memory_alerts[aid] = doc
            bus.publish(sid, "alerts", doc)
        else:
            _db().col("alerts").insert_one(doc)
        ids.append(aid)
    return ids


def _check_action(a: str) -> str:
    try:
        Action.parse(a)
    except Exception:
        raise HTTPException(422, "action must be 'instrument,verb,target'")
    return a


# --- basic routes ---------------------------------------------------------------
@app.get("/health")
def health():
    return {"ok": True, "demo_mode": config.DEMO_MODE, "note": NOTE}


@app.get("/patients")
def patients():
    return [p.model_dump() for p in load_patients().values()]


@app.get("/clips")
def clips():
    """Demo clips: test-split videos that have frames on disk."""
    if (r := pc("clips")) is not None:
        return r
    split = json.loads(config.SPLIT.read_text())
    out = []
    for v in split["test"]:
        d = config.FRAMES_DIR / v
        frames = sorted(int(p.stem) for p in d.glob("*.png")) if d.exists() else []
        if frames:
            out.append({"video_id": v, "n_frames": len(frames), "t_start": frames[0], "t_end": frames[-1]})
    return out


@app.get("/actions")
def actions():
    """Allowed actions for Imagine and the robot agent (real triplets)."""
    if not config.TRANSITIONS.exists() and (r := pc("actions")) is not None:
        return r
    return agent.allowed_actions()


@app.get("/branch_point")
def branch_point():
    """The demo's recorded 'Branch from here' moment (video, t, state)."""
    p = config.PRECOMPUTED / "branch_point.json"
    if not p.exists():
        raise HTTPException(404, "run demo/record.py first")
    return json.loads(p.read_text())


# --- sessions / imagine ------------------------------------------------------------
class SessionIn(BaseModel):
    mode: Literal["watch", "imagine"]
    patient_id: str
    video_id: str | None = None


@app.post("/sessions")
def create_session(body: SessionIn):
    patient = get_patient(body.patient_id)
    st = video_state_at(body.video_id, 0) if body.video_id else rules.initial_state(patient.modifiers)
    if PRECOMPUTED:
        sid = f"demo_{body.mode}_{patient.patient_id}_{body.video_id or 'none'}_{uuid.uuid4().hex[:6]}"
        memory_sessions[sid] = {"_id": sid, "session_id": sid, "mode": body.mode, "patient_id": patient.patient_id,
                                "video_id": body.video_id, "state": st}
        return {"session_id": sid, "state": st.model_dump()}
    sid = uuid.uuid4().hex
    _db().col("sessions").insert_one({"_id": sid, "session_id": sid, "mode": body.mode,
                                      "patient_id": patient.patient_id, "video_id": body.video_id,
                                      "created_at": time.time()})
    _db().col("world_state").insert_one({"_id": uuid.uuid4().hex, "session_id": sid, "t": st.t,
                                         "created_at": time.time(), "state": st.model_dump(),
                                         "source": "rules", "confidence": 1.0})
    return {"session_id": sid, "state": st.model_dump()}


class ImagineIn(BaseModel):
    action: str
    from_t: int | None = None
    state: State | None = None
    seed: int | None = None


def _start_state(sess: dict, from_t: int | None, state: State | None) -> State:
    if state is not None:
        return state
    if from_t is not None:
        if not sess.get("video_id"):
            raise HTTPException(400, "from_t needs a session with a video_id")
        return video_state_at(sess["video_id"], from_t)
    st = latest_state(sess["_id"])
    if st is None:
        raise HTTPException(400, "no state for session")
    return st


def _imagine_step(sid: str, sess: dict, st: State, action: str, rng: random.Random) -> dict:
    patient = get_patient(sess["patient_id"])
    if PRECOMPUTED:
        rec = pc(f"imagine_{patient.patient_id}_{action.replace(',', '_')}")
        if rec is not None and rec.get("state_in", {}).get("t") == st.t:
            r = TransitionResult(**{k: v for k, v in rec.items() if k in TransitionResult.model_fields})
        else:  # offline: rules-only step, clearly labelled
            r = world_model.step(st, action, patient, rng, use_argon=False, retrieve=False, with_frame=False)
        memory_sessions[sid]["state"] = r.state_out
        bus.publish(sid, "predictions", {"session_id": sid, **r.model_dump()})
        bus.publish(sid, "world_state", {"session_id": sid, "t": r.state_out.t, "state": r.state_out.model_dump(),
                                         "source": r.source})
    else:
        r = world_model.step(st, action, patient, rng, session_id=sid)
    return r.model_dump() | {"alert_ids": raise_alerts(sid, r)}


@app.post("/sessions/{sid}/imagine")
def imagine(sid: str, body: ImagineIn):
    sess = get_session(sid)
    st = _start_state(sess, body.from_t, body.state)
    return _imagine_step(sid, sess, st, _check_action(body.action), random.Random(body.seed))


class RolloutIn(BaseModel):
    actions: list[str]
    from_t: int | None = None
    state: State | None = None
    seed: int | None = None


@app.post("/sessions/{sid}/rollout")
def rollout(sid: str, body: RolloutIn):
    sess = get_session(sid)
    st = _start_state(sess, body.from_t, body.state)
    rng = random.Random(body.seed)
    steps = []
    for a in body.actions:
        r = _imagine_step(sid, sess, st, _check_action(a), rng)
        steps.append(r)
        st = State(**r["state_out"])
        if st.injury:
            break
    return {"steps": steps, "final_state": st.model_dump()}


# --- watch ----------------------------------------------------------------------
class WatchIn(BaseModel):
    t_from: int | None = None
    t_to: int | None = None
    source: Literal["flash", "labels"] = "flash"
    speed: float = 1.0
    verify: bool = True


async def _replay(sid: str, events: list, speed: float, gap_s: float = perception.FRAME_EVERY_S) -> None:
    """Replay recorded [collection, doc] events at the recorded pace; pause on alerts until a decision."""
    sink = BusSink(sid)
    for coll, doc in events:
        doc = dict(doc)
        if coll == "alerts":
            doc["_id"] = uuid.uuid4().hex
            doc["decision"] = None
        sink.emit(coll, doc)
        if coll == "alerts":
            await sink.wait_decision(doc["_id"])
        if coll == "world_state" and speed > 0:
            await asyncio.sleep(gap_s / speed)


@app.post("/sessions/{sid}/watch")
async def watch(sid: str, body: WatchIn):
    sess = get_session(sid)
    if not sess.get("video_id"):
        raise HTTPException(400, "watch needs a session with a video_id")
    patient = get_patient(sess["patient_id"])
    if PRECOMPUTED:
        rec = pc(f"watch_{sess['video_id']}_{patient.patient_id}") or pc(f"watch_{sess['video_id']}_P1")
        if rec is not None:
            asyncio.create_task(_replay(sid, rec["events"], body.speed))
            return {"started": True, "source": "precomputed", "frames": rec.get("frames")}
        sink, src = BusSink(sid), "labels"  # offline: replay real labels through the rules
    else:
        sink, src = perception.AtlasSink(), body.source
    frames = perception.clip_frames(sess["video_id"], body.t_from, body.t_to)
    if not frames:
        raise HTTPException(404, "no frames on disk for that clip / window")
    asyncio.create_task(perception.run_watch(sid, sess["video_id"], patient, sink, t_from=body.t_from,
                                             t_to=body.t_to, source=src, speed=body.speed, verify=body.verify,
                                             report=src == "flash"))
    return {"started": True, "source": src, "frames": len(frames)}


# --- alerts -----------------------------------------------------------------------
class DecisionIn(BaseModel):
    decision: Literal["ack", "override"]
    reason: str


@app.post("/alerts/{aid}/decision")
def alert_decision(aid: str, body: DecisionIn):
    if not body.reason.strip():
        raise HTTPException(422, "a reason is required")
    if PRECOMPUTED:
        a = memory_alerts.get(aid)
        if not a:
            raise HTTPException(404, "alert not found")
        a.update(decision=body.decision, reason=body.reason)
        return {"alert_id": aid, "session_id": a["session_id"], "decision": body.decision, "reason": body.reason}
    a = _db().col("alerts").find_one({"_id": aid})
    if not a:
        raise HTTPException(404, "alert not found")
    doc = {"_id": uuid.uuid4().hex, "alert_id": aid, "session_id": a["session_id"],
           "decision": body.decision, "reason": body.reason, "created_at": time.time()}
    _db().col("acknowledgements").insert_one(doc)
    _db().col("alerts").update_one({"_id": aid}, {"$set": {"decision": body.decision, "reason": body.reason}})
    return doc


# --- episodes / lessons ------------------------------------------------------------
class EpisodesIn(BaseModel):
    patient_id: str
    n_episodes: int = 10
    policy: Literal["agent", "agent_lessons", "random", "expert_replay"] = "agent_lessons"
    dynamics: Literal["world_model", "rules"] = "world_model"
    scope: str = "default"


def _run_batch(batch_id: str, body: EpisodesIn, emit) -> None:
    patient = get_patient(body.patient_id)
    store = agent.LessonStore(scope=body.scope)
    test_videos = json.loads(config.SPLIT.read_text())["test"]
    finished = []
    for i in range(body.n_episodes):
        eid = uuid.uuid4().hex
        kw = {"expert_video": test_videos[i % len(test_videos)]} if body.policy == "expert_replay" else {}
        ep = simulator.run_episode(
            patient, body.policy, rng=random.Random(i), dynamics=body.dynamics,
            lessons=store if body.policy == "agent_lessons" else None, episode_id=eid, batch_id=batch_id,
            on_step=lambda rec: emit("episode_steps", {"_id": uuid.uuid4().hex, "session_id": batch_id, **rec}), **kw)
        simulator.save_episode(ep)
        finished.append(ep)
        emit("episodes", {"session_id": batch_id, **{k: v for k, v in ep.items() if k not in ("trace", "_id")},
                          "_id": uuid.uuid4().hex, "index": i})
    if body.policy in ("agent", "agent_lessons"):
        from backend import reports

        try:
            reports.write(batch_id, "episodes", patient, reports.episode_events(finished), None,
                          [v for e in finished for v in e["violations"]])
        except Exception as e:
            print(f"[episodes] batch report not written: {e}")


@app.post("/episodes")
async def start_episodes(body: EpisodesIn):
    batch_id = uuid.uuid4().hex
    if PRECOMPUTED:
        rec = pc(f"episodes_{body.patient_id}")
        if rec is None:
            raise HTTPException(404, "no recorded episodes for that patient")
        eps = [e for e in rec if e["policy"] == body.policy][: body.n_episodes]

        async def replay():
            for i, ep in enumerate(eps):
                for st in ep["trace"]:
                    bus.publish(batch_id, "episode_steps", {**st, "session_id": batch_id})
                    await asyncio.sleep(0.25)
                bus.publish(batch_id, "episodes", {"session_id": batch_id, "index": i,
                                                   **{k: v for k, v in ep.items() if k != "trace"}})

        asyncio.create_task(replay())
        return {"batch_id": batch_id, "stream": f"/stream/{batch_id}", "source": "precomputed"}

    def emit(coll, doc):
        _db().col(coll).insert_one(doc)

    threading.Thread(target=_run_batch, args=(batch_id, body, emit), daemon=True).start()
    return {"batch_id": batch_id, "stream": f"/stream/{batch_id}"}


@app.get("/episodes")
def list_episodes(patient_id: str | None = None, batch_id: str | None = None, limit: int = 200):
    if PRECOMPUTED:
        rec = pc(f"episodes_{patient_id}") if patient_id else None
        return [{k: v for k, v in e.items() if k != "trace"} for e in (rec or [])]
    q = {k: v for k, v in (("patient_id", patient_id), ("batch_id", batch_id)) if v}
    return list(_db().col("episodes").find(q, {"trace": 0, "final_state": 0}).sort("created_at", 1).limit(limit))


@app.get("/episodes/{eid}")
def get_episode(eid: str):
    if PRECOMPUTED:
        for p in config.PRECOMPUTED.glob("episodes_*.json"):
            for e in json.loads(p.read_text()):
                if e["episode_id"] == eid:
                    return e
        raise HTTPException(404)
    e = _db().col("episodes").find_one({"_id": eid})
    if not e:
        raise HTTPException(404)
    return e


@app.get("/lessons")
def lessons(scope: str = "default"):
    """Lessons with the episode they came from and how many later episodes cited them."""
    if (r := pc("lessons")) is not None:
        return r
    ls = [l.model_dump() for l in agent.LessonStore(scope=scope).all()]
    if config.MONGODB_URI:
        for l in ls:
            l["times_cited"] = _db().col("episodes").count_documents({"lessons_used": l["lesson_id"]})
    return ls


# --- eval / usage / search ---------------------------------------------------------
@app.get("/eval/latest")
def eval_latest(name: str | None = None):
    """Latest eval_runs document (default: the latest E1 run) for the accuracy card."""
    if (r := pc(f"eval_{name}" if name else "eval_latest")) is not None:
        return r
    if config.MONGODB_URI and not PRECOMPUTED:
        q = {"name": name} if name else {"name": {"$regex": "^E1"}}
        d = _db().col("eval_runs").find_one(q, sort=[("created_at", -1)])
        if d:
            d["_id"] = str(d["_id"])
            return d
    p = config.DATA / (f"eval_{name}.json" if name else "eval_latest.json")
    if p.exists():
        d = json.loads(p.read_text())
        d.pop("items", None)
        return d
    raise HTTPException(404, "no eval run yet")


@app.get("/stats")
def stats():
    """Dataset and pipeline facts computed from the pipeline outputs (recorded copy when data/ is absent)."""
    from backend import stats as st

    if config.TRANSITIONS.exists():
        return st.compute()
    p = config.PRECOMPUTED / "stats.json"
    if p.exists():
        return json.loads(p.read_text())
    raise HTTPException(404, "run the pipeline first")


@app.get("/transitions/{tid}")
def transition(tid: str):
    d = _db().col("transitions").find_one({"_id": tid}, {"embedding": 0})
    if not d:
        raise HTTPException(404)
    return d


@app.get("/usage")
def usage():
    if PRECOMPUTED:
        return pc("usage") or {}
    return _db().usage_totals()


@app.get("/search")
def search(q: str):
    if PRECOMPUTED or not config.MONGODB_URI:
        from backend import reports

        ql = q.lower()
        lessons = pc("lessons") if PRECOMPUTED else [l.model_dump() for l in agent.LessonStore().all()]
        recs = pc("reports") if PRECOMPUTED else reports.local_search(q)
        return ([dict(l, _collection="lessons") for l in (lessons or []) if ql in l["text"].lower()]
                + [dict(r, _collection="reports") for r in (recs or []) if ql in r["text"].lower()])
    return _db().text_search(q)


# --- SSE ----------------------------------------------------------------------
def _watch_changes(sid: str, loop: asyncio.AbstractEventLoop, queue: asyncio.Queue, stop: threading.Event):
    pipeline = [{"$match": {"operationType": "insert", "ns.coll": {"$in": list(STREAM_COLLECTIONS)},
                            "fullDocument.session_id": sid}}]
    with _db().db().watch(pipeline, max_await_time_ms=1000) as stream:
        while not stop.is_set():
            change = stream.try_next()
            if change is None:
                continue
            event = STREAM_COLLECTIONS[change["ns"]["coll"]]
            loop.call_soon_threadsafe(queue.put_nowait, (event, change["fullDocument"]))


@app.get("/stream/{sid}")
async def stream(sid: str):
    """SSE events: state, prediction, alert, observation, episode_step, episode (+ hello / ping)."""
    stop = threading.Event()
    if PRECOMPUTED:
        queue = bus.subscribe(sid)
        for item in bus.history[sid]:  # late subscribers get what already happened
            queue.put_nowait(item)
    else:
        queue = asyncio.Queue()
        loop = asyncio.get_running_loop()
        threading.Thread(target=_watch_changes, args=(sid, loop, queue, stop), daemon=True).start()

    async def gen():
        try:
            yield {"event": "hello", "data": json.dumps({"session_id": sid, "demo_mode": config.DEMO_MODE})}
            while True:
                try:
                    event, doc = await asyncio.wait_for(queue.get(), timeout=15)
                    yield {"event": event, "data": json.dumps(doc, default=str)}
                except asyncio.TimeoutError:
                    yield {"event": "ping", "data": "{}"}
        finally:
            stop.set()
            if PRECOMPUTED and queue in bus.subs[sid]:
                bus.subs[sid].remove(queue)

    return EventSourceResponse(gen())
