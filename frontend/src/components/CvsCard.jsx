import { fmtT } from "./AnatomyPanel";

// The critical view of safety, front and centre (after Igor's Second Look prototype): is it safe to clip yet,
// which of the 3 criteria hold, since when, and how sure the eyes are on this frame. Everything is computed from
// the stream up to the video's current time.
// Endoscapes: criteria are judged by Gemini Argon from the pixels (held over frames), with per-frame confidence.
// CholecT50: criteria are derived from the surgeon's labelled actions (a proxy; no per-frame confidence).

export const CRITERIA = [
  { key: "c3_two_structures", raw: "c1", name: "Two structures", desc: "Only the duct and the artery enter the gallbladder" },
  { key: "c1_triangle_cleared", raw: "c2", name: "Triangle cleared", desc: "See-through windows in the hepatocystic triangle" },
  { key: "c2_plate_exposed", raw: "c3", name: "Cystic plate", desc: "Lower gallbladder lifted off the liver bed" },
];
const CONFIRM_CONF = 0.7, CONFIRM_FRAMES = 2; // Igor's duct-confirmation rule (label.py)

// When each criterion last became true (and has held since), from the state history up to now.
export function achievedSince(history, idx) {
  const own = history[idx]?.cvs_since; // Igor's run: when each held criterion started holding
  if (own) return Object.fromEntries(CRITERIA.map((c) => [c.key, own[c.key] ?? null]));
  const since = {};
  for (const c of CRITERIA) {
    let t = null;
    for (let i = 0; i <= idx; i++) {
      const on = !!history[i]?.state?.cvs?.[c.key];
      if (on && t == null) t = history[i].t;
      if (!on) t = null;
    }
    since[c.key] = t;
  }
  return since;
}

export function ductSightings(obsList, tNow) {
  let n = 0;
  for (const o of obsList) {
    if (o.t > tNow + 0.25) break;
    if (o.view_quality !== "clear") continue;
    if ((o.structures || []).some((s) => s.name === "cystic_duct" && (s.confidence ?? 0) >= CONFIRM_CONF)) n += 1;
  }
  return n;
}

function Mark({ on, n }) {
  return on ? (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-status-good text-black">✓</span>
  ) : (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-status-warning font-mono text-sm text-status-warning">{n}</span>
  );
}

export default function CvsCard({ state, history, idx, obs, obsList, tNow, sensor, ductConfirmed, compact = false }) {
  if (!state) return null;
  const since = achievedSince(history, idx);
  const met = CRITERIA.filter((c) => state.cvs?.[c.key]).length;
  const safe = met === 3;
  const raw = obs?.cvs_raw;
  return (
    <div className="flex flex-col gap-3">
      <div className={`rounded-2xl border-2 bg-surface-0 p-4 ${safe ? "border-status-good/70" : "border-status-warning/60"}`}>
        <div className="font-mono text-[11px] uppercase tracking-wider text-ink-3">Critical view of safety · is it safe to clip?</div>
        <div className={`font-display ${compact ? "text-3xl" : "text-4xl"} font-bold ${safe ? "text-status-good" : "text-status-warning"}`}>{safe ? "Safe to clip" : "Not yet"}</div>
        <div className="text-sm text-ink-2">{met} of 3 criteria met · {sensor ? "judged by Gemini Argon from the video" : "derived from the actions the eyes see (a proxy: CholecT50 has no CVS labels)"}</div>
        <div className="mt-3 flex flex-col divide-y divide-line">
          {CRITERIA.map((c, i) => {
            const on = !!state.cvs?.[c.key];
            const p = raw?.[c.raw];
            return (
              <div key={c.key} className="flex items-center gap-3 py-2.5">
                <Mark on={on} n={i + 1} />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{c.name}</div>
                  {!compact && <div className="text-xs text-ink-3">{c.desc}</div>}
                  {on && since[c.key] != null && (
                    <div className="text-xs font-semibold text-status-good">
                      {history[0] && since[c.key] <= history[0].t ? "Already met when the clip starts" : `Achieved at ${fmtT(Math.round(since[c.key]))}`}
                    </div>
                  )}
                </div>
                {p != null && <span className="font-display text-xl text-ink-2" title="Gemini Argon's confidence on this frame">{Math.round(p * 100)}%</span>}
              </div>
            );
          })}
        </div>
        {raw && <p className="text-[11px] text-ink-3">% = Argon's confidence on this frame. A criterion counts once it holds over several frames in a row.</p>}
        {obs?.cvs_evidence && !compact && (
          <details className="mt-1 text-xs text-ink-2">
            <summary className="cursor-pointer text-ink-1">Argon's reasoning on this frame</summary>
            <p className="mt-1">{obs.cvs_evidence}</p>
          </details>
        )}
      </div>
      {sensor && (
        <DuctCard confirmed={ductConfirmed} sightings={ductSightings(obsList, tNow)} obs={obs} plateMet={!!state.cvs?.c2_plate_exposed} />
      )}
    </div>
  );
}

function DuctCard({ confirmed, sightings, obs, plateMet }) {
  const n = Math.min(CONFIRM_FRAMES, sightings);
  const seen = (obs?.structures || []).filter((s) => (s.confidence ?? 0) >= 0.5).map((s) => s.name.replaceAll("_", " "));
  return (
    <div className="rounded-2xl border border-line bg-surface-0 p-4">
      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-3">Cystic duct</div>
      <div className="flex items-baseline justify-between gap-2">
        <span className={`font-display text-2xl font-bold ${confirmed ? "text-status-good" : "text-status-warning"}`}>{confirmed ? "Confirmed" : "Not confirmed"}</span>
        <span className="text-sm text-ink-2">{n} of {CONFIRM_FRAMES} clear sightings</span>
      </div>
      <div className="mt-2 flex gap-1.5">
        {Array.from({ length: CONFIRM_FRAMES }).map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < n ? "bg-status-good" : "bg-surface-3"}`} />
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-2">
        {!confirmed ? "Clipping before the duct is confirmed raises an alert." : plateMet ? "All anatomy needed for the critical view is confirmed." : "Cystic plate separation is not yet achieved."}
      </p>
      {seen.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {seen.map((s) => <span key={s} className="rounded-full border border-line px-2 py-0.5 text-xs text-ink-2">{s}</span>)}
        </div>
      )}
    </div>
  );
}
