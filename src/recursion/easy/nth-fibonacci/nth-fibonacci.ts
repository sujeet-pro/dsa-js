export function getNthFib(n: number, cache = new Map<number, number>()): number {
  if(n <= 1) return 0;
  if(n === 2) return 1;
  const cached = cache.get(n)
  if(cached !== undefined) {
    return cached
  }
  const res = getNthFib(n-1, cache) + getNthFib(n-2, cache)
  cache.set(n, res)
  return res
}

export function getNthFibIterative(n: number): number {
  if(n <= 1) return 0;
  if(n === 2) return 1;

  let a = 0
  let b = 1
  for(let i = 3; i <= n; i++) {
    [a,b] = [b, a+b]
  }
  return b;
}