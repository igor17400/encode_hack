import { useEffect, useRef, useState } from "react";
import { get, post, actionLabel, niceName } from "../api";
import AnatomyMap, { CvsRing, diffStates } from "../components/AnatomyMap";
import AlertModal from "../components/AlertModal";
import { FutureTree } from "../components/StateSpaceMap";
import { fmtT } from "../components/AnatomyPanel";
import { ErrorNote, Frame, Picker, RiskBadge, SimNote, SourceTag, patientOptions } from "../components/ui";

const QUICK = [
  { action: "clipper,clip,cystic_duct", label: "Clip the duct now" },
  { action: "hook,dissect,cystic_plate", label: "Keep dissecting the plate" },
];

export default function Imagine({ patients, start, setStart }) {
  const [actions, setActions] = useState([]);
  const [patientId, setPatientId] = useState(start?.patient_id || "P2");
  const [action, setAction] = useState("");
  const [nodes, setNodes] = useState([]);
  const [from, setFrom] = useState(null);
  const [selected, setSelected] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [citation, setCitation] = useState(null);
  const sessions = useRef({}).current;

  useEffect(() => {
    get("/actions").then((a) => { setActions(a); setAction(a[0]); }).catch((e) => setError(e.message));
    if (!start) {
      get("/branch_point")
        .then((bp) => setStart({ state: bp.state, video_id: bp.video_id, patient_id: "P2", label: `CholecT50 ${bp.video_id} @ ${fmtT(bp.t)} · just before the real first clip` }))
        .catch((e) => setError(e.message));
    }
  }, []);
  useEffect(() => {
    setNodes([]); setFrom(null); setSelected(null);
    if (start?.patient_id) setPatientId(start.patient_id);
  }, [start]);

  async function sessionFor(pid) {
    if (!sessions[pid]) sessions[pid] = (await post("/sessions", { mode: "imagine", patient_id: pid, video_id: start?.video_id })).session_id;
    return sessions[pid];
  }

  async function run(act, pid = patientId) {
    if (!start) return;
    setBusy(true); setError(null);
    try {
      const parent = nodes.find((n) => n.id === from);
      const state = parent ? parent.result.state_out : start.state;
      const r = await post(`/sessions/${await sessionFor(pid)}/imagine`, { action: act, state, seed: 0 });
      const node = { id: `${Date.now()}-${Math.random()}`, parent: from, patient_id: pid, result: r, action: act,
                     state: r.state_out, risk: r.risk_level };
      setNodes((x) => [...x, node]);
      setSelected(node.id);
      if (r.alert_ids?.length) {
        setAlert({ _id: r.alert_ids[0], type: r.rules_violations[0] || `risk_${r.risk_level}`, t: r.state_out.t, action: act,
          evidence: (r.neighbours || []).slice(0, 3).map((n) => ({ id: n.id, summary: `${n.summary} → next: ${n.next_action}`, video_id: n.video_id })) });
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  async function compare(act) {
    for (const pid of ["P1", "P2", "P4"]) await run(act, pid);
  }

  const sel = nodes.find((n) => n.id === selected);
  const r = sel?.result;
  const changes = r ? diffStates(r.state_in, r.state_out) : [];
  const fromNode = nodes.find((n) => n.id === from);

  return (
    <div className="flex flex-col gap-4">
      <div className="card flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="label">Imagine from</div>
            <div className="font-display text-xl">{fromNode ? `${actionLabel(fromNode.action)} (${fromNode.patient_id})` : start?.label || "loading…"}</div>
          </div>
          <SimNote />
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
          {QUICK.map((q) => (
            <button key={q.action} className="btn-primary" disabled={busy || !start} onClick={() => run(q.action)}>{q.label}</button>
          ))}
          <button className="btn" disabled={busy || !start} onClick={() => compare(QUICK[0].action)}>Same action on P1 · P2 · P4</button>
          <Picker label="Any real action" value={action} onChange={setAction} options={actions.map((a) => ({ value: a, label: actionLabel(a) }))} />
          <button className="btn" disabled={busy || !start} onClick={() => run(action)}>Imagine</button>
          {fromNode && <button className="text-sm text-accent underline" onClick={() => setFrom(null)}>back to the starting moment</button>}
        </div>
      </div>
      <ErrorNote error={error} />

      <div className="card min-w-0">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <span className="label">Possible futures · each node is a predicted patient state</span>
          <span className="text-xs text-ink-3">x: how far the operation has progressed · y: risk to the patient · click a node</span>
        </div>
        <FutureTree root={start?.state} nodes={nodes} selected={selected} onSelect={setSelected} />
        {!nodes.length && <p className="mt-2 text-ink-3">Pick an action. The world model predicts the next patient state and places it on the map.</p>}
      </div>

      {r && (
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="card min-w-0">
            <div className="mb-2 flex items-center justify-between"><span className="label">Before</span><CvsRing state={r.state_in} size={52} showLabels={false} /></div>
            <AnatomyMap state={r.state_in} />
          </div>
          <div className="card min-w-0">
            <div className="mb-2 flex items-center justify-between"><span className="label">After · {actionLabel(r.action)}</span><CvsRing state={r.state_out} size={52} showLabels={false} /></div>
            <AnatomyMap state={r.state_out} prev={r.state_in} />
            <ul className="mt-2 flex flex-col gap-1 text-sm">
              {changes.map((c, i) => <li key={i} className="text-ink-1"><span className="text-accent">→</span> {c.text}</li>)}
              {!changes.length && <li className="text-ink-3">No anatomy change.</li>}
            </ul>
          </div>
          <div className="card flex min-w-0 flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm text-ink-3">patient {sel.patient_id}</span>
              <RiskBadge level={r.risk_level} large />
            </div>
            {r.rules_violations.length > 0 && (
              <div className="rounded-lg border border-status-serious/60 bg-status-serious/10 px-3 py-2 text-sm">
                <b>Rule engine:</b> {r.rules_violations.map(niceName).join(", ")}. A hard constraint; the model cannot override it.
              </div>
            )}
            <div>
              <div className="label mb-1">Why (Gemini Argon, grounded in real cases)</div>
              <p className="text-ink-1">{r.explanation}</p>
              <p className="mt-1 text-xs text-ink-3">bleeding risk {Math.round(r.bleeding_risk * 100)}% · confidence {Math.round(r.confidence * 100)}%</p>
            </div>
            <div>
              <div className="label mb-1">Real recorded transitions it cites</div>
              <div className="flex flex-wrap gap-1.5">
                {r.cited_transition_ids.map((id) => (
                  <button key={id} className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 font-mono text-xs hover:border-accent" onClick={() => setCitation({ r, id })}>{id}</button>
                ))}
                {!r.cited_transition_ids.length && <span className="text-sm text-ink-3">none</span>}
              </div>
            </div>
            <Frame path={r.frame?.path} label="closest real frame" caption={r.frame?.video_id ?? "offline"} />
            <SourceTag source={r.source} />
            <button className="btn text-sm" onClick={() => setFrom(sel.id)}>⑂ Continue from this future</button>
          </div>
        </div>
      )}

      {citation && <CitationModal {...citation} onClose={() => setCitation(null)} />}
      <AlertModal alert={alert} onClose={() => setAlert(null)} />
    </div>
  );
}

function CitationModal({ r, id, onClose }) {
  const nb = r.neighbours.find((n) => n.id === id);
  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-2xl border border-line bg-surface-1 p-6" onClick={(e) => e.stopPropagation()}>
        <div className="label">Real recorded transition (CholecT50, train split)</div>
        <h3 className="mb-3 text-xl font-semibold">{id}</h3>
        {nb && (
          <dl className="grid grid-cols-[8rem_1fr] gap-2 text-sm">
            <dt className="text-ink-3">operation</dt><dd>{nb.video_id} · {niceName(nb.phase).replaceAll("-", " ")}</dd>
            <dt className="text-ink-3">before</dt><dd className="font-mono text-xs">{nb.summary}</dd>
            <dt className="text-ink-3">after</dt><dd className="font-mono text-xs">{nb.state_after_summary}</dd>
            <dt className="text-ink-3">surgeon next did</dt><dd>{actionLabel(nb.next_action)}</dd>
            <dt className="text-ink-3">similarity</dt><dd>{nb.score?.toFixed(3)}</dd>
          </dl>
        )}
        <button className="btn mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
