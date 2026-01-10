/**
 * Two Crystal Balls - Optimal Solution
 *
 * Approach: Square Root Decomposition (√n Jumping)
 *
 * Time Complexity: O(√n) - at most √n jumps + √n linear searches
 * Space Complexity: O(1) - only using a few variables
 *
 * @see README.md for alternative approaches and full explanation
 */
export type TwoCrystalBallsFn = (breaks: boolean[]) => number

/**
 * Optimal solution using square root decomposition.
 *
 * Key Insight:
 * With 2 crystal balls, we want to minimize the worst-case number of drops.
 * If we jump by k floors with the first ball and it breaks, we must linear
 * search at most k floors with the second ball.
 *
 * Total operations = n/k (jumps) + k (linear search)
 * To minimize n/k + k, we take the derivative and set to 0:
 *   d/dk(n/k + k) = -n/k² + 1 = 0
 *   k² = n
 *   k = √n
 *
 * Why not Binary Search?
 * Binary search would give O(log n) to find the range, but when the first
 * ball breaks at the midpoint, we're left with one ball and must linear
 * search half the array - making it O(n) worst case.
 *
 * Algorithm:
 * 1. Calculate jump amount as √n
 * 2. Phase 1: Jump by √n floors until the first ball breaks
 * 3. Phase 2: Go back √n floors and linear search until second ball breaks
 * 4. Return the index where it breaks, or -1 if it never breaks
 */
export const twoCrystalBalls: TwoCrystalBallsFn = (breaks) => {
  // ============================================================
  // EDGE CASE: Handle empty array
  // ============================================================
  // Why check this?
  // - Math.sqrt(0) = 0, which would cause an infinite loop
  // - An empty building has no floors to test
  if (breaks.length === 0) {
    return -1
  }

  // ============================================================
  // SETUP: Calculate the optimal jump amount
  // ============================================================
  // Why floor instead of ceil?
  // - Using ceil could overshoot in edge cases
  // - floor ensures we stay within bounds
  // - The math still works: √n jumps + √n linear = O(√n)
  //
  // Example: n = 100 → jumpAmount = 10
  // Example: n = 10  → jumpAmount = 3
  const jumpAmount = Math.floor(Math.sqrt(breaks.length))

  // ============================================================
  // EDGE CASE: Very small arrays
  // ============================================================
  // When n is 0, jumpAmount would be 0, causing infinite loop
  // This is already handled by the empty array check above
  // But for n=1,2,3, jumpAmount=1, which works correctly

  // ============================================================
  // PHASE 1: Jump by √n floors using the first crystal ball
  // ============================================================
  // Why start at jumpAmount instead of 0?
  // - We're checking if the ball breaks AT this floor
  // - If we start at 0, we'd be doing linear search
  // - Starting at jumpAmount lets us skip √n floors each iteration
  //
  // Example: n=100, jumpAmount=10
  //   Check floors: 10, 20, 30, 40, ... until break or end
  let i = jumpAmount

  for (; i < breaks.length; i += jumpAmount) {
    // ------------------------------------------------------------
    // Check if ball breaks at current floor
    // ------------------------------------------------------------
    // If true: Ball broke! We know the breaking point is between
    //          (i - jumpAmount) and i (exclusive of endpoints we checked)
    // If false: Ball didn't break, continue jumping
    if (breaks[i]) {
      break
    }
  }

  // ============================================================
  // PHASE 2 SETUP: Go back to last known safe position
  // ============================================================
  // Why go back by jumpAmount?
  // - If ball broke at i, the breaking point is in [i - jumpAmount + 1, i]
  // - If ball didn't break (i >= length), we need to check remaining floors
  //
  // After this: i points to the last position we KNOW is safe
  // (either the previous jump point, or 0 if first jump broke)
  i -= jumpAmount

  // ============================================================
  // PHASE 2: Linear search using the second crystal ball
  // ============================================================
  // Why use j counter?
  // - We only need to search at most jumpAmount floors
  // - This ensures we don't go past where we already checked
  //
  // Why check i < breaks.length?
  // - In case we're near the end of the array
  // - Prevents out-of-bounds access
  //
  // Example: If first ball broke at floor 30, we search 21, 22, 23, ... 30
  for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
    // ------------------------------------------------------------
    // Check each floor sequentially
    // ------------------------------------------------------------
    // First true we find is the breaking point
    if (breaks[i]) {
      return i
    }
  }

  // ============================================================
  // NOT FOUND: Ball never breaks
  // ============================================================
  // If we've searched through the entire array and found no true,
  // the ball doesn't break at any floor
  return -1
}
