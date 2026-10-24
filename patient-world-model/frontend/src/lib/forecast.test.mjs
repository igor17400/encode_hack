// node frontend/src/lib/forecast.test.mjs
import assert from "node:assert/strict";
import { overlayState, runningScore, isRevealed, REVEAL_HOLD_S } from "./forecast.js";

const f = (t, truthT, rank, inClip = true) => ({
  t, truth: { next_action: "a,b,c", t: truthT, in_clip: inClip },
  scores: { world_model: { rank }, trained: { rank: 1 }, bigram: { rank: null } },
});
const fs = [f(300, 426, 1), f(426, 427, null), f(427, 450, 2), f(560, 571, 1, false)];

// before the first reveal: forecast of the action in progress, never the truth
let s = overlayState(fs, 400);
assert.equal(s.mode, "forecast"); assert.equal(s.f.t, 300); assert.equal(s.locked, false);
assert.equal(overlayState(fs, 425).locked, true);
// the truth appears exactly when the video reaches it, and only then
assert.equal(isRevealed(fs[0], 425.9), false);
s = overlayState(fs, 426);
assert.equal(s.mode, "reveal"); assert.equal(s.f.t, 300);
// a reveal stays up for REVEAL_HOLD_S, then the next forecast shows (427's own reveal is at 450)
s = overlayState(fs, 427 + REVEAL_HOLD_S + 0.1);
assert.equal(s.mode, "forecast"); assert.equal(s.f.t, 427);
// the last forecast happens after the clip: revealed only when the clip ends
assert.equal(overlayState(fs, 561).f.t, 560); assert.equal(overlayState(fs, 561).mode, "forecast");
assert.equal(overlayState(fs, 561, { ended: true }).mode, "reveal");
// running score counts only what has been revealed
assert.deepEqual(runningScore(fs, 430).world_model, { top1: 1, top3: 1 });
assert.equal(runningScore(fs, 430).n, 2);
assert.equal(runningScore(fs, 561, true).n, 4);
assert.equal(overlayState(fs, 100).mode, "idle");
console.log("forecast.js ok");
