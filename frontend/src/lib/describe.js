// Plain-language wording for dataset actions ("hook,dissect,cystic_duct") and patient states. Templates only:
// every phrase is built from the CholecT50 vocabulary, nothing is written per clip.

const TARGET = {
  cystic_duct: "cystic duct", cystic_artery: "cystic artery", cystic_plate: "cystic plate", gallbladder: "gallbladder",
  liver: "liver", adhesion: "adhesions", specimen_bag: "specimen bag", abdominal_wall_cavity: "abdominal wall",
  omentum: "omentum", fluid: "fluid", peritoneum: "peritoneum", gut: "bowel", blood_vessel: "small vessel",
  cystic_pedicle: "cystic pedicle", null_target: "",
};
const SHORT_TARGET = { cystic_duct: "duct", cystic_artery: "artery", cystic_plate: "cystic plate" };
const INSTRUMENT = {
  hook: "the electric hook", grasper: "a grasper", clipper: "the clip applier", scissors: "scissors",
  bipolar: "bipolar forceps", irrigator: "the suction tube",
};
const HOLD_BACK = new Set(["liver", "omentum", "gut", "peritoneum"]);
// [doing, do] for each verb; {t} = target.
const VERB = {
  dissect: ["Freeing the {t}", "Free the {t}"],
  retract: ["Lifting the {t}", "Lift the {t}"],
  grasp: ["Grasping the {t}", "Grasp the {t}"],
  clip: ["Clipping the {t}", "Clip the {t}"],
  cut: ["Cutting the {t}", "Cut the {t}"],
  coagulate: ["Sealing bleeding on the {t}", "Seal bleeding on the {t}"],
  aspirate: ["Suctioning the {t}", "Suction the {t}"],
  irrigate: ["Rinsing the {t}", "Rinse the {t}"],
  pack: ["Putting the gallbladder in the {t}", "Bag the gallbladder"],
  null_verb: ["Holding the {i} still", "Hold the {i} still"],
};

const split = (a) => (typeof a === "string" ? a.split(",") : [a.instrument, a.verb, a.target]);

function phrase(a, which, short) {
  const [i, v, t] = split(a);
  let [doing, doIt] = VERB[v] || [`${v} the {t}`, `${v} the {t}`];
  if (v === "retract" && HOLD_BACK.has(t)) [doing, doIt] = ["Holding back the {t}", "Hold back the {t}"];
  const tgt = (short && SHORT_TARGET[t]) || TARGET[t] || t.replaceAll("_", " ");
  return (which === 0 ? doing : doIt).replace("{t}", tgt).replace("{i}", i).replace(/ the $/, "");
}

// "Freeing the cystic duct" (+ " with the electric hook" when withTool)
export function actionSentence(a, withTool = false) {
  if (!a) return "";
  const [i, v] = split(a);
  const s = phrase(a, 0, false);
  return withTool && v !== "null_verb" ? `${s} with ${INSTRUMENT[i] || i}` : s;
}

// "Free the duct": for lists of forecasts
export const actionShort = (a) => (a ? phrase(a, 1, true) : "");

// Past tense for reveals: "lifted the gallbladder"
export function actionPast(a) {
  const s = phrase(a, 1, false);
  const [first, ...rest] = s.split(" ");
  const past = { Free: "freed", Lift: "lifted", Grasp: "grasped", Clip: "clipped", Cut: "cut", Seal: "sealed", Suction: "suctioned",
    Rinse: "rinsed", Bag: "bagged", Hold: "held" }[first] || first.toLowerCase();
  return [past, ...rest].join(" ");
}

const STATUS = (x) => ({
  unseen: "not seen yet", visible: "visible, not yet freed",
  dissecting: `being freed (${Math.round((x.exposure || 0) * 100)}%)`, skeletonised: "freed (fat cleared)",
  clipped: `clipped (${x.clips} clip${x.clips === 1 ? "" : "s"})`, cut: "cut",
}[x.status] || x.status);
const NAME = { cystic_duct: "Cystic duct", cystic_artery: "Cystic artery", cystic_plate: "Cystic plate", gallbladder: "Gallbladder" };

export const cvsCount = (s) => Object.values(s?.cvs || {}).filter(Boolean).length;

// The patient as a short checklist: [{label, text, tone}]
export function stateLines(s) {
  if (!s) return [];
  const out = ["cystic_duct", "cystic_artery", "cystic_plate"].map((n) => {
    const x = s.structures[n];
    return { label: NAME[n], text: STATUS(x), tone: x.status === "cut" || x.status === "clipped" || x.status === "skeletonised" ? "done" : "plain" };
  });
  const c = cvsCount(s);
  out.push({ label: "Critical view of safety", text: c === 3 ? "3 of 3 · safe to clip" : `${c} of 3 · not safe to clip yet`, tone: c === 3 ? "good" : "warn" });
  if (s.structures.common_bile_duct?.at_risk || s.injury) out.push({ label: "Common bile duct", text: s.injury ? "injured" : "hidden, at risk", tone: "bad" });
  if (s.bleeding) out.push({ label: "Bleeding", text: "yes", tone: "bad" });
  return out;
}

// What an action changed, in words.
export function changeLines(prev, cur) {
  if (!prev || !cur) return [];
  const out = [];
  for (const n of ["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate"]) {
    const a = prev.structures[n], b = cur.structures[n];
    if (a.status !== b.status || a.clips !== b.clips) out.push(`${NAME[n]} becomes ${STATUS(b)}`);
  }
  const ca = cvsCount(prev), cb = cvsCount(cur);
  if (ca !== cb) out.push(`Critical view goes from ${ca} to ${cb} of 3${cb === 3 ? " (safe to clip)" : ""}`);
  if (!prev.structures.common_bile_duct?.at_risk && cur.structures.common_bile_duct?.at_risk) out.push("Common bile duct now at risk");
  if (!prev.bleeding && cur.bleeding) out.push("Bleeding starts");
  return out;
}
