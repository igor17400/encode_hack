import { useEffect, useMemo, useRef, useState } from "react";
import { get, post, openStream, videoUrl} from "../api";
import { actionShort } from "../lib/describe";
import AnatomyMap, { diffStates } from "../components/AnatomyMap";
import AlertNote from "../components/AlertNote";
import StateTimeline from "../components/StateTimeline";
import ForecastPanel, { EyesOverlay } from "../components/ForecastOverlay";
import { overlayState } from "../lib/forecast";
import VideoHUD from "../components/VideoHUD";
import PlayerBar from "../components/PlayerBar";
import CvsCard from "../components/CvsCard";
import World3D from "../components/World3D";
import { fmtT } from "../components/AnatomyPanel";
import { ErrorNote, Frame, PanelBoundary, Picker, RiskBadge, SourceTag, patientOptions } from "../components/ui";

const SHORT_LABEL = (c) =>
  c.source === "endoscapes" ? `Endoscapes op ${c.op} · CVS by Argon` : `CholecT50 ${c.video_id} · ${fmtT(c.t_start)}–${fmtT(c.t_end)}`;
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
  const [decisions, setDecisions] = useState([]);
  const [checks, setChecks] = useState([]);
  const [report, setReport] = useState(null);
  const [expertViews, setExpertViews] = useState(null);
  const [status, setStatus] = useState("idle");
  const [decisionPoint, setDecisionPoint] = useState(false);
  const [playing, setPlaying] = useState(false); // the viewer's play / pause
  const [seekReq, setSeekReq] = useState(null); // {t, n}: move the video (and with it everything else)
  const [videoEnded, setVideoEnded] = useState(false);
  const [alerts, setAlerts] = useState([]); // every alert received, shown when the video reaches it
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

  const t0 = clip?.t_start ?? 0, t1 = clip?.t_end ?? 0;
  const tNow = videoT ?? t0; // the video is the clock
  const atEnd = videoEnded || (videoT != null && videoT >= t1 - 0.4);
  const fstate = overlayState(forecasts?.forecasts, videoT, { ended: atEnd });
  // Pause before reveal: freeze the video briefly once a forecast is locked, then let reality play out.
  useEffect(() => {
    if (!pauseReveal || fstate.mode !== "forecast" || !fstate.locked || lockedFor.current === fstate.f.id) return;
    lockedFor.current = fstate.f.id;
    setHold(true);
    const h = setTimeout(() => setHold(false), 1800);
    return () => clearTimeout(h);
  }, [pauseReveal, fstate.mode, fstate.locked, fstate.f?.id]);
  // Stage height for the one-screen layout: from the stage's top to the bottom of the window (wide screens only).
  const stageRef = useRef(null);
  const [stage, setStage] = useState({ wide: false, h: null });
  useEffect(() => {
    const measure = () => {
      const el = stageRef.current;
      if (!el) return;
      const wide = window.innerWidth >= 1280;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setStage((s) => {
        const h = wide ? Math.max(480, Math.floor(window.innerHeight - top - 12)) : null;
        return s.wide === wide && s.h === h ? s : { wide, h };
      });
    };
    measure();
    // Re-measure when anything above the stage changes height (controls wrapping, an error note) or the window resizes.
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);
  const live = history[history.length - 1];
  // Everything shown is what the stream knew at the video's current time.
  let shownIdx = -1;
  for (let i = 0; i < history.length && history[i].t <= tNow + 0.25; i++) shownIdx = i;
  const shown = shownIdx >= 0 ? history[shownIdx] : null;
  const prevShown = shownIdx > 0 ? history[shownIdx - 1] : null;
  const obs = [...obsList].reverse().find((o) => o.t <= tNow + 0.25) ?? null;
  const reachedAlerts = alerts.filter((a) => a.t <= tNow + 0.25); // warnings the video has reached (never pause it)
  const banner = shown?.banner ?? null;
  const loadedTo = live?.t ?? t0;
  const videoPlaying = status !== "idle" && playing && !hold && !atEnd;
  const seek = (t) => {
    lockedFor.current = null; // replaying a reveal pauses before it again
    setVideoEnded(false);
    setSeekReq({ t: Math.min(t1, Math.max(t0, t)), n: Date.now() });
  };

  // Toasts for what the rules changed, as the video reaches each change.
  useEffect(() => {
    if (shown?.changes?.length) setChanges(shown.changes);
  }, [shown?.t]);

  // Space toggles play / pause (not while typing).
  useEffect(() => {
    const onKey = (e) => {
      if (e.code !== "Space" || ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) || status === "idle") return;
      e.preventDefault();
      if (atEnd) { seek(t0); setPlaying(true); } else setPlaying((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status, atEnd, t0]);
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
        return `The eyes read the ${n.replace("_", " ")} as ${eyes}; the surgeons' labels say not yet. The engine starts from the labels.`;
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
    setAlerts([]);
    setDecisions([]);
    setChecks([]);
    setReport(null);
    setExpertViews(null);
    setDecisionPoint(false);
    setVideoT(null);
    setVideoEnded(false);
    setSeekReq({ t: clip?.t_start ?? 0, n: Date.now() });
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
            const c = d.changes?.length ? d.changes : diffStates(last, d.state).map((x) => x.text);
            const banner = d.held ? d.banner || "View obscured, can't confirm" : null;
            setHistory((x) => [...x, { t: d.t, state: d.state, changes: c, banner, duct_confirmed: d.duct_confirmed, cvs_since: d.cvs_since }]);
            last = d.state;
          }
          if (d.source === "argon")
            setChecks((x) => [...x, { t: d.t, confidence: d.confidence, contradictions: d.contradictions || [], applied: d.corrections_applied || [] }]);
          if (d.done) {
            setStatus("done");
            setDecisionPoint(!!d.decision_point);
          }
        },
        alert: (d) => setAlerts((x) => [...x, d]),
        report: (d) => setReport(d),
      });
      // The data streams in as fast as it can; the video plays at the chosen speed and everything follows it.
      const r = await post(`/sessions/${s.session_id}/watch`, { speed: 0, t_from: clip?.t_start, t_to: clip?.t_end });
      setSource(r.source);
      setStatus("running");
      setPlaying(true);
    } catch (e) {
      setError(e.message);
    }
  }

  const branch = () =>
    onBranch({ state: (shown || live).state, patient_id: patientId, video_id: clipId,
               label: `${clip?.source === "endoscapes" ? `Endoscapes op ${clip.op}` : clipId} @ ${fmtT((shown || live).t)}` });

  const events = [
    ...checks.map((c) => ({ t: c.t, kind: "check" })),
    ...alerts.filter((a) => a.t <= tNow + 0.25).map((a) => ({ t: a.t, kind: "alert", label: a.decided ? `${a.type} (${a.decision})` : a.type })),
  ];

  const wide = stage.wide;
  const endo = clip?.source === "endoscapes";
  // Video width capped so the video, the player bar and at least ~220 px of 3D model fit the stage height.
  const videoMaxW = wide && stage.h ? Math.max(360, (stage.h - 24 - 82 - 160) * 16 / 9) : undefined;

  return (
    <div className="flex flex-col gap-3">
      <div className="card flex flex-wrap items-center gap-x-4 gap-y-2 !py-2.5">
        <Picker compact label="Operation" value={clipId} onChange={setClipId} options={clips.map((c) => ({ value: c.video_id, label: wide ? SHORT_LABEL(c) : CLIP_LABEL(c) }))} />
        <Picker compact label="Patient" value={patientId} onChange={setPatientId} options={patientOptions(patients)} />
        <Picker compact label="Speed" value={speed} onChange={setSpeed} options={[1, 2, 4, 8].map((v) => ({ value: v, label: `${v}×` }))} />
        <button className="btn-primary" onClick={start} disabled={!clipId}>
          {status === "idle" ? "▶ Watch the model think" : "↻ Restart"}
        </button>
        <button className="btn" disabled={!live} onClick={branch} title="Imagine from this moment">⑂ Imagine{wide ? "" : " from this moment"}</button>
        {forecasts && (
          <label className="flex items-center gap-1.5 text-xs text-ink-2">
            <input type="checkbox" checked={pauseReveal} onChange={(e) => setPauseReveal(e.target.checked)} /> pause before each reveal
          </label>
        )}
        <span className="ml-auto" title={clip?.credit || ""}><SourceTag source={source} />{clip?.credit && <span className="ml-1 cursor-help text-xs text-ink-3">ⓘ</span>}</span>
      </div>
      <ErrorNote error={error} />

      {/* The stage: on wide screens everything for the demo fits in one viewport, no page scroll. */}
      <div ref={stageRef} style={wide && stage.h ? { height: stage.h } : undefined}
        className="grid gap-3 xl:grid-cols-[260px_minmax(0,1fr)_400px] 2xl:grid-cols-[290px_minmax(0,1fr)_440px]">
        <aside className="order-2 flex min-h-0 min-w-0 flex-col gap-2 xl:order-1 xl:overflow-y-auto">
          <PanelBoundary resetKey={clipId}>
          {status !== "idle" && shown ? (
            <CvsCard state={shown.state} history={history} idx={shownIdx} obs={obs} obsList={obsList} tNow={tNow}
              sensor={shown.state.cvs_source === "sensor"} ductConfirmed={!!shown.duct_confirmed} dense />
          ) : (
            <div className="rounded-2xl border-2 border-line bg-surface-0 p-3">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-3">Critical view of safety</div>
              <p className="mt-1 text-sm text-ink-2">The 3 checks a surgeon makes before it is safe to clip. They fill in here as the video plays.</p>
            </div>
          )}
          <AlertNote alerts={reachedAlerts} onDecided={(d) => {
            setDecisions((x) => [...x, d]);
            setAlerts((x) => x.map((a) => (a._id === d._id ? { ...a, decided: true, decision: d.decision } : a)));
          }} />
          </PanelBoundary>
        </aside>

        <div className="order-1 flex min-h-0 min-w-0 flex-col xl:order-2">
          <div className="mb-1 flex flex-wrap items-baseline gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">Eyes</span>
            <span className="truncate text-xs text-ink-3">{endo ? "Gemini Argon judges the critical view from each frame; Flash draws approximate boxes" : "Gemini Flash reads each frame: instruments, actions, approximate boxes"}</span>
          </div>
          <div className="mx-auto w-full" style={videoMaxW ? { maxWidth: videoMaxW } : undefined}>
            <VideoHUD
              src={videoUrl(clip?.video)}
              t0={clip?.t_start ?? 0}
              obs={obs}
              state={shown?.state}
              changes={changes}
              banner={banner}
              playing={videoPlaying}
              speed={speed}
              done={decisionPoint && atEnd}
              onTime={(t) => { setVideoT(t); if (t < t1 - 0.4) setVideoEnded(false); }}
              onEnded={() => setVideoEnded(true)}
              seek={seekReq}
              hold={hold}
              mini={!wide}
            >
              <div className="rounded-xl border border-accent/60 bg-surface-1/95 px-5 py-3 text-center">
                <div className="label">The camera stops before the first clip</div>
                <p className="text-sm text-ink-2">What would each move do? See the predictions beside the video.</p>
              </div>
            </VideoHUD>
            <PlayerBar t={videoT} t0={t0} t1={t1} playing={videoPlaying} disabled={status === "idle"}
              onToggle={() => { if (atEnd) { seek(t0); setPlaying(true); } else setPlaying(!playing); }}
              onSeek={seek} forecasts={forecasts} alerts={alerts} clip={endo ? clip : null} ended={atEnd} />
          </div>
          {status !== "idle" && loadedTo < tNow - 2 && (
            <p className="mt-1 text-xs text-ink-3">Analysis loaded up to {fmtT(loadedTo)}…</p>
          )}
          <PanelBoundary resetKey={clipId}>
          <div className="relative mt-2 min-h-[160px] flex-1">
            {view === "3d" ? (
              <World3D state={shown?.state} playing={videoPlaying} height={wide ? "100%" : 320} />
            ) : (
              <div className="h-full overflow-auto rounded-xl border border-line bg-surface-0 p-2"><AnatomyMap state={shown?.state} prev={prevShown?.state} /></div>
            )}
            <div className="pointer-events-none absolute inset-x-2 top-2 flex items-start justify-between gap-2">
              <span className="rounded-md bg-surface-0/80 px-2 py-1 text-[11px] text-ink-2">
                <span className="font-mono uppercase tracking-wider text-accent">Patient model</span> · built by the eyes{shown ? ` · ${fmtT(shown.t)}` : ""}
              </span>
              <div className="pointer-events-auto flex gap-1 rounded-lg border border-line bg-surface-0/80 p-0.5 text-xs">
                {[["3d", "3D"], ["map", "Map"]].map(([k, l]) => (
                  <button key={k} onClick={() => setView(k)} className={`rounded-md px-2.5 py-1 ${view === k ? "bg-accent text-surface-0" : "text-ink-2"}`}>{l}</button>
                ))}
              </div>
            </div>
          </div>
          </PanelBoundary>
        </div>

        <aside className="order-3 flex min-h-0 min-w-0 flex-col gap-2 xl:overflow-y-auto">
          <PanelBoundary resetKey={clipId}>
          {forecasts && (
            <ForecastPanel doc={forecasts} t={status === "idle" ? null : videoT} ended={atEnd} t0={t0} onSeek={seek} dense
              note={status !== "idle" ? disagreement : null} />
          )}
          {endo && (status === "idle" ? (
            <div className="rounded-xl border-2 border-accent/30 bg-surface-0 p-3 text-sm text-ink-3">
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent">Eyes vs surgeons</div>
              When was it safe to clip? The eyes' call and the surgeons' labels appear here as the video plays; at the end, the world model predicts what clipping would do.
            </div>
          ) : decisionPoint && atEnd
            ? <DecisionOverlay clip={clip} patientId={patientId} onBranch={branch} />
            : <EyesOverlay clip={clip} t={videoT} ended={atEnd} history={history} idx={shownIdx} />)}
          {lastExpert && (
            <div className="rounded-xl border border-line bg-surface-0 px-3 py-2 text-xs">
              <div className="text-ink-3">Surgeons' labels at {fmtT(lastExpert.t)} (3 annotators)</div>
              {[["C1", "two structures"], ["C2", "triangle"], ["C3", "plate"]].map(([k, n]) => (
                <div key={k} className={`flex justify-between ${lastExpert[k] >= 0.5 ? "text-ink-1" : "text-ink-3"}`}>
                  <span>{lastExpert[k] >= 0.5 ? "●" : "○"} {n}</span><span className="font-mono">{lastExpert[k].toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
          </PanelBoundary>
        </aside>
      </div>

      {forecasts && (
        <div className="card text-sm text-ink-2">
          <b className="text-ink-1">Forecast → reality:</b> {clipId} is a held-out operation (never used for retrieval or training). Each forecast was made before the moment it predicts; the truth is the surgeons' recorded actions.
          {e1?.metrics && (
            <> Across {e1.metrics.n} held-out moments, next action in top 3: world model {Math.round(e1.metrics.model_top3 * 100)}% · trained model {Math.round(e1.metrics.trained_top3 * 100)}% · bigram {Math.round(e1.metrics.bigram_top3 * 100)}%.</>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="card">
          <div className="mb-2 flex items-center justify-between">
            <span className="label">What the world model remembers</span>
            <span className="text-xs text-ink-3">click to jump the video there</span>
          </div>
          <StateTimeline
            history={history}
            t0={clip?.t_start ?? history[0].t}
            t1={clip?.t_end ?? history[history.length - 1].t}
            playhead={tNow}
            onSeek={seek}
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
            !decisions.length && <p className="text-sm text-ink-3">Safety warnings appear beside the video; marking one as seen or a false alarm is optional and logged.</p>
          )}
          {obs?.cvs_evidence && (
            <div className="mt-3 rounded-lg bg-surface-2 p-2 text-sm">
              <div className="label mb-1">Argon's reasoning on this frame</div>
              <p className="text-ink-2">{obs.cvs_evidence}</p>
            </div>
          )}
        </div>
      </div>

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
