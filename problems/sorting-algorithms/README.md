# Comparison-Based Sorting Algorithms

| Property   | Value                                         |
| ---------- | --------------------------------------------- |
| Difficulty | Medium                                        |
| Category   | Sorting                                       |
| Tags       | comparison-sort, divide-and-conquer, in-place |
| Companies  | Google, Amazon, Microsoft, Facebook, Apple    |

**GeeksforGeeks**: [Sorting Algorithms](https://www.geeksforgeeks.org/sorting-algorithms/)

**Similar Problems**:

- [Sort Colors (Dutch National Flag)](https://leetcode.com/problems/sort-colors/)
- [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [Sort List](https://leetcode.com/problems/sort-list/)

## Problem Statement

Implement the following comparison-based sorting algorithms to sort an array of numbers in ascending order:

1. **Bubble Sort** - Repeatedly swap adjacent elements if they are in wrong order
2. **Selection Sort** - Find minimum element and place it at the beginning
3. **Insertion Sort** - Build sorted array one element at a time
4. **Merge Sort** - Divide and conquer with merging sorted halves
5. **Quick Sort** - Divide and conquer with partitioning around a pivot
6. **Heap Sort** - Use a max-heap data structure to sort

Each algorithm must:

- Sort the array in **ascending order**
- Handle arrays with negative numbers, zeros, and duplicates
- Return a **new sorted array** (do not mutate the input)

## Constraints

| Constraint     | Value            | Implication                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| Array length   | 0 ≤ n ≤ 10^5     | Must handle empty arrays and large inputs               |
| Element values | -10^9 ≤ x ≤ 10^9 | Must handle negative numbers and large values           |
| Duplicates     | Allowed          | Algorithm must be stable or handle duplicates correctly |

## Examples

### Example 1: Basic Case

```
Input:  [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]
```

### Example 2: With Negatives and Duplicates

```
Input:  [-5, 3, -5, 0, 3, -1]
Output: [-5, -5, -1, 0, 3, 3]
```

### Example 3: Already Sorted

```
Input:  [1, 2, 3, 4, 5]
Output: [1, 2, 3, 4, 5]
```

### Example 4: Reverse Sorted

```
Input:  [5, 4, 3, 2, 1]
Output: [1, 2, 3, 4, 5]
```

### Edge Cases to Consider

- Empty array `[]`
- Single element `[42]`
- Two elements `[2, 1]`
- All same elements `[7, 7, 7, 7]`
- Already sorted array
- Reverse sorted array
- Array with only negative numbers
- Array with zeros

## Hints

<details>
<summary>Hint 1: Start Simple</summary>
Start with Bubble Sort or Selection Sort. They are O(n²) but easy to understand and implement correctly.
</details>

<details>
<summary>Hint 2: Divide and Conquer</summary>
Merge Sort and Quick Sort use divide and conquer. Split the problem into smaller subproblems, solve them, and combine.
</details>

<details>
<summary>Hint 3: Merge Sort Key Insight</summary>
Merging two sorted arrays is O(n). If you can recursively sort two halves, you can merge them efficiently.
</details>

<details>
<summary>Hint 4: Quick Sort Partitioning</summary>
The key to Quick Sort is partitioning: rearrange so elements less than pivot come before it, and elements greater come after.
</details>

<details>
<summary>Hint 5: Heap Sort Structure</summary>
A max-heap is a complete binary tree where each parent is greater than its children. The root is always the maximum.
</details>

## Algorithms Overview

### Bubble Sort

**Intuition**: Repeatedly "bubble up" the largest element to the end by swapping adjacent elements.

**Algorithm**:

1. Compare adjacent elements, swap if in wrong order
2. After each pass, the largest unsorted element is in its final position
3. Repeat n-1 times (or until no swaps occur)

**Complexity**:

- Time: O(n²) average and worst case, O(n) best case (already sorted with optimization)
- Space: O(1) - in-place

**When to Use**: Educational purposes only. Not practical for large datasets.

---

### Selection Sort

**Intuition**: Find the minimum element and place it at the beginning, then repeat for the remaining array.

**Algorithm**:

1. Find the minimum element in the unsorted portion
2. Swap it with the first unsorted element
3. Move the boundary of sorted/unsorted portions
4. Repeat until sorted

**Complexity**:

- Time: O(n²) for all cases (always scans entire unsorted portion)
- Space: O(1) - in-place

**When to Use**: When memory writes are expensive (minimizes swaps compared to Bubble Sort).

---

### Insertion Sort

**Intuition**: Build the sorted array one element at a time, inserting each new element into its correct position.

**Algorithm**:

1. Start with the second element
2. Compare with elements to the left
3. Shift larger elements right to make room
4. Insert the element in its correct position
5. Repeat for all elements

**Complexity**:

- Time: O(n²) worst/average, O(n) best case (nearly sorted)
- Space: O(1) - in-place

**When to Use**: Small arrays, nearly sorted data, or as the base case in hybrid sorts like Timsort.

---

### Merge Sort

**Intuition**: Divide the array in half, recursively sort each half, then merge the sorted halves.

**Algorithm**:

1. **Divide**: Split array into two halves
2. **Conquer**: Recursively sort each half
3. **Combine**: Merge two sorted halves into one sorted array

**Merge Process**:

- Use two pointers, one for each half
- Compare elements, take the smaller one
- Continue until both halves are exhausted

**Complexity**:

- Time: O(n log n) for all cases - guaranteed!
- Space: O(n) - requires auxiliary array for merging

**When to Use**: When guaranteed O(n log n) is needed, external sorting, linked lists.

---

### Quick Sort

**Intuition**: Choose a pivot, partition the array so elements less than pivot come before it and elements greater come after, then recursively sort the partitions.

**Algorithm**:

1. Choose a pivot element
2. **Partition**: Rearrange so elements < pivot are left, elements > pivot are right
3. Recursively sort left and right partitions

**Pivot Selection Strategies**:

- First/Last element (simple but bad for sorted arrays)
- Random element (good average case)
- Median-of-three (first, middle, last) - balances simplicity and performance

**Complexity**:

- Time: O(n log n) average, O(n²) worst case (bad pivot selection)
- Space: O(log n) for recursion stack

**When to Use**: General-purpose sorting, in-memory sorting, when average case matters more than worst case.

---

### Heap Sort

**Intuition**: Build a max-heap from the array, then repeatedly extract the maximum element.

**Algorithm**:

1. **Build Max-Heap**: Convert array into a max-heap structure
2. **Extract Max**: Swap root (max) with last element, reduce heap size, heapify
3. Repeat until heap is empty

**Heap Properties**:

- Parent at index i has children at 2i+1 and 2i+2
- Max-heap: parent ≥ children

**Complexity**:

- Time: O(n log n) for all cases - guaranteed!
- Space: O(1) - in-place (unlike Merge Sort)

**When to Use**: When O(1) space is required with guaranteed O(n log n) time.

---

## Comparison Table

| Algorithm      | Best       | Average    | Worst      | Space    | Stable? |
| -------------- | ---------- | ---------- | ---------- | -------- | ------- |
| Bubble Sort    | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes     |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)     | No      |
| Insertion Sort | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes     |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)     | Yes     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n) | No      |
| Heap Sort      | O(n log n) | O(n log n) | O(n log n) | O(1)     | No      |

## Visual Walkthrough: Merge Sort

```
Original: [38, 27, 43, 3, 9, 82, 10]

DIVIDE PHASE:
                    [38, 27, 43, 3, 9, 82, 10]
                   /                          \
          [38, 27, 43, 3]                [9, 82, 10]
          /            \                  /        \
      [38, 27]      [43, 3]          [9, 82]     [10]
      /     \       /     \          /     \
   [38]   [27]   [43]   [3]       [9]    [82]

MERGE PHASE:
   [38]   [27]   [43]   [3]       [9]    [82]    [10]
      \   /         \   /            \   /
     [27, 38]     [3, 43]          [9, 82]      [10]
          \       /                     \       /
       [3, 27, 38, 43]              [9, 10, 82]
                \                    /
            [3, 9, 10, 27, 38, 43, 82]
```

## Visual Walkthrough: Quick Sort (Lomuto Partition)

```
Original: [3, 7, 8, 5, 2, 1, 9, 5, 4]
Pivot = 4 (last element)

Partition around 4:
- Elements < 4: [3, 2, 1]
- Pivot: [4]
- Elements ≥ 4: [7, 8, 5, 9, 5]

After partition: [3, 2, 1, 4, 7, 8, 5, 9, 5]
                          ↑
                       pivot in final position

Recursively sort [3, 2, 1] and [7, 8, 5, 9, 5]
...
Final: [1, 2, 3, 4, 5, 5, 7, 8, 9]
```

## Common Mistakes

### 1. Off-by-One Errors in Loop Bounds

```typescript
// WRONG: Missing last comparison in bubble sort
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    // Should be arr.length - 1 - i
    // ...
  }
}

// CORRECT: Optimize inner loop
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    // ...
  }
}
```

### 2. Infinite Recursion in Quick Sort

```typescript
// WRONG: Not excluding pivot from recursion
quickSort(arr, low, pivotIndex) // Includes pivot!
quickSort(arr, pivotIndex, high)

// CORRECT: Exclude pivot from both sides
quickSort(arr, low, pivotIndex - 1)
quickSort(arr, pivotIndex + 1, high)
```

### 3. Forgetting to Copy Array (Mutating Input)

```typescript
// WRONG: Mutates original array
const sort = (arr: number[]): number[] => {
  // sort in place
  return arr // Same reference!
}

// CORRECT: Create a copy first
const sort = (arr: number[]): number[] => {
  const result = [...arr]
  // sort result in place
  return result
}
```

### 4. Merge Sort Memory Allocation

```typescript
// WRONG: Creating new arrays in every merge call (very slow)
const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = []
  // push elements one by one
  return result
}

// BETTER: Pre-allocate and use indices
const merge = (arr: number[], left: number, mid: number, right: number, temp: number[]): void => {
  // Use temp array, copy back to arr
}
```

## Interview Derivation

### How to Choose the Right Sorting Algorithm

**Step 1: Understand the Constraints**

- Array size: Small (< 50)? Use simple O(n²) sorts
- Nearly sorted? Insertion Sort shines here
- Need guaranteed performance? Merge Sort or Heap Sort
- Memory constraints? Heap Sort is O(1) space

**Step 2: Consider Stability Requirements**

- Need stable sort? Use Merge Sort or Insertion Sort
- Don't care? Quick Sort is often fastest in practice

**Step 3: Think About Practical Performance**

- Quick Sort has best cache performance (in-place, sequential access)
- Merge Sort is preferred for linked lists (no random access needed)
- Insertion Sort is used as base case in hybrid algorithms

**Interview Tips**:

- Always clarify: array size, data type, stability requirements, memory constraints
- Know time/space complexity for all algorithms cold
- Be able to implement at least Quick Sort and Merge Sort from scratch
- Understand why Quick Sort is often faster than Merge Sort in practice (cache efficiency)

## Follow-up Questions

### Q1: How would you sort a linked list?

Merge Sort is ideal because:

- No random access needed (just sequential traversal)
- Can split list by finding middle with slow/fast pointers
- Merge is natural for linked lists (pointer manipulation)

### Q2: What if the array is almost sorted?

Insertion Sort! It runs in O(n) for nearly sorted data because elements only need to move a few positions.

### Q3: How do real-world sorting algorithms work?

Most use hybrid approaches:

- **Timsort** (Python, Java): Merge Sort + Insertion Sort, exploits natural runs
- **Introsort** (C++ STL): Quick Sort + Heap Sort + Insertion Sort
- Start with Quick Sort, switch to Heap Sort if recursion is too deep, use Insertion Sort for small subarrays

### Q4: How would you sort 1TB of data that doesn't fit in memory?

External Merge Sort:

1. Read chunks that fit in memory
2. Sort each chunk (any efficient algorithm)
3. Write sorted chunks to disk
4. Merge chunks using k-way merge

## Related Problems

| Problem             | Relationship                             |
| ------------------- | ---------------------------------------- |
| Sort Colors         | Dutch National Flag partitioning (3-way) |
| Merge Sorted Array  | Merge step of Merge Sort                 |
| Kth Largest Element | Quick Select (partition from Quick Sort) |
| Sort List           | Merge Sort on linked lists               |
| Meeting Rooms II    | Sorting as preprocessing step            |

## Key Takeaways

1. **Pattern**: Divide and conquer (Merge Sort, Quick Sort) achieves O(n log n)
2. **Trade-off**: Time vs Space - Merge Sort guarantees time but uses O(n) space; Heap Sort uses O(1) space with same time guarantee
3. **Trick**: Quick Sort's average case is O(n log n) but worst case is O(n²) - use random pivot or median-of-three
4. **Remember**: For interviews, know Quick Sort and Merge Sort cold - they are building blocks for many other algorithms
5. **Practical**: Real-world sorts are hybrid algorithms that combine multiple techniques
