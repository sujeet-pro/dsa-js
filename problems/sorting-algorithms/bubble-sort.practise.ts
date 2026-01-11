/**
 * Bubble Sort - Practice
 *
 * Implement bubble sort to sort an array in ascending order.
 * This is an IN-PLACE algorithm - modify the input array directly.
 *
 * Time Complexity: O(n²) average/worst, O(n) best (already sorted)
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for hints, approaches, and visual walkthroughs
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Bubble Sort
 *
 * Hints:
 * - Compare adjacent elements, swap if out of order
 * - After each pass, largest element "bubbles" to the end
 * - Optimize: exit early if no swaps occur in a pass
 */
export const bubbleSort: SortFn = (arr) => {
  const n = arr.length
  if (n <= 1) return arr

  // we need n-1 passes for n elements [1...n)
  for (let passes = 1; passes < n; passes += 1) {
    let swapped = false
    for (let j = 0; j < n - passes; j += 1) {
      const prev = arr[j]!
      const curr = arr[j + 1]!
      if (prev > curr) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }

  return arr
}

function swap(arr: unknown[], idx1: number, idx2: number) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

export const bubbleSort2: SortFn = (arr) => {
  const n = arr.length
  if (n <= 1) return arr
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j]! > arr[j + 1]!) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}
