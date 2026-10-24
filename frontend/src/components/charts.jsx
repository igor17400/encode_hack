import { useState } from "react";

/**
 * Multi-series line chart (one y axis), crosshair + tooltip, legend + direct labels, table toggle.
 * series: [{key, label, color, values: [number|null]}]; x is 1..N.
 */
export function LineChart({ series, yLabel, xLabel, height = 300, format = (v) => v }) {
  const [hover, setHover] = useState(null);
  const [table, setTable] = useState(false);
  const n = Math.max(0, ...series.map((s) => s.values.length));
  const all = series.flatMap((s) => s.values.filter((v) => v != null));
  const yMax = Math.max(1, Math.ceil(Math.max(0, ...all)));
  const W = 760, H = height, m = { l: 44, r: 150, t: 30, b: 36 };
  const x = (i) => m.l + (n <= 1 ? 0 : (i / (n - 1)) * (W - m.l - m.r));
  const y = (v) => H - m.b - (v / yMax) * (H - m.t - m.b);
  const ticks = niceTicks(yMax);

  if (!n) return <div className="grid h-40 place-items-center text-ink-3">No episodes yet.</div>;

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-4">
        {series.map((s) => (
          <span key={s.key} className="flex items-center gap-2 text-sm text-ink-2">
            <span className="h-0.5 w-5 rounded" style={{ background: s.color }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
            {s.label}
          </span>
        ))}
        <button className="ml-auto text-sm text-ink-3 underline" onClick={() => setTable(!table)}>
          {table ? "chart view" : "table view"}
        </button>
      </div>
      {table ? (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink-3">
              <th className="py-1">{xLabel}</th>
              {series.map((s) => (
                <th key={s.key}>{s.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: n }, (_, i) => (
              <tr key={i} className="border-t border-line">
                <td className="py-1">{i + 1}</td>
                {series.map((s) => (
                  <td key={s.key}>{s.values[i] ?? "—"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" onMouseLeave={() => setHover(null)}>
            {ticks.map((t) => (
              <g key={t}>
                <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} stroke="var(--grid)" strokeWidth="1" />
                <text x={m.l - 8} y={y(t) + 4} textAnchor="end" dominantBaseline="auto" fontSize="12" fill="var(--text-muted)">
                  {t}
                </text>
              </g>
            ))}
            {Array.from({ length: n }, (_, i) => (
              <text key={i} x={x(i)} y={H - m.b + 18} textAnchor="middle" fontSize="12" fill="var(--text-muted)">
                {i + 1}
              </text>
            ))}
            <text x={m.l} y={H - 4} fontSize="12" fill="var(--text-muted)">
              {xLabel}
            </text>
            <text x={4} y={14} fontSize="12" fill="var(--text-muted)">
              {yLabel}
            </text>
            {hover != null && <line x1={x(hover)} x2={x(hover)} y1={m.t} y2={H - m.b} stroke="var(--text-muted)" strokeDasharray="3 3" />}
            {series.map((s) => {
              const pts = s.values.map((v, i) => (v == null ? null : [x(i), y(v)])).filter(Boolean);
              const last = [...s.values.keys()].reverse().find((i) => s.values[i] != null);
              return (
                <g key={s.key}>
                  <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke={s.color} strokeWidth="2" strokeLinejoin="round" />
                  {s.values.map((v, i) =>
                    v == null ? null : (
                      <circle key={i} cx={x(i)} cy={y(v)} r={hover === i ? 5.5 : 4} fill={s.color} stroke="var(--surface-1)" strokeWidth="2" />
                    ),
                  )}
                  {last != null && (
                    <text x={x(last) + 10} y={y(s.values[last]) + 4} fontSize="13" fill="var(--text-secondary)">
                      {s.label}
                    </text>
                  )}
                </g>
              );
            })}
            {Array.from({ length: n }, (_, i) => (
              <rect
                key={i}
                x={x(i) - (W - m.l - m.r) / Math.max(1, n - 1) / 2}
                y={m.t}
                width={(W - m.l - m.r) / Math.max(1, n - 1)}
                height={H - m.t - m.b}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
              />
            ))}
          </svg>
          {hover != null && (
            <div
              className="pointer-events-none absolute top-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm shadow-lg"
              style={{ left: `${(x(hover) / W) * 100}%`, transform: "translateX(12px)" }}
            >
              <div className="mb-1 text-ink-3">
                {xLabel} {hover + 1}
              </div>
              {series.map((s) => (
                <div key={s.key} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-ink-2">{s.label}</span>
                  <span className="ml-auto pl-3 font-semibold text-ink-1">{s.values[hover] == null ? "—" : format(s.values[hover])}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Single-series horizontal bars with value labels and hover. rows: [{label, value (0..1), note}] */
export function HBars({ rows, color = "#3987e5", highlight }) {
  const [hover, setHover] = useState(null);
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((r, i) => (
        <div key={r.label} className="grid grid-cols-[11rem_1fr_4rem] items-center gap-3" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
          <span className={`text-sm ${r.label === highlight ? "font-semibold text-ink-1" : "text-ink-2"}`}>{r.label}</span>
          <div className="relative h-5 rounded bg-surface-3">
            {r.value != null && (
              <div
                className="h-5 rounded-r"
                style={{ width: `${Math.max(0.5, r.value * 100)}%`, background: r.label === highlight ? color : "#5f5e58", opacity: hover === i ? 0.85 : 1 }}
              />
            )}
            {hover === i && r.note && (
              <div className="absolute left-2 top-6 z-10 rounded border border-line bg-surface-2 px-2 py-1 text-xs text-ink-2 shadow">{r.note}</div>
            )}
          </div>
          <span className="text-right font-semibold">{r.value == null ? "—" : `${Math.round(r.value * 100)}%`}</span>
        </div>
      ))}
    </div>
  );
}

function niceTicks(max) {
  const step = max <= 5 ? 1 : max <= 10 ? 2 : Math.ceil(max / 5);
  const out = [];
  for (let t = 0; t <= max; t += step) out.push(t);
  return out;
}
