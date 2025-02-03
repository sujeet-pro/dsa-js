/**
 * This function takes a non-empty array of distinct integers and a target sum as inputs.
 * It finds all unique triplets in the array that sum up to the target sum and returns them
 * as a two-dimensional array. Each triplet in the output array should be sorted in ascending order,
 * and the triplets themselves should also be sorted in ascending order based on their values.
 *
 * If no such triplets are found, the function returns an empty array.
 */
type Triplet = [number, number, number]

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const results: Triplet[] = []
  array.sort((a, b) => a - b)
  for (let i = 0; i < array.length - 2; i++) {
    const curr = array[i]!
    let leftIdx = i + 1
    let rightIdx = array.length - 1
    while (leftIdx < rightIdx) {
      const left = array[leftIdx]!
      const right = array[rightIdx]!
      const sum = curr + left + right
      if (sum === targetSum) {
        results.push([curr, array[leftIdx]!, array[rightIdx]!])
        rightIdx--
        leftIdx++
      } else if (sum > targetSum) {
        rightIdx--
      } else {
        leftIdx++
      }
    }
  }
  return results
}
