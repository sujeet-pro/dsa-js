/**
 * Heap Sort - Practice
 *
 * Implement heap sort to sort an array in ascending order.
 * This is an IN-PLACE algorithm - modify the input array directly.
 *
 * Time Complexity: O(n log n) - guaranteed for all cases
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for hints, approaches, and visual walkthroughs
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Heap Sort
 *
 * Hints:
 * - Build a max-heap from the array
 * - Parent at i has children at 2i+1 and 2i+2
 * - Repeatedly extract max (swap root with end, heapify)
 */
export const heapSort: SortFn = (arr) => {
  // TODO: Implement heap sort
  throw new Error('Not implemented')
  return arr
}
