# DSA - Data Structures & Algorithms

A comprehensive practice repository for DSA problems with detailed documentation, multiple approaches, and exhaustive test coverage.

## Problems

| #   | Problem                                          | Difficulty | Category          | Tags                              |
| --- | ------------------------------------------------ | ---------- | ----------------- | --------------------------------- |
| 1   | [Two Sum](problems/two-sum/)                     | Easy       | Array, Hash Table | hash-map, complement              |
| 2   | [Binary Search](problems/binary-search/)         | Easy       | Searching         | binary-search, divide-and-conquer |
| 3   | [Two Crystal Balls](problems/two-crystal-balls/) | Medium     | Search            | sqrt-decomposition, optimization  |

**Total**: 3 problems | **Easy**: 2 | **Medium**: 1

## How to Use

- **Practice**: Implement your solution in the `.practise.ts` file
- **Learn**: Read the problem `README.md` for hints, approaches, and visual walkthroughs
- **Reference**: Check the `.solution.ts` file for optimal implementations with detailed comments
- **Test**: Run `npm test` to verify your implementation against exhaustive test cases

## Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests for a specific problem
npm test -- problems/two-sum

# Type check
npx tsc --noEmit
```

## Repository Structure

```
problems/                  # Problem packages
  <problem-name>/
    README.md              # Problem documentation with hints and approaches
    <name>.practise.ts     # Empty typed function for practice
    <name>.solution.ts     # Heavily commented optimal solution
    <name>.test.ts         # Exhaustive test cases (15-20+)
test-utils/                # Testing utilities
notes/                     # Learning notes and references
docs-llms/                 # Documentation for AI agents
```

## Generate New Problems

Use the command: `Generate problem for [Problem Name]`

Examples:

- "Generate problem for Two Sum"
- "Generate a problem for Merge Intervals"
- "Generate problem: Longest Substring Without Repeating Characters"
