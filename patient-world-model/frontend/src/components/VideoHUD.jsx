import { useEffect, useRef, useState } from "react";
import { niceName } from "../api";
import { actionShort } from "../lib/describe";
import AnatomyMap, { CvsRing } from "./AnatomyMap";
import { fmtT } from "./AnatomyPanel";

// What the model is doing, drawn over the real surgery video. Every element comes from the stream:
// boxes and labels from perception, state from the rules, alerts from the safety check.

const BOX_COLOR = {
  cystic_duct: "#e3b23e", cystic_artery: "#e05a50", cystic_plate: "#caa37b", gallbladder: "#93b25d", liver: "#c06a74",
  hepatocystic_window: "#3ddc84", common_bile_duct: "#5cc8d8",
};

export default function VideoHUD({ src, t0 = 0, obs, state, changes = [], banner, alert, playing, speed, done, children,
                                   overlay = null, onTime, hold = false, seek = null, onEnded, mini = true }) {
  const ref = useRef(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.playbackRate = Number(speed) || 1;
    if (playing && !hold) v.play().catch(() => {});
    else v.pause();
  }, [playing, speed, hold]);
  // Chrome may pause a muted video on its own (tab or window loses focus, e.g. a screen recorder's controls).
  // If the viewer still wants it playing, resume it instead of silently freezing everything that follows the video.
  useEffect(() => {
    const v = ref.current;
    if (!v || !playing || hold) return;
    const resume = () => { if (v.paused && !v.ended && !document.hidden) v.play().catch(() => {}); };
    const onPause = () => setTimeout(resume, 150);
    v.addEventListener("pause", onPause);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("focus", resume);
    const h = setInterval(resume, 1000);
    return () => {
      v.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("focus", resume);
      clearInterval(h);
    };
  }, [playing, hold]);
  // The video is the clock: everything else follows its time. Seeks come from the player bar / timeline.
  useEffect(() => {
    const v = ref.current;
    if (!v || !seek) return;
    v.currentTime = Math.max(0, seek.t - t0);
    onTime?.(t0 + v.currentTime);
  }, [seek?.n]);
  useEffect(() => {
    if (!changes.length) return;
    const id = Math.random();
    setToasts((x) => [...x.slice(-2), { id, items: changes }]);
    const h = setTimeout(() => setToasts((x) => x.filter((t) => t.id !== id)), 3200);
    return () => clearTimeout(h);
  }, [changes]);

  const boxes = (obs?.boxes || []).filter((b) => (b.confidence ?? 1) >= 0.5);
  const chips = obs?.labels?.length
    ? obs.labels.map((l) => ({ text: actionShort(l), conf: l.confidence }))
    : [...(obs?.instruments || []).map((i) => ({ text: niceName(i), conf: null })),
       ...(obs?.structures || []).filter((s) => (s.confidence ?? 0) >= 0.5).map((s) => ({ text: niceName(s.name), conf: s.confidence }))];
  const isError = banner?.startsWith("perception error");

  return (
    <figure className={`relative overflow-hidden rounded-xl border-2 bg-black transition-colors ${alert ? "border-status-critical" : "border-line"}`}>
      <div className="relative aspect-video w-full max-w-full">
        {src ? (
          <video ref={ref} src={src} muted playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover"
            onTimeUpdate={(e) => onTime?.(t0 + e.currentTarget.currentTime)} onEnded={() => onEnded?.()} />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-ink-3">no video for this clip</div>
        )}

        {/* approximate boxes from the perception model */}
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
          {boxes.map((b, i) => {
            const [y0, x0, y1, x1] = b.box_2d;
            const col = BOX_COLOR[b.label] || "#e9eef4";
            return (
              <g key={i}>
                <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill="none" stroke={col} strokeWidth="5" vectorEffect="non-scaling-stroke" rx="6" />
              </g>
            );
          })}
        </svg>
        {boxes.map((b, i) => {
          const [y0, x0] = b.box_2d;
          return (
            <span key={i} className="pointer-events-none absolute rounded px-1.5 py-0.5 font-mono text-[11px] font-medium text-surface-0"
              style={{ left: `${x0 / 10}%`, top: `${Math.max(0, y0 / 10 - 4)}%`, background: BOX_COLOR[b.label] || "#e9eef4" }}>
              {niceName(b.label)} {b.confidence != null ? Math.round(b.confidence * 100) : ""}
            </span>
          );
        })}

        {/* phase + time code */}
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          <span className="rounded-md bg-surface-0/80 px-2 py-1 font-mono text-xs text-ink-1">
            {obs ? `t ${fmtT(obs.t)}` : "ready"}{state?.phase ? ` · ${niceName(state.phase).replaceAll("-", " ")}` : ""}
          </span>
          {boxes.length > 0 && <span className="rounded-md bg-surface-0/70 px-2 py-0.5 font-mono text-[10px] text-ink-2">boxes: approximate (Gemini Flash)</span>}
          {state?.cvs && (() => {
            const n = Object.values(state.cvs).filter(Boolean).length;
            return (
              <span className={`self-start rounded-md px-2 py-1 text-xs font-bold ${n === 3 ? "bg-status-good text-black" : "bg-status-warning text-black"}`}>
                {n === 3 ? "✓ Safe to clip · CVS 3/3" : `Not safe to clip yet · CVS ${n}/3`}
              </span>
            );
          })()}
        </div>

        {/* mini world model: CVS + anatomy picture-in-picture (off when the full panels sit beside the video) */}
        {state && mini && (
          <div className="absolute right-3 top-3 hidden w-32 flex-col items-center gap-1 rounded-lg border border-line bg-surface-0/80 p-1.5 sm:flex">
            <CvsRing state={state} size={46} showLabels={false} />
            <AnatomyMap state={state} mini className="rounded" />
          </div>
        )}

        {/* rule-engine changes, as they happen */}
        <div className="absolute bottom-14 left-3 flex flex-col gap-1">
          {toasts.flatMap((t) => t.items.map((c, j) => (
            <span key={`${t.id}-${j}`} className="rounded-md border border-accent/60 bg-surface-0/90 px-2.5 py-1 text-sm text-ink-1">
              <span className="text-accent">eyes · </span>{c}
            </span>
          )))}
        </div>

        {/* what the model sees in this frame */}
        {chips.length > 0 && (
          <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
            {chips.slice(0, 6).map((c, i) => (
              <span key={i} className="flex items-center gap-1.5 rounded-full bg-surface-0/85 px-2.5 py-1 text-xs text-ink-1">
                {c.text}
                {c.conf != null && (
                  <span className="h-1 w-8 overflow-hidden rounded-full bg-surface-3">
                    <span className="block h-1 bg-accent" style={{ width: `${Math.round(c.conf * 100)}%` }} />
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        {overlay}

        {/* veils */}
        {banner && (
          <div className={`absolute inset-0 grid place-items-center ${isError ? "bg-status-critical/40" : "bg-surface-0/55"}`}>
            <span className="rounded-lg bg-surface-0/90 px-4 py-2 text-lg font-semibold">{banner}</span>
          </div>
        )}
        {alert && <div className="anim-pulse pointer-events-none absolute inset-0 border-[6px] border-status-critical" />}
        {done && !alert && (
          <div className="absolute inset-0 grid place-items-center bg-surface-0/60">{children}</div>
        )}
      </div>
    </figure>
  );
}
