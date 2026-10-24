// node frontend/src/lib/describe.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { actionSentence, actionShort, actionPast, stateLines, changeLines } from "./describe.js";

assert.equal(actionSentence("hook,dissect,cystic_duct", true), "Freeing the cystic duct with the electric hook");
assert.equal(actionShort("grasper,retract,gallbladder"), "Lift the gallbladder");
assert.equal(actionShort("grasper,retract,liver"), "Hold back the liver");
assert.equal(actionShort("clipper,clip,cystic_artery"), "Clip the artery");
assert.equal(actionPast("grasper,retract,gallbladder"), "lifted the gallbladder");
assert.equal(actionPast("scissors,cut,cystic_duct"), "cut the cystic duct");

// every real triplet gets a phrase with no raw vocabulary codes left in it
const vocab = JSON.parse(readFileSync(new URL("../../../data/vocab.json", import.meta.url)));
for (const t of vocab.triplets) {
  for (const s of [actionSentence(t, true), actionShort(t), actionPast(t)]) {
    assert.ok(s && !/_|,|null|\{/.test(s), `unclear phrase for ${t}: "${s}"`);
  }
}

const st = (over = {}) => ({
  structures: Object.fromEntries(["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate", "common_bile_duct"]
    .map((n) => [n, { status: "unseen", exposure: 0, clips: 0, at_risk: false }])),
  cvs: { c1_triangle_cleared: false, c2_plate_exposed: false, c3_two_structures: false }, bleeding: false, injury: false, ...over,
});
const a = st();
assert.deepEqual(stateLines(a).map((l) => l.text), ["not seen yet", "not seen yet", "not seen yet", "0 of 3 · not safe to clip yet"]);
const b = st({ cvs: { c1_triangle_cleared: true, c2_plate_exposed: true, c3_two_structures: true } });
b.structures.cystic_duct = { status: "clipped", exposure: 1, clips: 2, at_risk: false };
assert.deepEqual(changeLines(a, b), ["Cystic duct becomes clipped (2 clips)", "Critical view goes from 0 to 3 of 3 (safe to clip)"]);
assert.ok(stateLines(b).some((l) => l.text === "3 of 3 · safe to clip"));
console.log("describe.js ok");
