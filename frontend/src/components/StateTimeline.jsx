import { niceName } from "../api";
import { fmtT } from "./AnatomyPanel";

// The world model's memory of the clip: one lane per thing it tracks, drawn from the recorded state history.
// Surgeons' CVS verdicts (Endoscapes keyframes) sit on the same lanes as the model's held judgement.

const STATUS_FILL = { unseen: "#16222f", visible: "#3a4a5e", dissecting: "#6b7f99", skeletonised: null, clipped: "#d9e2ec", cut: "#ffffff" };
const STRUCT = [
  ["cystic_duct", "Cystic duct", "#e3b23e"],
  ["cystic_artery", "Cystic artery", "#e05a50"],
  ["cystic_plate", "Cystic plate", "#caa37b"],
];
const CVS = [
  ["c1_triangle_cleared", "Triangle cleared", "C2"],
  ["c2_plate_exposed", "Cystic plate (CVS)", "C3"],
  ["c3_two_structures", "Two structures", "C1"],
];
const PHASE_FILL = ["#22303f", "#2c3d52", "#3a3550", "#2f4438", "#44382c", "#2c4045", "#3a2c38"];

export default function StateTimeline({ history, t0, t1, playhead, onSeek, experts = [], expertsCvsT, events = [] }) {
  if (!history.length) return null;
  const W = 1000, L = 150, R = 12, laneH = 20, gap = 6;
  const lanes = 1 + STRUCT.length + CVS.length + 1;
  const H = 24 + lanes * (laneH + gap) + 18;
  const x = (t) => L + ((t - t0) / Math.max(1, t1 - t0)) * (W - L - R);
  const laneY = (i) => 18 + i * (laneH + gap);
  // contiguous segments of equal value along the state history
  const segs = (value) => {
    const out = [];
    history.forEach((h, i) => {
      const v = value(h.state);
      const tEnd = i + 1 < history.length ? history[i + 1].t : t1;
      const last = out[out.length - 1];
      if (last && last.v === v) last.t1 = tEnd;
      else out.push({ v, t0: h.t, t1: tEnd });
    });
    return out;
  };
  const click = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const t = t0 + ((((e.clientX - r.left) / r.width) * W - L) / (W - L - R)) * (t1 - t0);
    if (t >= t0 && t <= t1) onSeek?.(Math.round(t));
  };
  const labelX = 8;
  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[640px] cursor-pointer" onClick={click} role="img" aria-label="world model timeline">
        {/* phase */}
        <text x={labelX} y={laneY(0) + 14} fontSize="12" fill="#718196" fontFamily="IBM Plex Mono, monospace">PHASE</text>
        {segs((s) => s.phase_idx ?? 0).map((g, i) => (
          <g key={`p${i}`}>
            <rect x={x(g.t0)} y={laneY(0)} width={Math.max(1, x(g.t1) - x(g.t0))} height={laneH} fill={PHASE_FILL[g.v] || "#22303f"} />
            {x(g.t1) - x(g.t0) > 90 && (
              <text x={x(g.t0) + 6} y={laneY(0) + 14} fontSize="11" fill="#aab7c6" fontFamily="IBM Plex Sans, sans-serif">
                {niceName(history.find((h) => (h.state.phase_idx ?? 0) === g.v)?.state.phase || "").replaceAll("-", " ")}
              </text>
            )}
          </g>
        ))}

        {/* structures */}
        {STRUCT.map(([key, label, color], i) => (
          <g key={key}>
            <text x={labelX} y={laneY(1 + i) + 14} fontSize="12" fill={color} fontFamily="IBM Plex Sans, sans-serif">{label}</text>
            {segs((s) => s.structures[key].status).map((g, j) => (
              <rect key={j} x={x(g.t0)} y={laneY(1 + i) + 3} width={Math.max(1, x(g.t1) - x(g.t0))} height={laneH - 6} rx="3"
                fill={STATUS_FILL[g.v] ?? color}>
                <title>{`${label}: ${g.v} (${fmtT(g.t0)}–${fmtT(g.t1)})`}</title>
              </rect>
            ))}
          </g>
        ))}

        {/* CVS: model's judgement (bars) vs surgeons (dots) */}
        {CVS.map(([key, label, camma], i) => {
          const li = 1 + STRUCT.length + i;
          return (
            <g key={key}>
              <text x={labelX} y={laneY(li) + 14} fontSize="12" fill="#aab7c6" fontFamily="IBM Plex Sans, sans-serif">{label}</text>
              <rect x={L} y={laneY(li) + laneH / 2 - 1} width={W - L - R} height="2" fill="#24344a" />
              {segs((s) => !!s.cvs[key]).filter((g) => g.v).map((g, j) => (
                <rect key={j} x={x(g.t0)} y={laneY(li) + 4} width={Math.max(2, x(g.t1) - x(g.t0))} height={laneH - 8} rx="3" fill="#0ca30c">
                  <title>{`model: ${label} met ${fmtT(g.t0)}–${fmtT(g.t1)}`}</title>
                </rect>
              ))}
              {experts.map((k, j) => (
                <circle key={j} cx={x(k.t)} cy={laneY(li) + laneH / 2} r="4.5"
                  fill={k[camma] >= 0.5 ? "#ffffff" : "none"} stroke="#ffffff" strokeWidth="1.5" opacity={0.35 + 0.65 * k[camma]}>
                  <title>{`surgeons ${fmtT(k.t)}: ${camma} ${k[camma].toFixed(2)}`}</title>
                </circle>
              ))}
            </g>
          );
        })}

        {/* events */}
        {(() => {
          const li = lanes - 1;
          return (
            <g>
              <text x={labelX} y={laneY(li) + 14} fontSize="12" fill="#718196" fontFamily="IBM Plex Mono, monospace">EVENTS</text>
              {events.map((e, i) => (
                <g key={i} transform={`translate(${x(e.t)}, ${laneY(li) + 10})`}>
                  {e.kind === "alert" && <path d="M0,-8 L8,7 L-8,7 Z" fill="#d03b3b"><title>{`alert ${fmtT(e.t)}: ${e.label}`}</title></path>}
                  {e.kind === "check" && <rect x="-5" y="-5" width="10" height="10" transform="rotate(45)" fill="#8f9cff"><title>{`Argon verification ${fmtT(e.t)}`}</title></rect>}
                  {e.kind === "held" && <rect x="-1.5" y="-7" width="3" height="14" fill="#718196"><title>{`can't confirm ${fmtT(e.t)}`}</title></rect>}
                </g>
              ))}
            </g>
          );
        })()}

        {expertsCvsT != null && (
          <g>
            <line x1={x(expertsCvsT)} x2={x(expertsCvsT)} y1={10} y2={H - 14} stroke="#ffffff" strokeDasharray="4 3" />
            <text x={x(expertsCvsT) + 4} y={H - 4} fontSize="11" fill="#ffffff" fontFamily="IBM Plex Mono, monospace">
              surgeons: safe to clip · {fmtT(expertsCvsT)}
            </text>
          </g>
        )}
        {playhead != null && <line x1={x(playhead)} x2={x(playhead)} y1={10} y2={H - 14} stroke="#8f9cff" strokeWidth="2" />}
        <text x={L} y={H - 4} fontSize="10" fill="#718196" fontFamily="IBM Plex Mono, monospace">{fmtT(t0)}</text>
        <text x={W - R} y={H - 4} fontSize="10" fill="#718196" textAnchor="end" fontFamily="IBM Plex Mono, monospace">{fmtT(t1)}</text>
      </svg>
      <div className="mt-1 flex flex-wrap gap-4 font-mono text-[11px] text-ink-3">
        <span><span className="text-status-good">■</span> model judges criterion met</span>
        {experts.length > 0 && <span>● surgeons (3 annotators) · filled = majority met</span>}
        <span><span className="text-status-critical">▲</span> alert</span>
        <span><span className="text-accent">◆</span> Argon verification</span>
        <span>click to jump</span>
      </div>
    </div>
  );
}
