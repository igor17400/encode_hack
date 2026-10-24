import { fmtT } from "./AnatomyPanel";
import { isRevealed, verdict } from "../lib/forecast";
import { actionShort } from "../lib/describe";

// Play / pause and a scrubber for the surgical video. Everything on the Watch screen follows the video time, so
// dragging here moves the eyes, the patient model and the prediction engine together.
// Markers: forecasts (filled with the verdict once the video has passed the truth), alerts, and the critical view
// of safety per the eyes and per the surgeons (Endoscapes).
const DOT = { hit: "#0ca30c", top3: "#fab219", miss: "#ec835a" };

export default function PlayerBar({ t, t0, t1, playing, onToggle, onSeek, forecasts, alerts = [], clip, ended, disabled }) {
  const span = Math.max(1, t1 - t0);
  const x = (v) => `${Math.min(100, Math.max(0, ((v - t0) / span) * 100))}%`;
  const cur = t ?? t0;
  const marks = [
    ...(forecasts?.forecasts || []).filter((f) => f.truth?.in_clip).map((f) => {
      const done = isRevealed(f, cur, ended);
      const v = verdict(f.scores.world_model.rank);
      return { t: f.truth.t, key: f.id, color: done ? DOT[v] : "transparent", border: "#ffffffaa",
        title: done ? `${fmtT(f.truth.t)} surgeon: ${actionShort(f.truth.next_action)} (${v})` : `forecast revealed at ${fmtT(f.truth.t)}` };
    }),
    ...alerts.map((a, i) => ({ t: a.t, key: `a${i}`, color: "#d03b3b", border: "#d03b3b", title: `alert at ${fmtT(a.t)}`, shape: "tri" })),
    ...(clip?.model_cvs_t != null ? [{ t: clip.model_cvs_t, key: "m", color: "#3ddc84", border: "#3ddc84", title: `eyes: safe to clip at ${fmtT(clip.model_cvs_t)}`, shape: "bar" }] : []),
    ...(clip?.experts_cvs_t != null ? [{ t: clip.experts_cvs_t, key: "e", color: "#ffffff", border: "#ffffff", title: `surgeons: safe to clip at ${fmtT(clip.experts_cvs_t)}`, shape: "bar" }] : []),
  ];
  return (
    <div className={`mt-2 flex items-center gap-3 rounded-lg border border-line bg-surface-1 px-3 py-2 ${disabled ? "opacity-50" : ""}`}>
      <button className="btn-primary h-9 w-9 shrink-0 p-0 text-base" disabled={disabled} onClick={onToggle} aria-label={playing ? "Pause" : "Play"}
        title={`${playing ? "Pause" : "Play"} (space)`}>
        {playing ? "❚❚" : "▶"}
      </button>
      <div className="relative min-w-0 flex-1">
        <div className="pointer-events-none absolute inset-x-0 -top-1 h-3">
          {marks.map((m) => (
            <span key={m.key} title={m.title} className="pointer-events-auto absolute -translate-x-1/2 cursor-pointer"
              style={{ left: x(m.t) }} onClick={() => !disabled && onSeek(Math.max(t0, m.t - 3))}>
              {m.shape === "bar" ? <span className="block h-3 w-0.5" style={{ background: m.color }} />
                : m.shape === "tri" ? <span className="block text-[10px] leading-3" style={{ color: m.color }}>▲</span>
                : <span className="block h-2.5 w-2.5 rounded-full border" style={{ background: m.color, borderColor: m.border }} />}
            </span>
          ))}
        </div>
        <input type="range" min={t0} max={t1} step="0.5" value={cur} disabled={disabled}
          onChange={(e) => onSeek(Number(e.target.value))} aria-label="Video position"
          className="mt-3 w-full accent-[#8f9cff]" />
      </div>
      <span className="shrink-0 font-mono text-xs text-ink-2">{fmtT(Math.floor(cur))} / {fmtT(t1)}</span>
    </div>
  );
}
