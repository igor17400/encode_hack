import { useEffect, useRef, useState } from "react";
import { get, post, openStream, actionLabel } from "../api";
import AnatomyPanel, { fmtT } from "../components/AnatomyPanel";
import AlertModal from "../components/AlertModal";
import { ErrorNote, Frame, Picker, SourceTag, patientOptions } from "../components/ui";

export default function Watch({ patients, onBranch }) {
  const [clips, setClips] = useState([]);
  const [clip, setClip] = useState(null);
  const [patientId, setPatientId] = useState("P1");
  const [speed, setSpeed] = useState(1);
  const [state, setState] = useState(null);
  const [obs, setObs] = useState(null);
  const [held, setHeld] = useState(false);
  const [alert, setAlert] = useState(null);
  const [decisions, setDecisions] = useState([]);
  const [contradictions, setContradictions] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | running | done
  const [source, setSource] = useState(null);
  const [error, setError] = useState(null);
  const closeRef = useRef(null);

  useEffect(() => {
    get("/clips").then((c) => {
      setClips(c);
      setClip(c[0]?.video_id ?? null);
    }).catch(setError);
    return () => closeRef.current?.();
  }, []);

  async function start() {
    closeRef.current?.();
    setError(null);
    setState(null);
    setObs(null);
    setHeld(false);
    setDecisions([]);
    setContradictions([]);
    try {
      const s = await post("/sessions", { mode: "watch", patient_id: patientId, video_id: clip });
      const c = clips.find((x) => x.video_id === clip);
      closeRef.current = openStream(s.session_id, {
        observation: (d) => {
          setObs(d);
          setSource(d.source);
        },
        state: (d) => {
          if (d.state) setState(d.state);
          if ("held" in d) setHeld(!!d.held);
          if (d.contradictions?.length) setContradictions((x) => [...x, ...d.contradictions.map((t) => ({ t: d.t, text: t }))]);
          if (d.done) setStatus("done");
        },
        alert: (d) => setAlert(d),
      });
      const r = await post(`/sessions/${s.session_id}/watch`, {
        speed: Number(speed),
        t_from: c?.t_start,
        t_to: c?.t_end,
      });
      setSource(r.source);
      setStatus("running");
    } catch (e) {
      setError(e.message);
    }
  }

  const patient = patients.find((p) => p.patient_id === patientId);
  const labels = obs?.labels || [];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="flex flex-col gap-4">
        <div className="card flex flex-wrap items-end gap-4">
          <Picker
            label="Real operation (test set)"
            value={clip}
            onChange={setClip}
            options={clips.map((c) => ({ value: c.video_id, label: `${c.video_id} · ${fmtT(c.t_start)}–${fmtT(c.t_end)}` }))}
          />
          <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
          <Picker
            label="Speed"
            value={speed}
            onChange={setSpeed}
            options={[1, 2, 4, 8].map((v) => ({ value: v, label: `${v}×` }))}
          />
          <button className="btn-primary" onClick={start} disabled={!clip}>
            {status === "idle" ? "▶ Watch" : "↻ Restart"}
          </button>
          <button className="btn" disabled={!state} onClick={() => onBranch({ state, patient_id: patientId, video_id: clip, label: `${clip} @ ${fmtT(state.t)}` })}>
            ⑂ Branch from here
          </button>
        </div>
        {patient && <p className="-mt-2 text-sm text-ink-3">{patient.story}</p>}
        <ErrorNote error={error} />

        <div className="relative">
          <Frame path={obs?.frame_path} label={obs ? `real frame · ${clip} @ ${fmtT(obs.t)}` : null} caption={status === "done" ? "end of clip" : null} />
          {held && (
            <div className="absolute inset-x-0 top-0 bg-ink-3/90 px-4 py-2 text-center text-lg font-semibold text-black">
              View obscured, can't confirm{obs?.reason_if_not ? ` · ${obs.reason_if_not}` : ""}
            </div>
          )}
        </div>

        <div className="card">
          <div className="mb-2 flex items-center justify-between">
            <span className="label">What it sees in this frame</span>
            <SourceTag source={source} />
          </div>
          {labels.length ? (
            <div className="flex flex-wrap gap-2">
              {labels.map((l, i) => (
                <span key={i} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm">
                  {actionLabel(l)} <span className="text-ink-3">{Math.round(l.confidence * 100)}%</span>
                </span>
              ))}
            </div>
          ) : (
            <span className="text-ink-3">{obs ? "No surgical action visible." : "Press Watch to start."}</span>
          )}
        </div>

        {(decisions.length > 0 || contradictions.length > 0) && (
          <div className="card text-sm">
            <div className="label mb-2">Log</div>
            {contradictions.map((c, i) => (
              <div key={`c${i}`} className="text-ink-2">
                {fmtT(c.t)} · verification: {c.text}
              </div>
            ))}
            {decisions.map((d, i) => (
              <div key={i} className="text-ink-2">
                {fmtT(d.t)} · alert {d.type}: <b>{d.decision === "ack" ? "acknowledged" : "overridden"}</b> · “{d.reason}”
              </div>
            ))}
          </div>
        )}
      </div>

      <AnatomyPanel state={state} />

      <AlertModal
        alert={alert}
        onClose={(d) => {
          setDecisions((x) => [...x, d]);
          setAlert(null);
        }}
      />
    </div>
  );
}
