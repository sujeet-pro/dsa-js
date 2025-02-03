/**
 * Write a function that takes in an array of integers and
 * returns the length of the longest peak in the array.
 *
 * A peak is defined as adjacent integers in the array that are strictly increasing
 * until they reach a tip (the highest value in the peak),
 * at which point they become strictly decreasing.
 * At least three integers are required to form a peak.
 *
 * For example:
 * - The integers [1, 4, 10, 2] form a peak.
 * - The integers [4, 0, 10] do not form a peak.
 * - The integers [1, 2, 2, 0] do not form a peak.
 * - The integers [1, 2, 3] do not form a peak because there aren't any strictly decreasing integers after the 3.
 */
export function longestPeak(array: number[]): number {
  let longestPeakLen = 0
  let i = 1
  while (i < array.length - 1) {
    const isPeak = array[i - 1]! < array[i]! && array[i]! > array[i + 1]!
    if (!isPeak) {
      i++
      continue
    }
    let leftIdx = i - 2
    while (leftIdx >= 0 && array[leftIdx]! < array[leftIdx + 1]!) {
      leftIdx--
    }
    let rightIdx = i + 2
    while (rightIdx < array.length && array[rightIdx - 1]! > array[rightIdx]!) {
      rightIdx++
    }
    const currentPeak = rightIdx - leftIdx - 1
    longestPeakLen = Math.max(longestPeakLen, currentPeak)
    i = rightIdx
  }
  return longestPeakLen
}
