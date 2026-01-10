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
export const twoCrystalBalls: TwoCrystalBallsFn = (_breaks) => {
  // TODO: Implement your solution
  throw new Error('Not implemented')
}
