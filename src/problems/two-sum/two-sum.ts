/**
 * Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 */

export function twoSum(nums: number[], target: number): [number, number] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === undefined) continue

    const complement = target - num
    const complementIndex = map.get(complement)
    if (complementIndex !== undefined) {
      return [complementIndex, i]
    }

    map.set(num, i)
  }

  throw new Error('No solution found')
}

// Run with: npx tsx src/problems/two-sum.ts
if (import.meta.url === `file://${String(process.argv[1])}`) {
  console.log('Running two-sum with sample inputs...\n')

  const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 },
  ]

  for (const { nums, target } of testCases) {
    const result = twoSum(nums, target)
    console.log(`nums: [${nums.join(', ')}], target: ${String(target)}`)
    console.log(`result: [${result.join(', ')}]\n`)
  }
}
