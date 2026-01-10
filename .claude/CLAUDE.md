# Claude Code Instructions

This is a **Data Structures and Algorithms practice repository** focused on performance and strict TypeScript typing.

---

## Trigger Commands

### "Generate problem" - Full Problem Generation

When the user's prompt contains **"Generate problem"** or **"Generate a problem"**, execute the complete problem generation workflow:

1. **Research** the problem on LeetCode/HackerRank/GeeksforGeeks
2. **Create** the folder `problems/<problem-name>/` with:
   - `README.md` - Complete problem documentation with hints, approaches, examples
   - `<problem-name>.practise.ts` - Empty typed function for user to implement
   - `<problem-name>.solution.ts` - Heavily commented optimal solution
   - `<problem-name>.test.ts` - Exhaustive tests (15-20+ cases)
3. **Run tests** to verify the solution works
4. **Fix** any issues before completing
5. **Update** root `README.md` with link to the new problem

**Example prompts:**

- "Generate problem for Two Sum"
- "Generate a problem for Binary Search"
- "Generate problem: Merge Intervals"

See `docs-llms/QUESTION_GENERATION.md` for complete workflow details.

---

## Documentation References

**ALWAYS read the relevant documentation before any task:**

| Task             | Documentation                      |
| ---------------- | ---------------------------------- |
| Generate problem | `docs-llms/QUESTION_GENERATION.md` |
| Write code       | `docs-llms/CODE_GENERATION.md`     |
| Write tests      | `docs-llms/TESTING.md`             |

---

## Repository Structure

```
problems/                      # Generated problem packages
  <problem-name>/
    README.md                  # Problem documentation
    *.practise.ts              # Empty implementation for practice
    *.solution.ts              # Commented solution
    *.test.ts                  # Exhaustive tests
test-utils/                    # Testing utilities
notes/                         # Learning notes and references
docs-llms/                     # Documentation for AI agents
```

---

## Core Principles

1. **Performance First**: Optimize for time and space complexity
2. **Strict Typing**: No `any`, explicit types everywhere
3. **Multiple Implementations**: Provide brute force → optimal approaches
4. **Exhaustive Testing**: Cover ALL edge cases (15-20+ test cases)
5. **Educational Comments**: Solution files must be heavily commented

---

## Quick Reference

### Testing Utility

```typescript
import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { fn as solutionImpl, type FnType } from './name.solution.ts'
import { fn as practiceImpl } from './name.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<FnType>('name', implementations, (testEach) => {
  testEach('test description', (fn) => {
    expect(fn(input)).toBe(expected)
  })
})
```

### Common Commands

```bash
npm test                           # Run all tests
npm test -- problems/two-sum       # Run specific tests
npx tsc --noEmit                   # Type check
```

---

## Verification Checklist

Before completing any problem generation:

- [ ] All 4 files created (README, practise, solution, test)
- [ ] TypeScript compiles without errors
- [ ] Solution tests pass (at least 15 test cases)
- [ ] Solution file has extensive comments
- [ ] README has all sections (hints, approaches, examples, etc.)
- [ ] Root README.md updated with link to new problem
