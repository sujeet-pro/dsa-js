/**
 * This is not correct solution, use the solution-class
 */

function isTarget(arr: number[], midIdx: number, target: number) {
  const mid = arr[midIdx] as number
  if (mid === target) return true

  if (midIdx === 0 && target <= mid) {
    return true
  }
  const midPrev = arr[midIdx - 1] as number
  if (midPrev < target && target <= mid) {
    return true
  }
  return false
}

export function runningSum(arr: number[]) {
  const runningSumArr = [...arr]
  for (let i = 1; i < arr.length; i += 1) {
    const prev = runningSumArr[i - 1] as number
    runningSumArr[i] += prev
  }
  return runningSumArr
}

export function findIdx(arr: number[], target: number) {
  let lowIdx = 0
  let highIdx = arr.length - 1
  while (lowIdx <= highIdx) {
    const low = arr[lowIdx] as number
    // const high = arr[highIdx] as number
    const midIdx = Math.floor(lowIdx + (highIdx - lowIdx) / 2)
    const mid = arr[midIdx] as number
    if (isTarget(arr, midIdx, target)) return midIdx

    if (low <= target && target < mid) {
      highIdx = midIdx - 1
    } else {
      lowIdx = midIdx + 1
    }
  }
  return -1
}

export function randomPickWithWeight(weights: number[]): number {
  const runningSumArr = runningSum(weights)
  const min = runningSumArr[0] as number
  const max = runningSumArr[runningSumArr.length - 1] as number
  const randomNum = min + Math.floor((max - min) * Math.random())
  return findIdx(runningSumArr, randomNum)
}
