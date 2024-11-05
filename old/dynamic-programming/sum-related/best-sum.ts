type Result = number[] | null
export function bestSum(targetSum: number, numbers: number[], memo = new Map<number, number[] | null>()): Result {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (memo.has(targetSum)) return memo.get(targetSum)!
  let shortestCombination: Result = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers, memo)

    if (remainderCombination !== null) {
      const nextCombination = [...remainderCombination, num]
      if (shortestCombination === null || nextCombination.length < shortestCombination.length) {
        shortestCombination = nextCombination
      }
    }
  }
  memo.set(targetSum, shortestCombination)
  return shortestCombination
}
