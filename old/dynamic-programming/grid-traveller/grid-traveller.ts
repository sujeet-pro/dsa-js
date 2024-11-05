// function getMemoSpace(m: number, n: number): number[][] {
//   return Array.from({ length: m + 1 }, () =>
//     Array.from({ length: n + 1 }, () => 0),
//   )
// }
// export function gridTraveller1(
//   m: number,
//   n: number,
//   memo = getMemoSpace(m, n),
// ): number {
//   if (m === 0 || n === 0) return 0
//   if (m === 1 && n === 1) return 1
//   if (memo[m]![n] !== 0) return memo[m]![n]!
//   memo[m]![n] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo)
//   return memo[m]![n]!
// }

export function gridTraveller(m: number, n: number, memo = new Map<string, number>()): number {
  if (m === 0 || n === 0) return 0
  if (m === 1 && n === 1) return 1

  const key = m > n ? `${m},${n}` : `${n},${m}`
  if (memo.has(key)) return memo.get(key)!

  const res = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo)
  memo.set(key, res)
  return res
}
