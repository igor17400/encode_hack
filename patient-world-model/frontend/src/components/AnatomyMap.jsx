import { niceName } from "../api";

// Schematic of the hepatocystic region, drawn from the world-model State. Every visual attribute below is a
// direct function of the state (status, exposure, clips, CVS, bleeding, CBD risk, adhesions, detachment).

const C = {
  liver: "#7d2f38", gb: "#93b25d", duct: "#e3b23e", artery: "#e05a50", plate: "#caa37b", cbd: "#5cc8d8",
  clip: "#d9e2ec", bg: "#101923", window: "#0ca30c", risk: "#d03b3b", ink: "#aab7c6", muted: "#718196",
};
const RANK = ["unseen", "visible", "dissecting", "skeletonised", "clipped", "cut"];

const PATH = {
  liver: "M0,0 H420 V70 C404,96 372,104 336,100 C300,96 268,106 236,114 C196,124 150,122 112,112 C70,102 34,112 0,122 Z",
  plate: "M196,118 C230,108 300,104 344,112 C350,124 330,140 300,146 C262,150 226,146 204,138 Z",
  gb: "M304,104 C366,108 378,160 338,186 C306,206 256,208 220,202 C198,198 186,189 194,178 C208,158 242,138 264,120 C276,110 290,104 304,104 Z",
  duct: "M197,193 C172,206 150,217 116,238",
  artery: "M138,166 C168,160 196,165 230,169",
  cbd: "M110,132 C106,190 102,244 98,300",
  triangle: "M116,238 L197,193 L230,169 L138,166 Z",
};
// Clip / cut positions along each tube (proximal clips on the bile-duct side, cut between, one on the specimen side).
const CLIPS = {
  cystic_duct: { pts: [[140, 225], [151, 219], [184, 200], [129, 231]], cut: [167, 210], n: [0.5, 0.866] },
  cystic_artery: { pts: [[160, 162], [171, 162], [208, 166], [150, 163]], cut: [190, 163], n: [0, 1] },
};

function tubeStyle(status) {
  return {
    unseen: { opacity: 0.2, dash: "5 5" },
    visible: { opacity: 0.55, dash: null },
    dissecting: { opacity: 0.55, dash: null },
    skeletonised: { opacity: 1, dash: null },
    clipped: { opacity: 1, dash: null },
    cut: { opacity: 1, dash: null },
  }[status] || { opacity: 0.2, dash: "5 5" };
}

function Tube({ d, color, width, s }) {
  const st = tubeStyle(s.status);
  const exposed = s.status === "dissecting" ? Math.min(1, s.exposure) : RANK.indexOf(s.status) >= 3 ? 1 : 0;
  return (
    <g>
      <path d={d} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" opacity={st.opacity} strokeDasharray={st.dash || undefined} />
      {exposed > 0 && (
        <path d={d} pathLength="1" stroke={color} strokeWidth={width} fill="none" strokeLinecap="round"
          strokeDasharray={`${exposed} 1`} filter={RANK.indexOf(s.status) >= 3 ? "url(#glow)" : undefined} />
      )}
    </g>
  );
}

function Clips({ name, s }) {
  const spec = CLIPS[name];
  const [nx, ny] = spec.n;
  const glyph = ([x, y], key) => (
    <line key={key} x1={x - 9 * nx} y1={y - 9 * ny} x2={x + 9 * nx} y2={y + 9 * ny} stroke={C.clip} strokeWidth="3.5" strokeLinecap="round" />
  );
  const [cx, cy] = spec.cut;
  return (
    <g>
      {spec.pts.slice(0, Math.min(4, s.clips)).map(glyph)}
      {s.status === "cut" && (
        <g>
          <line x1={cx - 11 * nx} y1={cy - 11 * ny} x2={cx + 11 * nx} y2={cy + 11 * ny} stroke={C.bg} strokeWidth="7" />
          <text x={cx + 12} y={cy - 8} fontSize="10" fill={C.ink} fontFamily="IBM Plex Mono, monospace">cut</text>
        </g>
      )}
    </g>
  );
}

export function diffStates(prev, cur) {
  if (!prev || !cur) return [];
  const out = [];
  for (const n of ["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate"]) {
    const a = prev.structures[n], b = cur.structures[n];
    if (a.status !== b.status) out.push({ name: n, text: `${niceName(n)}: ${a.status} → ${b.status}` });
    if (a.clips !== b.clips) out.push({ name: n, text: `${niceName(n)}: ${b.clips} clip${b.clips === 1 ? "" : "s"}` });
  }
  const ca = Object.values(prev.cvs).filter(Boolean).length, cb = Object.values(cur.cvs).filter(Boolean).length;
  if (ca !== cb) out.push({ name: "cvs", text: `critical view of safety ${ca}/3 → ${cb}/3` });
  if (!prev.structures.common_bile_duct.at_risk && cur.structures.common_bile_duct.at_risk)
    out.push({ name: "common_bile_duct", text: "common bile duct now at risk" });
  if (!prev.injury && cur.injury) out.push({ name: "common_bile_duct", text: "bile duct injury" });
  if (!prev.bleeding && cur.bleeding) out.push({ name: "bleeding", text: "bleeding starts" });
  return out;
}

export default function AnatomyMap({ state, prev, mini = false, className = "" }) {
  if (!state) {
    return (
      <div className={`grid aspect-[7/5] place-items-center rounded-xl border border-dashed border-line text-sm text-ink-3 ${className}`}>
        The patient state appears here as the model builds it.
      </div>
    );
  }
  const s = state.structures;
  const cbd = s.common_bile_duct || {};
  const changed = new Set(diffStates(prev, state).map((c) => c.name));
  const detach = Math.min(1, state.gb_detach || 0);
  const cleared = state.cvs.c1_triangle_cleared;
  const gbFill = { unseen: 0.15, visible: 0.45, dissecting: 0.6, skeletonised: 0.8 }[s.gallbladder.status] ?? 0.8;
  const plateFill = 0.12 + 0.7 * Math.min(1, s.cystic_plate.exposure);
  const key = `${state.t}-${[...changed].join(",")}`; // restart change flashes on each new change
  return (
    <svg viewBox="0 0 420 300" className={`w-full max-w-full ${className}`} role="img"
      aria-label={`Patient anatomy: duct ${s.cystic_duct.status}, artery ${s.cystic_artery.status}, CVS ${Object.values(state.cvs).filter(Boolean).length} of 3`}>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="liverG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a3a45" /><stop offset="1" stopColor="#5e222a" />
        </linearGradient>
        <radialGradient id="gbG" cx="0.62" cy="0.38" r="0.75">
          <stop offset="0" stopColor="#c4dc8a" /><stop offset="0.55" stopColor="#93b25d" /><stop offset="1" stopColor="#5d7a35" />
        </radialGradient>
        <radialGradient id="vignette" cx="0.5" cy="0.45" r="0.75">
          <stop offset="0.6" stopColor="#101923" stopOpacity="0" /><stop offset="1" stopColor="#05080c" stopOpacity="0.85" />
        </radialGradient>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={C.plate} strokeWidth="1.5" opacity="0.7" />
        </pattern>
      </defs>
      <rect width="420" height="300" fill={C.bg} />
      <path d={PATH.liver} fill="url(#liverG)" />
      <path d="M40,40 C110,30 190,52 250,44 M60,72 C140,66 220,84 300,70" stroke="#b9545f" strokeWidth="1.2" fill="none" opacity="0.35" />
      {!mini && <text x="14" y="26" fontSize="12" fill="#e9c9cd" fontFamily="IBM Plex Mono, monospace">LIVER</text>}

      {/* cystic plate, revealed as the gallbladder comes off the liver bed */}
      <path d={PATH.plate} fill={C.plate} opacity={plateFill} />
      {s.cystic_plate.status === "dissecting" && <path d={PATH.plate} fill="url(#hatch)" />}

      {/* hepatocystic triangle: green window when cleared, web of adhesions while present */}
      <path d={PATH.triangle} fill={cleared ? C.window : "#000"} opacity={cleared ? 0.18 : 0.25} />
      {state.adhesion_load > 0 && (
        <g stroke="#cfd8e3" strokeWidth="1" opacity={0.25 + 0.6 * state.adhesion_load}>
          <path d="M130,180 L200,190 M140,200 L215,175 M125,215 L180,170 M150,230 L222,180" />
        </g>
      )}

      {/* hidden common bile duct: what the CVS protects */}
      <path d={PATH.cbd} stroke={cbd.at_risk || state.injury ? C.risk : C.cbd} strokeWidth="13" fill="none" strokeLinecap="round"
        strokeDasharray={state.injury ? undefined : "8 6"} opacity={cbd.at_risk || state.injury ? 0.95 : 0.5}
        className={cbd.at_risk && !state.injury ? "anim-pulse" : ""} />
      {state.injury && <path d="M90,224 L122,250 M122,224 L90,250" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />}

      <g transform={`translate(${detach * 16}, ${-detach * 12})`}>
        <path d={PATH.gb} fill="url(#gbG)" opacity={gbFill} stroke="#c4dc8a" strokeWidth={s.gallbladder.status === "unseen" ? 1 : 1.5}
          strokeDasharray={s.gallbladder.status === "unseen" ? "5 5" : undefined} />
      </g>
      <Tube d={PATH.artery} color={C.artery} width={6} s={s.cystic_artery} />
      <Tube d={PATH.duct} color={C.duct} width={9} s={s.cystic_duct} />
      <Clips name="cystic_duct" s={s.cystic_duct} />
      <Clips name="cystic_artery" s={s.cystic_artery} />

      {state.bleeding && (
        <g fill={C.risk}>
          <circle cx="206" cy="182" r="3.5" className="anim-drip" />
          <circle cx="216" cy="186" r="2.8" className="anim-drip" style={{ animationDelay: "0.4s" }} />
        </g>
      )}

      {/* flashes on whatever just changed */}
      <g key={key} className="anim-flash" fill="none" stroke="#ffffff" strokeWidth="2">
        {changed.has("cystic_duct") && <path d={PATH.duct} strokeWidth="16" opacity="0.35" strokeLinecap="round" />}
        {changed.has("cystic_artery") && <path d={PATH.artery} strokeWidth="13" opacity="0.35" strokeLinecap="round" />}
        {changed.has("cystic_plate") && <path d={PATH.plate} opacity="0.6" />}
        {changed.has("gallbladder") && <path d={PATH.gb} opacity="0.6" />}
        {changed.has("cvs") && <path d={PATH.triangle} opacity="0.7" />}
      </g>

      <rect width="420" height="300" fill="url(#vignette)" pointerEvents="none" />
      {!mini && (
        <g fontFamily="IBM Plex Mono, monospace" fontSize="10.5">
          <Label x={292} y={176} color={C.gb} name="gallbladder" status={detach > 0 ? `detached ${Math.round(detach * 100)}%` : s.gallbladder.status} />
          <Label x={252} y={96} color={C.plate} name="cystic plate" status={`${s.cystic_plate.status} · ${Math.round(s.cystic_plate.exposure * 100)}%`} />
          <Label x={150} y={150} color={C.artery} name="cystic artery" status={statusText(s.cystic_artery)} />
          <Label x={150} y={262} color={C.duct} name="cystic duct" status={statusText(s.cystic_duct)} />
          <Label x={10} y={282} color={cbd.at_risk || state.injury ? "#ff8a80" : C.cbd} name="common bile duct"
            status={state.injury ? "INJURED" : cbd.at_risk ? "AT RISK" : "hidden · protected by CVS"} />
        </g>
      )}
    </svg>
  );
}

const statusText = (x) => `${x.status}${x.clips ? ` · ${x.clips} clip${x.clips > 1 ? "s" : ""}` : ""}${x.status === "dissecting" ? ` · ${Math.round(x.exposure * 100)}%` : ""}`;

function Label({ x, y, color, name, status }) {
  return (
    <g>
      <text x={x} y={y} fill={color} fontWeight="500">{name}</text>
      <text x={x} y={y + 13} fill={C.ink}>{status}</text>
    </g>
  );
}

/** The three CVS criteria as ring segments, with an optional source line (proxy vs perceived). */
export function CvsRing({ state, size = 86, showLabels = true }) {
  const cvs = state?.cvs || {};
  const items = [
    ["c1_triangle_cleared", "Triangle cleared"],
    ["c2_plate_exposed", "Cystic plate"],
    ["c3_two_structures", "Two structures"],
  ];
  const n = items.filter(([k]) => cvs[k]).length;
  const r = 34, cx = 43, cy = 43, gap = 0.06;
  const arc = (i) => {
    const a0 = (i / 3 + gap / 2) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / 3 - gap / 2) * 2 * Math.PI - Math.PI / 2;
    return `M${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 0 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)}`;
  };
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 86 86" width={size} height={size} role="img" aria-label={`critical view of safety ${n} of 3`}>
        {items.map(([k], i) => (
          <path key={k} d={arc(i)} stroke={cvs[k] ? "#0ca30c" : "#24344a"} strokeWidth="9" fill="none" strokeLinecap="round" />
        ))}
        <text x="43" y="47" textAnchor="middle" fontSize="17" fill="#e9eef4" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700">{n}/3</text>
        <text x="43" y="60" textAnchor="middle" fontSize="7.5" fill="#718196" fontFamily="IBM Plex Mono, monospace">CVS</text>
      </svg>
      {showLabels && (
        <div className="flex flex-col gap-0.5 text-sm">
          {items.map(([k, label]) => (
            <span key={k} className={cvs[k] ? "text-ink-1" : "text-ink-3"}>
              <span className={cvs[k] ? "text-status-good" : "text-ink-3"}>{cvs[k] ? "●" : "○"}</span> {label}
            </span>
          ))}
          {state?.cvs_source && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
              {state.cvs_source === "sensor" ? "seen by Gemini Argon (held)" : "derived from actions (proxy)"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
