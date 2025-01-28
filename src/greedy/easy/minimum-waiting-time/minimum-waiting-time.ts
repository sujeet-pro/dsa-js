export function minimumWaitingTime(queries: number[]) {
  queries.sort((a, b) => a - b)
  const waitingTime = new Array(queries.length).fill(0)
  for (let i = 1; i < queries.length; i++) {
    waitingTime[i] = waitingTime[i - 1] + queries[i - 1]
  }
  return waitingTime.reduce((a, b) => a + b, 0)
}
