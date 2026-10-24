import { useEffect, useState } from "react";
import { fmtT } from "./AnatomyPanel";
import { isRevealed, overlayState, runningScore, verdict } from "../lib/forecast";
import { actionPast, actionSentence, actionShort, changeLines, cvsCount, stateLines } from "../lib/describe";

// The prediction engine, shown next to the playing video. For each real moment of a held-out operation it shows,
// in plain words: what is happening now and the patient's state (input) -> what the rules say this action does ->
// what surgeons did next in the 5 most similar real moments (Atlas) -> Gemini Argon's forecast of the next move.
// The truth (the surgeons' recorded next action) appears only when the video reaches it (lib/forecast.js).

const VERDICT = {
  hit: { text: "✓ the engine's top pick", cls: "bg-status-good text-black" },
  top3: { text: "✓ in the engine's top 3", cls: "bg-status-warning text-black" },
  miss: { text: "✗ the engine missed it", cls: "bg-status-serious text-black" },
};
const DOT = { hit: "#0ca30c", top3: "#fab219", miss: "#ec835a" };
const TONE = { done: "text-ink-1", plain: "text-ink-2", good: "text-status-good", warn: "text-status-warning", bad: "text-status-serious" };
const lower = (s) => (s ? s[0].toLowerCase() + s.slice(1) : s);

function Block({ n, title, sub, on, children }) {
  return (
    <section className={`rounded-lg border p-2.5 transition-all duration-500 ${on ? "border-line bg-surface-1 opacity-100" : "border-transparent opacity-0"}`}>
      <div className="mb-1 flex items-baseline gap-2">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent font-mono text-[11px] font-bold text-surface-0">{n}</span>
        <span className="text-sm font-semibold">{title}</span>
        {sub && <span className="ml-auto text-[11px] text-ink-3">{sub}</span>}
      </div>
      {children}
    </section>
  );
}

function tally(neighbours) {
  const c = {};
  for (const n of neighbours || []) if (n.next_action) c[n.next_action] = (c[n.next_action] || 0) + 1;
  return Object.entries(c).sort((a, b) => b[1] - a[1]);
}

// Stages appear one after another when a new forecast starts, so the viewer sees the engine work.
function useStage(key, animate) {
  const [stage, setStage] = useState(4);
  useEffect(() => {
    if (!animate) return;
    setStage(1);
    const hs = [2, 3, 4].map((s, i) => setTimeout(() => setStage(s), 700 * (i + 1)));
    return () => hs.forEach(clearTimeout);
  }, [key, animate]);
  return stage;
}

export function Engine({ s, animate = true }) {
  const f = s.f;
  const wm = f.world_model;
  const reveal = s.mode === "reveal";
  const stage = useStage(f.id, animate);
  const votes = tally(wm.neighbours);
  const total = (wm.neighbours || []).length;
  const changes = changeLines(f.state_before, wm.state_out);
  const v = verdict(f.scores.world_model.rank);
  const truthVotes = votes.find(([a]) => a === f.truth.next_action)?.[1] || 0;
  const border = s.locked ? "anim-glow border-accent"
    : reveal ? (v === "miss" ? "anim-shake border-status-serious" : v === "hit" ? "border-status-good" : "border-status-warning") : "border-accent/50";
  return (
    <div className={`flex flex-col gap-2 rounded-xl border-2 bg-surface-0 p-3 ${border}`}>
      <div>
        <div className="font-mono text-[11px] uppercase tracking-wider text-accent">Prediction engine</div>
        <div className="text-xs text-ink-3">Forecasts the surgeon's next move from the current state, 5 similar real operations and Gemini Argon.</div>
      </div>

      <Block n="1" title="Now" sub={`this action started at ${fmtT(Math.max(0, f.t))} · surgeons' labels`} on={stage >= 1}>
        <p className="text-sm">The surgeon is <b>{lower(actionSentence(f.action, true))}</b>.</p>
        <div className="mt-1 text-[11px] text-ink-3">Patient when this action began:</div>
        <ul className="grid gap-x-3 text-xs sm:grid-cols-2">
          {stateLines(f.state_before).map((l) => (
            <li key={l.label}><span className="text-ink-3">{l.label}: </span><span className={TONE[l.tone]}>{l.text}</span></li>
          ))}
        </ul>
      </Block>

      <Block n="2" title="Rules: this action will…" sub="hard facts" on={stage >= 2}>
        <ul className="text-sm">
          {(changes.length ? changes : ["Leave the anatomy as it is"]).map((c) => <li key={c}>→ {c}</li>)}
          {wm.rules_violations?.map((x) => <li key={x} className="text-status-serious">▲ Breaks a safety rule: {x.replaceAll("_", " ")}</li>)}
        </ul>
      </Block>

      <Block n="3" title="Memory: what surgeons did next" sub={`${total} similar real moments (Atlas)`} on={stage >= 3}>
        <div className="flex flex-col gap-1">
          {votes.map(([a, n]) => (
            <div key={a} className="flex items-center gap-2 text-sm">
              <span className="min-w-0 flex-1 truncate">{actionShort(a)}</span>
              <span className="flex gap-0.5">{Array.from({ length: n }).map((_, i) => <span key={i} className="h-3 w-3 rounded-sm bg-[#5aa9a0]" />)}</span>
              <span className="w-12 text-right font-mono text-xs text-ink-2">{n} of {total}</span>
            </div>
          ))}
        </div>
        <details className="mt-1 text-[11px] text-ink-3">
          <summary className="cursor-pointer">the {total} real moments</summary>
          {(wm.neighbours || []).map((n) => (
            <div key={n.id}>{n.video_id} · {Math.round(n.score * 100)}% similar · surgeon was {lower(actionSentence(n.action))}, then {lower(actionShort(n.next_action))}</div>
          ))}
        </details>
      </Block>

      {!reveal ? (
        <Block n="4" title="Gemini Argon forecasts the next move"
          sub={s.secondsLeft == null ? "truth after this clip" : s.locked ? "locked" : `revealed in ${Math.ceil(s.secondsLeft)} s`} on={stage >= 4}>
          {wm.top3.map((a, i) => (
            <div key={a.action} className="flex items-center gap-2 text-sm">
              <span className="w-4 font-mono text-xs text-ink-3">{i + 1}</span>
              <span className={`min-w-0 flex-1 truncate ${i === 0 ? "font-semibold" : ""}`}>{actionShort(a.action)}</span>
              <span className="h-1.5 w-14 overflow-hidden rounded-full bg-surface-3"><span className="block h-full bg-accent" style={{ width: `${Math.round(a.probability * 100)}%` }} /></span>
              <span className="w-9 text-right font-mono text-xs">{Math.round(a.probability * 100)}%</span>
            </div>
          ))}
          <p className="mt-1 text-[11px] text-ink-3">
            {votes[0] && wm.top3[0]?.action === votes[0][0] ? "Its top pick follows the real cases. " : "Its top pick differs from the real cases' majority. "}
            Trained model says: {actionShort(f.trained.top3[0])} · bigram: {actionShort(f.bigram.top3[0])}.
          </p>
          {cvsCount(f.state_before) < 3 && wm.top3.some((a) => a.action.split(",")[1] === "clip") && (
            <p className="mt-1 text-xs font-semibold text-status-serious">⚠ It forecasts clipping while the critical view is only {cvsCount(f.state_before)} of 3.</p>
          )}
          {s.locked && <div className="mt-1 rounded-md bg-accent/20 px-2 py-1 text-center text-sm font-semibold text-accent">Forecast locked. Watch what the surgeon does…</div>}
        </Block>
      ) : (
        <section className="rounded-lg border border-line bg-surface-1 p-2.5">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold">What the surgeon actually did{f.truth.t != null ? ` · ${fmtT(f.truth.t)}` : ""}</span>
            <span className={`rounded px-2 py-0.5 text-xs font-bold ${VERDICT[v].cls}`}>{VERDICT[v].text}</span>
          </div>
          <p className="font-display text-xl leading-tight">The surgeon {actionPast(f.truth.next_action)}.</p>
          <div className="mt-1 flex flex-col gap-0.5">
            {wm.top3.map((a, i) => (
              <div key={a.action} className={`flex items-center gap-2 rounded px-1.5 text-sm ${a.action === f.truth.next_action ? "bg-status-good/25 text-ink-1" : "text-ink-3"}`}>
                <span className="w-4 font-mono text-xs">{i + 1}</span><span className="flex-1 truncate">{actionShort(a.action)}</span>
                <span className="font-mono text-xs">{Math.round(a.probability * 100)}%</span>
              </div>
            ))}
          </div>
          <p className="mt-1 text-xs text-ink-2">
            {truthVotes ? `${truthVotes} of ${total} similar real cases did this next.` : "None of the similar real cases did this next."} Trained model {f.scores.trained.rank ? "✓" : "✗"} · bigram {f.scores.bigram.rank ? "✓" : "✗"}
          </p>
        </section>
      )}
      <p className="text-[11px] text-ink-3">Risk ({wm.risk_level}) can't be checked: CholecT50 has no complication labels.</p>
    </div>
  );
}

export function LedgerDots({ doc, t, ended, t0, onSeek }) {
  if (!doc) return null;
  return (
    <div className="flex items-center gap-1.5">
      {doc.forecasts.map((f) => {
        const done = isRevealed(f, t, ended);
        const v = verdict(f.scores.world_model.rank);
        return (
          <button key={f.id} title={done ? `${fmtT(f.t)}: forecast "${actionShort(f.world_model.top3[0]?.action)}", surgeon ${actionPast(f.truth.next_action)} (${v})` : `forecast at ${fmtT(f.t)}`}
            onClick={() => onSeek?.(Math.max(t0, f.t))}
            className="h-3 w-3 rounded-full border border-white/60 transition" style={{ background: done ? DOT[v] : "transparent" }} />
        );
      })}
    </div>
  );
}

function ScoreLine({ doc, t, ended }) {
  const sc = runningScore(doc?.forecasts, t, ended);
  if (!sc.n) return <span className="font-mono text-[11px] text-ink-3">{doc.forecasts.length} forecasts on this clip</span>;
  return <span className="font-mono text-[11px] text-ink-1">real move in top 3 so far · engine {sc.world_model.top3}/{sc.n} · trained {sc.trained.top3}/{sc.n} · bigram {sc.bigram.top3}/{sc.n}</span>;
}

// Shown next to the video.
export default function ForecastPanel({ doc, t, ended, t0, onSeek }) {
  if (!doc) return null;
  const s = overlayState(doc.forecasts, t, { ended });
  return (
    <div className="flex flex-col gap-1.5">
      {s.mode === "idle" ? (
        <div className="rounded-xl border-2 border-accent/30 bg-surface-0 p-3 text-sm text-ink-3">The prediction engine starts forecasting when the video plays.</div>
      ) : <Engine s={s} />}
      <div className="flex flex-wrap items-center gap-2 rounded-lg bg-surface-1 px-2 py-1.5">
        <LedgerDots doc={doc} t={t} ended={ended} t0={t0} onSeek={onSeek} />
        <ScoreLine doc={doc} t={t} ended={ended} />
      </div>
      <p className="text-[11px] text-ink-3">Forecast = the surgeon's next move. Critical view of safety = the 3 checks before it is safe to clip.</p>
    </div>
  );
}

// Endoscapes: Igor's eyes vs the surgeons' labels for the critical view of safety, revealed as the video plays.
// The eyes can declare the critical view, lose it when the view changes, and declare it again: all shown.
export function EyesOverlay({ clip, t, ended, history = [], idx = -1 }) {
  if (!clip || t == null) return null;
  const e = clip.experts_cvs_t;
  const flips = [];
  let on = false;
  for (let i = 0; i <= idx; i++) {
    const now = Object.values(history[i]?.state?.cvs || {}).filter(Boolean).length === 3;
    if (now !== on) { flips.push({ t: history[i].t, on: now }); on = now; }
  }
  const first = flips.find((f) => f.on)?.t;
  const expertsSaid = e != null && t >= e;
  let note = null;
  if (first != null && expertsSaid) {
    const d = first - e;
    note = d === 0 ? "first declared in the same second as the surgeons" : d > 0 ? `first declared ${d} s after the surgeons (the safe side)` : `first declared ${-d} s before the surgeons (too early)`;
  } else if (ended && first == null && e == null) note = "never declared, and the surgeons agree it was never reached";
  else if (ended && first == null) note = `never declared; the surgeons said ${fmtT(e)}`;
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border-2 border-accent/50 bg-surface-0 p-3">
      <div className="font-mono text-[11px] uppercase tracking-wider text-accent">Eyes vs surgeons · when was it safe to clip?</div>
      <div className="text-sm">
        <span className="text-ink-3">Eyes (Gemini Argon reading the video): </span>
        {flips.length ? flips.map((f, i) => (
          <span key={i} className={f.on ? "font-semibold text-status-good" : "text-status-warning"}>
            {i ? " · " : ""}{f.on ? (i ? "safe again" : "safe") : "lost"} at {fmtT(Math.round(f.t))}
          </span>
        )) : <span className="text-ink-2">not yet</span>}
      </div>
      <div className="text-sm"><span className="text-ink-3">Surgeons' labels: </span>{expertsSaid ? <b>safe at {fmtT(e)}</b> : <span className="text-ink-2">{ended ? "never safe in this clip" : "not yet"}</span>}</div>
      {note && <div className="rounded-md bg-status-good/15 px-2 py-1 text-sm font-semibold text-status-good">Eyes: {note}</div>}
    </div>
  );
}
