export function binarySearch(array: number[], target: number): number {
  if(array.length === 0) return -1
  // Write your code here.
  let low = 0
  let high = array.length - 1
  while(low <= high) {
    const midIdx = Math.floor(low + (high - low) / 2)
    const midNum = array[midIdx]!
    if(midNum === target) return midIdx
    if(midNum > target) {
      high = midIdx - 1
    } else {
      low = midIdx + 1
    }
  }
  return -1;
}
