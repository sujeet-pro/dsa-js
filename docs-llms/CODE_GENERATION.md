# Code Generation Guidelines

This repository is dedicated to **Data Structures and Algorithms practice** with a focus on **performance** and **strict typing**. All generated code must adhere to these guidelines.

## Problem Files vs Course Files

This repository has two types of code:

### 1. Problem Files (`src/problems/<problem-name>/`)

Generated via "Generate problem" command. Contains:
- `<problem-name>.practise.ts` - Empty typed function for user to implement
- `<problem-name>.solution.ts` - Heavily commented optimal solution
- `<problem-name>.test.ts` - Exhaustive tests for both files

See `docs-llms/QUESTION_GENERATION.md` for the complete problem generation workflow.

### 2. Course Files (`src/course-*/`)

Algorithm implementations from courses/tutorials. Contains:
- `<algorithm-name>.ts` - Multiple implementations with same signature
- `<algorithm-name>.test.ts` - Tests using `testImplementations` utility

## Core Principles

1. **Performance First**: Every solution should be optimized for time and space complexity
2. **Strict Typing**: All code must be strictly typed with TypeScript - no `any`, no implicit types
3. **Multiple Implementations**: Provide multiple approaches when applicable (brute force → optimized)
4. **Educational Value**: Code should be readable and serve as learning material for revision

## File Structure for Algorithm Implementations

Each algorithm file must follow this structure:

```typescript
/**
 * Algorithm/Problem Name
 *
 * Problem Statement:
 * [Clear description of what the algorithm solves]
 *
 * Approach:
 * [Brief explanation of the approach used]
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 *
 * @param paramName - Description of parameter
 * @returns Description of return value
 */
export type AlgorithmFn = (params: ParamTypes) => ReturnType

export const algorithm1: AlgorithmFn = (params) => {
  // Implementation
}
```

## TypeScript Requirements

### Strict Typing Rules

1. **ALWAYS** define explicit return types for all functions
2. **ALWAYS** use `const` assertions where applicable
3. **ALWAYS** export a type alias for the function signature
4. **NEVER** use `any` type - use `unknown` with type guards if necessary
5. **NEVER** use implicit `any` from untyped parameters
6. **NEVER** use type assertions (`as`) unless absolutely necessary and documented

### Function Declaration Style

Use typed const arrow functions, not function declarations:

```typescript
// CORRECT
export type SortFn = (arr: number[]) => number[]

export const quickSort: SortFn = (arr) => {
  // Implementation
}

// INCORRECT - Do not use
export function quickSort(arr: number[]): number[] {
  // ...
}
```

### Generic Types

Use generics for reusable algorithms:

```typescript
export type CompareFn<T> = (a: T, b: T) => number

export type SortFn<T> = (arr: T[], compare?: CompareFn<T>) => T[]

export const mergeSort: SortFn<number> = (arr, compare = (a, b) => a - b) => {
  // Implementation
}
```

## Performance Guidelines

### Time Complexity

1. **Document complexity** in JSDoc for every implementation
2. **Optimize for the expected input size** mentioned in constraints
3. **Avoid unnecessary operations** inside loops
4. **Use appropriate data structures** (Map/Set for O(1) lookup, etc.)

### Space Complexity

1. **Prefer in-place algorithms** when possible
2. **Document auxiliary space** requirements
3. **Consider iterative over recursive** to avoid stack overflow for large inputs
4. **Use typed arrays** (Int32Array, Float64Array) for numerical computations when beneficial

### Common Optimizations

```typescript
// Use Map for O(1) lookup instead of array.find() O(n)
const map = new Map<number, number>()

// Use Set for O(1) membership testing
const seen = new Set<number>()

// Avoid creating unnecessary intermediate arrays
// BAD: arr.filter().map().reduce()
// GOOD: Single loop when possible

// Use bitwise operations for integer math when appropriate
const isEven = (n: number): boolean => (n & 1) === 0
const multiply2 = (n: number): number => n << 1
const divide2 = (n: number): number => n >> 1
```

## Multiple Implementations

When solving a problem, provide implementations in order of optimization:

```typescript
/**
 * Two Sum Problem
 * 
 * Given an array of integers and a target sum, return indices of two numbers
 * that add up to the target.
 */
export type TwoSumFn = (nums: number[], target: number) => [number, number]

/**
 * Brute Force Approach
 * Time: O(n²) | Space: O(1)
 */
export const twoSumBruteForce: TwoSumFn = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]! + nums[j]! === target) return [i, j]
    }
  }
  throw new Error('No solution found')
}

/**
 * Hash Map Approach (Optimal)
 * Time: O(n) | Space: O(n)
 */
export const twoSumHashMap: TwoSumFn = (nums, target) => {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!
    const complementIndex = map.get(complement)
    if (complementIndex !== undefined) return [complementIndex, i]
    map.set(nums[i]!, i)
  }
  throw new Error('No solution found')
}
```

## Naming Conventions

### Files

- Use kebab-case: `two-sum.ts`, `binary-search.ts`, `merge-sort.ts`
- Test files: `two-sum.test.ts` (alongside implementation)

### Functions

- Use camelCase with descriptive names
- Include approach in name for multiple implementations:
  - `twoSumBruteForce`, `twoSumHashMap`
  - `sortQuick`, `sortMerge`, `sortHeap`
  - `searchBinary`, `searchLinear`

### Types

- Use PascalCase with `Fn` suffix for function types: `TwoSumFn`, `BinarySearchFn`
- Use descriptive names for complex types: `TreeNode`, `ListNode`, `GraphAdjList`

## Common Data Structure Types

Define reusable types in `src/types/` directory:

```typescript
// src/types/tree.ts
export interface TreeNode<T = number> {
  val: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null
}

// src/types/list.ts
export interface ListNode<T = number> {
  val: T
  next: ListNode<T> | null
}

// src/types/graph.ts
export type AdjacencyList = Map<number, number[]>
export type AdjacencyMatrix = number[][]
export type EdgeList = [from: number, to: number, weight?: number][]
```

## Error Handling

1. **Throw descriptive errors** for invalid inputs
2. **Use type guards** instead of try-catch where possible
3. **Validate inputs** at function boundaries

```typescript
export const binarySearch: BinarySearchFn = (arr, target) => {
  if (arr.length === 0) return -1  // Handle edge case, don't throw
  
  // For truly invalid inputs, throw
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected array as first argument')
  }
  
  // Implementation...
}
```

## Documentation in Code

Every implementation must include:

1. **Problem description** in JSDoc
2. **Time complexity** with explanation
3. **Space complexity** with explanation
4. **Key insights** or tricks used in the approach

```typescript
/**
 * Kadane's Algorithm - Maximum Subarray Sum
 *
 * Find the contiguous subarray with the largest sum.
 *
 * Key Insight: At each position, we decide whether to:
 * 1. Extend the previous subarray (add current element)
 * 2. Start a new subarray from current element
 *
 * We extend if previous sum + current > current (i.e., previous sum > 0)
 *
 * Time: O(n) - single pass through array
 * Space: O(1) - only track current and max sum
 */
export const maxSubarraySum: MaxSubarraySumFn = (nums) => {
  let maxSum = nums[0]!
  let currentSum = nums[0]!
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i]!, currentSum + nums[i]!)
    maxSum = Math.max(maxSum, currentSum)
  }
  
  return maxSum
}
```

---

## Solution File Comment Style

For `*.solution.ts` files in problem folders, use extensive commenting:

```typescript
/**
 * Problem Name - Optimal Solution
 *
 * Approach: [Approach Name]
 *
 * Time Complexity: O(?) - [explanation]
 * Space Complexity: O(?) - [explanation]
 */
export type ProblemFn = (/* params */) => ReturnType

export const problemName: ProblemFn = (params) => {
  // ============================================================
  // STEP 1: [What this step does]
  // ============================================================
  // Why: [Explanation of why we do this]
  // Example: With input [1,2,3], this step produces [...]

  // [code]

  // ============================================================
  // STEP 2: [What this step does]
  // ============================================================
  // Trade-off: [Any trade-offs being made]
  // Edge case: [How edge cases are handled here]

  // [code]
}
```

**Required Comments:**
- Section headers with `===` dividers for major steps
- "Why" explanations for non-obvious decisions
- Examples showing transformations
- Trade-off explanations
- Edge case handling notes
