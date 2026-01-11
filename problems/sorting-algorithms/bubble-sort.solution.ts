/**
 * Bubble Sort - Solution
 *
 * Approach: Compare and swap adjacent elements
 *
 * Time Complexity: O(n²) average/worst, O(n) best (already sorted with optimization)
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for full explanation and visual walkthrough
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Bubble Sort implementation.
 *
 * Key Insight:
 * Adjacent elements are compared and swapped if in wrong order.
 * After each pass, the largest unsorted element "bubbles up" to its
 * final position at the end.
 *
 * Optimization:
 * If no swaps occur in a pass, array is sorted - exit early.
 * This gives O(n) best case for already sorted arrays.
 *
 * Algorithm:
 * 1. Iterate through array n-1 times (outer loop)
 * 2. Compare adjacent elements, swap if out of order
 * 3. After each pass, one more element is in final position
 * 4. Exit early if no swaps occurred (optimization)
 */
export const bubbleSort: SortFn = (arr) => {
  const n = arr.length

  // ============================================================
  // STEP 1: Handle edge cases
  // ============================================================
  // Arrays with 0 or 1 element are already sorted
  if (n <= 1) return arr

  // ============================================================
  // STEP 2: Outer loop - number of passes
  // ============================================================
  // Why n-1 passes? After n-1 elements are in place, the last one
  // is automatically in the correct position
  for (let i = 0; i < n - 1; i++) {
    // Track if any swaps occurred in this pass
    // If no swaps, array is sorted - we can exit early
    let swapped = false

    // ----------------------------------------------------------
    // Inner loop - compare adjacent elements
    // ----------------------------------------------------------
    // Why n - 1 - i? After i passes, the last i elements are
    // already sorted, so we don't need to compare them
    for (let j = 0; j < n - 1 - i; j++) {
      // Get current and next elements with type safety
      const current = arr[j]!
      const next = arr[j + 1]!

      // Swap if current > next (ascending order)
      if (current > next) {
        arr[j] = next
        arr[j + 1] = current
        swapped = true
      }
    }

    // ----------------------------------------------------------
    // Optimization: Early termination
    // ----------------------------------------------------------
    // If no swaps occurred, array is already sorted
    // This gives O(n) best case for sorted arrays
    if (!swapped) break
  }

  return arr
}
