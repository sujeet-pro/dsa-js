/**
 * Merge Sort - Solution
 *
 * Approach: Divide and conquer with merging sorted halves
 *
 * Time Complexity: O(n log n) - guaranteed for all cases
 * Space Complexity: O(n) - requires auxiliary array for merging
 *
 * @see README.md for full explanation and visual walkthrough
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Merge Sort implementation.
 *
 * Key Insight:
 * Divide array in half, recursively sort each half, then merge
 * the sorted halves. Merging two sorted arrays is O(n).
 *
 * Guaranteed O(n log n):
 * Unlike Quick Sort, Merge Sort ALWAYS divides evenly, so it
 * never degrades to O(n²).
 *
 * Trade-off:
 * Requires O(n) auxiliary space for merging. This is why
 * Quick Sort is often preferred for in-memory sorting.
 *
 * Algorithm:
 * 1. Base case: arrays of length 0 or 1 are already sorted
 * 2. Divide: split array into two halves
 * 3. Conquer: recursively sort each half
 * 4. Combine: merge the two sorted halves
 */
export const mergeSort: SortFn = (arr) => {
  // ============================================================
  // STEP 1: Base case - already sorted
  // ============================================================
  // Arrays with 0 or 1 element are already sorted
  // This also handles the edge case of empty input
  if (arr.length <= 1) return [...arr]

  // ============================================================
  // STEP 2: Divide - split array in half
  // ============================================================
  // Use floor division to handle odd lengths
  // Example: [1,2,3,4,5] -> mid=2 -> [1,2] and [3,4,5]
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  // ============================================================
  // STEP 3: Conquer - recursively sort each half
  // ============================================================
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // ============================================================
  // STEP 4: Combine - merge sorted halves
  // ============================================================
  return merge(sortedLeft, sortedRight)
}

/**
 * Merge two sorted arrays into one sorted array.
 *
 * Time: O(n + m) where n and m are the lengths of the arrays
 * Space: O(n + m) for the result array
 *
 * @param left - First sorted array
 * @param right - Second sorted array
 * @returns Merged sorted array
 */
const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = []
  let i = 0 // Pointer for left array
  let j = 0 // Pointer for right array

  // ----------------------------------------------------------
  // Compare elements from both arrays and take the smaller one
  // ----------------------------------------------------------
  // Continue until one array is exhausted
  while (i < left.length && j < right.length) {
    // Use <= for stability (equal elements from left come first)
    if (left[i]! <= right[j]!) {
      result.push(left[i]!)
      i++
    } else {
      result.push(right[j]!)
      j++
    }
  }

  // ----------------------------------------------------------
  // Add remaining elements from left array (if any)
  // ----------------------------------------------------------
  while (i < left.length) {
    result.push(left[i]!)
    i++
  }

  // ----------------------------------------------------------
  // Add remaining elements from right array (if any)
  // ----------------------------------------------------------
  while (j < right.length) {
    result.push(right[j]!)
    j++
  }

  return result
}
