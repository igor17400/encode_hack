import { useEffect, useRef, useState } from "react";
import { get, post, openStream, actionLabel, niceName, STATIC } from "../api";
import { HBars, LineChart } from "../components/charts";
import { ErrorNote, Picker, SimNote, patientOptions } from "../components/ui";

// Fixed entity -> color (never by rank). Validated dark categorical slots 1-4.
export const POLICIES = [
  { key: "agent_lessons", label: "Agent with lessons", color: "var(--series-1)" },
  { key: "random", label: "Random", color: "var(--series-2)" },
  { key: "expert_replay", label: "Expert replay", color: "var(--series-3)" },
  { key: "agent", label: "Agent without lessons", color: "var(--series-4)" },
];
const DYNAMICS = [
  { value: "rules", label: "Rule-engine dynamics" },
  { value: "world_model", label: "Argon world-model dynamics" },
];
const score = (e) => e.n_violations + (e.injury ? 1 : 0);

export default function Robot({ patients }) {
  const [patientId, setPatientId] = useState("P4");
  const [dynamics, setDynamics] = useState("rules");
  const [policy, setPolicy] = useState("agent_lessons");
  const [n, setN] = useState(5);
  const [episodes, setEpisodes] = useState([]);
  const [live, setLive] = useState([]);
  const [steps, setSteps] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [open, setOpen] = useState(null); // episode with trace
  const [running, setRunning] = useState(false);
  const [error, setError] = useState(null);
  const closeRef = useRef(null);
  const logRef = useRef(null);

  const load = () => {
    get("/episodes", { patient_id: patientId, dynamics }).then(setEpisodes).catch((e) => setError(e.message));
    get("/lessons").then(setLessons).catch(() => setLessons([]));
  };
  useEffect(() => {
    load();
    setLive([]);
    setSteps([]);
  }, [patientId, dynamics]);
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
      const r = await post("/episodes", { patient_id: patientId, n_episodes: Number(n), policy, dynamics });
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

  async function openEpisode(id) {
    try {
      setOpen(await get(`/episodes/${id}`));
    } catch (e) {
      setError(e.message);
    }
  }

  const byPolicy = {};
  for (const e of episodes) (byPolicy[e.policy] ||= []).push(e);
  if (live.length) byPolicy[policy] = live;
  const present = POLICIES.filter((p) => byPolicy[p.key]?.length);
  const series = present.map((p) => ({ ...p, values: byPolicy[p.key].map(score) }));
  const completion = present.map((p) => {
    const eps = byPolicy[p.key];
    return { label: p.label, value: eps.filter((e) => e.completed).length / eps.length, note: `${eps.filter((e) => e.completed).length} of ${eps.length} episodes completed` };
  });
  const mean = (xs) => (xs.length ? (xs.reduce((a, b) => a + b, 0) / xs.length).toFixed(1) : "—");

  return (
    <div className="flex flex-col gap-5">
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
        Each step: the agent picks a real surgical action, the world model moves the patient
        {dynamics === "world_model" ? " (rules for hard facts, Gemini Argon + retrieved real transitions for the rest)" : " (rule engine only)"}, and the rules score safety.
      </p>
      <ErrorNote error={error} />

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="card min-w-0">
          <div className="mb-1 text-lg font-semibold">Safety violations per episode · patient {patientId}</div>
          <div className="mb-3 text-sm text-ink-3">
            Violations + bile duct injury per episode (lower is safer). Mean: {series.map((s) => `${s.label} ${mean(s.values)}`).join(" · ") || "—"}
          </div>
          <LineChart series={series} xLabel="episode" yLabel="violations" />
          <div className="label mb-2 mt-5">Completed the operation (clip, cut, detach, pack within the step limit)</div>
          <HBars rows={completion} />
          <p className="mt-3 text-xs text-ink-3">
            The agent improves only through lessons stored in Atlas and retrieved by vector search (in-context learning). No model weights or physical robot are trained.
          </p>
        </div>

        <div className="card flex min-w-0 flex-col">
          <div className="label mb-2">{steps.length ? "Live episode log" : "Episodes (click one to see every step)"}</div>
          {steps.length ? (
            <div ref={logRef} className="h-[26rem] overflow-y-auto pr-2 font-mono text-sm">
              {steps.map((s, i) => (
                <Step key={i} s={s} />
              ))}
            </div>
          ) : (
            <div className="h-[26rem] overflow-y-auto text-sm">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-ink-3">
                    <th className="py-1">Policy</th>
                    <th>Steps</th>
                    <th>Viol.</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>
                  {episodes.map((e) => (
                    <tr key={e.episode_id} className="cursor-pointer border-t border-line hover:bg-surface-2" onClick={() => openEpisode(e.episode_id)}>
                      <td className="py-1">{POLICIES.find((p) => p.key === e.policy)?.label ?? e.policy}</td>
                      <td>{e.steps}</td>
                      <td className={score(e) ? "text-status-serious" : ""}>{score(e)}</td>
                      <td>{e.completed ? "✓" : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!episodes.length && <div className="mt-3 text-ink-3">No episodes recorded for this patient and dynamics yet.</div>}
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="label mb-2">Lessons in Atlas memory</div>
        {lessons.length === 0 ? (
          <div className="text-ink-3">
            No lessons yet. Gemini writes one only after an unsafe episode of “Agent with lessons”, and in the recorded runs the agent was never unsafe.
          </div>
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

      {open && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4" onClick={() => setOpen(null)}>
          <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line bg-surface-1 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="label">Episode trace · {open.patient_id} · {POLICIES.find((p) => p.key === open.policy)?.label} · {open.dynamics} dynamics</div>
            <h3 className="mb-3 text-xl font-semibold">
              {open.steps} steps · {open.n_violations} violations · {open.completed ? "completed" : "not completed"} · reward {open.reward}
            </h3>
            <div className="font-mono text-sm">
              {open.trace.map((s, i) => (
                <Step key={i} s={s} />
              ))}
            </div>
            <button className="btn mt-4" onClick={() => setOpen(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Step({ s }) {
  const bad = s.violations?.length || s.injury;
  const showReason = s.reason && !s.reason.startsWith("uniform random") && !s.reason.startsWith("real action");
  return (
    <div className={`border-b border-line/60 py-1 ${bad ? "text-status-serious" : "text-ink-2"}`}>
      <span className="text-ink-3">#{s.step + 1}</span> {actionLabel(s.action)}{" "}
      <span className="text-ink-3">
        ({s.reward >= 0 ? "+" : ""}
        {s.reward}){s.source ? ` · ${s.source === "argon" ? "Argon" : "rules"}` : ""}
      </span>
      {bad ? <span> ▲ {s.violations.map(niceName).join(", ")}</span> : null}
      {s.completed && <span className="text-status-good"> ✓ completed</span>}
      {s.cites_lesson_ids?.length > 0 && <span className="text-accent"> · cites {s.cites_lesson_ids.length} lesson(s)</span>}
      {showReason && <div className="pl-6 font-sans text-xs text-ink-3">{s.reason}</div>}
    </div>
  );
}
