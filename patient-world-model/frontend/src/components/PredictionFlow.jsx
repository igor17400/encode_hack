import { niceName } from "../api";
import { actionShort } from "../lib/describe";
import AnatomyMap, { CvsRing, diffStates } from "./AnatomyMap";
import { parseSummary } from "../lib/statespace";
import { Frame, RISK, RiskBadge, SourceTag } from "./ui";

// One world-model step laid out the way backend/world_model.py step() computes it:
// 1 rules (hard facts) -> 2 Atlas memory (real transitions) -> 3 Gemini Argon (soft predictions) -> 4 predicted patient.

const RISK_ORDER = ["low", "moderate", "high", "injury"];
// Mirrors backend/world_model.py risk_floor().
export function riskFloor(r) {
  const v = r.rules_violations || [];
  if (r.state_out?.injury || v.includes("cbd_injury")) return "injury";
  if (v.includes("clip_before_cvs") || v.includes("cut_without_two_clips")) return "high";
  return "low";
}

const SHORT = { gallbladder: "gallbladder", cystic_duct: "duct", cystic_artery: "artery", cystic_plate: "plate" };
export function summaryChips(summary) {
  if (!summary) return [];
  const s = parseSummary(summary);
  const out = [];
  for (const [k, short] of Object.entries(SHORT)) {
    const x = s.structures[k];
    if (!x || x.status === "unseen") continue;
    const pct = x.status === "dissecting" ? ` ${Math.round(x.exposure * 100)}%` : "";
    out.push(`${short} ${x.status}${pct}${x.clips ? ` · ${x.clips} clip${x.clips === 1 ? "" : "s"}` : ""}`);
  }
  out.push(`CVS ${Object.values(s.cvs).filter(Boolean).length}/3`);
  if (summary.includes("cbd=at_risk")) out.push("bile duct at risk");
  return out;
}

function Step({ n, title, sub, children, tone }) {
  return (
    <section className="card flex min-w-0 flex-col gap-3" style={tone ? { borderColor: tone } : undefined}>
      <header>
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-surface-0">{n}</span>
          <h3 className="font-display text-lg leading-tight">{title}</h3>
        </div>
        <p className="mt-0.5 text-xs text-ink-3">{sub}</p>
      </header>
      {children}
    </section>
  );
}

function Bar({ value, color = "#8f9cff", label }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
        <div className="h-full rounded-full" style={{ width: `${Math.round(value * 100)}%`, background: color }} />
      </div>
      <span className="w-28 shrink-0 text-right font-mono text-ink-2">{label}</span>
    </div>
  );
}

// Case ids in Argon's explanation become numbered markers matching the case cards.
function Explained({ text, ids, onCite }) {
  if (!text) return null;
  return (
    <p className="text-sm leading-relaxed text-ink-1">
      {text.split(/(VID\d+_\d+)/g).map((p, i) => {
        const k = ids.indexOf(p);
        if (k < 0) return <span key={i}>{p}</span>;
        return (
          <button key={i} onClick={() => onCite(p)} title={p}
            className="mx-0.5 inline-grid h-5 min-w-5 place-items-center rounded bg-accent/20 px-1 align-middle font-mono text-[11px] text-accent hover:bg-accent/40">
            {k + 1}
          </button>
        );
      })}
    </p>
  );
}

export default function PredictionFlow({ r, patientId, onCite, onContinue }) {
  const changes = diffStates(r.state_in, r.state_out);
  const floor = riskFloor(r);
  const ids = (r.neighbours || []).map((n) => n.id);
  const cited = new Set(r.cited_transition_ids || []);
  const raised = RISK_ORDER.indexOf(r.risk_level) > RISK_ORDER.indexOf(floor);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface-1 px-4 py-3">
        <span className="label">How this prediction was made</span>
        <span className="font-display text-lg">{actionShort(r.action)}</span>
        <span className="text-sm text-ink-3">patient {patientId}</span>
        <span className="ml-auto"><RiskBadge level={r.risk_level} large /></span>
      </div>
      <div className="rounded-lg border border-line px-3 py-2 text-xs text-ink-3">
        Counterfactual: this asks "what if", so there is no real outcome to check it against. Forecasts checked against what really happened play on the Watch tab (VID74).
      </div>
      <div className="grid gap-3 lg:grid-cols-2 2xl:grid-cols-4">
        <Step n="1" title="Rules: the hard facts" sub="Deterministic surgical rules. They have the final say." tone={r.rules_violations.length ? "#ec835a" : undefined}>
          <div className="flex items-center justify-between"><span className="label">Before</span><CvsRing state={r.state_in} size={44} showLabels={false} /></div>
          <AnatomyMap state={r.state_in} mini />
          <ul className="flex flex-col gap-1 text-sm">
            {changes.map((c, i) => <li key={i}><span className="text-accent">→</span> {c.text}</li>)}
            {!changes.length && <li className="text-ink-3">No change to the anatomy.</li>}
          </ul>
          {r.rules_violations.length > 0 ? (
            <div className="rounded-lg border border-status-serious/60 bg-status-serious/10 px-3 py-2 text-sm">
              <b className="text-status-serious">▲ {r.rules_violations.map(niceName).join(", ")}</b>
              <div className="text-ink-2">A hard safety rule broke. The model cannot override it.</div>
            </div>
          ) : <div className="text-sm text-status-good">✓ No safety rule broken</div>}
          <div className="text-sm">Risk floor: <b style={{ color: RISK[floor].color }}>{RISK[floor].label}</b> <span className="text-ink-3">· the model can raise it, never lower it</span></div>
        </Step>
        <Step n="2" title="Memory: real operations" sub={`Atlas vector search: the ${ids.length || ""} most similar moments in real CholecT50 operations (training split).`}>
          {!ids.length && <p className="text-sm text-ink-3">No retrieved cases.</p>}
          <ol className="flex flex-col gap-2">
            {(r.neighbours || []).map((n, i) => (
              <li key={n.id}>
                <button onClick={() => onCite(n.id)} className={`w-full rounded-lg border p-2 text-left text-xs hover:border-accent ${cited.has(n.id) ? "border-accent/60 bg-accent/5" : "border-line"}`}>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="grid h-5 min-w-5 place-items-center rounded bg-accent/20 px-1 font-mono text-[11px] text-accent">{i + 1}</span>
                    <span className="font-mono text-ink-2">{n.video_id}</span>
                    {cited.has(n.id) && <span className="text-accent">cited</span>}
                    <span className="ml-auto font-mono text-ink-3">{Math.round((n.score || 0) * 100)}% similar</span>
                  </div>
                  <div className="flex flex-wrap gap-1">{summaryChips(n.summary).map((c) => <span key={c} className="rounded bg-surface-2 px-1.5 py-0.5">{c}</span>)}</div>
                  <div className="mt-1 text-ink-2">surgeon did <b>{actionShort(n.action)}</b>{n.next_action ? <> → then <b>{actionShort(n.next_action)}</b></> : null}</div>
                </button>
              </li>
            ))}
          </ol>
        </Step>
        <Step n="3" title="Gemini Argon weighs the cases" sub="Soft predictions that cite the real cases. Can only raise the risk floor.">
          <Explained text={r.explanation} ids={ids} onCite={onCite} />
          <div className="flex flex-col gap-1.5">
            <Bar value={r.bleeding_risk} color="#d03b3b" label={`bleeding ${Math.round(r.bleeding_risk * 100)}%`} />
            <Bar value={r.confidence} label={`confidence ${Math.round(r.confidence * 100)}%`} />
          </div>
          <div className="text-sm">
            Risk: floor <b style={{ color: RISK[floor].color }}>{RISK[floor].label.toLowerCase()}</b> → final <b style={{ color: RISK[r.risk_level].color }}>{RISK[r.risk_level].label.toLowerCase()}</b>
            <span className="text-ink-3"> {raised ? "· raised by Argon" : "· set by the rules"}</span>
          </div>
          {r.likely_next_actions?.length > 0 && (
            <div>
              <div className="label mb-1">Likely next actions</div>
              {r.likely_next_actions.map((a) => (
                <div key={a.action} className="mb-1">
                  <div className="text-xs">{actionShort(a.action)}</div>
                  <Bar value={a.probability} color="#5aa9a0" label={`${Math.round(a.probability * 100)}%`} />
                </div>
              ))}
            </div>
          )}
          {r.cannot_tell?.length > 0 && (
            <details className="text-xs text-ink-2">
              <summary className="cursor-pointer text-ink-1">What it says it can't tell ({r.cannot_tell.length})</summary>
              <ul className="mt-1 flex flex-col gap-1">{r.cannot_tell.map((c) => <li key={c}>· {c}</li>)}</ul>
            </details>
          )}
          <SourceTag source={r.source} />
        </Step>
        <Step n="4" title="Predicted patient" sub="Anatomy from the rules; risk and bleeding from Argon.">
          <div className="flex items-center justify-between"><span className="label">After</span><CvsRing state={r.state_out} size={44} showLabels={false} /></div>
          <AnatomyMap state={r.state_out} prev={r.state_in} mini />
          {r.bled && <div className="text-sm text-status-critical">Bleeding started in this sample ({Math.round(r.bleeding_risk * 100)}% chance)</div>}
          <Frame path={r.frame?.path} label="closest real frame" caption={r.frame?.video_id ?? "offline"} />
          <button className="btn text-sm" onClick={onContinue}>⑂ Continue from this future</button>
        </Step>
      </div>
    </div>
  );
}
