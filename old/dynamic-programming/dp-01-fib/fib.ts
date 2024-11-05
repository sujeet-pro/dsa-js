export function fib(n: number, memo = new Array<number>(n)): number {
  if (n <= 2) {
    return n
  }
  if (memo[n]) {
    return memo[n]
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}
