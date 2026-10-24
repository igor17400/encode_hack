import { useEffect, useRef, useState } from "react";
import { get, post, actionLabel, niceName } from "../api";
import AnatomyPanel, { fmtT } from "../components/AnatomyPanel";
import AlertModal from "../components/AlertModal";
import { ErrorNote, Frame, Picker, RiskBadge, SimNote, SourceTag, patientOptions } from "../components/ui";

const QUICK = [
  { action: "clipper,clip,cystic_duct", label: "Clip duct now" },
  { action: "hook,dissect,cystic_plate", label: "Keep dissecting plate" },
];

function diff(a, b) {
  const out = [];
  for (const k of ["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate"]) {
    const x = a.structures[k], y = b.structures[k];
    if (x.status !== y.status) out.push(`${niceName(k)}: ${x.status} → ${y.status}`);
    else if (Math.round(x.exposure * 100) !== Math.round(y.exposure * 100))
      out.push(`${niceName(k)}: exposure ${Math.round(x.exposure * 100)}% → ${Math.round(y.exposure * 100)}%`);
    if (x.clips !== y.clips) out.push(`${niceName(k)}: clips ${x.clips} → ${y.clips}`);
  }
  const ca = Object.values(a.cvs).filter(Boolean).length, cb = Object.values(b.cvs).filter(Boolean).length;
  if (ca !== cb) out.push(`CVS ${ca}/3 → ${cb}/3`);
  if (a.bleeding !== b.bleeding) out.push(b.bleeding ? "bleeding starts" : "bleeding stops");
  if (!a.structures.common_bile_duct.at_risk && b.structures.common_bile_duct.at_risk) out.push("common bile duct now at risk");
  if (!a.injury && b.injury) out.push("bile duct injury");
  return out;
}

function ResultCard({ node, onContinue, onSelectCitation, path }) {
  const r = node.result;
  const changes = diff(r.state_in, r.state_out);
  return (
    <div className="card flex flex-col gap-3">
      <div className="text-xs text-ink-3">{path}</div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-xl font-semibold">{actionLabel(r.action)}</div>
          <div className="text-sm text-ink-3">patient {node.patient_id} · t {fmtT(r.state_in.t)} → {fmtT(r.state_out.t)}</div>
        </div>
        <RiskBadge level={r.risk_level} large />
      </div>

      {r.rules_violations.length > 0 && (
        <div className="rounded-lg border border-status-serious/60 bg-status-serious/10 px-3 py-2 text-sm">
          <b>Rule engine:</b> {r.rules_violations.map(niceName).join(", ")} (hard constraint, the model cannot override)
        </div>
      )}

      <div>
        <div className="label mb-1">Before → after</div>
        {changes.length ? (
          <ul className="list-inside list-disc text-ink-2">
            {changes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        ) : (
          <div className="text-ink-3">No anatomy change.</div>
        )}
      </div>

      <div>
        <div className="label mb-1">Explanation</div>
        <p className="text-ink-1">{r.explanation}</p>
        <div className="mt-1 text-sm text-ink-3">
          bleeding risk {Math.round(r.bleeding_risk * 100)}% · confidence {Math.round(r.confidence * 100)}%
          {r.cannot_tell?.length ? ` · can't tell: ${r.cannot_tell.join("; ")}` : ""}
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <div className="min-w-0">
          <div className="label mb-1">Cited real transitions</div>
          {r.cited_transition_ids.length ? (
            <div className="flex flex-wrap gap-1.5">
              {r.cited_transition_ids.map((id) => (
                <button key={id} className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-sm hover:border-accent" onClick={() => onSelectCitation(r, id)}>
                  {id}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-sm text-ink-3">none (offline recording)</span>
          )}
          <div className="label mb-1 mt-3">Likely next actions</div>
          {r.likely_next_actions.length ? (
            r.likely_next_actions.map((a) => (
              <div key={a.action} className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-16 rounded bg-surface-3">
                  <div className="h-1.5 rounded bg-ink-3" style={{ width: `${Math.round(a.probability * 100)}%` }} />
                </div>
                <span className="text-ink-2">{actionLabel(a.action)}</span>
              </div>
            ))
          ) : (
            <span className="text-sm text-ink-3">—</span>
          )}
        </div>
        <Frame path={r.frame?.path} label="closest real frame" caption={r.frame ? `${r.frame.video_id ?? ""}` : "offline"} />
      </div>

      <div className="flex items-center justify-between">
        <SourceTag source={r.source} />
        <button className="btn text-sm" onClick={() => onContinue(node)}>
          ⑂ Continue from this future
        </button>
      </div>
    </div>
  );
}

export default function Imagine({ patients, start, setStart }) {
  const [actions, setActions] = useState([]);
  const [patientId, setPatientId] = useState(start?.patient_id || "P2");
  const [action, setAction] = useState("");
  const [nodes, setNodes] = useState([]); // {id, parent, patient_id, result}
  const [from, setFrom] = useState(null); // node id to branch from (null = root)
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [citation, setCitation] = useState(null);

  useEffect(() => {
    get("/actions").then((a) => {
      setActions(a);
      setAction(a[0]);
    }).catch((e) => setError(e.message));
    if (!start) {
      get("/branch_point")
        .then((bp) => setStart({ state: bp.state, video_id: bp.video_id, patient_id: "P2", label: `${bp.video_id} @ ${fmtT(bp.t)} (before the real first clip)` }))
        .catch((e) => setError(e.message));
    }
  }, []);

  useEffect(() => {
    setNodes([]);
    setFrom(null);
    if (start?.patient_id) setPatientId(start.patient_id);
  }, [start]);

  const sessions = useRef({}).current;
  async function sessionFor(pid) {
    if (!sessions[pid]) sessions[pid] = (await post("/sessions", { mode: "imagine", patient_id: pid, video_id: start?.video_id })).session_id;
    return sessions[pid];
  }

  async function run(act, pid = patientId) {
    if (!start) return;
    setBusy(true);
    setError(null);
    try {
      const parent = nodes.find((n) => n.id === from);
      const state = parent ? parent.result.state_out : start.state;
      const sid = await sessionFor(pid);
      const r = await post(`/sessions/${sid}/imagine`, { action: act, state, seed: 0 });
      const node = { id: `${Date.now()}-${Math.random()}`, parent: from, patient_id: pid, result: r };
      setNodes((x) => [...x, node]);
      if (r.alert_ids?.length) {
        setAlert({
          _id: r.alert_ids[0],
          type: r.rules_violations[0] || `risk_${r.risk_level}`,
          t: r.state_out.t,
          action: act,
          evidence: (r.neighbours || []).slice(0, 3).map((n) => ({ id: n.id, summary: `${n.summary} → next: ${n.next_action}`, video_id: n.video_id })),
        });
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

  const pathOf = (node) => {
    const parts = [];
    let n = node;
    while (n) {
      parts.unshift(`${n.patient_id}: ${actionLabel(n.result.action)}`);
      n = nodes.find((x) => x.id === n.parent);
    }
    return ["start", ...parts].join("  →  ");
  };
  const fromNode = nodes.find((n) => n.id === from);
  const shown = nodes.slice(-6);

  return (
    <div className="flex flex-col gap-5">
      <div className="card flex flex-wrap items-end gap-4">
        <div className="flex flex-col">
          <span className="label">Branching from</span>
          <span className="font-semibold">{fromNode ? pathOf(fromNode) : start?.label || "loading…"}</span>
          {fromNode && (
            <button className="text-left text-sm text-ink-3 underline" onClick={() => setFrom(null)}>
              back to the start state
            </button>
          )}
        </div>
        <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
        {QUICK.map((q) => (
          <button key={q.action} className="btn-primary" disabled={busy || !start} onClick={() => run(q.action)}>
            {q.label}
          </button>
        ))}
        <Picker label="Any action" value={action} onChange={setAction} options={actions.map((a) => ({ value: a, label: actionLabel(a) }))} />
        <button className="btn" disabled={busy || !start} onClick={() => run(action)}>
          Imagine
        </button>
        <button className="btn" disabled={busy || !start} onClick={() => compare(QUICK[0].action)} title="Same action, three patients">
          Compare “clip duct” on P1 · P2 · P4
        </button>
        <SimNote className="ml-auto" />
      </div>
      <ErrorNote error={error} />

      <div className="grid gap-5 lg:grid-cols-[22rem_1fr]">
        <div className="flex flex-col gap-4">
          <div>
            <div className="label mb-2">Start state</div>
            <AnatomyPanel state={fromNode ? fromNode.result.state_out : start?.state} compact />
          </div>
          {nodes.length > 0 && (
            <div className="card">
              <div className="label mb-2">Branch tree</div>
              <Tree nodes={nodes} parent={null} depth={0} from={from} setFrom={setFrom} />
            </div>
          )}
        </div>

        <div className="grid content-start gap-5 xl:grid-cols-2">
          {shown.length === 0 && (
            <div className="card col-span-full text-lg text-ink-3">
              Pick a patient and an action. Try “Clip duct now” vs “Keep dissecting plate”, then switch patient and compare.
            </div>
          )}
          {shown.map((n) => (
            <ResultCard key={n.id} node={n} path={pathOf(n)} onContinue={(x) => setFrom(x.id)} onSelectCitation={(r, id) => setCitation({ r, id })} />
          ))}
        </div>
      </div>

      {citation && <CitationModal {...citation} onClose={() => setCitation(null)} />}
      <AlertModal alert={alert} onClose={() => setAlert(null)} />
    </div>
  );
}

function Tree({ nodes, parent, depth, from, setFrom }) {
  return nodes
    .filter((n) => n.parent === parent)
    .map((n) => (
      <div key={n.id} style={{ marginLeft: depth * 16 }}>
        <button
          className={`my-0.5 flex w-full items-center gap-2 rounded px-2 py-1 text-left text-sm hover:bg-surface-2 ${from === n.id ? "bg-surface-3" : ""}`}
          onClick={() => setFrom(n.id)}
        >
          <span className="text-ink-3">{depth ? "└" : "•"}</span>
          <span className="flex-1">
            {n.patient_id} · {actionLabel(n.result.action)}
          </span>
          <span className="text-xs text-ink-3">{n.result.risk_level}</span>
        </button>
        <Tree nodes={nodes} parent={n.id} depth={depth + 1} from={from} setFrom={setFrom} />
      </div>
    ));
}

function CitationModal({ r, id, onClose }) {
  const [detail, setDetail] = useState(null);
  const nb = r.neighbours.find((n) => n.id === id);
  useEffect(() => {
    get(`/transitions/${id}`).then(setDetail).catch(() => setDetail(null));
  }, [id]);
  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-2xl border border-line bg-surface-1 p-6" onClick={(e) => e.stopPropagation()}>
        <div className="label">Real recorded transition</div>
        <h3 className="mb-3 text-xl font-semibold">{id}</h3>
        {nb && (
          <dl className="grid grid-cols-[8rem_1fr] gap-2 text-sm">
            <dt className="text-ink-3">video</dt>
            <dd>{nb.video_id} ({niceName(nb.phase).replaceAll("-", " ")})</dd>
            <dt className="text-ink-3">before</dt>
            <dd>{nb.summary}</dd>
            <dt className="text-ink-3">after</dt>
            <dd>{nb.state_after_summary}</dd>
            <dt className="text-ink-3">next action</dt>
            <dd>{actionLabel(nb.next_action)}</dd>
            <dt className="text-ink-3">similarity</dt>
            <dd>{nb.score?.toFixed(3)}</dd>
          </dl>
        )}
        {detail && <div className="mt-3 text-sm text-ink-3">{detail.duration_s} s segment, t {fmtT(detail.t_start)}–{fmtT(detail.t_end)}</div>}
        <button className="btn mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
