export function howSum(
  targetSum: number,
  numbers: number[],
  memo: Map<number, number[] | null> = new Map(),
): number[] | null {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (memo.has(targetSum)) return memo.get(targetSum)!

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)

    if (remainderResult !== null) {
      const res = [...remainderResult, num]
      memo.set(targetSum, res)
      return res
    }
  }
  memo.set(targetSum, null)
  return null
}
