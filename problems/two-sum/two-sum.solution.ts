/**
 * Two Sum - Optimal Solution
 *
 * Approach: One-Pass Hash Map
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - hash map stores at most n elements
 *
 * @see README.md for alternative approaches and full explanation
 */
export type TwoSumFn = (nums: number[], target: number) => [number, number]

/**
 * Optimal solution using one-pass hash map.
 *
 * Key Insight:
 * For each number, we need to find if its complement (target - num) exists.
 * Instead of searching the array each time O(n), we use a hash map for O(1) lookup.
 * We build the map while searching - when we find a number, its complement
 * (if it's part of the answer) is already in the map from a previous iteration.
 *
 * Why One-Pass Works:
 * - If [i, j] is the answer where i < j, when we reach index j, index i is already in the map
 * - We check BEFORE adding, so we can never match an element with itself
 * - This naturally handles duplicates like [3, 3] with target 6
 *
 * Algorithm:
 * 1. Create a map to store {value → index}
 * 2. For each number, check if complement exists in map
 * 3. If found, return both indices; otherwise, add current number to map
 */
export const twoSum: TwoSumFn = (nums, target) => {
  // ============================================================
  // SETUP: Create hash map for O(1) complement lookup
  // ============================================================
  // Why Map instead of Object?
  // - Map allows any value as key (including negative numbers without string coercion)
  // - Map has O(1) guaranteed lookup (Object can degrade in edge cases)
  // - Map preserves insertion order (not needed here, but good practice)
  const numToIndex = new Map<number, number>()

  // ============================================================
  // MAIN LOOP: Iterate through array once
  // ============================================================
  for (let i = 0; i < nums.length; i++) {
    // ------------------------------------------------------------
    // Get current number with type safety
    // ------------------------------------------------------------
    // Why the non-null assertion (!) ?
    // - TypeScript's noUncheckedIndexedAccess makes nums[i] possibly undefined
    // - We know i is always valid since we're iterating within bounds
    // - Alternative: use `for...of` with entries, but index tracking is cleaner here
    const currentNum = nums[i]!

    // ------------------------------------------------------------
    // Calculate the complement we need to find
    // ------------------------------------------------------------
    // Example: If target = 9 and currentNum = 7, we need to find 2
    // If 2 exists in our map, we've found our pair!
    const complement = target - currentNum

    // ------------------------------------------------------------
    // Check if complement was seen in a PREVIOUS iteration
    // ------------------------------------------------------------
    // IMPORTANT: We check BEFORE adding currentNum to the map
    // This ensures two things:
    // 1. We never match an element with itself (problem requirement)
    // 2. If duplicates form the answer [3,3] target=6, first 3 is in map when we see second
    const complementIndex = numToIndex.get(complement)

    if (complementIndex !== undefined) {
      // --------------------------------------------------------
      // FOUND! Return indices in order [earlier, current]
      // --------------------------------------------------------
      // complementIndex is always < i because:
      // - We only find complements that were added in previous iterations
      // - This guarantees we return [smaller_index, larger_index]
      //
      // Note: Problem says "return in any order" but returning sorted is cleaner
      return [complementIndex, i]
    }

    // ------------------------------------------------------------
    // Not found yet - add current number to map for future lookups
    // ------------------------------------------------------------
    // Key insight: We're building the map as we go
    // - If this number is part of the answer, a future number will find it
    // - If duplicate values exist, later index overwrites earlier
    //   This is fine because:
    //   - If duplicates form the answer, we catch it when checking (before adding)
    //   - If not, we only need one index per value for the answer
    numToIndex.set(currentNum, i)
  }

  // ============================================================
  // ERROR CASE: No solution found
  // ============================================================
  // The problem guarantees exactly one solution exists
  // This throw is for:
  // 1. Type safety - function must return or throw
  // 2. Defensive programming - catches bugs in test cases
  // 3. Runtime safety - fails loudly if assumption is violated
  throw new Error('No solution found')
}
