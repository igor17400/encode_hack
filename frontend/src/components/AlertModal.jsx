import { useState } from "react";
import { post, niceName } from "../api";
import { Frame } from "./ui";
import { fmtT } from "./AnatomyPanel";

const TEXT = {
  clip_before_cvs: "Clip or cut before the critical view of safety is met.",
  cut_without_two_clips: "Cut with fewer than two clips on the structure.",
  cbd_injury: "Common bile duct injury.",
  risk_high: "The world model predicts high risk.",
  risk_injury: "The world model predicts injury.",
};

export default function AlertModal({ alert, onClose }) {
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  if (!alert) return null;
  const evidence = alert.evidence || [];

  async function decide(decision) {
    if (!reason.trim()) {
      setErr("A reason is required.");
      return;
    }
    setBusy(true);
    try {
      await post(`/alerts/${alert._id}/decision`, { decision, reason });
      onClose({ ...alert, decision, reason });
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-4xl rounded-2xl border-2 border-status-serious bg-surface-1 p-6 shadow-2xl">
        <div className="mb-1 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-status-serious font-bold text-black">▲</span>
          <h2 className="text-2xl font-bold">Safety alert · {niceName(alert.type)}</h2>
        </div>
        <p className="mb-1 text-lg text-ink-2">{TEXT[alert.type] || alert.type}</p>
        <p className="mb-4 text-sm text-ink-3">
          at t = {fmtT(alert.t)}
          {alert.action ? ` · action: ${alert.action.replaceAll(",", " · ")}` : ""} · playback paused until a human decides
        </p>

        <div className="label mb-2">Evidence</div>
        {evidence.length ? (
          <div className="mb-4 grid grid-cols-3 gap-3">
            {evidence.slice(0, 3).map((ev, i) =>
              ev.path ? (
                <Frame key={i} path={ev.path} label="closest real frame" caption={ev.video_id && `${ev.video_id} @ ${fmtT(ev.t)}`} />
              ) : (
                <div key={i} className="rounded-lg border border-line bg-surface-2 p-3 text-sm">
                  <div className="font-semibold">{ev.id}</div>
                  <div className="text-ink-3">{ev.summary}</div>
                </div>
              ),
            )}
          </div>
        ) : alert.frame_path ? (
          <div className="mb-4 grid grid-cols-3 gap-3">
            <Frame path={alert.frame_path} label="this frame" />
            <div className="col-span-2 self-center text-ink-3">
              Nearest real reference frames appear here when Atlas is connected.
            </div>
          </div>
        ) : null}

        <label className="label" htmlFor="reason">
          Reason (required, logged)
        </label>
        <textarea
          id="reason"
          className="mt-1 w-full rounded-lg border border-line bg-surface-2 p-3 text-ink-1"
          rows={2}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="e.g. Surgeon confirmed anatomy on a second view"
        />
        {err && <div className="mt-2 text-sm text-status-serious">{err}</div>}
        <div className="mt-4 flex justify-end gap-3">
          <button className="btn" disabled={busy} onClick={() => decide("override")}>
            Override
          </button>
          <button className="btn-primary" disabled={busy} onClick={() => decide("ack")}>
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
