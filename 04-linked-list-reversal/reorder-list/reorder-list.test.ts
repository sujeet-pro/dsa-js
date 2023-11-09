import { SinglyLinkedList } from "../../ds/linked-list/singly-linked-list"
import { reverseSecondHalf } from "./reorder-list.solution"

const testCasesReverseHalf: Array<[number[], number[]]> = [
  [[], []],
  [[1], [1]],
  [[1, 2], [1, 2]],
  [[1, 2, 3], [1, 2, 3]],
  [[1, 2, 3, 4], [1, 2, 4, 3]],
  [[1, 2, 3, 4, 5], [1, 2, 3, 5, 4]],
  [[4, 2, 7, 8, 9, 0, 2], [4, 2, 7, 8, 2, 0, 9]]
]

describe('04 Linked List Reversal / Reorder', () => {
  test.each(testCasesReverseHalf)('Reorder linkedlist: %j', (inputArr, expectedArr) => {
    const linkedList = new SinglyLinkedList(inputArr)
    reverseSecondHalf(linkedList)
    expect(linkedList.toString()).toBe(expectedArr.toString())
  })
})

// const testCasesReverseHalf: Array<[number[], number[]]> = [
//   [[], []],
//   [[1], [1]],
//   [[1, 2], [2]],
//   [[1, 2, 3], [1, 3, 2]],
//   [[1, 2, 3, 4], [1, 4, 2, 3]],
//   [[1, 2, 3, 4, 5], [1, 5, 2, 4, 3]],
//   [[4, 2, 7, 8, 9, 0, 2], [4, 2, 2, 0, 7, 9, 8]]
// ]