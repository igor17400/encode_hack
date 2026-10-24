import { useEffect, useMemo, useRef, useState } from "react";
import { get, post, openStream, niceName, STATIC } from "../api";
import { actionShort } from "../lib/describe";
import AnatomyMap, { CvsRing } from "../components/AnatomyMap";
import { HBars } from "../components/charts";
import { Trajectories } from "../components/StateSpaceMap";
import { parseSummary } from "../lib/statespace";
import { ErrorNote, Picker, SimNote, patientOptions } from "../components/ui";
import DreamData from "../components/DreamData";

// Fixed entity -> color (never by rank). Validated dark categorical slots 1-4.
export const POLICIES = [
  { key: "agent_lessons", label: "Agent with lessons", color: "#3987e5" },
  { key: "random", label: "Random", color: "#d95926" },
  { key: "expert_replay", label: "Real surgeons (replay)", color: "#199e70" },
  { key: "agent", label: "Agent without lessons", color: "#c98500" },
];
const DYNAMICS = [
  { value: "rules", label: "Rule-engine dynamics" },
  { value: "world_model", label: "Argon world-model dynamics" },
];
const score = (e) => e.n_violations + (e.injury ? 1 : 0);

// Rebuild the state sequence of an episode from its trace (the rules' summary of every step).
function traceStates(ep) {
  if (!ep?.trace?.length) return [];
  let violations = [];
  const first = parseSummary(ep.trace[0].summary_before);
  return [first, ...ep.trace.map((s) => {
    violations = [...violations, ...(s.violations || [])];
    return { ...parseSummary(s.summary_after), violations, injury: !!s.injury, packed: !!s.completed, gb_detach: s.completed ? 1 : 0 };
  })];
}

export default function Robot({ patients }) {
  const [patientId, setPatientId] = useState("P4");
  const [dynamics, setDynamics] = useState("rules");
  const [policy, setPolicy] = useState("agent_lessons");
  const [n, setN] = useState(5);
  const [episodes, setEpisodes] = useState([]); // full episodes with traces
  const [steps, setSteps] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [selected, setSelected] = useState(null);
  const [frame, setFrame] = useState(0);
  const [playingReplay, setPlayingReplay] = useState(false);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState(null);
  const closeRef = useRef(null);

  const load = async () => {
    try {
      const list = await get("/episodes", { patient_id: patientId, dynamics });
      const full = await Promise.all(list.map((e) => get(`/episodes/${e.episode_id}`).catch(() => null)));
      setEpisodes(full.filter(Boolean));
    } catch (e) {
      setError(e.message);
    }
    get("/lessons").then(setLessons).catch(() => setLessons([]));
  };
  useEffect(() => {
    setSelected(null);
    setEpisodes([]);
    load();
  }, [patientId, dynamics]);
  useEffect(() => () => closeRef.current?.(), []);

  const paths = useMemo(() => episodes.map((ep) => {
    const pol = POLICIES.find((p) => p.key === ep.policy) || POLICIES[1];
    return { id: ep.episode_id, label: pol.label, color: pol.color, faint: ep.policy === "expert_replay",
             states: traceStates(ep), end: ep.injury ? "injury" : ep.completed ? "done" : "timeout" };
  }), [episodes]);

  const sel = episodes.find((e) => e.episode_id === selected);
  const selStates = useMemo(() => traceStates(sel), [sel]);

  // Replay: step through the selected episode on the anatomy map.
  useEffect(() => {
    if (!playingReplay || !selStates.length) return;
    if (frame >= selStates.length - 1) { setPlayingReplay(false); return; }
    const h = setTimeout(() => setFrame((f) => f + 1), 700);
    return () => clearTimeout(h);
  }, [playingReplay, frame, selStates.length]);

  async function run() {
    closeRef.current?.();
    setError(null); setSteps([]); setRunning(true);
    try {
      const r = await post("/episodes", { patient_id: patientId, n_episodes: Number(n), policy, dynamics });
      let done = 0;
      closeRef.current = openStream(r.batch_id, {
        episode_step: (d) => setSteps((x) => [...x.slice(-60), d]),
        episode: () => {
          done += 1;
          if (done >= Number(n)) { setRunning(false); load(); }
        },
      });
    } catch (e) {
      setError(e.message); setRunning(false);
    }
  }

  const byPolicy = {};
  for (const e of episodes) (byPolicy[e.policy] ||= []).push(e);
  const summary = POLICIES.filter((p) => byPolicy[p.key]).map((p) => {
    const eps = byPolicy[p.key];
    return { ...p, n: eps.length, injury: eps.filter((e) => e.injury).length, viol: eps.reduce((a, e) => a + score(e), 0) / eps.length,
             done: eps.filter((e) => e.completed).length };
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="card flex flex-wrap items-end gap-4">
        <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
        <Picker label="Simulator dynamics" value={dynamics} onChange={setDynamics} options={DYNAMICS} />
        <Picker label="Policy" value={policy} onChange={setPolicy} options={POLICIES.map((p) => ({ value: p.key, label: p.label }))} />
        <Picker label="Episodes" value={n} onChange={setN} options={[3, 5, 10].map((v) => ({ value: v, label: String(v) }))} />
        <button className="btn-primary" onClick={run} disabled={running}>
          {running ? "Running…" : STATIC ? `▶ Replay ${n} recorded episodes` : `▶ Run ${n} episodes`}
        </button>
        <SimNote className="ml-auto" />
      </div>
      <p className="-mt-2 text-sm text-ink-3">
        A robot (Gemini Flash) operates on a simulated patient. Each step it picks a real surgical action; the world model
        {dynamics === "world_model" ? " (rules + Gemini Argon grounded in real transitions)" : " (rule engine)"} moves the patient; the rules score safety.
        Every line below is one episode travelling through the world model's state space.
      </p>
      <ErrorNote error={error} />

      <div className="card min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-4">
          <span className="label">Episodes through state space · patient {patientId}</span>
          {summary.map((p) => (
            <span key={p.key} className="flex items-center gap-1.5 text-sm text-ink-2">
              <span className="h-0.5 w-5 rounded" style={{ background: p.color }} /> {p.label}
            </span>
          ))}
        </div>
        <Trajectories paths={paths} selected={selected} onSelect={(id) => { setSelected(id); setFrame(0); setPlayingReplay(true); }} />
        <p className="mt-1 text-xs text-ink-3">✕ ends in bile duct injury · ● completed · ○ ran out of steps · click a line to replay that episode</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="card min-w-0">
          <div className="label mb-2">Outcome per policy ({episodes.length} recorded episodes)</div>
          <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {summary.map((p) => (
              <div key={p.key} className="rounded-lg border border-line bg-surface-2 p-3">
                <div className="flex items-center gap-2 text-sm"><span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />{p.label}</div>
                <div className="mt-1 font-display text-2xl">{p.injury}/{p.n} <span className="text-sm font-normal text-ink-3">injured</span></div>
                <div className="font-mono text-xs text-ink-3">{p.viol.toFixed(1)} violations/episode · {p.done}/{p.n} completed</div>
              </div>
            ))}
          </div>
          <div className="label mb-2">Completed the operation</div>
          <HBars rows={summary.map((p) => ({ label: p.label, value: p.done / p.n, note: `${p.done} of ${p.n}` }))} />
          <div className="mt-4 label">Lessons in Atlas memory</div>
          <p className="mt-1 text-sm text-ink-3">
            {lessons.length
              ? `${lessons.length} lesson(s).`
              : "None. Gemini writes a lesson only after an unsafe episode of the agent with lessons, and in these runs the agent was never unsafe."}
          </p>
        </div>

        <div className="card min-w-0">
          {sel ? (
            <>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="label">Replay · {POLICIES.find((p) => p.key === sel.policy)?.label}</div>
                  <div className="font-display text-lg">step {frame} of {selStates.length - 1}{frame > 0 ? ` · ${actionShort(sel.trace[frame - 1].action)}` : ""}</div>
                </div>
                <CvsRing state={selStates[frame]} size={52} showLabels={false} />
              </div>
              <AnatomyMap state={selStates[frame]} prev={selStates[frame - 1]} />
              <input id="replay" type="range" min="0" max={selStates.length - 1} value={frame} className="mt-2 w-full accent-[#8f9cff]"
                onChange={(e) => { setPlayingReplay(false); setFrame(Number(e.target.value)); }} />
              {frame > 0 && (
                <div className={`mt-1 text-sm ${sel.trace[frame - 1].violations.length ? "text-status-serious" : "text-ink-2"}`}>
                  {sel.trace[frame - 1].violations.length ? `▲ ${sel.trace[frame - 1].violations.map(niceName).join(", ")} · ` : ""}
                  {sel.trace[frame - 1].reason && !sel.trace[frame - 1].reason.startsWith("uniform") && !sel.trace[frame - 1].reason.startsWith("real action") ? sel.trace[frame - 1].reason : ""}
                </div>
              )}
              <button className="btn mt-2 text-sm" onClick={() => { setFrame(0); setPlayingReplay(true); }}>↻ Replay</button>
            </>
          ) : steps.length ? (
            <>
              <div className="label mb-2">Live episode log</div>
              <div className="h-80 overflow-y-auto font-mono text-sm">
                {steps.map((s, i) => (
                  <div key={i} className={`border-b border-line/60 py-1 ${s.violations.length || s.injury ? "text-status-serious" : "text-ink-2"}`}>
                    #{s.step + 1} {actionShort(s.action)} ({s.reward >= 0 ? "+" : ""}{s.reward}){s.violations.length ? ` ▲ ${s.violations.map(niceName).join(", ")}` : ""}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-ink-3">Click an episode line to watch the patient change step by step.</p>
          )}
        </div>
      </div>
      <DreamData />
    </div>
  );
}
