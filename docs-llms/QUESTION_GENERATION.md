# Problem Generation Guidelines

This document provides the complete workflow for generating DSA problems. When triggered, this creates a full problem package ready for practice and revision.

## Trigger Keyword

When the user's prompt contains **"Generate problem"** or **"Generate a problem"**, execute the complete problem generation workflow described below.

**Example prompts that trigger this workflow:**

- "Generate problem for Two Sum"
- "Generate a problem for Binary Search"
- "Generate problem: Merge Sort"

## Complete Problem Generation Workflow

When triggered, you MUST:

1. **Research** the problem thoroughly
2. **Create** the complete folder structure with all files
3. **Run tests** to verify solution correctness
4. **Fix** any failing tests before completing

### Generated File Structure

```
problems/<problem-name>/
├── README.md                    # Complete problem documentation
├── <problem-name>.practise.ts   # Empty typed function for practice
├── <problem-name>.solution.ts   # Heavily commented optimal solution
└── <problem-name>.test.ts       # Exhaustive test cases
```

### Example: "Generate problem for Two Sum"

Creates:

```
problems/two-sum/
├── README.md
├── two-sum.practise.ts
├── two-sum.solution.ts
└── two-sum.test.ts
```

---

## File Specifications

### 1. README.md - Problem Documentation

Contains everything needed to understand and solve the problem:

- Problem title and metadata (difficulty, tags, companies)
- Complete problem statement
- Constraints with implications
- Multiple examples with explanations
- Progressive hints (collapsible)
- All approaches from brute force to optimal
- Visual walkthroughs where applicable
- Common mistakes with fixes
- Follow-up questions
- Related problems
- Key takeaways for revision

See the [README Template](#readme-template) section below.

---

### 2. `<problem-name>.practise.ts` - Practice File

An empty implementation for the user to practice:

```typescript
/**
 * Problem Name
 *
 * [Brief problem description - 1-2 sentences]
 *
 * @see README.md for full problem description, hints, and approaches
 */
export type ProblemFn = (/* params with types */) => ReturnType

/**
 * Your solution here.
 *
 * Hints:
 * - See README.md for progressive hints
 * - Think about the time/space complexity you're targeting
 * - Consider edge cases: empty input, single element, duplicates
 */
export const problemName: ProblemFn = (/* params */) => {
  // TODO: Implement your solution
  throw new Error('Not implemented')
}
```

**Requirements:**

- Export the function type
- Export a single function with the correct signature
- Include a brief description referencing README.md
- Include helpful comments pointing to hints
- Function body throws "Not implemented" error

---

### 3. `<problem-name>.solution.ts` - Commented Solution

The optimal solution with extensive comments explaining everything:

```typescript
/**
 * Problem Name - Optimal Solution
 *
 * Approach: [Name of approach, e.g., "One-Pass Hash Map"]
 *
 * Time Complexity: O(n) - [explanation]
 * Space Complexity: O(n) - [explanation]
 *
 * @see README.md for alternative approaches and full explanation
 */
export type ProblemFn = (/* params with types */) => ReturnType

/**
 * Optimal solution using [approach name].
 *
 * Key Insight:
 * [Explain the core insight that makes this solution work]
 *
 * Algorithm:
 * 1. [Step 1]
 * 2. [Step 2]
 * ...
 */
export const problemName: ProblemFn = (/* params */) => {
  // ============================================================
  // STEP 1: [Description of what this step does]
  // ============================================================
  // Why: [Explain why we do this]
  // Example: [Show what happens with sample input]
  // [code for step 1]
  // ============================================================
  // STEP 2: [Description of what this step does]
  // ============================================================
  // Why: [Explain why we do this]
  // Trade-off: [Explain any trade-offs made]
  // [code for step 2]
  // ... continue with heavily commented implementation
}
```

**Comment Requirements:**

- Header with approach name and complexity
- Key insight explanation
- Step-by-step algorithm overview
- Section headers for major steps (using `===` dividers)
- "Why" explanations for non-obvious decisions
- Examples showing what happens with sample data
- Trade-off explanations where applicable
- Edge case handling explanations

---

### 4. `<problem-name>.test.ts` - Exhaustive Tests

Test file that imports from both practice and solution files:

```typescript
import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'

// Import from solution file (verified working)
import { problemName as solutionImpl, type ProblemFn } from './problem-name.solution.ts'

// Import from practice file (user's implementation)
import { problemName as practiceImpl } from './problem-name.practise.ts'

// Test both implementations
// Note: Practice tests will fail until user implements the solution
const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<ProblemFn>('problemName', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should handle basic case', (fn) => {
    expect(fn(/* basic input */)).toEqual(/* expected */)
  })

  // ============================================================
  // EDGE CASES
  // ============================================================

  testEach('should handle empty input', (fn) => {
    expect(fn(/* empty */)).toEqual(/* expected */)
  })

  testEach('should handle single element', (fn) => {
    expect(fn(/* single */)).toEqual(/* expected */)
  })

  // ============================================================
  // BOUNDARY CONDITIONS
  // ============================================================

  testEach('should handle minimum values', (fn) => {
    expect(fn(/* min values */)).toEqual(/* expected */)
  })

  testEach('should handle maximum values', (fn) => {
    expect(fn(/* max values */)).toEqual(/* expected */)
  })

  // ============================================================
  // SPECIAL VALUES
  // ============================================================

  testEach('should handle zeros', (fn) => {
    expect(fn(/* zeros */)).toEqual(/* expected */)
  })

  testEach('should handle negative numbers', (fn) => {
    expect(fn(/* negatives */)).toEqual(/* expected */)
  })

  // ============================================================
  // DUPLICATES AND REPETITION
  // ============================================================

  testEach('should handle duplicate values', (fn) => {
    expect(fn(/* duplicates */)).toEqual(/* expected */)
  })

  // ============================================================
  // NOT FOUND / FAILURE CASES
  // ============================================================

  testEach('should handle not found case', (fn) => {
    expect(fn(/* not found input */)).toEqual(/* expected */)
  })

  // ... minimum 15-20 test cases covering all categories
})
```

**Test Requirements:**

- Import type from solution file
- Import both solution and practice implementations
- Use `testImplementations` utility
- Organize tests with section headers
- Minimum 15-20 test cases
- Cover all categories: basic, edge, boundary, special, duplicates, not found
- Include performance test for large inputs if applicable

---

## Verification Steps (MANDATORY)

After generating all files, you MUST:

### 1. Run TypeScript Check

```bash
npx tsc --noEmit
```

Fix any type errors before proceeding.

### 2. Run Tests (Solution Only)

First, temporarily modify the test file to only test the solution:

```typescript
const implementations = {
  solution: solutionImpl,
  // practice: practiceImpl,  // Comment out until user implements
}
```

Then run:

```bash
npm test -- problems/<problem-name>/<problem-name>.test.ts
```

### 3. Verify All Tests Pass

- If tests fail, fix the solution and/or test cases
- Do not complete until all solution tests pass
- This ensures both the solution is correct AND test cases are valid

### 4. Restore Practice Import

Uncomment the practice import so user can test their implementation:

```typescript
const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}
```

### 5. Update Root README (MANDATORY)

After all tests pass, add the new problem to the root `/README.md` problems table:

1. Open `/README.md`
2. Find the "## Problems" section with the table
3. Add a new row with:
   - **#**: Increment from the last problem number
   - **Problem**: `[Problem Name](problems/<problem-name>/)`
   - **Difficulty**: Easy/Medium/Hard
   - **Category**: Main category (e.g., Array, Hash Table, Searching)
   - **Tags**: Key algorithmic tags
4. Update the summary line with new counts

**Example row to add:**

```markdown
| 4 | [Merge Intervals](problems/merge-intervals/) | Medium | Array, Sorting | intervals, sorting |
```

**Example summary update:**

```markdown
**Total**: 4 problems | **Easy**: 2 | **Medium**: 2
```

---

## Research Requirements (MANDATORY)

Before generating any files, you MUST research:

### 1. Problem Research

- Search LeetCode, HackerRank, GeeksforGeeks for the problem
- Find the official difficulty rating
- Identify companies that ask this question
- Find similar/related problems

### 2. Solution Research

- Review top-voted solutions and discussions
- Identify ALL known approaches (not just optimal)
- Find common mistakes from discussion threads
- Note any tricky edge cases people mention

### 3. Test Case Research

- Find edge cases that commonly trip people up
- Check discussion forums for tricky inputs
- Understand constraint boundaries for boundary tests

---

## README Template

````markdown
# [Problem Name]

| Difficulty         | Category   | Tags   | Companies   |
| ------------------ | ---------- | ------ | ----------- |
| [Easy/Medium/Hard] | [Category] | [tags] | [Companies] |

**LeetCode**: [#. Problem Name](url)
**Similar Problems**: [Related problem links]

## Problem Statement

[Complete problem description]

## Constraints

| Constraint | Value | Implication |
| ---------- | ----- | ----------- |
|            |       |             |

## Examples

### Example 1: Basic Case

```
Input:
Output:
Explanation:
```

### Example 2: [Description]

```
Input:
Output:
Explanation:
```

### Edge Cases to Consider

- [Edge case 1]
- [Edge case 2]

## Hints

<details>
<summary>Hint 1: Starting Point</summary>
[Vague hint to get started]
</details>

<details>
<summary>Hint 2: Key Insight</summary>
[More specific hint about the approach]
</details>

<details>
<summary>Hint 3: Data Structure</summary>
[Hint about what data structure to use]
</details>

<details>
<summary>Hint 4: Optimization</summary>
[Hint about how to optimize]
</details>

## Approaches

### Approach 1: Brute Force

**Intuition**: [Why this approach makes sense as a starting point]

**Algorithm**:

1. [Step 1]
2. [Step 2]

**Complexity**:

- Time: O(?) - [explanation]
- Space: O(?) - [explanation]

**When to Use**: [When this approach is acceptable]

---

### Approach 2: [Name] (Optimal)

**Intuition**: [Key insight that enables this approach]

**Algorithm**:

1. [Step 1]
2. [Step 2]

**Why This Works**: [Detailed explanation]

**Complexity**:

- Time: O(?) - [explanation]
- Space: O(?) - [explanation]

## Visual Walkthrough

[ASCII diagram or step-by-step trace through an example]

## Common Mistakes

### 1. [Mistake Name]

```typescript
// WRONG
[incorrect code]

// CORRECT
[correct code]
```

**Why**: [Explanation of the mistake]

### 2. [Mistake Name]

[...]

## Interview Derivation (REQUIRED for mathematical/generic solutions)

When a problem has a mathematical or non-obvious optimal solution (e.g., √n jumping,
mathematical formulas, specific constants), you MUST include this section explaining
how to arrive at the solution during an interview.

### How to Arrive at This Solution

**This section answers: "How would I discover this approach in an interview?"**

**Step 1: Start with Brute Force**
[What's the naive approach and its complexity?]

**Step 2: Identify the Bottleneck**
[What's making the brute force slow?]

**Step 3: Ask the Right Question**
[What question leads to the insight?]

**Step 4: Explore Trade-offs**
[What trade-offs can we make? What if we had more/fewer resources?]

**Step 5: Find the Balance Point**
[How do we arrive at the optimal parameter/approach?]

**Interview Tips**:

- [Tip for communicating this thinking process]
- [Common interviewer questions to expect]
- [How to justify your approach]

## Follow-up Questions

### Q1: [Follow-up question]

[Answer/approach]

### Q2: [Follow-up question]

[Answer/approach]

## Related Problems

| Problem              | Relationship     |
| -------------------- | ---------------- |
| [Problem Name](link) | [How it relates] |

## Key Takeaways

1. **Pattern**: [What pattern this problem teaches]
2. **Trade-off**: [Key trade-off to remember]
3. **Trick**: [Key trick or insight]
4. **Remember**: [Important thing to remember for interviews]
````

---

## Complete Example Files

### two-sum.practise.ts

```typescript
/**
 * Two Sum
 *
 * Given an array of integers and a target sum, return indices of two numbers
 * that add up to the target.
 *
 * @see README.md for full problem description, hints, and approaches
 */
export type TwoSumFn = (nums: number[], target: number) => [number, number]

/**
 * Your solution here.
 *
 * Hints:
 * - See README.md for progressive hints
 * - Think about the time/space complexity you're targeting
 * - Consider: How can you find the complement of each number efficiently?
 */
export const twoSum: TwoSumFn = (nums, target) => {
  // TODO: Implement your solution
  throw new Error('Not implemented')
}
```

### two-sum.solution.ts

```typescript
/**
 * Two Sum - Optimal Solution
 *
 * Approach: One-Pass Hash Map
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - hash map stores at most n elements
 *
 * @see README.md for alternative approaches and full explanation
 */
export type TwoSumFn = (nums: number[], target: number) => [number, number]

/**
 * Optimal solution using one-pass hash map.
 *
 * Key Insight:
 * For each number, we need to find if its complement (target - num) exists.
 * Instead of searching the array each time (O(n)), we use a hash map for O(1) lookup.
 * We can build the map while searching - when we find a number, its complement
 * (if it exists) is already in the map.
 *
 * Algorithm:
 * 1. Create a map to store {value → index}
 * 2. For each number, check if complement exists in map
 * 3. If found, return both indices; otherwise, add current to map
 */
export const twoSum: TwoSumFn = (nums, target) => {
  // ============================================================
  // SETUP: Create hash map for O(1) complement lookup
  // ============================================================
  // Why: Array.indexOf() is O(n), making overall solution O(n²)
  //      Map.get() is O(1), making overall solution O(n)
  const numToIndex = new Map<number, number>()

  // ============================================================
  // MAIN LOOP: Check each number and its complement
  // ============================================================
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]!

    // ------------------------------------------------------------
    // Calculate the complement we're looking for
    // ------------------------------------------------------------
    // Example: target=9, currentNum=7 → complement=2
    // If 2 exists in map, we found our pair!
    const complement = target - currentNum

    // ------------------------------------------------------------
    // Check if complement was seen before
    // ------------------------------------------------------------
    // Why check map first, then add?
    // - Prevents using same element twice (required by problem)
    // - When we find a pair, the first element is guaranteed to be
    //   at a different index (it was added in a previous iteration)
    const complementIndex = numToIndex.get(complement)

    if (complementIndex !== undefined) {
      // --------------------------------------------------------
      // FOUND! Return indices in order [earlier, current]
      // --------------------------------------------------------
      // complementIndex is always < i because we check before adding
      return [complementIndex, i]
    }

    // ------------------------------------------------------------
    // Not found yet - add current number to map
    // ------------------------------------------------------------
    // Note: If duplicate values exist, later index overwrites earlier.
    // This is fine because:
    // - If duplicates form the answer, we catch it when checking complement
    // - If not, we only need one index per value
    numToIndex.set(currentNum, i)
  }

  // ============================================================
  // ERROR: No solution found
  // ============================================================
  // Problem guarantees exactly one solution exists, so this shouldn't happen
  // Including for type safety and defensive programming
  throw new Error('No solution found')
}
```

### two-sum.test.ts

```typescript
import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { twoSum as solutionImpl, type TwoSumFn } from './two-sum.solution.ts'
import { twoSum as practiceImpl } from './two-sum.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<TwoSumFn>('twoSum', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should find two numbers at beginning', (fn) => {
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  testEach('should find two numbers in middle', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 7)).toEqual([2, 4])
  })

  testEach('should find two numbers at end', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 9)).toEqual([3, 4])
  })

  testEach('should work when solution not at beginning', (fn) => {
    expect(fn([3, 2, 4], 6)).toEqual([1, 2])
  })

  // ============================================================
  // EDGE CASES - MINIMUM INPUT
  // ============================================================

  testEach('should handle two element array', (fn) => {
    expect(fn([1, 2], 3)).toEqual([0, 1])
  })

  // ============================================================
  // DUPLICATE VALUES
  // ============================================================

  testEach('should handle duplicate values forming answer', (fn) => {
    expect(fn([3, 3], 6)).toEqual([0, 1])
  })

  testEach('should handle duplicates not forming answer', (fn) => {
    expect(fn([3, 3, 2, 4], 6)).toEqual([0, 1])
  })

  testEach('should handle multiple duplicates', (fn) => {
    expect(fn([1, 1, 1, 1, 2], 3)).toEqual([0, 4])
  })

  // ============================================================
  // NEGATIVE NUMBERS
  // ============================================================

  testEach('should handle negative numbers', (fn) => {
    expect(fn([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })

  testEach('should handle mixed positive and negative', (fn) => {
    expect(fn([-3, 4, 3, 90], 0)).toEqual([0, 2])
  })

  testEach('should handle negative target', (fn) => {
    expect(fn([1, -2, 3, -4], -6)).toEqual([1, 3])
  })

  // ============================================================
  // ZERO
  // ============================================================

  testEach('should handle zero in array', (fn) => {
    expect(fn([0, 4, 3, 0], 0)).toEqual([0, 3])
  })

  testEach('should handle zero as part of sum', (fn) => {
    expect(fn([0, 1, 2, 3], 3)).toEqual([0, 3])
  })

  // ============================================================
  // LARGE NUMBERS
  // ============================================================

  testEach('should handle large numbers', (fn) => {
    const large = 10 ** 9
    expect(fn([large, 1, 2, large], large * 2)).toEqual([0, 3])
  })

  testEach('should handle large target', (fn) => {
    expect(fn([10 ** 9 - 1, 1, 2], 10 ** 9)).toEqual([0, 1])
  })

  // ============================================================
  // PERFORMANCE
  // ============================================================

  testEach('should handle large array efficiently', (fn) => {
    const size = 10000
    const arr = Array.from({ length: size }, (_, i) => i)
    // Find last two elements
    expect(fn(arr, size * 2 - 3)).toEqual([size - 2, size - 1])
  })
})
```

---

## Rules for LLMs

### MUST Do

1. **ALWAYS** research the problem before generating any files
2. **ALWAYS** create all four files (README, practise, solution, test)
3. **ALWAYS** run tests and verify solution passes before completing
4. **ALWAYS** add extensive comments in solution file
5. **ALWAYS** include 15-20+ test cases covering all categories
6. **ALWAYS** export function type from both practise and solution files
7. **ALWAYS** use `testImplementations` utility in test file
8. **ALWAYS** update root README.md with link to new problem
9. **ALWAYS** include "Interview Derivation" section in README when solution involves mathematical formulas, specific constants (like √n), or non-obvious optimal approaches

### MUST NOT Do

1. **NEVER** skip the research step
2. **NEVER** provide an incomplete file structure
3. **NEVER** leave failing tests
4. **NEVER** skip comments in the solution file
5. **NEVER** generate fewer than 15 test cases
6. **NEVER** skip edge case testing
