export function canConstruct(target: string, wordBank: string[], memo = new Map<string, boolean>()): boolean {
  if (target === '') return true
  if (memo.has(target)) return memo.get(target)!
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const res = canConstruct(target.slice(word.length), wordBank, memo)
      memo.set(target, true)
      if (res) return true
    }
  }

  memo.set(target, false)
  return false
}
