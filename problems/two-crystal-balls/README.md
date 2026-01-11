# Two Crystal Balls

| Property   | Value                                                   |
| ---------- | ------------------------------------------------------- |
| Difficulty | Medium                                                  |
| Category   | Search                                                  |
| Tags       | sqrt-decomposition, optimization, binary-search-variant |
| Companies  | Google, Amazon                                          |

**Source**: [Frontend Masters - The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/two-crystal-balls-problem/)

**Similar Problems**:

- [887. Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
- [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

---

## Problem Statement

Given two identical crystal balls that will break if dropped from a high enough distance, determine the **exact spot** (floor/height) at which they will break in the **most optimized way**.

You are given a building with `n` floors represented as a boolean array `breaks[]` where:

- `breaks[i] = false` means the ball will NOT break when dropped from floor `i`
- `breaks[i] = true` means the ball will break when dropped from floor `i`

The array is structured such that all `false` values come before all `true` values (i.e., once a ball breaks at floor `i`, it will break at all floors `>= i`).

**Return** the index of the first floor where the ball breaks, or `-1` if the ball never breaks.

---

## Constraints

| Constraint      | Value                                | Implication                        |
| --------------- | ------------------------------------ | ---------------------------------- |
| Array length    | `1 <= breaks.length <= 10^6`         | Need sub-linear or O(n) solution   |
| Crystal balls   | Exactly 2                            | Can only afford one "wasted" break |
| Array structure | Monotonic (all false, then all true) | Classic search problem             |
| Values          | `boolean[]`                          | false = safe, true = breaks        |

---

## Examples

### Example 1: Ball Breaks Mid-Array

```
Input: breaks = [false, false, false, true, true, true]
Output: 3
Explanation: Floor 3 is the first floor where the ball breaks
```

### Example 2: Ball Breaks at First Floor

```
Input: breaks = [true, true, true, true]
Output: 0
Explanation: Ball breaks at the very first floor
```

### Example 3: Ball Never Breaks

```
Input: breaks = [false, false, false, false]
Output: -1
Explanation: Ball doesn't break at any floor
```

### Example 4: Ball Breaks at Last Floor

```
Input: breaks = [false, false, false, false, true]
Output: 4
Explanation: Ball only breaks at the last floor
```

### Edge Cases to Consider

- **Empty array**: Should return `-1`
- **Single element array**: `[true]` → `0`, `[false]` → `-1`
- **All true**: First breaking point is index `0`
- **All false**: No breaking point, return `-1`
- **Break point at sqrt(n) boundaries**: Tests the jump logic

---

## Hints

<details>
<summary>Hint 1: Why Not Linear Search?</summary>

Linear search works but is O(n). With two crystal balls, you can be smarter. If you only had ONE ball, linear search would be your only option. But with two balls, what can you do differently?

</details>

<details>
<summary>Hint 2: Why Not Binary Search?</summary>

Binary search seems ideal for sorted data. But if you drop a ball from the middle and it breaks, you've used one ball. Now with only one ball left, what's your worst case for the remaining half? Think about the overall complexity.

</details>

<details>
<summary>Hint 3: The Jump Size Insight</summary>

What if you jumped by some fixed amount `k`? If the ball breaks, you go back and linear search `k` floors. How should you choose `k` to minimize the worst case? Think about balancing jumps vs linear search.

</details>

<details>
<summary>Hint 4: The Optimal Jump Size</summary>

If you jump by `k` floors, worst case is `n/k` jumps + `k` linear searches. To minimize this, set `n/k = k`, which gives `k = √n`. This achieves O(√n) time complexity!

</details>

---

## Approaches

### Approach 1: Linear Search (Brute Force)

**Intuition**: Drop from each floor starting from the bottom until it breaks.

**Algorithm**:

1. Start from floor 0
2. Drop ball from each floor sequentially
3. Return the first floor where it breaks

**Complexity**:

- **Time**: O(n) - may need to check every floor
- **Space**: O(1) - no extra space needed

**When to Use**: When you have unlimited balls (just checking linearly).

**Why It's Suboptimal**: Doesn't leverage the fact that we have 2 balls.

---

### Approach 2: Binary Search (Suboptimal)

**Intuition**: Use binary search since the array is sorted (all false then all true).

**Algorithm**:

1. Drop from middle floor
2. If breaks, search lower half with remaining ball (linear)
3. If doesn't break, search upper half

**Complexity**:

- **Time**: O(n) - Binary search is O(log n) for finding, but if ball breaks mid-array, linear search on half = O(n/2) = O(n)
- **Space**: O(1)

**Why It's Suboptimal**: When the first ball breaks, we're left with one ball and must do linear search. Worst case is still O(n).

---

### Approach 3: Square Root Decomposition (Optimal)

**Intuition**: Jump by √n floors with the first ball. If it breaks, linear search the previous √n floors with the second ball. This balances the jump phase and search phase.

**Algorithm**:

1. Calculate jump size: `k = √n`
2. **Phase 1 (Jump)**: Drop first ball every `k` floors until it breaks
3. **Phase 2 (Linear)**: Go back `k` floors and linear search with second ball

**Why √n?**

- If we jump by `k` floors, we make at most `n/k` jumps
- If ball breaks, we linear search at most `k` floors
- Total operations: `n/k + k`
- To minimize, take derivative and set to 0: optimal `k = √n`
- Total: `√n + √n = 2√n = O(√n)`

**Complexity**:

- **Time**: O(√n) - at most √n jumps + √n linear searches
- **Space**: O(1) - only a few variables

---

## Visual Walkthrough

### Example: `breaks = [F, F, F, F, F, T, T, T, T]` (length = 9, break at index 5)

```
n = 9, jumpAmount = √9 = 3

Phase 1: Jump by 3
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ F │ F │ F │ F │ F │ T │ T │ T │ T │
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
  0   1   2   3   4   5   6   7   8
          ↑           ↑
        i=3         i=6
      (safe)      (BREAKS!)

First ball: Check index 3 → false (safe)
First ball: Check index 6 → true (BREAKS!)

Phase 2: Go back to index 3, linear search forward
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ F │ F │ F │ F │ F │ T │ T │ T │ T │
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
  0   1   2   3   4   5   6   7   8
              ↑   ↑   ↑
             i=3 i=4 i=5
            safe safe BREAKS!

Second ball: Check index 3 → false (safe)
Second ball: Check index 4 → false (safe)
Second ball: Check index 5 → true (BREAKS!)

Return: 5 ✓

Total checks: 2 (jumps) + 3 (linear) = 5 checks
Linear search would take: 6 checks
```

### Worst Case Analysis: `n = 100`

```
Jump amount: √100 = 10

Worst case: Break happens at floor 99

Phase 1: Jump 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 (10 jumps)
         Ball breaks at 100

Phase 2: Linear search from 90 to 99 (10 checks max)
         Find break at 99

Total: 10 + 10 = 20 = 2√n operations

Compare to:
- Linear: 99 operations
- Binary (worst): ~50 operations
```

---

## Common Mistakes

### 1. Using Math.ceil Instead of Math.floor

```typescript
// POTENTIALLY WRONG (can overshoot on edge cases)
const jumpAmount = Math.ceil(Math.sqrt(breaks.length))

// CORRECT
const jumpAmount = Math.floor(Math.sqrt(breaks.length))
```

**Why**: Using `ceil` can cause you to jump past the array in edge cases.

### 2. Forgetting to Handle Empty Array

```typescript
// WRONG: Will crash on empty array
const jumpAmount = Math.floor(Math.sqrt(breaks.length)) // = 0, infinite loop!

// CORRECT: Early return
if (breaks.length === 0) return -1
```

### 3. Off-by-One in Linear Search Phase

```typescript
// WRONG: Starting from current position (ball already broke there)
for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
  if (breaks[i]) return i
}

// CORRECT: After going back, i is at the last safe position
// Need to check from i onwards (i was already checked as safe)
i -= jumpAmount // Go back
for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
  if (breaks[i]) return i
}
```

### 4. Not Checking Array Bounds

```typescript
// WRONG: May access beyond array
for (; i < breaks.length; i += jumpAmount) {
  if (breaks[i]) break
}

// CORRECT: Check bounds in both phases
for (; i < breaks.length; i += jumpAmount) {
  if (breaks[i]) break
}
// And also check in linear phase
for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
  if (breaks[i]) return i
}
```

---

## Interview Derivation: How to Arrive at √n

**This section answers: "How would I discover this approach in an interview?"**

This is NOT about proving √n mathematically. It's about the **thought process** that leads you there naturally when solving the problem out loud.

---

### Step 1: Start with What You Know

**You say**: "Let me start with the simplest approach - linear search from floor 1."

```
Linear search: O(n) time
```

**Interviewer may ask**: "Can you do better?"

---

### Step 2: Consider Binary Search (and Realize the Problem)

**You say**: "Since it's a sorted array (all false, then all true), binary search comes to mind..."

Then pause and think out loud:

**You say**: "Wait, if I drop from the middle and the ball breaks, I've used one ball. Now I only have one ball left for half the building. With one ball, I must do linear search. So worst case is still O(n/2) = O(n)."

**Key insight to verbalize**: "Binary search fails because using one ball forces me to be conservative with the other."

---

### Step 3: Ask the Right Question

**You say**: "So the problem is: how do I split the search so that BOTH phases are balanced?"

Frame it as an optimization:

- "If I jump by some amount `k`, I'll do about `n/k` jumps"
- "When the ball breaks, I linear search at most `k` floors"
- "Total work: `n/k + k`"

---

### Step 4: Find the Optimal Jump Size

**You say**: "I want to minimize `n/k + k`. What value of `k` balances these two terms?"

Two ways to explain this (pick the one you're comfortable with):

**Option A - Intuitive**:
"I want the jump work and the search work to be equal. If `n/k = k`, then `k² = n`, so `k = √n`."

**Option B - Concrete Example**:
"For n = 100:

- Jump by 10 → 10 jumps + 10 searches max = 20
- Jump by 5 → 20 jumps + 5 searches max = 25
- Jump by 20 → 5 jumps + 20 searches max = 25

10 = √100 gives the best balance."

---

### Step 5: State the Complexity

**You say**: "So with jumps of √n, we do at most √n jumps, then at most √n linear checks. Total: O(√n)."

---

### Complete Interview Script

Here's how a good interview explanation flows:

> "I'll start with linear search - O(n). But we have two balls, so we should leverage that.
>
> Binary search seems appealing since the array is sorted, but here's the issue: if my first ball breaks, I'm left with one ball and must linear search the remaining half. Worst case is still O(n).
>
> The key insight is that with two balls, I need to balance two phases: the jumping phase and the fallback linear search phase. If I jump by `k` floors, I do `n/k` jumps, and if the ball breaks, I do at most `k` linear searches.
>
> To minimize `n/k + k`, I want both terms equal: `n/k = k` gives `k = √n`.
>
> So I jump by √n floors at a time. If the ball breaks, I go back √n floors and linear search. Total operations: √n + √n = O(√n)."

---

### Common Interviewer Follow-ups

**Q: "How do you know √n is optimal?"**
A: "I'm balancing two costs. The total is `n/k + k`. This is minimized when both terms are equal - if jumps cost more than searches, I should jump less; if searches cost more, I should jump more. Equal means `n/k = k`, so `k = √n`."

**Q: "What if you had 3 balls?"**
A: "Same logic! With 3 balls, I'd have three phases. Jump by `n^(1/3)`, then by `(n^(1/3))^(1/2)` in the second phase. This generalizes to `O(n^(1/k))` with k balls."

**Q: "Can you prove √n is optimal more rigorously?"**
A: "For minimum of `f(k) = n/k + k`, take derivative: `f'(k) = -n/k² + 1 = 0`, giving `k = √n`. Second derivative is positive, confirming minimum."

---

### Key Interview Tips

1. **Start with brute force** - Shows you can solve the problem before optimizing
2. **Verbalize why binary search fails** - Shows deep understanding
3. **Frame as an optimization problem** - "I want to minimize total work"
4. **Use concrete numbers** - "For n=100, jumping by 10 means..."
5. **Connect to general pattern** - Mention this is "square root decomposition"

---

## Follow-up Questions

### Q1: What if you had k crystal balls instead of 2?

With `k` balls, the optimal strategy changes:

- With 2 balls: Jump by `n^(1/2)` = √n → O(√n)
- With 3 balls: Jump by `n^(1/3)` → O(n^(1/3))
- With k balls: Jump by `n^(1/k)` → O(n^(1/k))

This is the generalized **Egg Drop Problem**.

### Q2: What if we wanted to minimize expected drops (average case)?

The √n approach minimizes worst case. For average case:

- If breaks are uniformly distributed, √n is still good
- If breaks are more likely at certain positions, adaptive strategies help

### Q3: How does this relate to the Egg Drop Problem?

This is a simplified version of the Egg Drop Problem:

- Egg Drop: Minimize worst-case drops given `k` eggs and `n` floors
- Two Crystal Balls: Special case with `k = 2`
- General solution uses dynamic programming

---

## Related Problems

| Problem                                                                             | Relationship                            |
| ----------------------------------------------------------------------------------- | --------------------------------------- |
| [887. Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)                | General case with k eggs                |
| [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)          | Similar pattern, but unlimited "balls"  |
| [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) | Finding insertion point in sorted array |
| [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)          | Binary search variant                   |

---

## Key Takeaways

1. **Pattern**: Square root decomposition balances two phases of work
2. **Trade-off**: Binary search fails because one ball breaking forces O(n) fallback
3. **Insight**: To minimize `n/k + k`, set `k = √n`
4. **Remember**: With limited resources (2 balls), balance the cost of failure
5. **Interview Tip**: Explain WHY √n is optimal using the minimization argument
6. **Generalization**: With k balls, optimal is `n^(1/k)` jumps
