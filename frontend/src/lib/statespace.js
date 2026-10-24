// Deterministic mapping from a world-model state to a point in "state space", shared by every visual.
// x = surgical progress (0..1), y = risk band (0 safe, 1 bile duct at risk, 2 safety violation, 3 injury).

const STRUCTS = ["cystic_duct", "cystic_artery", "cystic_plate"];
const MAX_PROGRESS = 12;

export function progress(st) {
  if (!st) return 0;
  const s = st.structures;
  const dissection = STRUCTS.reduce((a, n) => a + Math.min(1, s[n].exposure), 0); // 0..3
  const cvs = Object.values(st.cvs).filter(Boolean).length; // 0..3
  const clips = Math.min(2, s.cystic_duct.clips) * 0.5 + Math.min(2, s.cystic_artery.clips) * 0.5; // 0..2
  const cuts = (s.cystic_duct.status === "cut") + (s.cystic_artery.status === "cut"); // 0..2
  const tail = Math.min(1, st.gb_detach || 0) + (st.packed ? 1 : 0); // 0..2
  return Math.min(1, (dissection + cvs + clips + cuts + tail) / MAX_PROGRESS);
}

export function riskBand(st) {
  if (!st) return 0;
  if (st.injury) return 3;
  if (st.violations?.length) return 2;
  if (st.structures.common_bile_duct?.at_risk) return 1;
  return 0;
}

export const BANDS = ["Safe", "Bile duct at risk", "Safety violation", "Bile duct injury"];

// Episode traces carry the rules' text summary of each state; parse it back (same template as rules.summary).
export function parseSummary(summary) {
  const kv = Object.fromEntries(summary.split("; ").map((p) => p.split("=")));
  const struct = (v = "unseen 0.0") => {
    const [status, exp, clipsPart] = v.split(" ");
    return { status, exposure: Number(exp) || 0, clips: clipsPart ? Number(clipsPart.split("=")[1]) || 0 : 0 };
  };
  const map = { gb: "gallbladder", duct: "cystic_duct", artery: "cystic_artery", plate: "cystic_plate" };
  const structures = {};
  for (const [k, name] of Object.entries(map)) {
    const raw = summary.split("; ").find((p) => p.startsWith(`${k}=`));
    structures[name] = struct(raw ? raw.slice(k.length + 1) : undefined);
  }
  structures.common_bile_duct = { status: "unseen", exposure: 0, clips: 0, at_risk: kv.cbd === "at_risk" };
  const n = Number((kv.cvs || "0/3").split("/")[0]);
  // The summary keeps only the CVS count; criteria are filled in order (good enough for placement and replay).
  return { phase: kv.phase, structures,
           cvs: { c1_triangle_cleared: n > 0, c2_plate_exposed: n > 1, c3_two_structures: n > 2 }, bleeding: kv.bleeding === "yes",
           violations: [], injury: false, gb_detach: 0, packed: false };
}
