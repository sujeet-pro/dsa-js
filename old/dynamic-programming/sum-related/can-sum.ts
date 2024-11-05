export function canSum(targetSum: number, numbers: number[], memo = new Set<number>()): boolean {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  if (memo.has(targetSum)) return false

  for (let num of numbers) {
    const remainder = targetSum - num
    if (canSum(remainder, numbers, memo)) {
      return true
    }
  }

  memo.add(targetSum)
  return false
}

/**
 * 
export function canSum(
  targetSum: number,
  numbers: number[],
  idx = 0,
  memo = new Map<string, boolean>(),
): boolean {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  if (idx === numbers.length) return false
  const key = `${targetSum}-${idx}`
  if (memo.has(key)) return memo.get(key)!
  const res =
    canSum(targetSum - numbers[idx]!, numbers, idx) ||
    canSum(targetSum - numbers[idx]!, numbers, idx + 1) ||
    canSum(targetSum, numbers, idx + 1)
  memo.set(key, res)
  return res
}

 */
