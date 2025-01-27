export function findThreeLargestNumbers(array: number[]) {
  let max: number | null = null
  let mid: number | null = null
  let min: number | null = null
  for(const num of array) {
    if(max === null || num >= max) {
      [min, mid, max] = [mid, max, num]
    } else if (mid === null || num >= mid) {
      [min, mid] = [mid, num]
    } else if (min === null || num > min) {
      min = num
    }
  }
  return [min, mid, max].filter(n => n !== null)
}
