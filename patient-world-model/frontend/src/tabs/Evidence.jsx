import { useEffect, useState } from "react";
import { get, niceName } from "../api";
import { HBars } from "../components/charts";
import { POLICIES } from "./Robot";

const pct = (v) => (v == null ? "—" : `${Math.round(v * 100)}%`);

function AccuracyCard({ run }) {
  if (!run) return <div className="card text-ink-3">No evaluation run yet.</div>;
  const m = run.metrics;
  const hasModel = m.model_top3 != null;
  const rows = [
    { label: "Second Look (Argon)", value: m.model_top3 ?? null, note: hasModel ? `top-1 ${pct(m.model_top1)}` : "pending live run" },
    ...(m.trained_top3 != null
      ? [{ label: "Trained model (gradient boosting)", value: m.trained_top3, note: `top-1 ${pct(m.trained_top1)} · fitted on train, tuned on val` }]
      : []),
    { label: "Retrieval only", value: m.retrieval_top3 ?? null, note: m.retrieval_top3 != null ? `top-1 ${pct(m.retrieval_top1)}` : "needs Atlas" },
    { label: "Bigram (train)", value: m.bigram_top3, note: `top-1 ${pct(m.bigram_top1)}` },
    { label: "Most common action", value: m.majority_top3, note: `top-1 ${pct(m.majority_top1)}` },
  ];
  return (
    <div className="card min-w-0">
      <div className="label">E1 · next-action accuracy on unseen operations</div>
      <div className="my-2 flex items-baseline gap-4">
        <span className={hasModel ? "text-5xl font-bold" : "text-3xl font-semibold text-ink-3"}>{hasModel ? pct(m.model_top3) : "pending"}</span>
        <span className="text-ink-2">
          top-3 {hasModel ? "for Second Look" : "(model run pending)"} vs <b>{pct(m.best_baseline_top3)}</b> best baseline
        </span>
      </div>
      <HBars rows={rows} highlight="Second Look (Argon)" />
      {m.vs_best_baseline_top3 && (
        <div className={`mt-3 rounded-lg border px-3 py-2 text-sm ${!m.vs_best_baseline_top3.significant ? "border-line" : m.vs_best_baseline_top3.diff < 0 ? "border-status-serious/70" : "border-status-good/60"}`}>
          Predicting the surgeon's next action, Second Look vs the{" "}
          {{ trained: "trained model (gradient boosting on 3,000 real transitions)", bigram: "bigram table", retrieval: "retrieval-only baseline", majority: "most-common-action baseline" }[m.vs_best_baseline_top3.baseline] ?? m.vs_best_baseline_top3.baseline}
          : {m.vs_best_baseline_top3.diff >= 0 ? "+" : ""}
          {Math.round(m.vs_best_baseline_top3.diff * 1000) / 10} pts (95% CI {Math.round(m.vs_best_baseline_top3.ci95[0] * 1000) / 10} to{" "}
          {Math.round(m.vs_best_baseline_top3.ci95[1] * 1000) / 10}, paired bootstrap) ·{" "}
          <b>
            {!m.vs_best_baseline_top3.significant
              ? "not a significant difference: a tie with the baseline"
              : m.vs_best_baseline_top3.diff < 0
                ? "the trained model predicts next moves significantly better than Second Look"
                : "Second Look predicts next moves significantly better"}
          </b>
        </div>
      )}
      <div className="mt-3 text-sm text-ink-3">
        top-3 accuracy · n = {m.n} {m.split} transitions from {m.split === "test" ? "operations never seen in retrieval or tuning" : "validation videos"}
        {m.accuracy_when_confident != null && ` · when confident (≥70%, n = ${m.n_confident}) it was right ${pct(m.accuracy_when_confident)}`}
      </div>
      {m.calibration && <Calibration bins={m.calibration} ece={m.ece} />}
    </div>
  );
}

function Calibration({ bins, ece }) {
  return (
    <div className="mt-4">
      <div className="label mb-2">E2 · calibration (accuracy per confidence bin) · ECE {ece}</div>
      <HBars rows={bins.map((b) => ({ label: `conf ${b.bin} (n=${b.n})`, value: b.accuracy, note: `mean confidence ${pct(b.mean_conf)}` }))} />
    </div>
  );
}

function PerceptionCard({ e3 }) {
  if (!e3) return <div className="card text-ink-3">No perception evaluation yet.</div>;
  const m = e3.metrics;
  const rows = [
    ...["cystic_duct", "cystic_artery", "cystic_plate", "gallbladder"].filter((k) => m.per_target[k]).map((k) => ({
      label: niceName(k),
      value: m.per_target[k].recall,
      note: `precision ${pct(m.per_target[k].precision)} · n = ${m.per_target[k].support}`,
    })),
    ...["grasper", "hook", "clipper", "scissors"].filter((k) => m.per_instrument[k]).map((k) => ({
      label: k,
      value: m.per_instrument[k].recall,
      note: `precision ${pct(m.per_instrument[k].precision)} · n = ${m.per_instrument[k].support}`,
    })),
  ];
  return (
    <div className="card min-w-0">
      <div className="label">E3 · perception ({e3.config?.model}) on unseen test frames</div>
      <div className="my-2 flex items-baseline gap-4">
        <span className="text-4xl font-bold">{pct(m.triplets_micro.recall)}</span>
        <span className="text-ink-2">
          triplet recall · precision {pct(m.triplets_micro.precision)} · {m.triplets_micro.support} labelled triplets
        </span>
      </div>
      <div className="label mb-2">Recall by target and instrument (hover for precision)</div>
      <HBars rows={rows} />
      <div className="mt-3 text-sm text-ink-3">
        n = {m.n_frames} frames from {m.videos.join(", ")} · held back {m.held_back.frames} frames as "can't confirm" ·
        confidence threshold {Math.round((e3.config?.min_conf ?? 0) * 100)}%
      </div>
    </div>
  );
}

function SafetyCard({ runs }) {
  const available = Object.entries(runs).filter(([, r]) => r);
  const [which, setWhich] = useState("rules");
  const e5 = runs[which] || available[0]?.[1];
  if (!e5) return <div className="card text-ink-3">No agent evaluation yet.</div>;
  const pats = Object.keys(e5.metrics);
  return (
    <div className="card min-w-0">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="label">E5 · robot safety per episode</div>
        <div className="flex gap-1 rounded-lg border border-line p-0.5 text-sm">
          {[["rules", "Rule-engine dynamics"], ["world_model", "Argon world model"]].map(([k, label]) => (
            <button
              key={k}
              disabled={!runs[k]}
              onClick={() => setWhich(k)}
              className={`rounded-md px-2.5 py-1 disabled:opacity-40 ${which === k ? "bg-accent text-white" : "text-ink-2"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full min-w-[30rem] text-left">
        <thead>
          <tr className="text-sm text-ink-3">
            <th className="py-1">Patient</th>
            <th>Policy</th>
            <th className="text-right">Violations</th>
            <th className="text-right">Injury rate</th>
            <th className="text-right">Completed</th>
          </tr>
        </thead>
        <tbody>
          {pats.flatMap((p) =>
            POLICIES.filter((pol) => e5.metrics[p][pol.key]).map((pol) => {
              const r = e5.metrics[p][pol.key];
              return (
                <tr key={p + pol.key} className="border-t border-line">
                  <td className="py-1.5">{p}</td>
                  <td className="flex items-center gap-2 py-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: pol.color }} />
                    {pol.label}
                  </td>
                  <td className="text-right font-semibold">{r.mean_violations}</td>
                  <td className="text-right">{pct(r.injury_rate)}</td>
                  <td className="text-right">{pct(r.completion_rate)}</td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
      </div>
      <div className="mt-2 text-sm text-ink-3">
        {e5.config.episodes} episodes per cell · dynamics: {e5.config.dynamics} · max {e5.config.max_steps} steps ·
        lessons written: {pats.map((p) => `${p} ${(e5.metrics[p].lessons || []).length}`).join(", ")}
        {pats.every((p) => !(e5.metrics[p].lessons || []).length) &&
          " (no unsafe agent episode, so “with lessons” ran with no lessons: the two agent rows are the same condition)"}
      </div>
    </div>
  );
}

function Architecture({ stats }) {
  const n = (v) => (v == null ? "…" : v.toLocaleString());
  const Box = ({ title, children, accent }) => (
    <div className={`rounded-lg border p-3 ${accent ? "border-accent bg-accent/10" : "border-line bg-surface-2"}`}>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-ink-3">{children}</div>
    </div>
  );
  const Arrow = () => <div className="hidden place-items-center text-2xl text-ink-3 sm:grid">→</div>;
  return (
    <div className="card">
      <div className="label mb-3">How it works</div>
      <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <Box title="Real data">CholecT50: {n(stats?.n_videos)} operations, {n(stats?.n_labelled_seconds)} labelled seconds (instrument, verb, target)</Box>
        <Arrow />
        <Box title="Rule engine">Anatomy state, CVS proxy, hard safety facts. Always has the final say.</Box>
        <Arrow />
        <Box title="MongoDB Atlas" accent>
          {n(stats?.n_transitions)} real transitions + {n(stats?.n_reference_frames)} reference frames · Vector Search · Atlas Search · change streams
        </Box>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Box title="Watch">Gemini Flash labels live frames → state; holds back when the view is obscured</Box>
        <Box title="Imagine">Gemini Argon predicts risk from cited real transitions; closest real frame</Box>
        <Box title="Train the robot">Gemini agent acts; lessons from failures stored in Atlas and retrieved</Box>
      </div>
    </div>
  );
}

export default function Evidence() {
  const [e1, setE1] = useState(null);
  const [e5, setE5] = useState(null);
  const [e5wm, setE5wm] = useState(null);
  const [e3, setE3] = useState(null);
  const [usage, setUsage] = useState(null);
  const [stats, setStats] = useState(null);
  const [q, setQ] = useState("");
  const [hits, setHits] = useState(null);

  useEffect(() => {
    get("/eval/latest").then(setE1).catch(() => {});
    get("/eval/latest", { name: "E5_agent" }).then(setE5).catch(() => {});
    get("/eval/latest", { name: "E5_world_model" }).then(setE5wm).catch(() => {});
    get("/eval/latest", { name: "E3_perception" }).then(setE3).catch(() => {});
    get("/usage").then(setUsage).catch(() => {});
    get("/stats").then(setStats).catch(() => {});
  }, []);

  async function search(e) {
    e.preventDefault();
    setHits(await get("/search", { q }).catch(() => []));
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <AccuracyCard run={e1} />
        <SafetyCard runs={{ rules: e5, world_model: e5wm }} />
      </div>
      <PerceptionCard e3={e3} />
      <div className="rounded-lg border border-line px-4 py-2 text-center text-ink-2">
        Benchmark on public data, not clinical validation. Patients are synthetic. Research simulator, not a medical device.
      </div>
      <Architecture stats={stats} />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="card min-w-0">
          <div className="label mb-2">Search past runs (Atlas hybrid search: text + vector, $rankFusion)</div>
          <form onSubmit={search} className="flex gap-2">
            <input id="search-q" className="select min-w-0 flex-1" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. inflamed, clip, adhesions" />
            <button className="btn">Search</button>
          </form>
          {hits && (
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {hits.length === 0 && <span className="text-ink-3">No matches.</span>}
              {hits.map((h, i) => (
                <div key={i} className="rounded bg-surface-2 p-2">
                  <div className="mb-1 flex flex-wrap gap-2 text-xs text-ink-3">
                    <span className="rounded-full border border-line px-2">{niceName(h._collection || "lesson")}</span>
                    {(h.matched || []).map((m) => (
                      <span key={m} className="rounded-full border border-line px-2">
                        {m === "text" ? "full-text match" : m === "vector" ? "semantic match" : m}
                      </span>
                    ))}
                    {h.score != null && <span>fused score {Number(h.score).toFixed(3)}</span>}
                  </div>
                  {h.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="card min-w-0 text-sm text-ink-2">
          <div className="label mb-2">Models, data and credits</div>
          {stats?.models && (
            <p>
              Gemini: {stats.models.world_model} (world model, lessons), {stats.models.perception_agent} (perception, agent), {stats.models.embedding} ({stats.models.embedding_dim}-d).
            </p>
          )}
          <p className="mt-2">
            Data: CholecT50 (CAMMA, University of Strasbourg), CC BY-NC-SA 4.0. Nwoye et al., Medical Image Analysis 78 (2022). Phases inferred from triplets
            {stats?.phase_check ? ` (${Math.round(stats.phase_check.accuracy * 100)}% agreement with real phases on ${stats.phase_check.frames.toLocaleString()} keyframes)` : ""}; CVS is a proxy
            {stats?.e4 ? ` (flags ${Math.round(stats.e4.clip_before_cvs * 100)}% of ${stats.e4.videos} real operations)` : ""}.
          </p>
          {usage && usage.calls != null && (
            <p className="mt-2 text-ink-3">
              Gemini usage: {usage.calls.toLocaleString()} calls ({usage.cached.toLocaleString()} served from cache) ·{" "}
              {(usage.input_tokens + usage.output_tokens).toLocaleString()} tokens
              {usage.est_cost_usd > 0 ? ` · est. $${usage.est_cost_usd.toFixed(2)}` : ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
