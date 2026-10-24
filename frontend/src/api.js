import * as staticApi from "./staticApi";

export const STATIC = import.meta.env.VITE_STATIC === "1";
export const API = import.meta.env.VITE_API_BASE || "http://localhost:8000";

async function handle(res) {
  if (!res.ok) {
    let detail = res.statusText;
    try {
      detail = (await res.json()).detail || detail;
    } catch {
      /* not json */
    }
    throw new Error(`${res.status}: ${detail}`);
  }
  return res.json();
}

function httpGet(path, params) {
  const qs = params ? "?" + new URLSearchParams(Object.entries(params).filter(([, v]) => v != null)) : "";
  return fetch(`${API}${path}${qs}`).then(handle);
}

function httpPost(path, body) {
  return fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body ?? {}),
  }).then(handle);
}

/** Open the SSE stream for a session / batch. handlers: {eventName: (data) => void}. Returns close(). */
function httpStream(id, handlers) {
  const es = new EventSource(`${API}/stream/${id}`);
  for (const [ev, fn] of Object.entries(handlers)) {
    es.addEventListener(ev, (e) => fn(JSON.parse(e.data)));
  }
  return () => es.close();
}

export const get = STATIC ? staticApi.get : httpGet;
export const post = STATIC ? staticApi.post : httpPost;
export const openStream = STATIC ? staticApi.openStream : httpStream;
export const frameUrl = STATIC ? staticApi.frameUrl : (path) => (path ? `${API}/frames/${path}` : null);
export const videoUrl = (name) => (!name ? null : STATIC ? `./clips/${name}` : `${API}/clip_video/${name}`);

const nice = (s) => s.replaceAll("_", " ");
export const actionLabel = (a) => {
  if (!a) return "";
  const [i, v, t] = typeof a === "string" ? a.split(",") : [a.instrument, a.verb, a.target];
  return `${i} · ${v} · ${nice(t)}`;
};
export const niceName = nice;
