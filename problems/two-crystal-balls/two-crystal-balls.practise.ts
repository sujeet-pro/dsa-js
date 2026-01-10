/**
 * Two Crystal Balls
 *
 * Given two crystal balls that will break if dropped from a high enough distance,
 * determine the exact spot (index) where they will break in the most optimized way.
 *
 * @see README.md for full problem description, hints, and approaches
 */
export type TwoCrystalBallsFn = (breaks: boolean[]) => number

/**
 * Your solution here.
 *
 * Hints:
 * - See README.md for progressive hints
 * - Linear search is O(n), but we can do better with 2 balls
 * - Binary search seems good, but what happens when the first ball breaks?
 * - Think about: How can we balance the "jumping" phase and "searching" phase?
 *
 * Constraints:
 * - 1 <= breaks.length <= 10^6
 * - Array is monotonic: all false values come before all true values
 * - Return the index of the first true, or -1 if all false
 */
export const twoCrystalBalls: TwoCrystalBallsFn = (breaks) => {
  const jump = Math.floor(Math.sqrt(breaks.length))
  let lastJump = 0 - jump
  let nextJump = lastJump + jump // 0
  while (nextJump < breaks.length && breaks[nextJump] === false) {
    lastJump = nextJump
    nextJump += jump
  }
  // linear search
  for (let i = lastJump; i < breaks.length; i += 1) {
    if (breaks[i]) return i
  }
  return -1
}

export const twoCrystalBalls2: TwoCrystalBallsFn = (breaks) => {
  const jump = Math.floor(Math.sqrt(breaks.length))
  let lastNonBreakingIdx = 0
  for (let i = 0; i < breaks.length && breaks[i] === false; i += jump) {
    lastNonBreakingIdx = i
  }
  for (let i = lastNonBreakingIdx; i < breaks.length; i += 1) {
    if (breaks[i]) return i
  }
  return -1
}
