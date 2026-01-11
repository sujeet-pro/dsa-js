/**
 * Selection Sort - Solution
 *
 * Approach: Find minimum and place at beginning
 *
 * Time Complexity: O(n²) for all cases
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for full explanation and visual walkthrough
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Selection Sort implementation.
 *
 * Key Insight:
 * Find the minimum element in the unsorted portion and place it
 * at the beginning of the unsorted portion. Repeat until sorted.
 *
 * Advantage over Bubble Sort:
 * Makes at most n swaps (vs potentially n² for Bubble Sort).
 * Good when memory writes are expensive.
 *
 * Algorithm:
 * 1. Find the minimum element in unsorted portion
 * 2. Swap it with the first element of unsorted portion
 * 3. Move boundary between sorted/unsorted one position right
 * 4. Repeat until entire array is sorted
 */
export const selectionSort: SortFn = (arr) => {
  const n = arr.length

  // ============================================================
  // STEP 1: Handle edge cases
  // ============================================================
  if (n <= 1) return arr

  // ============================================================
  // STEP 2: Outer loop - position to fill
  // ============================================================
  // i represents the current position we're filling with the
  // minimum element from the remaining unsorted portion
  for (let i = 0; i < n - 1; i++) {
    // ----------------------------------------------------------
    // Find the minimum element in unsorted portion [i, n-1]
    // ----------------------------------------------------------
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      if (arr[j]! < arr[minIndex]!) {
        minIndex = j
      }
    }

    // ----------------------------------------------------------
    // Swap minimum with first unsorted element
    // ----------------------------------------------------------
    // Only swap if minimum is not already in position
    // This avoids unnecessary swaps
    if (minIndex !== i) {
      const temp = arr[i]!
      arr[i] = arr[minIndex]!
      arr[minIndex] = temp
    }
  }

  return arr
}
