export function allConstruct(target: string, wordBank: string[], memo = new Map<string, string[][]>()): string[][] {
  if (target === '') return []
  if (memo.has(target)) return memo.get(target)!
  const res: string[][] = []
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const remRes = allConstruct(target.slice(word.length), wordBank, memo)
      if (remRes.length === 0) {
        res.push([word])
      } else {
        res.push(...remRes.map(words => [word, ...words]))
      }
    }
  }
  memo.set(target, res)
  return res
}
