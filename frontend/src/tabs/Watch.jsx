import { useEffect, useRef, useState } from "react";
import { get, post, openStream, actionLabel, videoUrl } from "../api";
import AnatomyPanel, { fmtT } from "../components/AnatomyPanel";
import AlertModal from "../components/AlertModal";
import { ErrorNote, Frame, Picker, SourceTag, patientOptions } from "../components/ui";

/** Real-time video of the clip, kept in sync with the analysed frames: seeks to each analysed frame, follows the
 * chosen speed, and pauses while an alert waits for a human decision. */
function ClipPlayer({ src, t0, obs, playing, speed, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.playbackRate = Number(speed) || 1;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [playing, speed]);
  useEffect(() => {
    const v = ref.current;
    if (!v || !obs) return;
    const target = Math.max(0, obs.t - t0);
    if (Math.abs(v.currentTime - target) > 1.5) v.currentTime = target;
  }, [obs?.t, t0]);
  return (
    <figure className="relative overflow-hidden rounded-lg border border-line bg-black">
      <video ref={ref} src={src} muted playsInline preload="auto" className="aspect-video w-full max-w-full object-cover" />
      {children}
      <figcaption className="flex items-center justify-between gap-2 bg-surface-2 px-3 py-1.5 text-sm">
        <span className="font-semibold text-ink-1">real operation video{obs ? ` · analysed frame t = ${fmtT(obs.t)}` : ""}</span>
        <span className="truncate text-ink-3">{playing ? `${speed}×` : "paused"}</span>
      </figcaption>
    </figure>
  );
}

export default function Watch({ patients, onBranch }) {
  const [clips, setClips] = useState([]);
  const [clip, setClip] = useState(null);
  const [patientId, setPatientId] = useState("P1");
  const [speed, setSpeed] = useState(1);
  const [state, setState] = useState(null);
  const [obs, setObs] = useState(null);
  const [banner, setBanner] = useState(null);
  const [alert, setAlert] = useState(null);
  const [decisions, setDecisions] = useState([]);
  const [checks, setChecks] = useState([]); // Argon verification passes
  const [report, setReport] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | running | done
  const [source, setSource] = useState(null);
  const [error, setError] = useState(null);
  const closeRef = useRef(null);

  useEffect(() => {
    get("/clips")
      .then((c) => {
        setClips(c);
        setClip(c[0]?.video_id ?? null);
      })
      .catch((e) => setError(e.message));
    return () => closeRef.current?.();
  }, []);

  // Visually similar real frames for the current frame (multimodal embeddings in Atlas).
  useEffect(() => {
    if (!obs?.frame_path) return;
    let live = true;
    get("/similar_frames", { path: obs.frame_path, k: 3 })
      .then((r) => live && setSimilar(r))
      .catch(() => live && setSimilar([]));
    return () => {
      live = false;
    };
  }, [obs?.frame_path]);

  async function start() {
    closeRef.current?.();
    setError(null);
    setState(null);
    setObs(null);
    setBanner(null);
    setDecisions([]);
    setChecks([]);
    setReport(null);
    setSimilar([]);
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
          if ("held" in d) setBanner(d.held ? d.banner || "View obscured, can't confirm" : null);
          if (d.source === "argon")
            setChecks((x) => [...x, { t: d.t, confidence: d.confidence, contradictions: d.contradictions || [], applied: d.corrections_applied || [] }]);
          if (d.done) setStatus("done");
        },
        alert: (d) => setAlert(d),
        report: (d) => setReport(d),
      });
      const r = await post(`/sessions/${s.session_id}/watch`, { speed: Number(speed), t_from: c?.t_start, t_to: c?.t_end });
      setSource(r.source);
      setStatus("running");
    } catch (e) {
      setError(e.message);
    }
  }

  const patient = patients.find((p) => p.patient_id === patientId);
  const clipInfo = clips.find((c) => c.video_id === clip);
  const labels = obs?.labels || [];
  const isError = banner?.startsWith("perception error");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="flex min-w-0 flex-col gap-4">
        <div className="card flex flex-wrap items-end gap-4">
          <Picker
            label="Real operation (test set)"
            value={clip}
            onChange={setClip}
            options={clips.map((c) => ({ value: c.video_id, label: `${c.video_id} · ${fmtT(c.t_start)}–${fmtT(c.t_end)}` }))}
          />
          <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
          <Picker label="Speed" value={speed} onChange={setSpeed} options={[1, 2, 4, 8].map((v) => ({ value: v, label: `${v}×` }))} />
          <button className="btn-primary" onClick={start} disabled={!clip}>
            {status === "idle" ? "▶ Watch" : "↻ Restart"}
          </button>
          <button
            className="btn"
            disabled={!state}
            onClick={() => onBranch({ state, patient_id: patientId, video_id: clip, label: `${clip} @ ${fmtT(state.t)}` })}
          >
            ⑂ Branch from here
          </button>
        </div>
        {patient && <p className="-mt-2 text-sm text-ink-3">{patient.story}</p>}
        <ErrorNote error={error} />

        <div className="relative">
          {clipInfo?.video ? (
            <ClipPlayer src={videoUrl(clipInfo.video)} t0={clipInfo.t_start} obs={obs} playing={status === "running" && !alert} speed={speed} />
          ) : (
            <Frame path={obs?.frame_path} label={obs ? `real frame · ${clip} @ ${fmtT(obs.t)}` : null} caption={status === "done" ? "end of clip" : null} />
          )}
          {banner && (
            <div className={`absolute inset-x-0 top-0 px-4 py-2 text-center text-lg font-semibold ${isError ? "bg-status-critical/90 text-white" : "bg-ink-3/90 text-black"}`}>
              {banner}
              {!isError && obs?.reason_if_not ? ` · ${obs.reason_if_not}` : ""}
            </div>
          )}
        </div>

        {similar.length > 0 && (
          <div className="card">
            <div className="label mb-2">Closest real frames from other operations (image similarity)</div>
            <div className="grid grid-cols-3 gap-3">
              {similar.map((f) => (
                <Frame key={f.id} path={f.path} label={`${f.video_id} @ ${fmtT(f.t)}`} caption={`sim ${f.score?.toFixed(3)}`} />
              ))}
            </div>
          </div>
        )}

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

        {checks.length > 0 && (
          <div className="card">
            <div className="label mb-2">Argon verification (every ~30 s of video)</div>
            <div className="flex flex-col gap-2 text-sm">
              {checks.map((c, i) => (
                <div key={i} className="rounded-lg bg-surface-2 p-3">
                  <div className="mb-1 flex justify-between text-ink-3">
                    <span>t = {fmtT(c.t)}</span>
                    <span>state confidence {Math.round(c.confidence * 100)}%</span>
                  </div>
                  {c.contradictions.length ? (
                    <ul className="list-inside list-disc text-ink-2">
                      {c.contradictions.map((x, j) => (
                        <li key={j}>{x}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-ink-2">No contradictions found.</div>
                  )}
                  {c.applied.length > 0 && <div className="mt-1 text-ink-3">applied (observational only): {c.applied.join(", ")}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {(decisions.length > 0 || report) && (
          <div className="card text-sm">
            {decisions.length > 0 && (
              <>
                <div className="label mb-2">Decisions (logged)</div>
                {decisions.map((d, i) => (
                  <div key={i} className="text-ink-2">
                    {fmtT(d.t)} · alert {d.type}: <b>{d.decision === "ack" ? "acknowledged" : "overridden"}</b> · “{d.reason}”
                  </div>
                ))}
              </>
            )}
            {report && (
              <div className={decisions.length ? "mt-4" : ""}>
                <div className="label mb-2">Session report (written by Gemini Argon from this session's events)</div>
                <p className="text-ink-1">{report.text}</p>
                <ul className="mt-2 list-inside list-disc text-ink-2">
                  {(report.key_events || []).map((k, i) => (
                    <li key={i}>{k}</li>
                  ))}
                </ul>
              </div>
            )}
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
