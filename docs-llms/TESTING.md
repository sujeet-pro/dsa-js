# Testing Guidelines

This document provides guidelines for generating **exhaustive** unit tests for Data Structures and Algorithms implementations. Tests must cover all corner cases and validate correctness across multiple implementations.

---

## Core Principles

1. **Exhaustive Coverage**: Cover ALL edge cases, corner cases, and boundary conditions
2. **Research-Driven**: Research common test cases for well-known problems before writing tests
3. **Multi-Implementation**: Test all implementations against the same test suite
4. **Type Safety**: Tests must be strictly typed

---

## Test File Structure

All problem tests follow this pattern:

```typescript
import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { problemName as solutionImpl, type ProblemFn } from './problem-name.solution.ts'
import { problemName as practiceImpl } from './problem-name.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<ProblemFn>('problemName', implementations, (testEach) => {
  // Tests here
})
```

---

## Pre-Test Research (MANDATORY)

Before writing tests for any DSA problem, you MUST:

1. **Search for the problem** on LeetCode, HackerRank, GeeksforGeeks
2. **Review discussion sections** for edge cases others have found
3. **Check for known tricky inputs** that commonly cause failures
4. **Understand constraints** to generate appropriate boundary tests

### Research Checklist

- [ ] What are the input constraints (min/max values, array sizes)?
- [ ] What edge cases are mentioned in problem discussions?
- [ ] Are there known tricky test cases that break naive solutions?
- [ ] What are the boundary conditions (empty input, single element, etc.)?
- [ ] Are there special values to test (0, negative, MAX_SAFE_INTEGER)?

---

## Test Case Categories (MUST Include All)

### 1. Basic Functionality

Test the happy path with normal expected inputs:

```typescript
testEach('should find two numbers that sum to target', (fn) => {
  expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1])
})
```

### 2. Edge Cases - Empty/Minimal Input

```typescript
testEach('should handle empty array', (fn) => {
  expect(fn([], 5)).toBe(/* expected */)
})

testEach('should handle single element', (fn) => {
  expect(fn([5], 5)).toBe(/* expected */)
})

testEach('should handle two elements', (fn) => {
  expect(fn([1, 2], 3)).toBe(/* expected */)
})
```

### 3. Boundary Conditions

```typescript
testEach('should handle maximum array size', (fn) => {
  const largeArray = Array.from({ length: 10000 }, (_, i) => i)
  expect(fn(largeArray /* target */)).toBe(/* expected */)
})

testEach('should handle minimum values', (fn) => {
  expect(fn([Number.MIN_SAFE_INTEGER, 1] /* target */)).toBe(/* expected */)
})

testEach('should handle maximum values', (fn) => {
  expect(fn([Number.MAX_SAFE_INTEGER, -1] /* target */)).toBe(/* expected */)
})
```

### 4. Special Values

```typescript
testEach('should handle zero', (fn) => {
  expect(fn([0, 0, 0], 0)).toBe(/* expected */)
})

testEach('should handle negative numbers', (fn) => {
  expect(fn([-5, -3, -1, 0, 1], -4)).toBe(/* expected */)
})

testEach('should handle mixed positive and negative', (fn) => {
  expect(fn([-10, 5, -5, 10], 0)).toBe(/* expected */)
})
```

### 5. Duplicates and Repetition

```typescript
testEach('should handle all same elements', (fn) => {
  expect(fn([5, 5, 5, 5], 10)).toBe(/* expected */)
})

testEach('should handle duplicates in result', (fn) => {
  expect(fn([3, 3], 6)).toEqual([0, 1])
})
```

### 6. Order and Position Variations

```typescript
testEach('should find target at beginning', (fn) => {
  expect(fn([1, 2, 3, 4, 5], 1)).toBe(/* expected */)
})

testEach('should find target at end', (fn) => {
  expect(fn([1, 2, 3, 4, 5], 5)).toBe(/* expected */)
})

testEach('should find target in middle', (fn) => {
  expect(fn([1, 2, 3, 4, 5], 3)).toBe(/* expected */)
})
```

### 7. Not Found / Failure Cases

```typescript
testEach('should return -1 when not found', (fn) => {
  expect(fn([1, 2, 3], 10)).toBe(-1)
})

testEach('should throw when no solution exists', (fn) => {
  expect(() => fn([1, 2, 3], 100)).toThrow('No solution found')
})
```

### 8. Sorted vs Unsorted (where applicable)

```typescript
testEach('should work with sorted input', (fn) => {
  expect(fn([1, 2, 3, 4, 5], 3)).toBe(/* expected */)
})

testEach('should work with reverse sorted input', (fn) => {
  expect(fn([5, 4, 3, 2, 1], 3)).toBe(/* expected */)
})

testEach('should work with unsorted input', (fn) => {
  expect(fn([3, 1, 4, 1, 5, 9, 2, 6], 5)).toBe(/* expected */)
})
```

### 9. Performance Tests (for large inputs)

```typescript
testEach('should handle large input efficiently', (fn) => {
  const size = 100000
  const arr = Array.from({ length: size }, (_, i) => i)
  const start = performance.now()
  fn(arr, size - 1)
  const duration = performance.now() - start
  expect(duration).toBeLessThan(100) // Should complete within 100ms
})
```

---

## Problem-Specific Test Cases

### Array Problems

- Empty array `[]`
- Single element `[x]`
- Two elements `[x, y]`
- All same elements `[x, x, x]`
- Sorted ascending `[1, 2, 3, 4, 5]`
- Sorted descending `[5, 4, 3, 2, 1]`
- Contains zeros `[0, 1, 0, 2, 0]`
- All zeros `[0, 0, 0]`
- Negative numbers `[-5, -3, -1]`
- Mixed signs `[-2, -1, 0, 1, 2]`
- Large numbers `[MAX_SAFE_INTEGER, ...]`
- Large array size (10^4, 10^5 elements)

### String Problems

- Empty string `""`
- Single character `"a"`
- All same characters `"aaaa"`
- Palindrome `"abba"`
- All spaces `"    "`
- Special characters `"!@#$%"`
- Unicode characters `"你好世界"`
- Very long string (10^4+ chars)

### Tree Problems

- Null/empty tree
- Single node
- Only left children (skewed left)
- Only right children (skewed right)
- Perfect binary tree
- Complete binary tree
- Single path to leaf
- Negative values in nodes
- Duplicate values

### Graph Problems

- Empty graph (no nodes)
- Single node
- Disconnected components
- Cycle present
- Self-loop
- Complete graph
- Sparse graph
- Dense graph
- Negative edge weights (where applicable)

### Linked List Problems

- Null/empty list
- Single node
- Two nodes
- Cycle present
- Very long list
- Duplicate values

---

## Test Organization

### Grouping Related Tests

```typescript
testImplementations<BinarySearchFn>('binarySearch', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================
  testEach('should find element in sorted array', (fn) => {
    /* ... */
  })
  testEach('should find first element', (fn) => {
    /* ... */
  })
  testEach('should find last element', (fn) => {
    /* ... */
  })

  // ============================================================
  // EDGE CASES
  // ============================================================
  testEach('should return -1 for empty array', (fn) => {
    /* ... */
  })
  testEach('should handle single element - found', (fn) => {
    /* ... */
  })
  testEach('should handle single element - not found', (fn) => {
    /* ... */
  })

  // ============================================================
  // BOUNDARY CONDITIONS
  // ============================================================
  testEach('should handle large array', (fn) => {
    /* ... */
  })
  testEach('should handle MAX_SAFE_INTEGER', (fn) => {
    /* ... */
  })

  // ============================================================
  // NOT FOUND CASES
  // ============================================================
  testEach('should return -1 when target < all elements', (fn) => {
    /* ... */
  })
  testEach('should return -1 when target > all elements', (fn) => {
    /* ... */
  })
  testEach('should return -1 when target between elements', (fn) => {
    /* ... */
  })
})
```

---

## Rules for LLMs

### MUST Do

1. **ALWAYS** research the problem before writing tests
2. **ALWAYS** use `testImplementations` utility
3. **ALWAYS** import function type from implementation file
4. **ALWAYS** include tests for ALL categories listed above
5. **ALWAYS** test boundary conditions with actual constraint values
6. **ALWAYS** include at least 15-20 test cases for any algorithm

### MUST NOT Do

1. **NEVER** skip edge cases "for brevity"
2. **NEVER** write separate test suites for each implementation
3. **NEVER** define function types in test files
4. **NEVER** use hardcoded magic numbers without explanation
5. **NEVER** skip performance tests for algorithms with complexity requirements
