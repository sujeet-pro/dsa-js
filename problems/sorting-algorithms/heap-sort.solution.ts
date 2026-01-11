/**
 * Heap Sort - Solution
 *
 * Approach: Use a max-heap data structure to sort
 *
 * Time Complexity: O(n log n) - guaranteed for all cases
 * Space Complexity: O(1) - in-place sorting
 *
 * @see README.md for full explanation and visual walkthrough
 */

export type SortFn = (arr: number[]) => number[]

/**
 * Heap Sort implementation.
 *
 * Key Insight:
 * Use a max-heap to efficiently find and extract the maximum element.
 * A max-heap is a complete binary tree where each parent >= children.
 *
 * Why O(1) space?
 * The heap is built in-place using the array. Parent-child relationships
 * are calculated using indices:
 * - Parent of i: floor((i-1)/2)
 * - Left child of i: 2i + 1
 * - Right child of i: 2i + 2
 *
 * Algorithm:
 * 1. Build max-heap from array (heapify all non-leaf nodes)
 * 2. Extract max (root) by swapping with last element
 * 3. Reduce heap size and restore heap property (heapify root)
 * 4. Repeat until heap is empty
 */
export const heapSort: SortFn = (arr) => {
  const n = arr.length

  // ============================================================
  // STEP 1: Handle edge cases
  // ============================================================
  if (n <= 1) return arr

  // ============================================================
  // STEP 2: Build max-heap
  // ============================================================
  // Start from last non-leaf node and heapify each
  // Last non-leaf node is at index floor(n/2) - 1
  //
  // Why start from bottom? Heapify assumes children are valid heaps.
  // Leaves are trivially valid heaps (single element).
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  // ============================================================
  // STEP 3: Extract elements one by one
  // ============================================================
  // After each extraction:
  // 1. Max element (root) is swapped to the end
  // 2. Heap size is reduced by 1
  // 3. Root is heapified to restore heap property
  for (let i = n - 1; i > 0; i--) {
    // Swap root (max) with last element
    const temp = arr[0]!
    arr[0] = arr[i]!
    arr[i] = temp

    // Heapify root with reduced heap size (i elements)
    heapify(arr, i, 0)
  }

  return arr
}

/**
 * Restore max-heap property for a subtree rooted at index i.
 *
 * Assumes: Left and right subtrees are already valid max-heaps.
 * After: Subtree rooted at i is a valid max-heap.
 *
 * Time: O(log n) - at most height of tree operations
 *
 * @param arr - The array representing the heap
 * @param heapSize - Current size of the heap (may be less than arr.length)
 * @param i - Index of the root of the subtree to heapify
 */
const heapify = (arr: number[], heapSize: number, i: number): void => {
  let largest = i // Assume root is largest initially
  const left = 2 * i + 1 // Left child index
  const right = 2 * i + 2 // Right child index

  // ----------------------------------------------------------
  // Check if left child exists and is greater than current largest
  // ----------------------------------------------------------
  if (left < heapSize && arr[left]! > arr[largest]!) {
    largest = left
  }

  // ----------------------------------------------------------
  // Check if right child exists and is greater than current largest
  // ----------------------------------------------------------
  if (right < heapSize && arr[right]! > arr[largest]!) {
    largest = right
  }

  // ----------------------------------------------------------
  // If largest is not root, swap and continue heapifying
  // ----------------------------------------------------------
  if (largest !== i) {
    // Swap
    const temp = arr[i]!
    arr[i] = arr[largest]!
    arr[largest] = temp

    // Recursively heapify the affected subtree
    // The element we swapped down may still violate heap property
    heapify(arr, heapSize, largest)
  }
}
