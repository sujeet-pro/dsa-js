/**
 * Selection Sort - Practice
 *
 * Implement selection sort to sort an array in ascending order.
 * This is an IN-PLACE algorithm - modify the input array directly.
 *
 * Time Complexity: O(n²) for all cases
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for hints, approaches, and visual walkthroughs
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Selection Sort
 *
 * Hints:
 * - Find minimum element in unsorted portion
 * - Swap it with first unsorted element
 * - Repeat until sorted
 */
export const selectionSort: SortFn = (arr) => {
  const n = arr.length
  if (n <= 1) return arr

  for (let i = 0; i < n - 1; i += 1) {
    // Find min item
    let minIdx = i
    for (let j = i + 1; j < n; j += 1) {
      if (arr[j]! < arr[minIdx]!) {
        minIdx = j
      }
    }
    // Swap to fill in at the beginning
    if (minIdx !== i) {
      const temp = arr[i]!
      arr[i] = arr[minIdx]!
      arr[minIdx] = temp
    }
  }

  return arr
}
