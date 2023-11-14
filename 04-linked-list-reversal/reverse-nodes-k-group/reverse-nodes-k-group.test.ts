import { SinglyLinkedList } from "../../ds/linked-list/singly-linked-list"
import { reverseKGroups } from "./reverse-nodes-k-group.solution"

const testCases = [
  [[1, 2, 3, 4, 5], 2, [2, 1, 4, 3, 5]],
  [[3, 4, 5, 6, 2, 8, 7, 7], 3, [5, 4, 3, 8, 2, 6, 7, 7]],
  [[1, 2, 3, 4, 5], 1, [1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5, 6, 7], 3, [3, 2, 1, 6, 5, 4, 7]],
  [[1, 2, 3, 4, 5, 6, 7], 7, [7, 6, 5, 4, 3, 2, 1]]
] as const

describe('04 - LinkedList Reversal / Reverse Nodes in K Group', () => {
  test.each(testCases)('Reverse %j first %i', (inputArr, k, outputArr) => {
    const linkedList = new SinglyLinkedList(inputArr)
    const result = reverseKGroups(linkedList, k)
    const resultArr = [...result]
    expect(resultArr).toEqual(expect.arrayContaining(outputArr))
    expect(resultArr.toString()).toBe(outputArr.toString())
  })
})