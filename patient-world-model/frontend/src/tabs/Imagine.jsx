import { useEffect, useRef, useState } from "react";
import { get, post, niceName, STATIC } from "../api";
import { actionShort } from "../lib/describe";
import { FutureTree } from "../components/StateSpaceMap";
import PredictionFlow from "../components/PredictionFlow";
import { fmtT } from "../components/AnatomyPanel";
import { ErrorNote, Picker, SimNote, patientOptions } from "../components/ui";

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
  const fromNode = nodes.find((n) => n.id === from);

  return (
    <div className="flex flex-col gap-4">
      <div className="card flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="label">Imagine from</div>
            <div className="font-display text-xl">{fromNode ? `${actionShort(fromNode.action)} (${fromNode.patient_id})` : start?.label || "loading…"}</div>
          </div>
          <SimNote />
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
          {QUICK.map((q) => (
            <button key={q.action} className="btn-primary" disabled={busy || !start} onClick={() => run(q.action)}>{q.label}</button>
          ))}
          <button className="btn" disabled={busy || !start} onClick={() => compare(QUICK[0].action)}>Same action on P1 · P2 · P4</button>
          {STATIC ? (
            <p className="max-w-xs self-end text-sm text-ink-3">Any other action needs a new Gemini prediction, so it runs in the live demo only. This page replays recorded steps.</p>
          ) : (
            <>
              <Picker label="Any real action" value={action} onChange={setAction} options={actions.map((a) => ({ value: a, label: actionShort(a) }))} />
              <button className="btn" disabled={busy || !start} onClick={() => run(action)}>Imagine</button>
            </>
          )}
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

      {r && <PredictionFlow r={r} patientId={sel.patient_id} onCite={(id) => setCitation({ r, id })} onContinue={() => setFrom(sel.id)} />}

      {citation && <CitationModal {...citation} onClose={() => setCitation(null)} />}
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
            <dt className="text-ink-3">surgeon next did</dt><dd>{actionShort(nb.next_action)}</dd>
            <dt className="text-ink-3">similarity</dt><dd>{nb.score?.toFixed(3)}</dd>
          </dl>
        )}
        <button className="btn mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
