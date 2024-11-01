import { SinglyLinkedList } from '../../ds/linked-list/singly-linked-list'
import { reverseSecondHalf, reOrderNode } from './reorder-list.solution'

const testCasesReverseHalf: Array<[number[], number[]]> = [
  [[], []],
  [[1], [1]],
  [
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 4, 3],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 5, 4],
  ],
  [
    [4, 2, 7, 8, 9, 0, 2],
    [4, 2, 7, 8, 2, 0, 9],
  ],
]

describe('04 Linked List Reversal / Reverse half', () => {
  test.each(testCasesReverseHalf)('Reverse half linkedlist: %j', (inputArr, expectedArr) => {
    const linkedList = new SinglyLinkedList(inputArr)
    reverseSecondHalf(linkedList)
    expect(linkedList.toString()).toBe(expectedArr.toString())
  })
})

const testCasesReorder: Array<[number[], number[]]> = [
  [[], []],
  [
    [1, 1, 2, 2, 3, -1, 10, 12],
    [1, 12, 1, 10, 2, -1, 2, 3],
  ],
  [
    [10, 20, -22, 21, -12],
    [10, -12, 20, 21, -22],
  ],
  [
    [1, 3, 5, 7, 9, 10, 8, 6, 4, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ],
  [
    [1, 2, 3, 4, 5, 6],
    [1, 6, 2, 5, 3, 4],
  ],
  [
    [7, 0, 10, 13, 12, 19, 1, 3, 6, 7, 4, 2, 11],
    [7, 11, 0, 2, 10, 4, 13, 7, 12, 6, 19, 3, 1],
  ],
]

describe('04 Linked List Reversal / Reorder', () => {
  test.each(testCasesReorder)('Reorder linkedlist: %j', (inputArr, expectedArr) => {
    const linkedList = new SinglyLinkedList(inputArr)
    reOrderNode(linkedList)
    expect(linkedList.toString()).toBe(expectedArr.toString())
  })
})
