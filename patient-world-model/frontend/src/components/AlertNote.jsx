import { useState } from "react";
import { post, niceName } from "../api";
import { fmtT } from "./AnatomyPanel";

// Safety warnings as a small note beside the video. They never pause the video or the analysis. The viewer can
// mark one as seen or as a false alarm with one click; that choice is logged (POST /alerts/{id}/decision).

const TEXT = {
  clip_before_cvs: "Clip or cut before the critical view of safety is met",
  cut_without_two_clips: "Cut with fewer than two clips on the structure",
  cbd_injury: "Common bile duct injury",
  clip_without_confirmed_duct: "Clip applier in view while the cystic duct is not confirmed",
  risk_high: "The world model predicts high risk",
  risk_injury: "The world model predicts injury",
};
const CHOICES = [
  ["ack", "Seen", "Seen by the viewer"],
  ["override", "False alarm", "False alarm: perception misread the frame"],
];

export default function AlertNote({ alerts, onDecided }) {
  const [busy, setBusy] = useState(null);
  if (!alerts.length) return null;
  const latest = [...alerts].reverse();
  async function decide(a, decision, reason) {
    setBusy(a._id);
    try {
      await post(`/alerts/${a._id}/decision`, { decision, reason });
      onDecided({ ...a, decision, reason });
    } catch {
      /* the warning stays; nothing is blocked */
    } finally {
      setBusy(null);
    }
  }
  return (
    <div className="flex flex-col gap-1.5">
      {latest.slice(0, 2).map((a) => (
        <div key={a._id} className={`rounded-lg border px-2.5 py-1.5 text-xs ${a.decided ? "border-line bg-surface-0 text-ink-3" : "border-status-serious/70 bg-status-serious/10"}`}>
          <div className="flex items-baseline gap-1.5">
            <span className={a.decided ? "" : "text-status-serious"}>▲</span>
            <span className="min-w-0 flex-1"><b className={a.decided ? "" : "text-ink-1"}>{TEXT[a.type] || niceName(a.type)}</b> · {fmtT(a.t)}</span>
          </div>
          {a.decided ? (
            <div className="mt-0.5">{a.decision === "ack" ? "marked as seen" : "marked as a false alarm"}</div>
          ) : (
            <div className="mt-1 flex items-center gap-1.5">
              <span className="flex-1 text-ink-3">safety rule</span>
              {CHOICES.map(([d, label, reason]) => (
                <button key={d} disabled={busy === a._id} onClick={() => decide(a, d, reason)}
                  className="rounded border border-line px-1.5 py-0.5 text-[11px] text-ink-2 hover:bg-surface-2">{label}</button>
              ))}
            </div>
          )}
        </div>
      ))}
      {latest.length > 2 && <div className="text-[11px] text-ink-3">+{latest.length - 2} earlier warning{latest.length > 3 ? "s" : ""}</div>}
    </div>
  );
}
