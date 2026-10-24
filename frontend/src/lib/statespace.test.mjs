import assert from "node:assert/strict";
import { progress, riskBand, parseSummary } from "./statespace.js";

const blank = (over = {}) => ({
  structures: Object.fromEntries(["gallbladder", "cystic_duct", "cystic_artery", "cystic_plate", "common_bile_duct"]
    .map((n) => [n, { status: "unseen", exposure: 0, clips: 0, at_risk: false }])),
  cvs: { c1_triangle_cleared: false, c2_plate_exposed: false, c3_two_structures: false },
  violations: [], injury: false, gb_detach: 0, packed: false, ...over,
});

assert.equal(progress(blank()), 0);
const done = blank({ gb_detach: 1, packed: true, cvs: { a: true, b: true, c: true } });
for (const n of ["cystic_duct", "cystic_artery"]) Object.assign(done.structures[n], { exposure: 1, clips: 2, status: "cut" });
done.structures.cystic_plate.exposure = 1;
assert.equal(progress(done), 1);
assert.equal(riskBand(blank()), 0);
const atRisk = blank(); atRisk.structures.common_bile_duct.at_risk = true;
assert.equal(riskBand(atRisk), 1);
assert.equal(riskBand(blank({ violations: ["clip_before_cvs"] })), 2);
assert.equal(riskBand(blank({ injury: true, violations: ["cbd_injury"] })), 3);
const p = parseSummary("phase=x; gb=visible 0.0; duct=clipped 1.0 clips=2; artery=dissecting 0.5; plate=skeletonised 1.0; cvs=2/3; bleeding=no; cbd=at_risk");
assert.equal(p.structures.cystic_duct.clips, 2);
assert.equal(p.structures.cystic_artery.exposure, 0.5);
assert.equal(p.structures.common_bile_duct.at_risk, true);
assert.equal(Object.values(p.cvs).filter(Boolean).length, 2);
console.log("statespace tests passed");
