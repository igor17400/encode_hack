import { niceName } from "../api";

const STATUSES = ["unseen", "visible", "dissecting", "skeletonised", "clipped", "cut"];
const SHOWN = ["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate"];
const CVS = [
  ["c1_triangle_cleared", "Calot's triangle cleared"],
  ["c2_plate_exposed", "Cystic plate exposed"],
  ["c3_two_structures", "Two structures only"],
];

function StatusSteps({ status }) {
  const idx = STATUSES.indexOf(status);
  return (
    <div className="flex gap-1" aria-label={`status ${status}`}>
      {STATUSES.slice(1).map((s, i) => (
        <span
          key={s}
          title={s}
          className={`h-2 flex-1 rounded-full ${i + 1 <= idx ? (s === "cut" || s === "clipped" ? "bg-ink-1" : "bg-accent") : "bg-surface-3"}`}
        />
      ))}
    </div>
  );
}

export default function AnatomyPanel({ state, compact }) {
  if (!state) return <div className="card text-ink-3">No state yet.</div>;
  const s = state.structures;
  const cbdRisk = s.common_bile_duct?.at_risk;
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="label">Phase{state.phase_inferred ? " (inferred)" : ""}</div>
          <div className="text-lg font-semibold">{niceName(state.phase || "—").replaceAll("-", " ")}</div>
        </div>
        <div className="text-right">
          <div className="label">t</div>
          <div className="font-mono text-lg">{fmtT(state.t)}</div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {SHOWN.map((name) => {
          const x = s[name];
          return (
            <div key={name} className="grid grid-cols-[10rem_1fr] items-center gap-3">
              <div>
                <div className="font-medium">{niceName(name)}</div>
                <div className="text-sm text-ink-2">
                  {x.status}
                  {x.clips ? ` · ${x.clips} clip${x.clips > 1 ? "s" : ""}` : ""}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <StatusSteps status={x.status} />
                {!compact && (
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-surface-3">
                      <div className="h-1.5 rounded-full bg-ink-3" style={{ width: `${Math.round(x.exposure * 100)}%` }} />
                    </div>
                    <span className="w-24 text-right text-xs text-ink-3">exposure {Math.round(x.exposure * 100)}%</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="label mb-1">Critical view of safety (proxy)</div>
        <div className="flex flex-col gap-1">
          {CVS.map(([k, label]) => (
            <div key={k} className="flex items-center gap-2">
              <span
                className={`grid h-5 w-5 place-items-center rounded text-xs font-bold ${state.cvs[k] ? "bg-status-good text-black" : "border border-line text-ink-3"}`}
              >
                {state.cvs[k] ? "✓" : ""}
              </span>
              <span className={state.cvs[k] ? "text-ink-1" : "text-ink-3"}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge on={state.bleeding} tone="critical" icon="●">
          {state.bleeding ? "Bleeding" : "No bleeding"}
        </Badge>
        <Badge on={state.view_quality && state.view_quality !== "clear"} tone="warning" icon="◐">
          view: {niceName(state.view_quality || "clear")}
        </Badge>
        {cbdRisk && (
          <Badge on tone="serious" icon="▲">
            Common bile duct at risk
          </Badge>
        )}
        {state.injury && (
          <Badge on tone="critical" icon="✕">
            Bile duct injury
          </Badge>
        )}
        {state.violations?.length > 0 && (
          <Badge on tone="serious" icon="!">
            {state.violations.length} violation{state.violations.length > 1 ? "s" : ""}: {[...new Set(state.violations)].map(niceName).join(", ")}
          </Badge>
        )}
      </div>
    </div>
  );
}

const TONE = { critical: "#d03b3b", warning: "#fab219", serious: "#ec835a" };

function Badge({ on, tone, icon, children }) {
  const c = TONE[tone];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-sm"
      style={on ? { borderColor: c, background: `${c}22` } : { borderColor: "#3a3a36", color: "#8f8e86" }}
    >
      <span style={{ color: on ? c : "#8f8e86" }} aria-hidden>
        {icon}
      </span>
      {children}
    </span>
  );
}

export const fmtT = (t) => {
  if (t == null) return "—";
  const m = Math.floor(t / 60);
  return `${m}:${String(t % 60).padStart(2, "0")}`;
};
