import { useEffect, useMemo, useRef, useState } from "react";
import { get, dreamUrl } from "../api";
import { actionShort } from "../lib/describe";
import AnatomyMap from "./AnatomyMap";
import { RiskBadge } from "./ui";

const KIND = {
  robot: { label: "Robot episode", color: "#3987e5", note: "the robot agent chose this action" },
  counterfactual: { label: "Unsafe branch", color: "#ec835a", note: "a step real recordings almost never show" },
  safe: { label: "Safe branch", color: "#199e70", note: "the world model's safe alternative" },
  factual: { label: "Control", color: "#8a8f98", note: "two real frames, model fills the gap" },
  baseline: { label: "Hand-prompted", color: "#c98500", note: "Igor's Wan 2.2 clip, no world model" },
};
const FIELD = {
  instrument_seen: "instrument seen",
  action_seen: "action seen",
  no_new_instruments: "no invented instruments",
  phase_matches: "phase matches",
  view_clear: "view clear",
};
const FILTERS = [
  ["all", "All"],
  ["accepted", "Accepted"],
  ["rejected", "Rejected"],
  ["counterfactual", "Unsafe branches"],
  ["robot", "Robot episode"],
  ["controls", "Controls & baselines"],
];
const pct = (r) => (r?.rate == null ? "–" : `${Math.round(r.rate * 100)}%`);
const ci = (r) => (r?.ci95 ? ` (95% CI ${Math.round(r.ci95[0] * 100)}–${Math.round(r.ci95[1] * 100)}%)` : "");

function Pipeline() {
  const steps = [
    ["World model step", "rules → Atlas transitions → Argon"],
    ["Prompt compiler", "action + visible change, no hand-writing"],
    ["Gemini Omni Flash", "video from the real frame"],
    ["Fidelity gate", "Argon vs the real frame"],
    ["Consistency gate", "our eyes must see the prediction"],
    ["Atlas dream_clips", "vector + full-text search, training export"],
  ];
  return (
    <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
      {steps.map(([t, d], i) => (
        <li key={t} className="rounded-lg border border-line bg-surface-2/60 p-2">
          <div className="font-mono text-xs text-accent">{i + 1}</div>
          <div className="text-sm font-semibold">{t}</div>
          <div className="text-xs text-ink-3">{d}</div>
        </li>
      ))}
    </ol>
  );
}

function DreamCard({ d }) {
  const k = KIND[d.kind] || KIND.safe;
  const agreement = d.consistency?.agreement || {};
  const fa = d.consistency?.factual;
  const fid = d.fidelity;
  const tried = d.attempts?.filter((a) => !a.skipped).length ?? 0;
  return (
    <article className="card flex min-w-0 flex-col gap-3">
      <header className="flex flex-wrap items-center gap-2">
        <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-black" style={{ background: k.color }}>
          {k.label}{d.kind === "robot" ? ` · step ${d.step + 1}` : ""}
        </span>
        <span className="font-display text-lg">{d.action ? actionShort(d.action) : d.kind === "factual" ? "real motion, 6 s" : "hand-written prompt"}</span>
        {d.risk_level && <span className="ml-auto"><RiskBadge level={d.risk_level} /></span>}
      </header>
      <p className="-mt-2 text-xs text-ink-3">{k.note}{d.patient_id ? ` · patient ${d.patient_id}` : ""} · anchor {d.anchor?.source === "generated" ? "last frame of the previous AI-generated step" : `${d.anchor?.clip} @ ${d.anchor?.t}s (real)`}</p>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-2">
        <figure className="min-w-0">
          {d.anchor_images?.[0] && <img src={dreamUrl(d.anchor_images[0])} alt="real anchor frame" className="w-full rounded-md" loading="lazy" />}
          <figcaption className="mt-1 text-xs text-ink-3">{d.anchor?.source === "generated" ? "start (generated)" : "start: real frame"}</figcaption>
        </figure>
        <figure className="relative min-w-0">
          {d.video ? (
            <video src={dreamUrl(d.video)} className="w-full rounded-md" muted loop playsInline autoPlay controls preload="metadata" />
          ) : (
            <div className="grid aspect-video place-items-center rounded-md border border-dashed border-line text-sm text-ink-3">no clip produced</div>
          )}
          <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-xs font-semibold text-[#ffd479]">AI-generated · {d.model}</span>
        </figure>
      </div>

      {d.state_after_predicted && (
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-start gap-3">
          <AnatomyMap state={d.state_after_predicted} prev={d.state_before} mini />
          <div className="min-w-0 text-sm">
            <div className="label mb-1">World model predicted</div>
            <ul className="flex flex-col gap-0.5">
              {(d.changes?.length ? d.changes : ["no visible change"]).map((c) => <li key={c}>· {c}</li>)}
              {d.violations?.map((v) => <li key={v} className="text-status-serious">▲ {v.replaceAll("_", " ")}</li>)}
            </ul>
            {d.agent_reason && <p className="mt-1 text-xs text-ink-3">Robot's reason: {d.agent_reason}</p>}
          </div>
        </div>
      )}

      <div className="grid gap-2 text-sm sm:grid-cols-2">
        <div className="rounded-lg border border-line p-2">
          <div className="label mb-1">Fidelity (Argon vs real frame)</div>
          {fid ? (
            <>
              <div className={fid.pass ? "text-status-good" : "text-status-serious"}>{fid.pass ? "✓ pass" : "✕ fail"}{fid.score != null ? ` · ${fid.score}/10` : ""}</div>
              {fid.error && <div className="text-xs text-status-serious">{fid.error}</div>}
              {fid.issues?.slice(0, 3).map((i) => <div key={i} className="text-xs text-ink-3">· {i}</div>)}
            </>
          ) : <div className="text-ink-3">–</div>}
        </div>
        <div className="rounded-lg border border-line p-2">
          <div className="label mb-1">{fa ? "Eyes vs real footage" : "Eyes vs world model"}</div>
          {fa ? (
            <div className="text-xs text-ink-2">phase matched {Math.round((fa.phase_match_rate ?? 0) * 100)}% · instruments matched {Math.round((fa.instrument_match_rate ?? 0) * 100)}% of {fa.n} seconds</div>
          ) : Object.keys(agreement).length ? (
            <div className="flex flex-wrap gap-1">
              {Object.entries(agreement).map(([f, ok]) => (
                <span key={f} className={`rounded-full border px-2 py-0.5 text-xs ${ok ? "border-status-good/60 text-status-good" : "border-status-serious/60 text-status-serious"}`}>
                  {ok ? "✓" : "✕"} {FIELD[f] || f}
                </span>
              ))}
            </div>
          ) : (
            <div className="text-xs text-status-serious">{d.consistency?.errors?.join("; ") || "–"}</div>
          )}
        </div>
      </div>

      <div className={`rounded-lg px-3 py-2 text-sm font-semibold ${d.accepted ? "bg-status-good/15 text-status-good" : "bg-surface-2 text-ink-2"}`}>
        {d.accepted ? "✓ Accepted as a training sample" : `Not a training sample: ${d.reason}`}
      </div>
      <details className="text-xs text-ink-3">
        <summary className="cursor-pointer">Prompt written by the world model · {tried} attempt{tried === 1 ? "" : "s"}{d.cited_transition_ids?.length ? ` · cites ${d.cited_transition_ids.length} real transitions` : ""}</summary>
        <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap rounded bg-surface-2 p-2 font-mono">{d.prompt}</pre>
        {d.cited_transition_ids?.length > 0 && <p className="mt-1">Grounded in CholecT50 transitions: {d.cited_transition_ids.join(", ")}</p>}
        {d.attempts?.filter((a) => !a.skipped).map((a) => (
          <p key={a.attempt}>attempt {a.attempt}: {a.error || `fidelity ${a.fidelity?.pass ? "pass" : "fail"} (${a.fidelity?.score ?? "–"}), eyes ${a.consistency?.passed ? "agree" : a.consistency?.passed === false ? "disagree" : "n/a"}`}</p>
        ))}
      </details>
    </article>
  );
}

function EpisodePlayer({ ep }) {
  const ref = useRef(null);
  const [t, setT] = useState(0);
  const seg = ep.steps.find((s) => t >= s.t_start && t < s.t_end) || ep.steps[ep.steps.length - 1];
  const seek = (s) => { if (ref.current) { ref.current.currentTime = s.t_start + 0.05; ref.current.play?.(); } };
  return (
    <div className="card flex min-w-0 flex-col gap-3">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-black" style={{ background: KIND.robot.color }}>Robot episode</span>
        <span className="font-display text-lg">{ep.steps.length} steps · {Math.round(ep.duration)} s of synthetic training video</span>
        <span className="ml-auto text-sm text-ink-3">{ep.accepted_steps}/{ep.steps.length} steps passed both gates · patient {ep.patient_id}</span>
      </div>
      <div className="grid gap-3 xl:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="relative">
            <video ref={ref} src={dreamUrl(ep.video)} className="w-full rounded-lg bg-black" muted playsInline autoPlay loop controls
              onTimeUpdate={(e) => setT(e.currentTarget.currentTime)} />
            <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-xs font-semibold text-[#ffd479]">AI-generated · {ep.model}</span>
            <div className="pointer-events-none absolute bottom-12 left-2 right-2 flex flex-wrap items-center gap-2">
              <span className="rounded bg-black/75 px-2 py-1 font-mono text-sm text-white">step {seg.step + 1} · {actionShort(seg.action)}</span>
              <span className={`rounded px-2 py-1 text-xs font-semibold ${seg.accepted ? "bg-status-good/80 text-black" : "bg-black/75 text-status-serious"}`}>
                {seg.accepted ? "✓ training sample" : "✕ rejected step"}
              </span>
            </div>
          </div>
          <div className="mt-2 flex h-7 w-full overflow-hidden rounded-md border border-line" role="list" aria-label="Episode steps">
            {ep.steps.map((s) => (
              <button key={s.step} role="listitem" title={`${actionShort(s.action)}: ${s.accepted ? "accepted" : s.reason}`} onClick={() => seek(s)}
                className={`relative border-r border-surface-0 text-[11px] font-semibold ${s.step === seg.step ? "ring-2 ring-inset ring-white" : ""}`}
                style={{ flex: s.t_end - s.t_start, background: s.accepted ? "#0ca30c99" : "#ec835a66" }}>
                {s.step + 1}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-ink-3">Step 1 starts on the real {ep.anchor.clip} frame at {ep.anchor.t}s; each later step starts on the last frame of the step before. Click a step to jump.</p>
        </div>
        <div className="min-w-0 text-sm">
          <AnatomyMap state={seg.state_after} prev={seg.state_before} mini />
          <div className="label mt-2">World model predicted · step {seg.step + 1}</div>
          <ul className="flex flex-col gap-0.5">
            {(seg.changes?.length ? seg.changes : ["no visible change"]).map((c) => <li key={c}>· {c}</li>)}
            {seg.violations?.map((v) => <li key={v} className="text-status-serious">▲ {v.replaceAll("_", " ")}</li>)}
          </ul>
          <div className="mt-1 flex items-center gap-2"><RiskBadge level={seg.risk_level} /></div>
          {seg.agent_reason && <p className="mt-2 text-xs text-ink-3">Robot's reason: {seg.agent_reason}</p>}
          {!seg.accepted && <p className="mt-1 text-xs text-status-serious">{seg.reason}</p>}
        </div>
      </div>
      <details className="text-xs text-ink-3">
        <summary className="cursor-pointer">Label track (what a robot-learning dataset stores with the video)</summary>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[560px] font-mono">
            <thead><tr className="text-left text-ink-2"><th>t (s)</th><th>action</th><th>risk</th><th>changes</th><th>fidelity</th><th>gates</th></tr></thead>
            <tbody>
              {ep.steps.map((s) => (
                <tr key={s.step} className="border-t border-line/60 align-top">
                  <td>{s.t_start}–{s.t_end}</td><td>{s.action}</td><td>{s.risk_level}</td><td>{s.changes.join("; ") || "–"}</td>
                  <td>{s.fidelity?.score ?? "–"}</td><td className={s.accepted ? "text-status-good" : "text-status-serious"}>{s.accepted ? "accepted" : "rejected"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

export default function DreamData() {
  const [dreams, setDreams] = useState(null);
  const [e6, setE6] = useState(null);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    get("/dreams").then(setDreams).catch(() => setDreams([]));
    get("/eval/latest", { name: "E6_dreams" }).then((r) => setE6(r?.name === "E6_dreams" ? r : null)).catch(() => setE6(null));
  }, []);
  const episodes = (dreams || []).filter((d) => d.kind === "robot_episode");
  const shown = useMemo(() => (dreams || []).filter((d) => d.kind !== "robot_episode").filter((d) => {
    if (filter === "accepted") return d.accepted;
    if (filter === "rejected") return !d.accepted && ["safe", "counterfactual", "robot"].includes(d.kind);
    if (filter === "controls") return ["factual", "baseline"].includes(d.kind);
    if (filter === "counterfactual" || filter === "robot") return d.kind === filter;
    return true;
  }), [dreams, filter]);

  return (
    <section className="flex flex-col gap-4">
      <div className="card flex flex-col gap-3">
        <div>
          <div className="label">Dream data · the world model writes the robot's training videos</div>
          <p className="mt-1 max-w-4xl text-ink-2">
            Each clip starts from a real Endoscapes frame. The patient world model decides the action and what the patient looks like afterwards,
            Gemini renders it, and two gates check it. Unsafe branches, like clipping before the critical view, are the cases real recordings almost never contain.
          </p>
        </div>
        <Pipeline />
        {e6 && (
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <span><b>{e6.accepted.k}/{e6.accepted.n}</b> world-model clips accepted{ci(e6.accepted)}</span>
            <span>fidelity pass {pct(e6.fidelity_pass)}</span>
            <span>eyes agree {pct(e6.consistency_pass)}</span>
            <span className="text-ink-3">{e6.renders.attempts} renders · descriptive, small n</span>
          </div>
        )}
        <p className="text-xs text-ink-3">
          Every clip is AI-generated and labelled so. Samples pair video with an action and a predicted outcome, not robot joint motion: training a low-level controller would also need an
          inverse-dynamics model. Rejected attempts are shown too.
        </p>
      </div>
      {episodes.map((ep) => <EpisodePlayer key={ep.name} ep={ep} />)}
      {dreams && dreams.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {FILTERS.map(([k, l]) => (
            <button key={k} onClick={() => setFilter(k)} className={`rounded-lg px-3 py-1.5 text-sm ${filter === k ? "bg-accent text-surface-0" : "border border-line text-ink-2 hover:bg-surface-2"}`}>{l}</button>
          ))}
        </div>
      )}
      {dreams === null ? <p className="text-ink-3">Loading…</p> : !dreams.length ? (
        <p className="text-ink-3">No dream clips yet. Run pipeline/08_dream_clips.py, then eval/dream_eval.py.</p>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          {shown.map((d) => <DreamCard key={d.name} d={d} />)}
        </div>
      )}
    </section>
  );
}
