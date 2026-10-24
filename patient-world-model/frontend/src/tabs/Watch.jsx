import { useEffect, useMemo, useRef, useState } from "react";
import { get, post, openStream, videoUrl} from "../api";
import { actionShort } from "../lib/describe";
import AnatomyMap, { CvsRing, diffStates } from "../components/AnatomyMap";
import AlertModal from "../components/AlertModal";
import StateTimeline from "../components/StateTimeline";
import ForecastPanel, { EyesOverlay } from "../components/ForecastOverlay";
import { overlayState } from "../lib/forecast";
import VideoHUD from "../components/VideoHUD";
import World3D from "../components/World3D";
import { fmtT } from "../components/AnatomyPanel";
import { ErrorNote, Frame, Picker, RiskBadge, SourceTag, patientOptions } from "../components/ui";

const CLIP_LABEL = (c) =>
  c.source === "endoscapes"
    ? `Endoscapes op ${c.op} · CVS judged by Gemini Argon · surgeons' truth`
    : `CholecT50 ${c.video_id} · ${fmtT(c.t_start)}–${fmtT(c.t_end)} · full action labels`;

export default function Watch({ patients, onBranch }) {
  const [clips, setClips] = useState([]);
  const [clipId, setClipId] = useState(null);
  const [patientId, setPatientId] = useState("P1");
  const [speed, setSpeed] = useState(1);
  const [history, setHistory] = useState([]); // [{t, state}]
  const [obsList, setObsList] = useState([]);
  const [changes, setChanges] = useState([]);
  const [banner, setBanner] = useState(null);
  const [alert, setAlert] = useState(null);
  const [decisions, setDecisions] = useState([]);
  const [checks, setChecks] = useState([]);
  const [report, setReport] = useState(null);
  const [expertViews, setExpertViews] = useState(null);
  const [status, setStatus] = useState("idle");
  const [decisionPoint, setDecisionPoint] = useState(false);
  const [scrubT, setScrubT] = useState(null);
  const [view, setView] = useState("3d");
  const [source, setSource] = useState(null);
  const [error, setError] = useState(null);
  const [forecasts, setForecasts] = useState(null); // recorded forecast -> reality for held-out CholecT50 clips
  const [videoT, setVideoT] = useState(null);
  const [pauseReveal, setPauseReveal] = useState(true);
  const [hold, setHold] = useState(false);
  const [e1, setE1] = useState(null);
  const lockedFor = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    get("/clips")
      .then((c) => {
        setClips(c);
        setClipId(c[0]?.video_id ?? null);
      })
      .catch((e) => setError(e.message));
    return () => closeRef.current?.();
  }, []);

  const clip = clips.find((c) => c.video_id === clipId);

  useEffect(() => {
    setForecasts(null);
    if (!clipId || clipId.startsWith("endo")) return;
    get(`/forecasts/${clipId}`).then(setForecasts).catch(() => setForecasts(null));
    get("/eval/latest").then(setE1).catch(() => {});
  }, [clipId]);

  const fstate = overlayState(forecasts?.forecasts, videoT, { ended: status === "done" });
  // Pause before reveal: freeze the video briefly once a forecast is locked, then let reality play out.
  useEffect(() => {
    if (!pauseReveal || fstate.mode !== "forecast" || !fstate.locked || lockedFor.current === fstate.f.id) return;
    lockedFor.current = fstate.f.id;
    setHold(true);
    const h = setTimeout(() => setHold(false), 1800);
    return () => clearTimeout(h);
  }, [pauseReveal, fstate.mode, fstate.locked, fstate.f?.id]);
  const live = history[history.length - 1];
  const shownIdx = scrubT == null ? history.length - 1 : Math.max(0, history.findIndex((h) => h.t >= scrubT));
  const shown = history[shownIdx];
  const prevShown = history[shownIdx - 1];
  const obs = scrubT == null ? obsList[obsList.length - 1] : [...obsList].reverse().find((o) => o.t <= scrubT) ?? obsList[0];
  const experts = useMemo(() => obsList.filter((o) => o.expert).map((o) => o.expert), [obsList]);
  const lastExpert = [...experts].reverse().find((k) => k.t <= (obs?.t ?? 0));

  // Eyes vs engine on hard facts: the eyes read the video; the engine starts from the surgeons' labels.
  const disagreement = (() => {
    if (fstate.mode !== "forecast" || !shown?.state) return null;
    const lab = fstate.f.state_before.structures, out = fstate.f.world_model.state_out.structures;
    const hard = new Set(["clipped", "cut"]);
    for (const n of ["cystic_duct", "cystic_artery"]) {
      const eyes = shown.state.structures[n].status;
      if (hard.has(eyes) && !hard.has(lab[n].status) && !hard.has(out[n].status))
        return `The eyes currently read the ${n.replace("_", " ")} as ${eyes}; the surgeons' labels say it is not yet. The prediction engine starts from the labels, so its forecast is not affected by this misreading.`;
    }
    return null;
  })();


  // How surgeons judged views that look like the current frame (Igor's library, read-only, cached).
  useEffect(() => {
    if (!clip || obs?.t == null) return;
    let ok = true;
    get("/expert_views", { clip: clip.video_id, t: obs.t }).then((r) => ok && setExpertViews(r)).catch(() => {});
    return () => {
      ok = false;
    };
  }, [clip?.video_id, obs ? Math.floor(obs.t / 5) : null]);

  async function start() {
    closeRef.current?.();
    setError(null);
    setHistory([]);
    setObsList([]);
    setChanges([]);
    setBanner(null);
    setDecisions([]);
    setChecks([]);
    setReport(null);
    setExpertViews(null);
    setDecisionPoint(false);
    setScrubT(null);
    setVideoT(null);
    lockedFor.current = null;
    try {
      const s = await post("/sessions", { mode: "watch", patient_id: patientId, video_id: clipId });
      let last = null;
      closeRef.current = openStream(s.session_id, {
        observation: (d) => {
          setObsList((x) => [...x, d]);
          setSource(d.source);
        },
        state: (d) => {
          if (d.state) {
            setHistory((x) => [...x, { t: d.t, state: d.state }]);
            const c = d.changes?.length ? d.changes : diffStates(last, d.state).map((x) => x.text);
            if (c.length) setChanges(c);
            last = d.state;
          }
          if ("held" in d) setBanner(d.held ? d.banner || "View obscured, can't confirm" : null);
          if (d.source === "argon")
            setChecks((x) => [...x, { t: d.t, confidence: d.confidence, contradictions: d.contradictions || [], applied: d.corrections_applied || [] }]);
          if (d.done) {
            setStatus("done");
            setDecisionPoint(!!d.decision_point);
          }
        },
        alert: (d) => setAlert(d),
        report: (d) => setReport(d),
      });
      const r = await post(`/sessions/${s.session_id}/watch`, { speed: Number(speed), t_from: clip?.t_start, t_to: clip?.t_end });
      setSource(r.source);
      setStatus("running");
    } catch (e) {
      setError(e.message);
    }
  }

  const branch = () =>
    onBranch({ state: (shown || live).state, patient_id: patientId, video_id: clipId,
               label: `${clip?.source === "endoscapes" ? `Endoscapes op ${clip.op}` : clipId} @ ${fmtT((shown || live).t)}` });

  const events = [
    ...checks.map((c) => ({ t: c.t, kind: "check" })),
    ...decisions.map((d) => ({ t: d.t, kind: "alert", label: `${d.type} (${d.decision})` })),
    ...(alert ? [{ t: alert.t, kind: "alert", label: alert.type }] : []),
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="card flex flex-wrap items-end gap-4">
        <Picker label="Operation" value={clipId} onChange={setClipId} options={clips.map((c) => ({ value: c.video_id, label: CLIP_LABEL(c) }))} />
        <Picker label="Synthetic patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
        <Picker label="Speed" value={speed} onChange={setSpeed} options={[1, 2, 4, 8].map((v) => ({ value: v, label: `${v}×` }))} />
        <button className="btn-primary" onClick={start} disabled={!clipId}>
          {status === "idle" ? "▶ Watch the model think" : "↻ Restart"}
        </button>
        <button className="btn" disabled={!live} onClick={branch}>⑂ Imagine from this moment</button>
        <SourceTag source={source} />
      </div>
      {clip?.credit && <p className="-mt-2 text-xs text-ink-3">{clip.credit}</p>}
      <ErrorNote error={error} />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="mb-1 flex flex-wrap items-baseline gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">Eyes</span>
            <span className="text-xs text-ink-3">{clip?.source === "endoscapes" ? "Gemini Argon judges the critical view from each frame; Flash draws approximate boxes" : "Gemini Flash reads each frame: instruments, actions, approximate boxes"}</span>
          </div>
          <VideoHUD
            src={videoUrl(clip?.video)}
            t0={clip?.t_start ?? 0}
            obs={obs}
            state={shown?.state}
            changes={changes}
            banner={banner}
            alert={alert}
            playing={status === "running" && !alert && scrubT == null}
            speed={speed}
            done={decisionPoint}
            onTime={setVideoT}
            hold={hold}
          >
            <div className="rounded-xl border border-accent/60 bg-surface-1/95 px-5 py-3 text-center">
              <div className="label">The camera stops before the first clip</div>
              <p className="text-sm text-ink-2">What would each move do? See the predictions beside the video.</p>
            </div>
          </VideoHUD>
          {forecasts && (
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-3">
                <span>
                  <b className="text-ink-2">Forecast → reality:</b> {clipId} is a held-out operation (never used for retrieval or training). Each forecast was made before the moment it predicts; the truth is the surgeons' recorded actions.
                </span>
                {e1?.metrics && (
                  <span>
                    Across {e1.metrics.n} held-out moments, next action in top 3: world model {Math.round(e1.metrics.model_top3 * 100)}% · trained model {Math.round(e1.metrics.trained_top3 * 100)}% · bigram {Math.round(e1.metrics.bigram_top3 * 100)}%.
                  </span>
                )}
                <label className="flex items-center gap-1.5 text-ink-2">
                  <input type="checkbox" checked={pauseReveal} onChange={(e) => setPauseReveal(e.target.checked)} /> pause before each reveal
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-4">
        {status !== "idle" && forecasts && disagreement && (
          <div className="rounded-lg border border-status-warning/50 bg-status-warning/10 px-3 py-2 text-xs text-ink-1">{disagreement}</div>
        )}
        {status !== "idle" && forecasts && (
          <ForecastPanel doc={forecasts} t={videoT} ended={status === "done"} t0={clip?.t_start ?? 0} onSeek={(t) => setScrubT(t)} />
        )}
        {status !== "idle" && clip?.source === "endoscapes" && (decisionPoint
          ? <DecisionOverlay clip={clip} patientId={patientId} onBranch={branch} />
          : <EyesOverlay clip={clip} t={videoT} ended={status === "done"} />)}
        <div className="card flex min-w-0 flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="label">Patient model · built by the eyes from the video</div>
              <div className="font-display text-xl">{shown ? `t ${fmtT(shown.t)}` : "waiting"}</div>
            </div>
            <CvsRing state={shown?.state} size={74} />
          </div>
          <div className="flex gap-1 self-start rounded-lg border border-line p-0.5 text-xs">
            {[["3d", "3D model"], ["map", "Anatomy map"]].map(([k, l]) => (
              <button key={k} onClick={() => setView(k)} className={`rounded-md px-2.5 py-1 ${view === k ? "bg-accent text-surface-0" : "text-ink-2"}`}>{l}</button>
            ))}
          </div>
          {view === "3d" ? (
            <World3D state={shown?.state} playing={status === "running" && !alert} height={forecasts || clip?.source === "endoscapes" ? 260 : 360} />
          ) : (
            <AnatomyMap state={shown?.state} prev={prevShown?.state} />
          )}
          {lastExpert && (
            <div className="rounded-lg border border-line bg-surface-2 p-2 text-sm">
              <span className="label">Surgeons at {fmtT(lastExpert.t)} (3 annotators): </span>
              {[["C2", "triangle"], ["C3", "plate"], ["C1", "two structures"]].map(([k, n]) => (
                <span key={k} className={`ml-2 ${lastExpert[k] >= 0.5 ? "text-ink-1" : "text-ink-3"}`}>
                  {lastExpert[k] >= 0.5 ? "●" : "○"} {n} {lastExpert[k].toFixed(2)}
                </span>
              ))}
            </div>
          )}
        </div>
        </div>
      </div>

      {history.length > 0 && (
        <div className="card">
          <div className="mb-2 flex items-center justify-between">
            <span className="label">What the world model remembers</span>
            {scrubT != null && <button className="text-sm text-accent underline" onClick={() => setScrubT(null)}>back to live</button>}
          </div>
          <StateTimeline
            history={history}
            t0={clip?.t_start ?? history[0].t}
            t1={clip?.t_end ?? history[history.length - 1].t}
            playhead={shown?.t}
            onSeek={(t) => setScrubT(t)}
            experts={experts}
            expertsCvsT={clip?.experts_cvs_t}
            events={events}
          />
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card min-w-0">
          <div className="label mb-2">How surgeons judged similar views</div>
          {expertViews?.views?.length ? (
            <div className="flex flex-col gap-2 text-sm">
              {expertViews.views.slice(0, 3).map((v) => (
                <div key={v._id} className="rounded-lg bg-surface-2 p-2">
                  <div className="mb-1 flex justify-between font-mono text-[11px] text-ink-3">
                    <span>{v.source}</span>
                    <span>sim {v.score.toFixed(3)}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3">
                    {Object.entries(v.verdict).map(([k, x]) => (
                      <span key={k} className={x.met ? "text-ink-1" : "text-ink-3"}>{x.met ? "●" : "○"} {k} {x.score}</span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-xs text-ink-3">
                Nearest surgeon-labelled training frames (Endoscapes, Igor's Atlas library, read-only). Similarity scores sit close together, so treat these as calibration examples, not votes.
              </p>
            </div>
          ) : (
            <p className="text-sm text-ink-3">Appears while the clip plays.</p>
          )}
        </div>
        <div className="card min-w-0">
          <div className="label mb-2">Gemini Argon checks the state</div>
          {checks.length ? (
            <div className="flex max-h-72 flex-col gap-2 overflow-y-auto text-sm">
              {checks.map((c, i) => (
                <div key={i} className="rounded-lg bg-surface-2 p-2">
                  <div className="flex justify-between font-mono text-[11px] text-ink-3"><span>t {fmtT(c.t)}</span><span>confidence {Math.round(c.confidence * 100)}%</span></div>
                  <ul className="list-inside list-disc text-ink-2">{c.contradictions.map((x, j) => <li key={j}>{x}</li>)}</ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-3">On CholecT50 clips, Argon reviews the state every ~30 s and reports contradictions. It can never set clipped, cut or CVS.</p>
          )}
        </div>
        <div className="card min-w-0">
          <div className="label mb-2">Decisions and report</div>
          {decisions.map((d, i) => (
            <div key={i} className="text-sm text-ink-2">
              {fmtT(d.t)} · {d.type}: <b>{d.decision === "ack" ? "acknowledged" : "overridden"}</b> · “{d.reason}”
            </div>
          ))}
          {report ? (
            <div className="mt-2 text-sm">
              <p className="text-ink-1">{report.text}</p>
              <p className="mt-1 text-xs text-ink-3">written by Gemini Argon from this session's events</p>
            </div>
          ) : (
            !decisions.length && <p className="text-sm text-ink-3">Every alert needs a logged human decision.</p>
          )}
          {obs?.cvs_evidence && (
            <div className="mt-3 rounded-lg bg-surface-2 p-2 text-sm">
              <div className="label mb-1">Argon's reasoning on this frame</div>
              <p className="text-ink-2">{obs.cvs_evidence}</p>
            </div>
          )}
        </div>
      </div>

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


// The last frame of an Endoscapes clip is the moment before the first clip. The recorded world-model steps for
// "clip now" and "keep dissecting" from this sensed state are shown right on the frozen frame.
function DecisionOverlay({ clip, patientId, onBranch }) {
  const [recs, setRecs] = useState(null);
  useEffect(() => {
    if (!clip) return;
    const k = (a) => `imagine_${patientId}_${a.replaceAll(",", "_")}_${clip.video_id}_${clip.t_end}`;
    Promise.all(["clipper,clip,cystic_duct", "hook,dissect,cystic_plate"].map((a) => get(`/recorded/${k(a)}`).catch(() => null)))
      .then(setRecs);
  }, [clip?.video_id, patientId]);
  const have = recs?.filter(Boolean) || [];
  return (
    <div className="rounded-xl border-2 border-accent/60 bg-surface-1 p-4">
      <div className="label">The camera stops before the first clip · patient {patientId}</div>
      <p className="mb-3 text-sm text-ink-2">What would each move do from what the eyes saw? Predicted by the world model (rules → real cases from Atlas → Argon).</p>
      {have.length ? (
        <div className="grid gap-2">
          {have.map((r) => (
            <div key={actionShort(r.action)} className="rounded-lg border border-line bg-surface-2 p-3">
              <div className="mb-1 flex items-center justify-between gap-2">
                <b className="text-sm">{actionShort(r.action)}</b>
                <RiskBadge level={r.risk_level} />
              </div>
              {r.rules_violations.length > 0 && <div className="text-sm text-status-serious">▲ {r.rules_violations.join(", ").replaceAll("_", " ")}</div>}
              <ul className="text-xs text-ink-2">{diffStates(r.state_in, r.state_out).map((c) => <li key={c.text}>→ {c.text}</li>)}</ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-ink-3">No recorded prediction for patient {patientId} at this moment; open it in Imagine to run one.</p>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-ink-3">Counterfactual: the real operation did not take these paths, so they can't be checked against reality.</span>
        <button className="btn-primary text-sm" onClick={onBranch}>⑂ Explore in Imagine</button>
      </div>
    </div>
  );
}
