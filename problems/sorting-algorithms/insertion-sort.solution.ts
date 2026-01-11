/**
 * Insertion Sort - Solution
 *
 * Approach: Build sorted array one element at a time
 *
 * Time Complexity: O(n²) average/worst, O(n) best (nearly sorted)
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for full explanation and visual walkthrough
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Insertion Sort implementation.
 *
 * Key Insight:
 * Build the sorted array one element at a time by inserting each
 * new element into its correct position among the already-sorted elements.
 *
 * Best case: O(n) for nearly sorted arrays (each element moves little)
 *
 * Why it's used in practice:
 * - Excellent for small arrays (low overhead)
 * - Great for nearly sorted data
 * - Used as base case in hybrid sorts (Timsort, Introsort)
 *
 * Algorithm:
 * 1. Start with second element (first is trivially sorted)
 * 2. Compare with elements to the left
 * 3. Shift larger elements right to make room
 * 4. Insert element in correct position
 * 5. Repeat for all elements
 */
export const insertionSort: SortFn = (arr) => {
  const n = arr.length

  // ============================================================
  // STEP 1: Handle edge cases
  // ============================================================
  if (n <= 1) return arr

  // ============================================================
  // STEP 2: Iterate from second element to end
  // ============================================================
  // Elements before index i are already sorted
  // We insert element at index i into its correct position
  for (let i = 1; i < n; i++) {
    // Save the current element we're inserting
    const key = arr[i]!

    // ----------------------------------------------------------
    // Shift elements right to make room for key
    // ----------------------------------------------------------
    // Start from the element just before current position
    let j = i - 1

    // While we haven't reached the start AND the element is greater than key
    // shift it right to make room
    while (j >= 0 && arr[j]! > key) {
      arr[j + 1] = arr[j]!
      j--
    }

    // ----------------------------------------------------------
    // Insert key in its correct position
    // ----------------------------------------------------------
    // j + 1 is the correct position because:
    // - We stopped when arr[j] <= key (or j < 0)
    // - So key should go right after position j
    arr[j + 1] = key
  }

  return arr
}
