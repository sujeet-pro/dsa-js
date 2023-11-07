import { binarySearchRotated } from "./rotated-sorted-array.solution"

const testCases = [
  [[6, 7, 1, 2, 3, 4, 5], 3],
  [[6, 7, 1, 2, 3, 4, 5], 6],
  [[4, 5, 6, 1, 2, 3], 3],
  [[4, 5, 6, 1, 2, 3], 6],
  [[4], 1]
] as const


describe('03 Modified Binary Search / Rotated Sorted Array', () => {
  test.each(testCases)('findIndex(%j, %i)', (arr, target) => {
    const res = binarySearchRotated(arr, target)
    const expectedIdx = arr.findIndex(t => t === target)
    expect(res).toBe(expectedIdx)
  })
})