/**
 * Quick Sort - Practice
 *
 * Implement quick sort to sort an array in ascending order.
 * Return a NEW sorted array (do not mutate input).
 *
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) - recursion stack
 *
 * @see README.md for hints, approaches, and visual walkthroughs
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Quick Sort
 *
 * Hints:
 * - Choose a pivot element
 * - Partition: elements < pivot go left, > pivot go right
 * - Recursively sort partitions
 * - Use median-of-three for better pivot selection
 */
export const quickSort: SortFn = (_arr) => {
  // TODO: Implement quick sort
  throw new Error('Not implemented')
}
