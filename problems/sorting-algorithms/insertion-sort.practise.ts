/**
 * Insertion Sort - Practice
 *
 * Implement insertion sort to sort an array in ascending order.
 * This is an IN-PLACE algorithm - modify the input array directly.
 *
 * Time Complexity: O(n²) average/worst, O(n) best (nearly sorted)
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for hints, approaches, and visual walkthroughs
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Insertion Sort
 *
 * Hints:
 * - Build sorted array one element at a time
 * - Insert each element into its correct position
 * - Shift larger elements right to make room
 */
export const insertionSort: SortFn = (arr) => {
  const n = arr.length
  if (n <= 1) return arr

  for (let i = 1; i < n; i += 1) {
    const k = arr[i]!
    let j = i - 1
    while (j >= 0 && arr[j]! > k) {
      arr[j + 1] = arr[j]!
      j -= 1
    }
    arr[j + 1] = k
  }

  return arr
}
