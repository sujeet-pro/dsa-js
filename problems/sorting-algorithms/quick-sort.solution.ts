/**
 * Quick Sort - Solution
 *
 * Approach: Divide and conquer with partitioning around a pivot
 *
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) - recursion stack
 *
 * @see README.md for full explanation and visual walkthrough
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Quick Sort implementation.
 *
 * Key Insight:
 * Choose a pivot element, partition the array so elements less than
 * pivot are on the left and elements greater are on the right.
 * The pivot is now in its final position. Recursively sort partitions.
 *
 * Average vs Worst Case:
 * - Average: O(n log n) when pivot divides array roughly in half
 * - Worst: O(n²) when pivot is always min or max (sorted arrays!)
 *
 * Pivot Selection:
 * We use median-of-three (first, middle, last) to reduce worst case
 * probability while keeping the algorithm simple.
 *
 * Algorithm:
 * 1. Base case: arrays of length 0 or 1 are sorted
 * 2. Choose pivot using median-of-three
 * 3. Partition array around pivot
 * 4. Recursively sort elements less than pivot
 * 5. Recursively sort elements greater than pivot
 * 6. Combine: left + [pivot] + right
 */
export const quickSort: SortFn = (arr) => {
  // ============================================================
  // STEP 1: Base case - already sorted
  // ============================================================
  if (arr.length <= 1) return [...arr]

  // ============================================================
  // STEP 2: Choose pivot using median-of-three
  // ============================================================
  // Why median-of-three? It provides a good pivot for most inputs
  // while being simple to implement. Avoids worst case for sorted arrays.
  const first = arr[0]!
  const middle = arr[Math.floor(arr.length / 2)]!
  const last = arr[arr.length - 1]!

  // Find median of three values
  let pivot: number
  if ((first <= middle && middle <= last) || (last <= middle && middle <= first)) {
    pivot = middle
  } else if ((middle <= first && first <= last) || (last <= first && first <= middle)) {
    pivot = first
  } else {
    pivot = last
  }

  // ============================================================
  // STEP 3: Partition array around pivot
  // ============================================================
  // Three-way partition to handle duplicates efficiently
  const less: number[] = []
  const equal: number[] = []
  const greater: number[] = []

  for (const num of arr) {
    if (num < pivot) {
      less.push(num)
    } else if (num > pivot) {
      greater.push(num)
    } else {
      equal.push(num)
    }
  }

  // ============================================================
  // STEP 4: Recursively sort partitions and combine
  // ============================================================
  // Note: equal array doesn't need sorting (all same value)
  return [...quickSort(less), ...equal, ...quickSort(greater)]
}
