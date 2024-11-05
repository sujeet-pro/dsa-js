export function binarySearch(arr: number[], target: number) {
  if (arr.length === 0) return -1
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2)
    const midVal = arr[mid] as number
    if (midVal === target) return mid
    else if (midVal > target) high = mid - 1
    else low = mid + 1
  }
  return -1
}
