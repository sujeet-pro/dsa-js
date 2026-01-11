# Two Sum

| Property   | Value                                  |
| ---------- | -------------------------------------- |
| Difficulty | Easy                                   |
| Category   | Array, Hash Table                      |
| Tags       | array, hash-map, complement            |
| Companies  | Google, Amazon, Meta, Apple, Microsoft |

**LeetCode**: [1. Two Sum](https://leetcode.com/problems/two-sum/)

**Similar Problems**:

- [15. 3Sum](https://leetcode.com/problems/3sum/)
- [18. 4Sum](https://leetcode.com/problems/4sum/)
- [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

---

## Constraints

| Constraint    | Value                         | Implication                          |
| ------------- | ----------------------------- | ------------------------------------ |
| Array length  | `2 <= nums.length <= 10^4`    | O(n²) acceptable, O(n) preferred     |
| Value range   | `-10^9 <= nums[i] <= 10^9`    | Standard number type works           |
| Target range  | `-10^9 <= target <= 10^9`     | Watch for edge cases with large sums |
| Solution      | Exactly one solution exists   | No need to handle "not found"        |
| Element reuse | Cannot use same element twice | `nums[i] + nums[i]` is invalid       |

---

## Examples

### Example 1: Basic Case

```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9, so we return [0, 1]
```

### Example 2: Solution Not at Beginning

```
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
Explanation: nums[1] + nums[2] = 2 + 4 = 6
```

### Example 3: Duplicate Values

```
Input: nums = [3, 3], target = 6
Output: [0, 1]
Explanation: Both 3s at different indices sum to 6
```

### Edge Cases to Consider

- **Negative numbers**: `[-1, -2, -3, -4, -5], target = -8` → `[2, 4]`
- **Zero in array**: `[0, 4, 3, 0], target = 0` → `[0, 3]`
- **Mixed signs**: `[-3, 4, 3, 90], target = 0` → `[0, 2]`
- **Large numbers**: Near `10^9`

---

## Hints

<details>
<summary>Hint 1: Brute Force Starting Point</summary>

The simplest approach is to check every pair of numbers. For each element, check if any other element sums to target. What's the time complexity of this approach?

</details>

<details>
<summary>Hint 2: What Are We Really Looking For?</summary>

For each number `x`, you need to find if `target - x` exists in the array. This is called finding the **complement**. How can you make this lookup faster than O(n)?

</details>

<details>
<summary>Hint 3: The Right Data Structure</summary>

A hash map (Map in JavaScript) gives O(1) lookup time. What should be the key and what should be the value? Think about what information you need when you find a complement.

</details>

<details>
<summary>Hint 4: One Pass Optimization</summary>

Do you need to build the entire map first, then search? What if you check for the complement while building the map? When you find a number, its complement (if it exists as part of the answer) would already be in the map.

</details>

---

## Approaches

### Approach 1: Brute Force

**Intuition**: Check every possible pair of numbers to see if they sum to target.

**Algorithm**:

1. For each element at index `i` (from 0 to n-2)
2. For each element at index `j` (from i+1 to n-1)
3. If `nums[i] + nums[j] === target`, return `[i, j]`

**Complexity**:

- **Time**: O(n²) - nested loops checking all pairs
- **Space**: O(1) - no extra data structures

**When to Use**: Only when n is very small (< 100) or when you need to minimize space.

---

### Approach 2: Two-Pass Hash Map

**Intuition**: Trade space for time. Use a hash map to store all numbers first, then search for complements.

**Algorithm**:

1. First pass: Build a map of `{value → index}` for all elements
2. Second pass: For each number, check if `target - num` exists in map
3. Ensure you don't use the same element twice (check indices)

**Complexity**:

- **Time**: O(n) - two linear passes
- **Space**: O(n) - hash map stores up to n elements

**Code**: See approach 2 in solution file.

---

### Approach 3: One-Pass Hash Map (Optimal)

**Intuition**: We don't need to build the entire map first. While iterating, if the complement exists, it must have been added earlier. This naturally prevents using the same element twice.

**Algorithm**:

1. Create an empty hash map
2. For each element at index `i`:
   - Calculate complement = `target - nums[i]`
   - If complement exists in map, return `[map.get(complement), i]`
   - Otherwise, add `nums[i] → i` to map
3. The second element of a valid pair will always find the first

**Why This Works**:
When we encounter the second number of a valid pair, the first number is already in our map (added in a previous iteration). We never add the current number before checking, so we can't match an element with itself.

**Complexity**:

- **Time**: O(n) - single pass through array
- **Space**: O(n) - hash map stores up to n elements

**Code**: See `twoSum` in `two-sum.solution.ts`

---

## Visual Walkthrough

### One-Pass Hash Map: `nums = [2, 7, 11, 15], target = 9`

```
Step 1: i=0, num=2
  complement = 9 - 2 = 7
  map = {} → 7 not found
  Add 2 to map
  map = {2: 0}

Step 2: i=1, num=7
  complement = 9 - 7 = 2
  map = {2: 0} → 2 FOUND at index 0!
  Return [0, 1] ✓
```

### Edge Case: `nums = [3, 3], target = 6`

```
Step 1: i=0, num=3
  complement = 6 - 3 = 3
  map = {} → 3 not found
  Add 3 to map
  map = {3: 0}

Step 2: i=1, num=3
  complement = 6 - 3 = 3
  map = {3: 0} → 3 FOUND at index 0!
  Return [0, 1] ✓
```

This shows why one-pass works with duplicates: we check before adding.

---

## Common Mistakes

### 1. Using the Same Element Twice

```typescript
// WRONG: Adding before checking
map.set(nums[i], i)
if (map.has(target - nums[i])) {
  // This could return [i, i] if nums[i] * 2 === target
}

// CORRECT: Check before adding
const complement = target - nums[i]
if (map.has(complement)) {
  return [map.get(complement), i]
}
map.set(nums[i], i)
```

### 2. Returning Values Instead of Indices

```typescript
// WRONG
return [nums[i], nums[j]]

// CORRECT
return [i, j]
```

### 3. Off-by-One in Brute Force

```typescript
// WRONG: j starts at i (could match same element)
for (let j = i; j < nums.length; j++)

// CORRECT: j starts at i + 1
for (let j = i + 1; j < nums.length; j++)
```

### 4. Not Handling Duplicate Values

With `[3, 3]` and target `6`, a two-pass approach needs care:

```typescript
// WRONG: Overwrites first 3's index
const map = new Map()
for (let i = 0; i < nums.length; i++) {
  map.set(nums[i], i) // {3: 1} - first 3 lost!
}

// The one-pass approach naturally handles this
```

---

## Follow-up Questions

### Q1: What if the array is sorted?

Use the **two-pointer technique**:

- Start with pointers at beginning and end
- If sum < target, move left pointer right
- If sum > target, move right pointer left
- Time: O(n), Space: O(1)

### Q2: What if there are multiple valid pairs?

Return all pairs using a modified approach:

- Use a frequency map
- For each number, count how many complements exist
- Handle the case where `num === complement` carefully

### Q3: What if we need to return the values instead of indices?

Simpler! Just use a Set instead of Map:

```typescript
const seen = new Set<number>()
for (const num of nums) {
  if (seen.has(target - num)) return [target - num, num]
  seen.add(num)
}
```

### Q4: How does this extend to 3Sum or 4Sum?

- **3Sum**: Fix one element, then solve Two Sum for remaining
- **4Sum**: Fix two elements, then solve Two Sum for remaining
- Pattern: Reduce to Two Sum by fixing elements

---

## Related Problems

| Problem                                                                              | Relationship                                |
| ------------------------------------------------------------------------------------ | ------------------------------------------- |
| [15. 3Sum](https://leetcode.com/problems/3sum/)                                      | Extension: find three numbers that sum to 0 |
| [167. Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)   | Sorted array variant - use two pointers     |
| [170. Two Sum III](https://leetcode.com/problems/two-sum-iii-data-structure-design/) | Design a data structure                     |
| [653. Two Sum IV - BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)    | BST variant                                 |
| [1. Two Sum](https://leetcode.com/problems/two-sum/)                                 | This problem                                |

---

## Key Takeaways

1. **Pattern**: Complement search → Hash Map for O(1) lookup
2. **Trade-off**: O(n) extra space enables O(n) time (from O(n²))
3. **Trick**: One-pass works because we check before adding, preventing self-matching
4. **Interview Tip**: Always clarify - sorted? duplicates allowed? return indices or values?
5. **Remember**: This pattern (complement + hash map) appears in many problems
