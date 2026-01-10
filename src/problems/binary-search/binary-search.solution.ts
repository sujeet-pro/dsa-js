/**
 * Binary Search - Optimal Solution
 *
 * Approach: Iterative Binary Search (Divide and Conquer)
 *
 * Time Complexity: O(log n) - Each iteration eliminates half the search space
 * Space Complexity: O(1) - Only using a few pointer variables
 *
 * @see README.md for alternative approaches and full explanation
 */
export type BinarySearchFn = (nums: number[], target: number) => number

/**
 * Optimal solution using iterative binary search.
 *
 * Key Insight:
 * Since the array is sorted in ascending order, we can compare the target with
 * the middle element to determine which half of the array to search next.
 * - If target < middle element, it must be in the left half (if it exists)
 * - If target > middle element, it must be in the right half (if it exists)
 * This eliminates half the remaining elements with each comparison.
 *
 * Algorithm:
 * 1. Initialize left and right pointers to array bounds
 * 2. While search space is non-empty (left <= right):
 *    a. Find the middle index
 *    b. Compare middle element with target
 *    c. Narrow search space based on comparison
 * 3. Return -1 if target not found
 */
export const binarySearch: BinarySearchFn = (nums, target) => {
  // ============================================================
  // STEP 1: Initialize search boundaries
  // ============================================================
  // Why: We start with the entire array as our search space.
  // left = first valid index, right = last valid index
  // This represents the range [left, right] inclusive.

  let left = 0
  let right = nums.length - 1

  // ============================================================
  // STEP 2: Binary search loop - continue while search space exists
  // ============================================================
  // Why use <= instead of <:
  // - When left === right, there's still one element to check
  // - Using < would miss this case (e.g., single element array)
  // Example: nums = [5], target = 5
  //   left = 0, right = 0, left <= right is TRUE, we check nums[0]

  while (left <= right) {
    // ----------------------------------------------------------
    // Calculate the middle index safely
    // ----------------------------------------------------------
    // Why not use (left + right) / 2:
    // - In languages with fixed-size integers, left + right can overflow
    // - JavaScript doesn't have this issue (uses 64-bit floats)
    // - But this formula is the standard pattern to learn
    // Why use Math.floor:
    // - Division may produce a float, but indices must be integers
    // - For left=0, right=5: mid = 0 + floor(2.5) = 2

    const mid = left + Math.floor((right - left) / 2)

    // ----------------------------------------------------------
    // Access the middle element
    // ----------------------------------------------------------
    // The non-null assertion (!) is safe because:
    // - mid is always within bounds: left <= mid <= right
    // - left >= 0 and right < nums.length (maintained by our updates)

    const midValue = nums[mid]! // eslint-disable-line @typescript-eslint/no-non-null-assertion

    // ----------------------------------------------------------
    // Compare and decide where to search next
    // ----------------------------------------------------------

    if (midValue === target) {
      // ========================================================
      // FOUND: Target matches middle element
      // ========================================================
      // We found the target - return its index immediately.
      // No need to continue searching.

      return mid
    }

    if (midValue < target) {
      // ========================================================
      // Target is GREATER than middle element
      // ========================================================
      // Why: Since array is sorted ascending, all elements to the
      // left of mid are also less than target.
      // Action: Eliminate left half by moving left pointer past mid.
      //
      // Example: nums = [1, 3, 5, 7, 9], target = 7
      //   mid = 2, nums[2] = 5 < 7
      //   Target must be in [3, 4], not [0, 2]
      //   Set left = 3 to search right half
      //
      // Why mid + 1 instead of mid:
      // - We already checked nums[mid], so exclude it
      // - Using mid would cause infinite loop when left === mid

      left = mid + 1
    } else {
      // ========================================================
      // Target is LESS than middle element (midValue > target)
      // ========================================================
      // Why: Since array is sorted ascending, all elements to the
      // right of mid are also greater than target.
      // Action: Eliminate right half by moving right pointer before mid.
      //
      // Example: nums = [1, 3, 5, 7, 9], target = 3
      //   mid = 2, nums[2] = 5 > 3
      //   Target must be in [0, 1], not [2, 4]
      //   Set right = 1 to search left half
      //
      // Why mid - 1 instead of mid:
      // - We already checked nums[mid], so exclude it
      // - Using mid would cause infinite loop when right === mid

      right = mid - 1
    }
  }

  // ============================================================
  // STEP 3: Target not found
  // ============================================================
  // Why we reach here:
  // - The loop exits when left > right
  // - This means the search space is empty (no more elements to check)
  // - Therefore, the target doesn't exist in the array
  //
  // Example: nums = [1, 3, 5], target = 4
  //   Iteration 1: left=0, right=2, mid=1, nums[1]=3 < 4, left=2
  //   Iteration 2: left=2, right=2, mid=2, nums[2]=5 > 4, right=1
  //   Loop exits: left=2 > right=1, return -1

  return -1
}
