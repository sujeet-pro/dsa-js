/**
 * This function takes two non-empty arrays of integers and finds the pair of numbers
 * (one from each array) whose absolute difference is closest to zero. It returns an
 * array containing these two numbers, with the number from the first array in the
 * first position.
 *
 * The absolute difference of two integers is the distance between them on the real
 * number line. For example, the absolute difference of -5 and 5 is 10, and the
 * absolute difference of -5 and -4 is 1.
 *
 * You can assume that there will only be one pair of numbers with the smallest difference.
 */
export function smallestDifference(arrayOne: number[], arrayTwo: number[]): [number, number] {
  // Write your code here.
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let idx1 = 0
  let idx2 = 0
  let result: [number, number] = [arrayOne[idx1]!, arrayTwo[idx2]!]
  let minDistance = distance(arrayOne[idx1]!, arrayTwo[idx2]!)
  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    const num1 = arrayOne[idx1]!
    const num2 = arrayTwo[idx2]!
    const currDistance = distance(num1, num2)
    if (currDistance === 0) {
      return [num1, num2]
    }
    if (currDistance < minDistance) {
      minDistance = currDistance
      result = [num1, num2]
    }

    if (num1 < num2) {
      idx1++
    } else {
      idx2++
    }
  }
  return result
}
function distance(a: number, b: number): number {
  return Math.abs(a - b)
}
