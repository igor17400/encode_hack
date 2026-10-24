import { useState } from "react";
import { BANDS, progress, riskBand } from "../lib/statespace";
import { actionLabel } from "../api";

// The world model's state space: x = surgical progress, y = risk band. Both are deterministic functions of the
// state (lib/statespace.js), so every node and path is placed by the model's own output.

const BAND_FILL = ["#0e1d17", "#1a1a12", "#221812", "#2a1214"];
const BAND_INK = ["#3ddc84", "#fab219", "#ec835a", "#ff6b6b"];
const RISK_COL = { low: "#0ca30c", moderate: "#fab219", high: "#ec835a", injury: "#d03b3b" };
const W = 1000, H = 330, L = 150, R = 24, T = 16, B = 34;
const bandH = (H - T - B) / 4;
const X = (p) => L + p * (W - L - R);
const Y = (band, k = 0) => T + band * bandH + bandH / 2 + k;

function Frame({ children, xLabel = "surgical progress →" }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[560px]">
      {BANDS.map((b, i) => (
        <g key={b}>
          <rect x={L} y={T + i * bandH} width={W - L - R} height={bandH} fill={BAND_FILL[i]} />
          <text x={8} y={T + i * bandH + bandH / 2 + 4} fontSize="12" fill={BAND_INK[i]} fontFamily="IBM Plex Sans, sans-serif">{b}</text>
        </g>
      ))}
      {["dissect", "CVS", "clip", "cut", "detach · pack"].map((s, i) => (
        <text key={s} x={X((i + 0.5) / 5)} y={H - 12} fontSize="11" fill="#718196" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">{s}</text>
      ))}
      <text x={W - R} y={H - 1} fontSize="10" fill="#718196" textAnchor="end" fontFamily="IBM Plex Mono, monospace">{xLabel}</text>
      {children}
    </svg>
  );
}

/** Imagine: the branch tree of futures from one moment. nodes: [{id, parent, state, action, risk}] */
export function FutureTree({ root, nodes, selected, onSelect }) {
  const pos = new Map();
  const used = new Map();
  const place = (id, st) => {
    const band = riskBand(st), p = progress(st);
    const key = `${band}:${Math.round(p * 30)}`;
    const k = used.get(key) || 0;
    used.set(key, k + 1);
    pos.set(id, [X(p), Y(band, (k % 2 ? 1 : -1) * Math.ceil(k / 2) * 18)]);
  };
  if (root) place("root", root);
  nodes.forEach((n) => place(n.id, n.state));
  return (
    <div className="overflow-x-auto">
      <Frame>
        {nodes.map((n) => {
          const [x0, y0] = pos.get(n.parent ?? "root") || pos.get("root");
          const [x1, y1] = pos.get(n.id);
          const mx = (x0 + x1) / 2;
          return (
            <g key={`e${n.id}`}>
              <path d={`M${x0},${y0} C${mx},${y0} ${mx},${y1} ${x1},${y1}`} stroke={RISK_COL[n.risk] || "#aab7c6"} strokeWidth={selected === n.id ? 3.5 : 2} fill="none" />
              <text x={x1 + 16} y={y1 + 4} fontSize="10.5" fill="#aab7c6" fontFamily="IBM Plex Mono, monospace">
                {n.patient_id ? `${n.patient_id} · ` : ""}{actionLabel(n.action).split(" · ").slice(1).join(" ")}
              </text>
            </g>
          );
        })}
        {root && (
          <g>
            <circle cx={pos.get("root")[0]} cy={pos.get("root")[1]} r="11" fill="#101923" stroke="#8f9cff" strokeWidth="3" />
            <text x={pos.get("root")[0]} y={pos.get("root")[1] - 17} fontSize="11" fill="#8f9cff" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">now</text>
          </g>
        )}
        {nodes.map((n) => {
          const [x, y] = pos.get(n.id);
          return (
            <g key={n.id} className="cursor-pointer" onClick={() => onSelect?.(n.id)}>
              <circle cx={x} cy={y} r={selected === n.id ? 12 : 9} fill={RISK_COL[n.risk] || "#aab7c6"} stroke="#e9eef4" strokeWidth={selected === n.id ? 3 : 1.5} />
              {n.state.injury && <path d={`M${x - 5},${y - 5} L${x + 5},${y + 5} M${x + 5},${y - 5} L${x - 5},${y + 5}`} stroke="#fff" strokeWidth="2.5" />}
              <title>{`${actionLabel(n.action)} → ${n.risk} risk`}</title>
            </g>
          );
        })}
      </Frame>
    </div>
  );
}

/** Robot: episode trajectories. paths: [{id, label, color, faint, states:[...], end: "injury"|"done"|"timeout"}] */
export function Trajectories({ paths, onSelect, selected }) {
  const [hover, setHover] = useState(null);
  return (
    <div className="relative overflow-x-auto">
      <Frame>
        {paths.map((p, idx) => {
          const jitter = ((idx % 7) - 3) * 3.2;
          const pts = p.states.map((s) => [X(progress(s)), Y(riskBand(s), jitter)]);
          if (!pts.length) return null;
          const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
          const [ex, ey] = pts[pts.length - 1];
          const on = selected === p.id || hover === p.id;
          return (
            <g key={p.id} className="cursor-pointer" onClick={() => onSelect?.(p.id)} onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)}>
              <path d={d} stroke={p.color} strokeWidth={on ? 3.5 : p.faint ? 1.2 : 2} fill="none" opacity={p.faint && !on ? 0.35 : 0.9} strokeLinejoin="round" />
              <path d={d} stroke="transparent" strokeWidth="12" fill="none" />
              {p.end === "injury" && <path d={`M${ex - 6},${ey - 6} L${ex + 6},${ey + 6} M${ex + 6},${ey - 6} L${ex - 6},${ey + 6}`} stroke={p.color} strokeWidth="3" />}
              {p.end === "done" && <circle cx={ex} cy={ey} r="5" fill={p.color} stroke="#e9eef4" strokeWidth="1.5" />}
              {p.end === "timeout" && <circle cx={ex} cy={ey} r="4.5" fill="#101923" stroke={p.color} strokeWidth="2" />}
            </g>
          );
        })}
      </Frame>
      {hover && (() => {
        const p = paths.find((x) => x.id === hover);
        return (
          <div className="pointer-events-none absolute left-40 top-2 rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm">
            {p.label} · {p.states.length} steps · {p.end === "injury" ? "bile duct injury" : p.end === "done" ? "completed" : "ran out of steps"}
          </div>
        );
      })()}
    </div>
  );
}
