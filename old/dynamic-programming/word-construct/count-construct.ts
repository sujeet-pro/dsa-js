export function countContruct(target: string, wordBank: string[], memo = new Map<string, number>()): number {
  if (target === '') return 1
  if (memo.has(target)) return memo.get(target)!
  let count = 0
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      count += countContruct(target.slice(word.length), wordBank, memo)
    }
  }
  memo.set(target, count)
  return count
}
