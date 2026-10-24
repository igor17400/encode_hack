// Forecast -> reality timing for the Watch overlay. Pure functions of the recorded forecasts and the video time,
// so the truth can never be shown before the video reaches it.

export const REVEAL_HOLD_S = 4; // how long the "what actually happened" card stays up
export const LOCK_BEFORE_S = 1.5; // pause-before-reveal starts this long before the real next action

// The truth time of a forecast, or null when it happens after the clip ends (then it is revealed at the end).
export const revealAt = (f) => (f.truth?.in_clip ? f.truth.t : null);

// What the overlay shows at video time t (seconds in operation time).
// -> { mode: "reveal", f } while a truth was revealed in the last REVEAL_HOLD_S seconds
// -> { mode: "forecast", f, locked } for the action now happening (locked = within LOCK_BEFORE_S of its reveal)
// -> { mode: "idle" } before the first forecast
export function overlayState(forecasts, t, { ended = false } = {}) {
  if (!forecasts?.length || t == null) return { mode: "idle" };
  const revealed = forecasts.filter((f) => isRevealed(f, t, ended));
  const recent = [...revealed].reverse().find((f) => {
    const at = revealAt(f);
    return at != null ? t - at < REVEAL_HOLD_S : ended;
  });
  if (recent) return { mode: "reveal", f: recent };
  const current = [...forecasts].reverse().find((f) => f.t <= t && !isRevealed(f, t, ended));
  if (!current) return { mode: "idle" };
  const at = revealAt(current);
  return { mode: "forecast", f: current, locked: at != null && at - t <= LOCK_BEFORE_S, secondsLeft: at != null ? Math.max(0, at - t) : null };
}

export function isRevealed(f, t, ended = false) {
  const at = revealAt(f);
  return at != null ? t >= at : ended;
}

// Running score over the forecasts revealed so far.
export function runningScore(forecasts, t, ended = false) {
  const done = (forecasts || []).filter((f) => isRevealed(f, t, ended) && f.truth?.next_action);
  const s = (who) => ({ top1: done.filter((f) => f.scores[who].rank === 1).length, top3: done.filter((f) => f.scores[who].rank != null).length });
  return { n: done.length, world_model: s("world_model"), trained: s("trained"), bigram: s("bigram") };
}

export const verdict = (rank) => (rank === 1 ? "hit" : rank != null ? "top3" : "miss");
