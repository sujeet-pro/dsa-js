function inRange(a: number, b: number, target: number) {
  return a <= target && target <= b
}

export function binarySearchRotated(nums: readonly number[], target: number) {
  let lowIdx = 0
  let highIdx = nums.length - 1

  while (lowIdx <= highIdx) {
    const midIdx = Math.floor(lowIdx + (highIdx - lowIdx) / 2)
    const low = nums[lowIdx] as number
    const mid = nums[midIdx] as number
    const high = nums[highIdx] as number

    if (mid === target) return midIdx
    if (low <= mid) { // left is sorted
      if (inRange(low, mid, target)) {
        highIdx = midIdx - 1
      } else {
        lowIdx = midIdx + 1
      }
    } else { // right is sorted
      if (inRange(mid, high, target)) {
        lowIdx = midIdx + 1
      } else {
        highIdx = midIdx - 1
      }
    }

  }
  return -1
}

