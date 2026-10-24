import { useEffect, useRef, useState } from "react";
import { get, post, openStream, actionLabel, niceName } from "../api";
import { LineChart } from "../components/charts";
import { ErrorNote, Picker, SimNote, patientOptions } from "../components/ui";

// Fixed entity -> color (never by rank). Validated dark categorical slots 1-4.
export const POLICIES = [
  { key: "agent_lessons", label: "Agent with lessons", color: "var(--series-1)" },
  { key: "random", label: "Random", color: "var(--series-2)" },
  { key: "expert_replay", label: "Expert replay", color: "var(--series-3)" },
  { key: "agent", label: "Agent without lessons", color: "var(--series-4)" },
];
const score = (e) => e.n_violations + (e.injury ? 1 : 0);

export default function Robot({ patients }) {
  const [patientId, setPatientId] = useState("P2");
  const [policy, setPolicy] = useState("agent_lessons");
  const [n, setN] = useState(10);
  const [episodes, setEpisodes] = useState([]);
  const [live, setLive] = useState([]); // episodes finished in this batch
  const [steps, setSteps] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState(null);
  const closeRef = useRef(null);
  const logRef = useRef(null);

  const load = () => {
    get("/episodes", { patient_id: patientId }).then(setEpisodes).catch((e) => setError(e.message));
    get("/lessons").then(setLessons).catch(() => setLessons([]));
  };
  useEffect(() => {
    load();
    setLive([]);
    setSteps([]);
  }, [patientId]);
  useEffect(() => () => closeRef.current?.(), []);
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [steps]);

  async function run() {
    closeRef.current?.();
    setError(null);
    setSteps([]);
    setLive([]);
    setRunning(true);
    try {
      const r = await post("/episodes", { patient_id: patientId, n_episodes: Number(n), policy });
      let done = 0;
      closeRef.current = openStream(r.batch_id, {
        episode_step: (d) => setSteps((x) => [...x.slice(-200), d]),
        episode: (d) => {
          setLive((x) => [...x, d]);
          done += 1;
          if (done >= Number(n)) {
            setRunning(false);
            load();
          }
        },
      });
    } catch (e) {
      setError(e.message);
      setRunning(false);
    }
  }

  // Chart: violations per episode, one line per policy (recorded episodes, plus the live batch).
  const byPolicy = {};
  for (const e of episodes) (byPolicy[e.policy] ||= []).push(score(e));
  if (live.length) byPolicy[`${policy}`] = live.map(score);
  const series = POLICIES.filter((p) => byPolicy[p.key]?.length).map((p) => ({ ...p, values: byPolicy[p.key] }));
  const mean = (xs) => (xs.length ? (xs.reduce((a, b) => a + b, 0) / xs.length).toFixed(1) : "—");

  return (
    <div className="flex flex-col gap-5">
      <div className="card flex flex-wrap items-end gap-4">
        <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
        <Picker label="Policy" value={policy} onChange={setPolicy} options={POLICIES.map((p) => ({ value: p.key, label: p.label }))} />
        <Picker label="Episodes" value={n} onChange={setN} options={[3, 5, 10].map((v) => ({ value: v, label: String(v) }))} />
        <button className="btn-primary" onClick={run} disabled={running}>
          {running ? "Running…" : `▶ Run ${n} episodes`}
        </button>
        <SimNote className="ml-auto" />
      </div>
      <ErrorNote error={error} />

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="card">
          <div className="mb-1 text-lg font-semibold">Safety violations per episode · patient {patientId}</div>
          <div className="mb-3 text-sm text-ink-3">
            Violations + bile duct injury per episode (lower is safer). Mean:{" "}
            {series.map((s) => `${s.label} ${mean(s.values)}`).join(" · ") || "—"}
          </div>
          <LineChart series={series} xLabel="episode" yLabel="violations" />
          <p className="mt-3 text-xs text-ink-3">
            The agent improves through lessons stored in Atlas and retrieved by vector search (in-context learning). No model weights or physical robot are trained.
          </p>
        </div>

        <div className="card flex flex-col">
          <div className="label mb-2">Live episode log</div>
          <div ref={logRef} className="h-[22rem] overflow-y-auto pr-2 font-mono text-sm">
            {steps.length === 0 && <div className="font-sans text-ink-3">Run episodes to see each step.</div>}
            {steps.map((s, i) => (
              <div key={i} className={`border-b border-line/60 py-1 ${s.violations.length || s.injury ? "text-status-serious" : "text-ink-2"}`}>
                <span className="text-ink-3">#{s.step + 1}</span> {actionLabel(s.action)}{" "}
                <span className="text-ink-3">({s.reward >= 0 ? "+" : ""}{s.reward})</span>
                {s.violations.length > 0 && <span> ▲ {s.violations.map(niceName).join(", ")}</span>}
                {s.completed && <span className="text-status-good"> ✓ completed</span>}
                {s.reason && !s.reason.startsWith("uniform random") && !s.reason.startsWith("real action") && (
                  <div className="pl-6 font-sans text-xs text-ink-3">{s.reason}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="label mb-2">Lessons in Atlas memory</div>
        {lessons.length === 0 ? (
          <div className="text-ink-3">No lessons yet. They are written by Gemini after an unsafe episode of “Agent with lessons”.</div>
        ) : (
          <div className="flex flex-col gap-2">
            {lessons.map((l) => (
              <div key={l.lesson_id} className="flex items-start gap-3 rounded-lg bg-surface-2 p-3">
                <span className="rounded-full border border-line px-2 py-0.5 text-xs text-ink-3">{niceName(l.violation_type)}</span>
                <span className="flex-1">{l.text}</span>
                <span className="whitespace-nowrap text-sm text-ink-3">
                  from {l.patient_id} · cited {l.times_cited ?? 0}×
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
