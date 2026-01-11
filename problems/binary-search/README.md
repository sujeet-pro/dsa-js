# Binary Search

| Property   | Value                                          |
| ---------- | ---------------------------------------------- |
| Difficulty | Easy                                           |
| Category   | Searching                                      |
| Tags       | `binary-search`, `divide-and-conquer`, `array` |
| Companies  | Google, Amazon, Microsoft, Facebook, Apple     |

**LeetCode**: [704. Binary Search](https://leetcode.com/problems/binary-search/)

**Similar Problems**:

- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Problem Statement

Given a **sorted** array of integers `nums` in ascending order and an integer `target`, write a function to search for `target` in `nums`. If `target` exists, return its index. Otherwise, return `-1`.

You must write an algorithm with **O(log n)** runtime complexity.

## Constraints

| Constraint         | Value                     | Implication                       |
| ------------------ | ------------------------- | --------------------------------- |
| Array length       | 1 <= nums.length <= 10^4  | Array is never empty              |
| Element values     | -10^4 <= nums[i] <= 10^4  | Can have negative numbers         |
| Array ordering     | Sorted in ascending order | Enables binary search             |
| Element uniqueness | All elements are unique   | No duplicate handling needed      |
| Target range       | -10^4 <= target <= 10^4   | Target can be outside array range |

## Examples

### Example 1: Target Found in Middle

```
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists at index 4 in the array.
```

### Example 2: Target Not Found

```
Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1
Explanation: 2 does not exist in the array, so return -1.
```

### Example 3: Target at Beginning

```
Input: nums = [1, 2, 3, 4, 5], target = 1
Output: 0
Explanation: Target is the first element.
```

### Example 4: Target at End

```
Input: nums = [1, 2, 3, 4, 5], target = 5
Output: 4
Explanation: Target is the last element.
```

### Edge Cases to Consider

- Single element array (found and not found)
- Target smaller than all elements
- Target larger than all elements
- Target between two consecutive elements
- Very large array (performance test)
- Negative numbers in array

## Hints

<details>
<summary>Hint 1: Starting Point</summary>

Think about how you would search for a word in a dictionary. Would you check every page one by one, or would you open somewhere in the middle first?

</details>

<details>
<summary>Hint 2: Divide and Conquer</summary>

Since the array is sorted, you can eliminate half of the remaining elements with each comparison. If the middle element is greater than the target, where must the target be?

</details>

<details>
<summary>Hint 3: Tracking the Search Space</summary>

Use two pointers (`left` and `right`) to track the current search space. After each comparison, update one of these pointers to narrow down the search by half.

</details>

<details>
<summary>Hint 4: Loop Termination</summary>

Be careful with the loop condition. When should you stop? What happens when `left` crosses `right`? Think about when the search space becomes empty.

</details>

<details>
<summary>Hint 5: Middle Calculation</summary>

To avoid integer overflow (relevant in some languages), calculate the middle as `left + Math.floor((right - left) / 2)` instead of `(left + right) / 2`.

</details>

## Approaches

### Approach 1: Linear Search (Brute Force)

**Intuition**: The simplest approach is to check every element one by one until we find the target or exhaust the array.

**Algorithm**:

1. Iterate through each element in the array
2. If the current element equals the target, return its index
3. If we finish the loop without finding it, return -1

**Complexity**:

- Time: O(n) - We may need to check every element
- Space: O(1) - Only using a loop counter

**When to Use**: Never for this problem - the sorted property is wasted and we can't achieve O(log n).

---

### Approach 2: Iterative Binary Search (Optimal)

**Intuition**: Since the array is sorted, we can eliminate half of the remaining elements with each comparison. Compare the target with the middle element:

- If equal, we found it
- If target is smaller, search the left half
- If target is larger, search the right half

**Algorithm**:

1. Initialize `left = 0` and `right = nums.length - 1`
2. While `left <= right`:
   - Calculate `mid = left + Math.floor((right - left) / 2)`
   - If `nums[mid] === target`, return `mid`
   - If `nums[mid] < target`, set `left = mid + 1` (search right half)
   - If `nums[mid] > target`, set `right = mid - 1` (search left half)
3. If loop ends, target not found - return -1

**Why This Works**:

- The sorted order guarantees all elements left of `mid` are smaller
- The sorted order guarantees all elements right of `mid` are larger
- Each iteration eliminates half the search space
- The loop terminates when search space is empty (`left > right`)

**Complexity**:

- Time: O(log n) - Search space halves each iteration
- Space: O(1) - Only using a few variables

---

### Approach 3: Recursive Binary Search

**Intuition**: The same divide-and-conquer logic can be expressed recursively.

**Algorithm**:

1. Base case: If `left > right`, return -1 (not found)
2. Calculate middle index
3. If middle element is target, return middle index
4. If target is smaller, recurse on left half
5. If target is larger, recurse on right half

**Complexity**:

- Time: O(log n) - Same as iterative
- Space: O(log n) - Recursion call stack depth

**When to Use**: When code clarity matters more than space efficiency. The iterative approach is preferred for interviews.

## Visual Walkthrough

```
Array: [-1, 0, 3, 5, 9, 12], Target: 9

Step 1: left=0, right=5
        mid = 0 + (5-0)/2 = 2
        nums[2] = 3 < 9
        Target is larger, search right half
        [-1, 0, 3, 5, 9, 12]
         L        M        R
                  3 < 9 → go right

Step 2: left=3, right=5
        mid = 3 + (5-3)/2 = 4
        nums[4] = 9 === 9
        FOUND! Return 4
        [-1, 0, 3, 5, 9, 12]
                  L  M     R
                     9 === 9 ✓

Result: 4
```

```
Array: [-1, 0, 3, 5, 9, 12], Target: 2 (not found)

Step 1: left=0, right=5, mid=2
        nums[2] = 3 > 2 → search left

Step 2: left=0, right=1, mid=0
        nums[0] = -1 < 2 → search right

Step 3: left=1, right=1, mid=1
        nums[1] = 0 < 2 → search right

Step 4: left=2, right=1
        left > right → NOT FOUND

Result: -1
```

## Common Mistakes

### 1. Infinite Loop with Wrong Mid Update

```typescript
// WRONG - infinite loop when target > nums[mid]
if (nums[mid] < target) {
  left = mid // Should be mid + 1
}

// CORRECT
if (nums[mid] < target) {
  left = mid + 1 // Exclude mid from next search
}
```

**Why**: If `left = mid` and `mid` happens to equal `left`, we never make progress.

### 2. Using Wrong Loop Condition

```typescript
// WRONG - misses single element case
while (left < right) {
  // Should be <=
  // ...
}

// CORRECT
while (left <= right) {
  // ...
}
```

**Why**: When `left === right`, there's still one element to check.

### 3. Integer Overflow in Mid Calculation

```typescript
// POTENTIALLY WRONG (overflow in some languages)
const mid = (left + right) / 2

// CORRECT
const mid = left + Math.floor((right - left) / 2)
```

**Why**: In languages with fixed-size integers, `left + right` can overflow.

### 4. Forgetting to Floor the Division

```typescript
// WRONG - mid could be a float
const mid = left + (right - left) / 2

// CORRECT
const mid = left + Math.floor((right - left) / 2)
```

**Why**: Array indices must be integers.

## Follow-up Questions

### Q1: What if there are duplicates and you need the first occurrence?

Keep searching left even after finding the target:

```typescript
if (nums[mid] >= target) {
  right = mid - 1
} else {
  left = mid + 1
}
// Check nums[left] after loop
```

### Q2: What if you need to find the insertion position?

Return `left` instead of `-1` when not found. This is [LeetCode 35](https://leetcode.com/problems/search-insert-position/).

### Q3: What about searching in a rotated sorted array?

Check which half is sorted and decide accordingly. See [LeetCode 33](https://leetcode.com/problems/search-in-rotated-sorted-array/).

### Q4: Can you implement this recursively?

Yes, but it uses O(log n) stack space vs O(1) for iterative.

## Related Problems

| Problem                                                                                                               | Relationship                          |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)                                   | Returns insertion index instead of -1 |
| [34. First and Last Position](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Binary search with duplicates         |
| [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)                   | Binary search with rotation           |
| [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)      | Binary search variant                 |
| [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)                                            | Binary search on condition            |
| [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)                                                                   | Binary search on answer               |

## Key Takeaways

1. **Pattern**: Binary search halves the search space each iteration - think "where can the target NOT be?"

2. **Template**: Master this template for iterative binary search:

   ```
   left = 0, right = len - 1
   while left <= right:
     mid = left + (right - left) / 2
     if found: return mid
     if go_left: right = mid - 1
     else: left = mid + 1
   return -1
   ```

3. **Trick**: When unsure about boundary conditions, trace through a 1-element array and a 2-element array.

4. **Remember**:
   - `left <= right` not `<` (don't miss single element)
   - `mid + 1` and `mid - 1` not `mid` (avoid infinite loops)
   - Floor the division (indices must be integers)

5. **Interview Tip**: Binary search is often the key to solving "find something in O(log n)" problems. Look for sorted data or monotonic conditions.
