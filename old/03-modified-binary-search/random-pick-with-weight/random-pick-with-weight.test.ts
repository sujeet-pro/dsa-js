import { RandomPickWithWeight } from './random-pick-with-weight.solution'

const testCases = [
  [[1, 2, 3, 4, 5]],
  // [[1, 12, 23, 34, 45, 56, 67, 78, 89, 90]],
  [[10, 20, 30, 40, 50]],
  [[1, 10, 23, 32, 41, 56, 62, 75, 87, 90]],
  [[12, 20, 35, 42, 55]],
  [[10, 10, 10, 10, 10]],
  [[10, 10, 20, 20, 20, 30]],
  [[1, 2, 3]],
  [[10, 20, 30, 40]],
  [[5, 10, 15, 20, 25, 30]],
] as const

function executeMultipleTimes(weights: readonly number[]) {
  const resCounts = weights.map(() => 0)
  const iteration = weights.length * 5000
  const weightInstance = new RandomPickWithWeight(weights)
  for (let i = 0; i <= iteration; i += 1) {
    const resIdx = weightInstance.pickIndex()
    resCounts[resIdx]! += 1
  }

  const maxWeight = Math.max(...weights)
  const maxWeightAllIdx = weights.map((weight, idx) => (weight === maxWeight ? idx : -1)).filter(u => u !== -1)
  const maxResCount = Math.max(...resCounts)
  const maxReturnAllIdx = resCounts.map((resCount, idx) => (resCount === maxResCount ? idx : -1)).filter(u => u !== -1)
  return maxReturnAllIdx.some(idx => maxWeightAllIdx.includes(idx))
}

describe('03 Modified Binary Search / Random Weighted Picks', () => {
  test.each(testCases)('weight=%j', weights => {
    const res = executeMultipleTimes(weights)
    expect(res).toBe(true)
  })
})
