import { useEffect, useState } from "react";
import { get, actionLabel, niceName, videoUrl } from "../api";
import AnatomyMap, { CvsRing, diffStates } from "../components/AnatomyMap";
import { FutureTree } from "../components/StateSpaceMap";
import VideoHUD from "../components/VideoHUD";
import World3D from "../components/World3D";
import { fmtT } from "../components/AnatomyPanel";
import { Frame, RiskBadge } from "../components/ui";

// One real decision, told step by step from recorded outputs: Igor's "eyes" judge the critical view of safety on
// a real Endoscapes operation; our world model imagines what clipping now would do; the same action is re-judged
// once the view is safe; and the robot simulator shows why this matters for autonomy.

const CLIP = "endo166";
const T_EARLY = 60, T_LATE = 93;
const ACT_CLIP = "clipper,clip,cystic_duct", ACT_DISSECT = "hook,dissect,cystic_plate";
const k = (a) => a.replaceAll(",", "_");

export default function Story({ onOpen }) {
  const [d, setD] = useState(null);
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const [clips, watch, views, clipEarly, dissectEarly, clipLate, e5] = await Promise.all([
          get("/clips"), get(`/recorded/watch_${CLIP}_P1`), get("/expert_views", { clip: CLIP, t: T_EARLY }),
          get(`/recorded/imagine_P2_${k(ACT_CLIP)}_${CLIP}_${T_EARLY}`), get(`/recorded/imagine_P2_${k(ACT_DISSECT)}_${CLIP}_${T_EARLY}`),
          get(`/recorded/imagine_P2_${k(ACT_CLIP)}_${CLIP}_${T_LATE}`), get("/eval/latest", { name: "E5_world_model" }).catch(() => null),
        ]);
        const clip = clips.find((c) => c.video_id === CLIP);
        const obs = watch.events.filter(([c]) => c === "observations").map(([, o]) => o);
        const states = watch.events.filter(([c, x]) => c === "world_state" && x.state).map(([, x]) => x);
        const near = (arr, t) => arr.reduce((a, b) => (Math.abs(b.t - t) < Math.abs(a.t - t) ? b : a));
        const experts = obs.filter((o) => o.expert).map((o) => o.expert);
        setD({ clip, obs: near(obs, T_EARLY), state: near(states, T_EARLY).state, views, clipEarly, dissectEarly, clipLate, e5,
               expertNow: [...experts].reverse().find((e) => e.t <= T_EARLY), stateLate: near(states, T_LATE).state });
      } catch (e) {
        setError(e.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (!auto) return;
    if (step >= STEPS.length - 1) { setAuto(false); return; }
    const h = setTimeout(() => setStep((s) => s + 1), 7000);
    return () => clearTimeout(h);
  }, [auto, step]);

  if (error) return <div className="card text-status-serious">Story data missing: {error}</div>;
  if (!d) return <div className="card text-ink-3">Loading the recorded decision…</div>;
  const S = STEPS[step];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-1 gap-1">
          {STEPS.map((x, i) => (
            <button key={i} onClick={() => { setAuto(false); setStep(i); }} title={x.title}
              className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-accent" : "bg-surface-3"}`} />
          ))}
        </div>
        <span className="font-mono text-xs text-ink-3">{step + 1} / {STEPS.length}</span>
        <button className="btn text-sm" disabled={step === 0} onClick={() => setStep(step - 1)}>← Back</button>
        <button className="btn-primary text-sm" disabled={step === STEPS.length - 1} onClick={() => setStep(step + 1)}>Next →</button>
        <button className="btn text-sm" onClick={() => setAuto(!auto)}>{auto ? "❚❚ Pause" : "▶ Autoplay"}</button>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
        <div className="card flex min-w-0 flex-col gap-3">
          <div className="label" style={{ color: S.who === "eyes" ? "#3ddc84" : S.who === "imagination" ? "#8f9cff" : "#aab7c6" }}>{S.kicker}</div>
          <h2 className="text-3xl font-bold leading-tight">{S.title}</h2>
          <div className="text-lg text-ink-2">{S.text(d)}</div>
          {S.note && <p className="text-sm text-ink-3">{S.note(d)}</p>}
        </div>
        <div className="min-w-0">{S.visual(d, onOpen)}</div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    kicker: "A real operation", who: "data",
    title: "Is it safe to clip the cystic duct yet?",
    text: (d) => <>Endoscapes operation {d.clip.op}, at {fmtT(T_EARLY)} into the dissection. Clipping the wrong duct is how bile duct injuries happen. Surgeons only clip once the <b>critical view of safety</b> (three criteria) is reached.</>,
    note: () => "Endoscapes2023 (CAMMA, CC BY-NC-SA 4.0), a test operation never used for tuning.",
    visual: (d) => <VideoHUD src={videoUrl(d.clip.video)} obs={d.obs} state={null} playing={false} speed={1} />,
  },
  {
    kicker: "The eyes · Igor's CVS judge", who: "eyes",
    title: "Gemini Argon reads the critical view straight from the pixels",
    text: (d) => <>Using the surgeons' own annotation protocol, it scores each criterion and holds it only after three agreeing frames. At {fmtT(T_EARLY)} it says <b>{Object.values(d.state.cvs).filter(Boolean).length} of 3</b>.</>,
    note: (d) => d.expertNow ? `Three surgeons at ${fmtT(d.expertNow.t)}: two structures ${d.expertNow.C1.toFixed(2)}, triangle ${d.expertNow.C2.toFixed(2)}, plate ${d.expertNow.C3.toFixed(2)}. On this operation the judge declares CVS at 1:09; the surgeons at 1:04.` : null,
    visual: (d) => (
      <div className="flex flex-col gap-3">
        <div className="card"><div className="label mb-1">Argon's reasoning on this frame</div><p className="text-ink-1">{d.obs.cvs_evidence}</p></div>
        <div className="card">
          <div className="label mb-2">How surgeons judged the most similar training views (Atlas, read-only)</div>
          {(d.views.views || []).slice(0, 3).map((v) => (
            <div key={v._id} className="mb-1 flex flex-wrap justify-between gap-2 text-sm">
              <span className="font-mono text-xs text-ink-3">{v.source}</span>
              <span>{Object.entries(v.verdict).map(([n, x]) => <span key={n} className={`ml-2 ${x.met ? "text-ink-1" : "text-ink-3"}`}>{x.met ? "●" : "○"} {n}</span>)}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    kicker: "Becomes a patient model", who: "imagination",
    title: "What the eyes see becomes the patient's state",
    text: () => <>The world model turns perception into anatomy: which structures are exposed, which criteria hold, what is still hidden. The <b>common bile duct</b> is never seen; it is what all of this protects.</>,
    note: () => "Drag to rotate. The fatty tissue thins as dissection exposes the duct and artery.",
    visual: (d) => (
      <div className="flex flex-col gap-3">
        <World3D state={d.state} playing height={400} />
        <CvsRing state={d.state} />
      </div>
    ),
  },
  {
    kicker: "The imagination · our world model", who: "imagination",
    title: "What if we clip the duct right now?",
    text: (d) => <>The world model plays the action forward for a patient with an inflamed gallbladder (P2). The rule engine flags <b>{d.clipEarly.rules_violations.map(niceName).join(", ") || "nothing"}</b>; the risk is <b>{d.clipEarly.risk_level}</b>. Keeping on dissecting stays <b>{d.dissectEarly.risk_level}</b>.</>,
    visual: (d) => (
      <div className="card flex flex-col gap-3">
        <FutureTree root={d.state} nodes={[
          { id: "a", parent: null, state: d.clipEarly.state_out, action: ACT_CLIP, risk: d.clipEarly.risk_level, patient_id: "P2" },
          { id: "b", parent: null, state: d.dissectEarly.state_out, action: ACT_DISSECT, risk: d.dissectEarly.risk_level, patient_id: "P2" },
        ]} selected="a" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <AnatomyMap state={d.clipEarly.state_in} />
          <AnatomyMap state={d.clipEarly.state_out} prev={d.clipEarly.state_in} />
        </div>
        <div className="flex flex-wrap items-center gap-2"><RiskBadge level={d.clipEarly.risk_level} large />
          {diffStates(d.clipEarly.state_in, d.clipEarly.state_out).map((c, i) => <span key={i} className="text-sm text-ink-2">→ {c.text}</span>)}</div>
      </div>
    ),
  },
  {
    kicker: "Grounded, not guessed", who: "imagination",
    title: "Every prediction cites real recorded operations",
    text: (d) => <>Atlas vector search retrieves the most similar real moments from 3,000+ CholecT50 transitions; Gemini Argon must cite them. “{d.clipEarly.explanation}”</>,
    note: () => "Retrieval is restricted to training operations, so test operations never inform their own predictions.",
    visual: (d) => (
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="card flex flex-col gap-2">
          <div className="label">Cited real transitions</div>
          {d.clipEarly.neighbours.slice(0, 5).map((n) => (
            <div key={n.id} className={`rounded-lg p-2 text-sm ${d.clipEarly.cited_transition_ids.includes(n.id) ? "bg-surface-2" : "opacity-60"}`}>
              <div className="flex justify-between font-mono text-xs text-ink-3"><span>{n.id}</span><span>sim {n.score?.toFixed(3)}</span></div>
              <div className="text-ink-2">surgeon then: {actionLabel(n.next_action)}</div>
            </div>
          ))}
        </div>
        <Frame path={d.clipEarly.frame?.path} label="closest real frame" caption={d.clipEarly.frame?.video_id} />
      </div>
    ),
  },
  {
    kicker: "Eyes + imagination", who: "eyes",
    title: `Same action, ${T_LATE - T_EARLY} seconds later: safe`,
    text: (d) => <>At {fmtT(T_LATE)} the eyes hold all three criteria (the surgeons said safe from {fmtT(d.clip.experts_cvs_t)}). The world model now predicts clipping is <b>{d.clipLate.risk_level}</b> risk with <b>{d.clipLate.rules_violations.length ? d.clipLate.rules_violations.map(niceName).join(", ") : "no violations"}</b>.</>,
    visual: (d) => (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="card"><div className="mb-2 flex items-center justify-between"><span className="label">at {fmtT(T_EARLY)} · clip now</span><RiskBadge level={d.clipEarly.risk_level} /></div><AnatomyMap state={d.clipEarly.state_out} /></div>
        <div className="card"><div className="mb-2 flex items-center justify-between"><span className="label">at {fmtT(T_LATE)} · clip now</span><RiskBadge level={d.clipLate.risk_level} /></div><AnatomyMap state={d.clipLate.state_out} /></div>
      </div>
    ),
  },
  {
    kicker: "Why a world model", who: "data",
    title: "A crash-test dummy for surgical robots",
    text: (d) => {
      const m = d.e5?.metrics?.P4;
      return m ? <>With Argon as the simulator, random actions injured the short-duct patient in <b>{Math.round(m.random.injury_rate * 100)}%</b> of episodes; the Gemini robot in <b>{Math.round(m.agent.injury_rate * 100)}%</b>. A policy can be safety-checked before it ever touches a patient.</> : "Robot episodes run through the same world model.";
    },
    note: () => "Lessons from failures are stored in Atlas; in these runs the agent was never unsafe, so lessons are untested.",
    visual: (d, onOpen) => (
      <div className="card flex flex-col items-start gap-3">
        <p className="text-ink-2">See every episode as a path through the world model's state space.</p>
        <button className="btn-primary" onClick={() => onOpen("robot")}>Open Train the robot →</button>
        <button className="btn" onClick={() => onOpen("watch")}>Watch the model build itself on a real video →</button>
      </div>
    ),
  },
  {
    kicker: "Second Look", who: "data",
    title: "Pixel world models show the camera. A patient world model shows the patient.",
    text: () => <>Eyes that judge what is true now, an imagination that plays actions forward, grounded in real surgery and checked by hard rules. A research simulation on public data, not clinical advice.</>,
    note: () => "Honest numbers are on the Evidence tab, including where a simple trained model beats Gemini.",
    visual: (d) => <World3D state={d.stateLate} playing height={420} />,
  },
];
