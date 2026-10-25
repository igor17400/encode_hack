import { Component } from "react";
import { frameUrl, niceName } from "../api";

export const RISK = {
  low: { color: "#0ca30c", icon: "✓", label: "Low risk" },
  moderate: { color: "#fab219", icon: "!", label: "Moderate risk" },
  high: { color: "#ec835a", icon: "▲", label: "High risk" },
  injury: { color: "#d03b3b", icon: "✕", label: "Injury" },
};

export function RiskBadge({ level, large }) {
  const r = RISK[level] || RISK.low;
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border font-semibold ${large ? "px-4 py-1.5 text-lg" : "px-3 py-0.5 text-sm"}`}
      style={{ borderColor: r.color, color: "#f0efec", background: `${r.color}22` }}
    >
      <span
        className="grid h-5 w-5 place-items-center rounded-full text-xs text-black"
        style={{ background: r.color }}
        aria-hidden
      >
        {r.icon}
      </span>
      {r.label}
    </span>
  );
}

export function SimNote({ className = "" }) {
  return (
    <span className={`rounded-full border border-line px-3 py-0.5 text-xs uppercase tracking-wide text-ink-3 ${className}`}>
      Research simulation · not clinical advice
    </span>
  );
}

export function SourceTag({ source }) {
  if (!source) return null;
  const text =
    {
      argon: "Gemini world model + rules",
      rules_only: "rules only (offline recording)",
      labels: "replaying real dataset labels (offline recording)",
      perception: "Gemini Flash perception",
      flash: "Gemini Flash perception (recorded live run)",
      recorded: "recorded live run",
      precomputed: "recorded run",
    }[source] || source;
  return <span className="text-xs text-ink-3">source: {text}</span>;
}

export function Frame({ path, label, caption, className = "" }) {
  const url = frameUrl(path);
  return (
    <figure className={`overflow-hidden rounded-lg border border-line bg-black ${className}`}>
      {url ? (
        <img src={url} alt={label || "surgical frame"} className="aspect-video w-full object-cover" />
      ) : (
        <div className="grid aspect-video w-full place-items-center text-ink-3">no frame</div>
      )}
      {(label || caption) && (
        <figcaption className="flex items-center justify-between gap-2 bg-surface-2 px-3 py-1.5 text-sm">
          {label && <span className="font-semibold text-ink-1">{label}</span>}
          {caption && <span className="truncate text-ink-3">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function Picker({ label, value, onChange, options, disabled, compact = false }) {
  return (
    <label className={`flex min-w-0 max-w-full ${compact ? "flex-col gap-1 sm:flex-row sm:items-center sm:gap-2" : "flex-col gap-1"}`}>
      <span className="label">{label}</span>
      <select className={`select max-w-full truncate ${compact ? "min-w-0 w-full sm:w-auto sm:max-w-[22rem]" : ""}`} value={value ?? ""} disabled={disabled} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ErrorNote({ error }) {
  if (!error) return null;
  return <div className="rounded-lg border border-status-critical/60 bg-status-critical/10 px-4 py-2 text-sm">{String(error)}</div>;
}

export const patientOptions = (patients) =>
  patients.map((p) => ({ value: p.patient_id, label: `${p.patient_id} · ${p.name}` }));

export { niceName };

// One panel failing must never take down the page (and with it the video): show a small note instead.
export class PanelBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error) {
    console.error("panel error:", error);
  }
  componentDidUpdate(prev) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null });
  }
  render() {
    if (this.state.error)
      return <div className="rounded-lg border border-line bg-surface-0 px-3 py-2 text-xs text-ink-3">This panel hit an error ({String(this.state.error.message || this.state.error)}); the video keeps playing.</div>;
    return this.props.children;
  }
}
