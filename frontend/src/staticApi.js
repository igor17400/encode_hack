// Static backend for the published demo: same routes and SSE event names as backend/api.py, served from the
// recorded live runs bundled under ./data (real Gemini / Atlas outputs). Nothing here generates results:
// anything that was not recorded returns an error that says it needs the live demo.

const DATA = "./data/";
const files = {};
const load = (name) => (files[name] ??= fetch(`${DATA}${name}.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const uid = () => Math.random().toString(36).slice(2, 12);
const LIVE_ONLY = "Not in the recorded demo. This runs in the live demo (laptop backend with Gemini and Atlas).";

// --- in-page event bus (replaces Atlas change streams) -------------------------------------------
const STREAM = { world_state: "state", predictions: "prediction", alerts: "alert", observations: "observation",
  episode_steps: "episode_step", episodes: "episode", report_events: "report", dream_events: "dream" };
const bus = new Map(); // sid -> {subs:Set, history:[]}
const chan = (sid) => (bus.get(sid) ?? bus.set(sid, { subs: new Set(), history: [] }).get(sid));
function publish(sid, collection, doc) {
  const item = [STREAM[collection] ?? collection, { ...doc, session_id: sid }];
  const c = chan(sid);
  c.history.push(item);
  c.subs.forEach((fn) => fn(item));
}
export function openStream(sid, handlers) {
  const c = chan(sid);
  const fn = ([ev, doc]) => handlers[ev]?.(doc);
  handlers.hello?.({ session_id: sid, demo_mode: "static" });
  c.history.forEach(fn);
  c.subs.add(fn);
  return () => c.subs.delete(fn);
}

const sessions = new Map();
const alerts = new Map(); // id -> {doc, resolve}

async function replayWatch(sid, rec, speed) {
  for (const [coll, d] of rec.events) {
    const doc = { ...d };
    if (coll === "alerts") {
      doc._id = uid();
      doc.decision = null;
    }
    if (coll === "alerts") alerts.set(doc._id, { doc, resolve: () => {} }); // never pauses the replay
    publish(sid, coll, doc);
    if (coll === "world_state" && speed > 0) await sleep(2000 / speed);
  }
}

async function replayEpisodes(bid, eps) {
  for (const [i, ep] of eps.entries()) {
    for (const st of ep.trace) {
      publish(bid, "episode_steps", { ...st, _id: uid() });
      await sleep(250);
    }
    const { trace, ...summary } = ep;
    publish(bid, "episodes", { ...summary, _id: uid(), index: i });
  }
}

const fail = (msg) => Promise.reject(new Error(msg));
const noTrace = (eps) => (eps || []).map(({ trace, ...e }) => e);
const key = (a) => a.replaceAll(",", "_");

// --- GET ----------------------------------------------------------------------------------------
export async function get(path, params = {}) {
  const simple = { "/patients": "patients", "/clips": "clips", "/actions": "actions", "/branch_point": "branch_point",
    "/stats": "stats" };
  if (path === "/health") return { ok: true, demo_mode: "static", note: "Research simulation, not clinical advice." };
  if (simple[path]) return (await load(simple[path])) ?? fail(`missing recorded data: ${simple[path]}`);
  if (path === "/usage") return (await load("usage")) ?? {};
  if (path === "/lessons") return (await load("lessons")) ?? [];
  if (path === "/dreams") return (await load("dreams")) ?? [];
  if (path.startsWith("/forecasts/")) return (await load(`forecast_${path.split("/")[2]}`)) ?? fail("no recorded forecasts for this clip");
  if (path === "/forecast_ledger") return (await load("forecast_ledger")) ?? { items: [] };
  if (path === "/dreams/search") return fail(LIVE_ONLY);
  if (path === "/eval/latest") {
    const r = await load(params.name ? `eval_${params.name}` : "eval_latest");
    return r ?? fail("404: no eval run recorded");
  }
  const ep = path.match(/^\/episodes\/(.+)$/);
  if (ep) {
    for (const f of ["episodes_P2", "episodes_P4", "episodes_wm_P2", "episodes_wm_P4"]) {
      const hit = ((await load(f)) ?? []).find((e) => e.episode_id === ep[1]);
      if (hit) return hit;
    }
    return fail("404: episode not recorded");
  }
  if (path === "/episodes") {
    if (!params.patient_id) return [];
    const suffix = params.dynamics === "world_model" ? "_wm" : "";
    return noTrace(await load(`episodes${suffix}_${params.patient_id}`));
  }
  if (path === "/search") {
    const q = (params.q || "").toLowerCase();
    const lessons = (await load("lessons")) ?? [];
    const reports = (await load("reports")) ?? [];
    return [
      ...lessons.filter((l) => l.text.toLowerCase().includes(q)).map((l) => ({ ...l, _collection: "lessons", matched: ["substring"] })),
      ...reports.filter((r) => r.text.toLowerCase().includes(q)).map((r) => ({ ...r, _collection: "reports", matched: ["substring"] })),
    ];
  }
  if (path === "/expert_views") {
    const f = await load(`expert_views_${params.clip}`);
    if (!f) return { t: null, views: [] };
    const near = Object.keys(f.by_t).reduce((a, k) => (Math.abs(+k - params.t) < Math.abs(+a - params.t) ? k : a));
    return { t: +near, views: f.by_t[near] };
  }
  if (path === "/similar_frames") return ((await load("similar_frames")) ?? {})[params.path] ?? [];
  if (path.startsWith("/reports")) {
    const reports = (await load("reports")) ?? [];
    return reports.filter((r) => r.session_id === params.session_id);
  }
  const rec = path.match(/^\/recorded\/([A-Za-z0-9_]+)$/);
  if (rec) return (await load(rec[1])) ?? fail(`404: no recording ${rec[1]}`);
  if (path.startsWith("/transitions/")) return fail(LIVE_ONLY);
  return fail(`404: ${path}`);
}

// --- POST ---------------------------------------------------------------------------------------
async function imagineStep(sid, sess, action, state) {
  // Recorded steps are keyed by patient + action, and for Endoscapes moments also by clip + second.
  const rec = (sess.video_id && (await load(`imagine_${sess.patient_id}_${key(action)}_${sess.video_id}_${state?.t}`)))
    || (await load(`imagine_${sess.patient_id}_${key(action)}`));
  if (!rec || rec.state_in?.t !== state?.t) return fail(LIVE_ONLY);
  publish(sid, "predictions", rec);
  publish(sid, "world_state", { t: rec.state_out.t, state: rec.state_out, source: rec.source });
  const kinds = rec.rules_violations.filter((v) => ["clip_before_cvs", "cut_without_two_clips", "cbd_injury"].includes(v));
  if (!kinds.length && ["high", "injury"].includes(rec.risk_level)) kinds.push(`risk_${rec.risk_level}`);
  const alert_ids = kinds.map((type) => {
    const doc = { _id: uid(), type, t: rec.state_out.t, action, decision: null };
    alerts.set(doc._id, { doc, resolve: () => {} });
    return doc._id;
  });
  return { ...rec, alert_ids };
}

export async function post(path, body = {}) {
  if (path === "/sessions") {
    const sid = `static_${body.mode}_${uid()}`;
    const endo = body.video_id?.startsWith("endo"); // Endoscapes clips start empty and are perceived second by second
    const states = body.video_id && !endo ? await load(`states_${body.video_id}`) : null;
    const state = body.video_id ? states?.[0] ?? null : (await load("branch_point"))?.state;
    sessions.set(sid, { ...body, session_id: sid, state });
    return { session_id: sid, state };
  }
  let m = path.match(/^\/sessions\/([^/]+)\/(imagine|rollout|watch)$/);
  if (m) {
    const [, sid, what] = m;
    const sess = sessions.get(sid);
    if (!sess) return fail("session not found");
    if (what === "imagine") return imagineStep(sid, sess, body.action, body.state ?? sess.state);
    if (what === "rollout") {
      let st = body.state ?? sess.state;
      const steps = [];
      for (const a of body.actions) {
        const r = await imagineStep(sid, sess, a, st);
        steps.push(r);
        st = r.state_out;
      }
      return { steps, final_state: st };
    }
    const rec = (await load(`watch_${sess.video_id}_${sess.patient_id}`)) ?? (await load(`watch_${sess.video_id}_P1`));
    if (!rec) return fail(LIVE_ONLY);
    replayWatch(sid, rec, body.speed == null ? 1 : Number(body.speed)); // 0 = as fast as possible, like the backend
    return { started: true, source: rec.source === "flash" ? "perception" : rec.source, frames: rec.frames };
  }
  m = path.match(/^\/alerts\/([^/]+)\/decision$/);
  if (m) {
    const a = alerts.get(m[1]);
    if (!a) return fail("alert not found");
    if (!body.reason?.trim()) return fail("a reason is required");
    Object.assign(a.doc, { decision: body.decision, reason: body.reason });
    a.resolve(a.doc);
    return { alert_id: m[1], decision: body.decision, reason: body.reason, logged: "in this browser session" };
  }
  if (path === "/episodes") {
    const suffix = body.dynamics === "world_model" ? "_wm" : "";
    const eps = ((await load(`episodes${suffix}_${body.patient_id}`)) ?? []).filter((e) => e.policy === body.policy);
    if (!eps.length) return fail(`No recorded episodes for ${body.patient_id} · ${body.policy}. ${LIVE_ONLY}`);
    const bid = `static_batch_${uid()}`;
    replayEpisodes(bid, eps.slice(0, Number(body.n_episodes) || eps.length));
    return { batch_id: bid, stream: null, source: "recorded" };
  }
  return fail(`404: ${path}`);
}

export const frameUrl = (path) => (path ? `./frames/${path.replace(/\.png$/, ".jpg")}` : null);
