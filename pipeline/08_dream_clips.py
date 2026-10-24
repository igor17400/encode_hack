"""Dream data: render world-model steps as synthetic training video, verify them, store them in Atlas.

Jobs (all anchored on REAL Endoscapes frames, patient P2 unless --patient):
  safe / counterfactual  the recorded world-model steps at each decision moment (demo/precomputed/imagine_*)
  factual                control: interpolate between two real frames of the same shot, compare with reality
  robot                  a fresh robot episode from a decision moment: the agent picks each action, the world
                         model (rules -> Atlas retrieval -> Argon, strict) predicts it, each step continues from
                         the previous clip's last frame
  baseline               Igor's hand-prompted Wan 2.2 clips, run through the same gates (no world model)

  python pipeline/08_dream_clips.py --dry-run            # anchors + compiled prompts only, no video calls
  python pipeline/08_dream_clips.py --max-renders 12       # real run (Omni Flash video + Argon QC + Flash eyes)
  python pipeline/08_dream_clips.py --only robot --robot-steps 6 --robot-seconds 10   # ~60 s episode

Writes demo/dreams/<name>.mp4 + <name>.json (every attempt, kept or not), Atlas `dream_clips` (+ embedding)
and progress events to `dream_events` (session_id = run id, streamed by /stream/<run id>).
"""
from __future__ import annotations

import argparse
import json
import random
import subprocess
import sys
import time
import uuid
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import agent, config, endoscapes, gemini, perception, rules, videogen, world_model  # noqa: E402
from backend.schema import Action, Patient, State  # noqa: E402

OUT = config.ROOT / "demo" / "dreams"
WORK = config.CACHE / "dreams"
ANCHORS = [("endo166", 60), ("endo166", 93), ("endo198", 153)]
BRANCHES = {"safe": "hook,dissect,cystic_plate", "counterfactual": "clipper,clip,cystic_duct"}
SECONDS = 6
FACTUAL_GAP = 6
# Igor's hand-prompted Wan 2.2 clips (igor17400/encode_hack main: worldmodel/run_demo.sh documents each prompt).
BASELINE = [
    {"name": "baseline_endo166_t040_wan", "src": "worldmodel/out/endo166_t040_wan.mp4", "clip": "endo166", "t": 40,
     "prompt_ref": "worldmodel/run_demo.sh (first prompt: early dissection)"},
    {"name": "baseline_endo198_t139_wan", "src": "worldmodel/out/endo198_t139_wan.mp4", "clip": "endo198", "t": 139,
     "prompt_ref": "worldmodel/run_demo.sh (second prompt: critical view reached)"},
    {"name": "baseline_endo198_t139_peel_v2", "src": "worldmodel/out/endo198_t139_peel_sd_v2.mp4", "clip": "endo198",
     "t": 139, "prompt_ref": "worldmodel/prompts/peel_sd_512.txt"},
]


def patients() -> dict[str, Patient]:
    p = config.DATA / "patients.json"
    p = p if p.exists() else config.PRECOMPUTED / "patients.json"
    return {d["patient_id"]: Patient(**d) for d in json.loads(p.read_text())}


def endo_video(clip: str) -> Path:
    return endoscapes.DIR / endoscapes.CLIPS[clip]["video"]


def eyes(path: Path) -> dict:
    """The Watch perception call on one frame. A failure is recorded as an error, never as 'nothing seen'."""
    try:
        return perception.observe_flash(path)
    except Exception as e:
        return {"triplets": [], "boxes": [], "phase": None, "view_quality": "error", "error": f"perception failed: {e}"}


class Run:
    def __init__(self, args):
        self.a = args
        self.run_id = f"dreams_{int(time.time())}"
        self.rendered = 0
        self.store = not args.dry_run and not args.no_atlas and bool(config.MONGODB_URI)
        if self.store:
            from backend import db

            self.db = db

    def event(self, name: str, stage: str, **kw) -> None:
        print(f"  [{name}] {stage} {kw if kw else ''}")
        if self.store:
            self.db.col("dream_events").insert_one({"_id": uuid.uuid4().hex, "session_id": self.run_id, "clip": name,
                                                    "stage": stage, **kw, "created_at": time.time()})

    def can_render(self) -> bool:
        return self.rendered < self.a.max_renders

    # --- one clip ---------------------------------------------------------------------------------------
    def generate(self, name: str, kind: str, anchors: list[Path], anchor_meta: dict, prompt: str, intent: str,
                 check, extra: dict) -> dict:
        """Render up to --tries attempts; keep the best; every attempt is logged. check(gen_frames) -> gate dict."""
        work = WORK / name
        attempts, best, issues_seen = [], None, []
        for k in range(1, self.a.tries + 1):
            if not self.can_render():
                attempts.append({"attempt": k, "skipped": "clip budget (--max-renders) reached"})
                break
            p = prompt + ("\n\nA previous attempt at this exact clip had these defects. Avoid every one of them:\n- "
                          + "\n- ".join(issues_seen) if issues_seen else "")
            self.event(name, "rendering", attempt=k)
            t0 = time.time()
            self.rendered += 1
            try:
                raw = videogen.render(anchors, p, extra.get("seconds", SECONDS))
            except Exception as e:
                attempts.append({"attempt": k, "error": f"render failed: {str(e)[:300]}"})
                self.event(name, "render_failed", attempt=k, error=str(e)[:200])
                continue
            cand = work / f"try{k}.mp4"
            cand.parent.mkdir(parents=True, exist_ok=True)
            videogen.browser_friendly(raw, cand)
            frames = videogen.sample_frames(cand, work / f"try{k}_frames")
            try:
                fid = videogen.qc(anchors, frames[:8], intent)
            except Exception as e:
                fid = {"pass": False, "score": None, "issues": [], "error": f"QC failed: {str(e)[:200]}"}
            self.event(name, "fidelity", attempt=k, passed=fid["pass"], score=fid.get("score"))
            gate = check(frames)
            self.event(name, "consistency", attempt=k, passed=gate.get("passed"))
            accepted = bool(fid["pass"]) and bool(gate.get("passed")) and kind != "factual"
            att = {"attempt": k, "seconds_taken": round(time.time() - t0), "prompt_feedback": list(issues_seen),
                   "fidelity": fid, "consistency": gate, "accepted": accepted, "file": cand}
            attempts.append(att)
            issues_seen += [i for i in fid.get("issues", []) if i not in issues_seen]
            rank = (accepted, bool(fid["pass"]), fid.get("score") or 0, sum((gate.get("agreement") or {}).values()))
            if best is None or rank > best[0]:
                best = (rank, att)
            if accepted or (kind == "factual" and fid["pass"]):
                break
        return self.finish(name, kind, anchors, anchor_meta, prompt, attempts, best, extra)

    def finish(self, name, kind, anchors, anchor_meta, prompt, attempts, best, extra) -> dict | None:
        if all(a.get("skipped") for a in attempts):  # nothing was tried: leave it for the next run
            print(f"  [{name}] not attempted (clip budget reached)")
            return None
        OUT.mkdir(parents=True, exist_ok=True)
        for i, a in enumerate(anchors):
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(a), "-vf", "scale=-2:480", "-q:v", "4",
                            str(OUT / f"{name}.anchor{i}.jpg")], check=True)
        kept = best[1] if best else None
        doc = {"_id": name, "name": name, "kind": kind, "run_id": self.run_id, "synthetic": True,
               "label": "AI-generated", "model": extra.get("source_model", videogen.VIDEO_MODEL), "seconds": extra.get("seconds", SECONDS), "credit": videogen.CREDIT,
               "anchor": anchor_meta, "anchor_images": [f"{name}.anchor{i}.jpg" for i in range(len(anchors))],
               "prompt": prompt, **extra,
               "attempts": [{k: (str(v.name) if isinstance(v, Path) else v) for k, v in a.items()} for a in attempts],
               "video": None, "fidelity": None, "consistency": None, "accepted": False, "created_at": time.time()}
        if kept:
            (OUT / f"{name}.mp4").write_bytes(Path(kept["file"]).read_bytes())
            doc.update(video=f"{name}.mp4", fidelity=kept["fidelity"], consistency=kept["consistency"],
                       accepted=kept["accepted"], kept_attempt=kept["attempt"])
            last = videogen.frame_at(OUT / f"{name}.mp4", max(0.0, videogen.duration(OUT / f"{name}.mp4") - 0.2),
                                     WORK / name / "last.png")
            doc["nearest"] = self.nearest(last)
        doc["reason"] = reason(doc)
        doc["text"] = videogen.summary_text(doc)
        (OUT / f"{name}.json").write_text(json.dumps(doc, indent=1, default=str))
        if self.store:
            d = dict(doc, embedding=self.db.to_bin(gemini.embed_one(doc["text"], kind="document")))
            self.db.col("dream_clips").replace_one({"_id": name}, d, upsert=True)
        self.event(name, "accepted" if doc["accepted"] else "rejected", reason=doc["reason"])
        return doc

    def nearest(self, last: Path) -> dict:
        """Display only (image embeddings are weak votes): closest real CholecT50 frame in our Atlas, and how
        surgeons judged the closest Endoscapes views in Igor's library (read-only)."""
        out = {}
        try:
            vec = gemini.embed_images([last])[0]
        except Exception as e:
            return {"error": f"image embedding failed: {e}"}
        if self.store:
            try:
                out["real_frames"] = [{"path": r["path"], "video_id": r.get("video_id"), "t": r.get("t"),
                                       "phase": r.get("phase"), "score": r.get("score")}
                                      for r in self.db.similar_frames(vec, k=3)]
            except Exception as e:
                out["real_frames_error"] = str(e)[:200]
        try:
            from backend import experts

            out["expert_views"] = [{k: r[k] for k in ("source", "verdict", "score", "retrieved_for")}
                                   for r in experts.similar_expert_views(vec)[:3]]
        except Exception as e:
            out["expert_views_error"] = str(e)[:200]
        return out

    # --- job kinds --------------------------------------------------------------------------------------
    def branch(self, clip: str, t: int, kind: str, pid: str) -> dict | None:
        rec_path = config.PRECOMPUTED / f"imagine_{pid}_{BRANCHES[kind].replace(',', '_')}_{clip}_{t}.json"
        res = json.loads(rec_path.read_text())
        name = f"{kind}_{clip}_{t}_{pid}"
        anchor = videogen.frame_at(endo_video(clip), t, WORK / name / "anchor0.png")
        return self.step_clip(name, kind, anchor, {"source": "endoscapes", "clip": clip, "t": t,
                                                   "credit": "Endoscapes2023 (CAMMA, CC BY-NC-SA 4.0)"},
                              res, pid, {"world_model_record": rec_path.name})

    def step_clip(self, name, kind, anchor: Path, anchor_meta, res: dict, pid: str, extra: dict) -> dict | None:
        action = Action(**res["action"])
        s_in, s_out = res["state_in"], res["state_out"]
        live = not self.a.dry_run or self.a.ground_in_dry_run
        scene = videogen.ground([anchor]) if live else "{SCENE}"
        anchor_obs = eyes(anchor) if live else {}
        in_view = sorted(videogen._instruments(anchor_obs)) if live else ["(instruments the eyes see in the anchor)"]
        prompt = videogen.compile_prompt(action, s_in, s_out, scene, extra.get("seconds", SECONDS), in_view)
        meta = {"patient_id": pid, "action": action.key(), "state_before": s_in, "state_after_predicted": s_out,
                "changes": videogen.diff_states(s_in, s_out), "risk_level": res["risk_level"],
                "violations": res["rules_violations"], "cited_transition_ids": res["cited_transition_ids"],
                "world_model_source": res.get("source"), "explanation": res.get("explanation"), **extra}
        if self.a.dry_run:
            return self.dry(name, kind, [anchor], prompt, meta)
        if anchor_obs.get("error"):
            print(f"  [{name}] eyes failed on the anchor, skipped: {anchor_obs['error']}")
            return None
        check = lambda frames: videogen.consistency(action, s_in, s_out, anchor_obs, [eyes(f) for f in frames])  # noqa: E731
        return self.generate(name, kind, [anchor], anchor_meta, prompt, action.label(), check, meta)

    def factual(self, clip: str, t: int) -> dict | None:
        name = f"factual_{clip}_{t - FACTUAL_GAP}_{t}"
        v = endo_video(clip)
        a0 = videogen.frame_at(v, t - FACTUAL_GAP, WORK / name / "anchor0.png")
        a1 = videogen.frame_at(v, t, WORK / name / "anchor1.png")
        scene = videogen.ground([a0, a1]) if not self.a.dry_run or self.a.ground_in_dry_run else "{SCENE}"
        prompt = videogen.INTERP_PROMPT.format(scene=scene)
        meta = {"patient_id": None, "action": None, "changes": [], "risk_level": None, "violations": [],
                "note": "Control clip: two real frames of the same shot, the model fills the gap. Compared with the "
                        "real footage between them. Never a training sample."}
        if self.a.dry_run:
            return self.dry(name, "factual", [a0, a1], prompt, meta)
        # The real footage between the anchors, sampled at the same offsets as the generated frames.
        real = [eyes(videogen.frame_at(v, t - FACTUAL_GAP + o + 0.5, WORK / name / f"real_{o}.png"))
                for o in range(FACTUAL_GAP)]

        def check(frames):
            fa = videogen.factual_agreement([eyes(f) for f in frames], real)
            return {"passed": None, "factual": fa, "agreement": {}}

        return self.generate(name, "factual", [a0, a1], {"source": "endoscapes", "clip": clip, "t": t - FACTUAL_GAP,
                                                          "t_end": t}, prompt, "motion between two real frames",
                             check, meta)

    def robot(self, clip: str, t: int, pid: str, steps: int, seconds: int) -> list[dict]:
        """The robot's own episode from a real decision moment, rendered as one continuous video.

        Each step: the agent (Flash) picks an action, the world model (rules -> Atlas -> Argon, strict) predicts it,
        the step is rendered from the previous step's last frame and checked by both gates. Rejected steps stay in
        the video, marked; only accepted steps go to the training export. Resumable: finished steps are reused
        (agent and world-model calls replay from the cache with the same sample key)."""
        pat = patients()[pid]
        rec = json.loads((config.PRECOMPUTED / f"imagine_{pid}_{BRANCHES['safe'].replace(',', '_')}_{clip}_{t}.json").read_text())
        st = State(**rec["state_in"])
        ep = f"robot_{clip}_{t}_{pid}_{steps}x{seconds}s"
        anchor = videogen.frame_at(endo_video(clip), t, WORK / ep / "anchor0.png")
        anchor_meta = {"source": "endoscapes", "clip": clip, "t": t}
        history, docs = [], []
        rng = random.Random(ep)
        for i in range(steps):
            dec = agent.choose_llm(st, pat, history, steps - i, None, sample_key=f"{ep}:dream")
            res = world_model.step(st, dec.action, pat, rng, with_frame=False, strict=True)
            r = json.loads(res.model_dump_json())
            name = f"{ep}_step{i}"
            done = OUT / f"{name}.json"
            if done.exists() and not self.a.force and not self.a.dry_run:
                d = json.loads(done.read_text())
                print(f"  [{name}] reusing finished step")
            else:
                d = self.step_clip(name, "robot", anchor, anchor_meta, r, pid,
                                   {"episode": ep, "step": i, "agent_reason": dec.reason, "policy": "agent (Flash)",
                                    "world_model_record": None, "seconds": seconds})
            docs.append(d)
            history.append(dec.action)
            st = res.state_out
            if self.a.dry_run or not d or not d.get("video"):
                if not self.a.dry_run:
                    print(f"  robot episode stops at step {i}: no clip to continue from")
                break
            last = OUT / f"{name}.mp4"
            anchor = videogen.frame_at(last, max(0.0, videogen.duration(last) - 0.2), WORK / ep / f"anchor_step{i + 1}.png")
            anchor_meta = {"source": "generated", "from": f"{name}.mp4", "note": "last frame of the previous AI-generated step"}
            if st.injury:
                break
        if not self.a.dry_run:
            self.episode(ep, clip, t, pid, [d for d in docs if d and d.get("video")])
        return docs

    def episode(self, ep: str, clip: str, t: int, pid: str, steps: list[dict]) -> dict | None:
        """Stitch the steps into one video plus a per-step label track (the shape of a robot-learning episode)."""
        if not steps:
            return None
        videogen.concat([OUT / d["video"] for d in steps], OUT / f"{ep}.mp4")
        segs, t0 = [], 0.0
        for d in steps:
            dur = videogen.duration(OUT / d["video"])
            segs.append({"step": d["step"], "t_start": round(t0, 2), "t_end": round(t0 + dur, 2), "clip": d["name"],
                         "action": d["action"], "agent_reason": d.get("agent_reason"), "changes": d["changes"],
                         "risk_level": d["risk_level"], "violations": d["violations"], "accepted": d["accepted"],
                         "reason": d["reason"], "fidelity": d["fidelity"],
                         "agreement": (d.get("consistency") or {}).get("agreement"),
                         "state_before": d["state_before"], "state_after": d["state_after_predicted"]})
            t0 += dur
        doc = {"_id": ep, "name": ep, "kind": "robot_episode", "run_id": self.run_id, "synthetic": True,
               "label": "AI-generated", "model": videogen.VIDEO_MODEL, "patient_id": pid, "policy": "agent (Flash)",
               "anchor": {"source": "endoscapes", "clip": clip, "t": t}, "anchor_images": steps[0]["anchor_images"],
               "video": f"{ep}.mp4", "duration": round(t0, 2), "steps": segs,
               "accepted_steps": sum(s["accepted"] for s in segs), "accepted": False,
               "reason": f"{sum(s['accepted'] for s in segs)}/{len(segs)} steps accepted; only those go to the training export",
               "credit": videogen.CREDIT, "created_at": time.time()}
        doc["text"] = (f"robot episode, patient {pid}, {len(segs)} steps, {round(t0)} s: "
                       + "; ".join(f"{s['action']} ({'accepted' if s['accepted'] else 'rejected'})" for s in segs))
        (OUT / f"{ep}.json").write_text(json.dumps(doc, indent=1, default=str))
        if self.store:
            d = dict(doc, embedding=self.db.to_bin(gemini.embed_one(doc["text"], kind="document")))
            self.db.col("dream_clips").replace_one({"_id": ep}, d, upsert=True)
        self.event(ep, "episode", duration=doc["duration"], accepted_steps=doc["accepted_steps"])
        return doc

    def baseline(self, b: dict) -> dict | None:
        name = b["name"]
        work = WORK / name
        work.mkdir(parents=True, exist_ok=True)
        src = work / "clip.mp4"
        if not src.exists():
            blob = subprocess.run(["git", "show", f"igor/main:second-look/{b['src']}"], capture_output=True,
                                  cwd=config.ROOT, check=True).stdout
            src.write_bytes(blob)
        anchor = videogen.frame_at(endo_video(b["clip"]), b["t"], work / "anchor0.png")
        meta = {"patient_id": None, "action": None, "changes": [], "risk_level": None, "violations": [],
                "hand_prompted": True, "prompt_ref": b["prompt_ref"], "source_model": "Wan 2.2 TI2V-5B (Igor, local)",
                "note": "Hand-written prompt, no world model: only the intent-free checks apply."}
        if self.a.dry_run:
            return self.dry(name, "baseline", [anchor], f"(hand-written: {b['prompt_ref']})", meta)
        frames = videogen.sample_frames(src, work / "frames")
        try:
            fid = videogen.qc([anchor], frames[:8], "unknown (hand-written prompt)")
        except Exception as e:
            fid = {"pass": False, "score": None, "issues": [], "error": f"QC failed: {str(e)[:200]}"}
        anchor_obs, obs = eyes(anchor), [eyes(f) for f in frames]
        errs = [o["error"] for o in obs + [anchor_obs] if o.get("error")]
        seen = set().union(*(videogen._instruments(o) for o in obs)) if obs else set()
        views = [o.get("view_quality") for o in obs]
        agreement = {} if errs else {"no_new_instruments": seen <= videogen._instruments(anchor_obs),
                                     "view_clear": views.count("clear") * 2 >= len(views)}
        gate = {"agreement": agreement, "errors": errs, "passed": None,
                "observed": {"instruments": sorted(seen), "anchor_instruments": sorted(videogen._instruments(anchor_obs))}}
        att = {"attempt": 1, "fidelity": fid, "consistency": gate, "accepted": False, "file": src}
        doc = self.finish(name, "baseline", [anchor], {"source": "endoscapes", "clip": b["clip"], "t": b["t"]},
                          f"(hand-written: {b['prompt_ref']})", [att], ((False,), att), meta)
        return doc

    def dry(self, name, kind, anchors, prompt, meta) -> dict:
        OUT.mkdir(parents=True, exist_ok=True)
        d = {"name": name, "kind": kind, "anchors": [str(a.relative_to(config.ROOT)) for a in anchors], "prompt": prompt,
             **{k: v for k, v in meta.items() if k not in ("state_before", "state_after_predicted", "explanation")}}
        print(f"\n=== {name} ({kind})\n{prompt}\n")
        return d


def reason(doc: dict) -> str:
    if doc["kind"] == "factual":
        return "control clip (never a training sample)"
    if doc["kind"] == "baseline":
        return "hand-prompted comparison (never a training sample)"
    if not doc.get("video"):
        errs = [a.get("error") or a.get("skipped") for a in doc["attempts"]]
        return "no clip produced: " + "; ".join(e for e in errs if e)
    if doc["accepted"]:
        return "both gates passed"
    out = []
    if not doc["fidelity"]["pass"]:
        out.append("fidelity failed: " + "; ".join(doc["fidelity"].get("issues", [])[:2]) if doc["fidelity"].get("issues")
                   else "fidelity failed" + (f" ({doc['fidelity']['error']})" if doc["fidelity"].get("error") else ""))
    c = doc["consistency"] or {}
    if c.get("errors"):
        out.append("eyes failed: " + "; ".join(c["errors"])[:200])
    bad = [k for k, v in (c.get("agreement") or {}).items() if not v]
    if bad:
        out.append("eyes disagree with the world model: " + ", ".join(bad))
    return "; ".join(out) or "rejected"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--patient", default="P2")
    ap.add_argument("--only", nargs="*", choices=["safe", "counterfactual", "factual", "robot", "baseline"])
    ap.add_argument("--max-renders", type=int, default=36, help="cap on video renders (attempts) in this run")
    ap.add_argument("--tries", type=int, default=3)
    ap.add_argument("--robot-steps", type=int, default=6)
    ap.add_argument("--robot-seconds", type=int, default=10, help="length of each robot step (Omni Flash: 3-10)")
    ap.add_argument("--robot-anchor", default="endo166:93")
    ap.add_argument("--force", action="store_true", help="re-render clips that already exist")
    ap.add_argument("--dry-run", action="store_true", help="anchors + compiled prompts only; no video calls")
    ap.add_argument("--ground-in-dry-run", action="store_true", help="also call Argon for the scene in a dry run")
    ap.add_argument("--no-atlas", action="store_true")
    a = ap.parse_args()
    kinds = a.only or ["safe", "counterfactual", "factual", "robot", "baseline"]
    run = Run(a)
    if run.store:
        run.db.ensure_indexes()
    print(f"run {run.run_id}  kinds={kinds}  max_renders={a.max_renders}  tries={a.tries}  atlas={run.store}")

    def todo(name):
        return a.force or a.dry_run or not (OUT / f"{name}.json").exists()

    out = []
    for clip, t in ANCHORS:
        for kind in ("safe", "counterfactual"):
            if kind in kinds and todo(f"{kind}_{clip}_{t}_{a.patient}"):
                out.append(run.branch(clip, t, kind, a.patient))
        if "factual" in kinds and todo(f"factual_{clip}_{t - FACTUAL_GAP}_{t}"):
            out.append(run.factual(clip, t))
    if "robot" in kinds:
        clip, t = a.robot_anchor.split(":")
        out += run.robot(clip, int(t), a.patient, a.robot_steps, a.robot_seconds)  # resumable per step
    if "baseline" in kinds:
        for b in BASELINE:
            if todo(b["name"]):
                out.append(run.baseline(b))
    if a.dry_run:
        (WORK / "dry_run.json").parent.mkdir(parents=True, exist_ok=True)
        (WORK / "dry_run.json").write_text(json.dumps(out, indent=1, default=str))
        print(f"dry run: {len(out)} jobs, prompts in {WORK / 'dry_run.json'}")
    else:
        print(f"done: {run.rendered} renders; accepted "
              f"{sum(1 for d in out if d and d.get('accepted'))}/{sum(1 for d in out if d and d['kind'] in ('safe', 'counterfactual', 'robot'))}")
    print(f"Gemini calls this run: {gemini.calls_made()}")


if __name__ == "__main__":
    main()
