/**
 * Merge Sort - Practice
 *
 * Implement merge sort to sort an array in ascending order.
 * Return a NEW sorted array (do not mutate input).
 *
 * Time Complexity: O(n log n) - guaranteed for all cases
 * Space Complexity: O(n) - requires auxiliary array for merging
 *
 * @see README.md for hints, approaches, and visual walkthroughs
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Merge Sort
 *
 * Hints:
 * - Divide array in half recursively
 * - Base case: array of length 0 or 1 is sorted
 * - Merge two sorted arrays into one
 */
export const mergeSort: SortFn = (arr) => {
  const n = arr.length
  if (n <= 1) return [...arr]
  const mid = Math.floor(n / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(arr1: number[], arr2: number[]): number[] {
  const n1 = arr1.length
  const n2 = arr2.length
  let idx1 = 0
  let idx2 = 0
  let idx = 0

  const mergedArr = new Array<number>(n1 + n2)

  while (idx1 < n1 && idx2 < n2) {
    if (arr1[idx1]! <= arr2[idx2]!) {
      mergedArr[idx++] = arr1[idx1++]!
    } else {
      mergedArr[idx++] = arr2[idx2++]!
    }
  }

  while (idx1 < n1) {
    mergedArr[idx++] = arr1[idx1++]!
  }

  while (idx2 < n2) {
    mergedArr[idx++] = arr2[idx2++]!
  }

  return mergedArr
}
