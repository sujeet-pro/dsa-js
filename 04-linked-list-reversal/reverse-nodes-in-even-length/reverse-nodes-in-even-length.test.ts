import { SinglyLinkedList } from '../../ds/linked-list/singly-linked-list'
import { reverseNodeInEvenPlace } from './reverse-nodes-in-even-length.solution'

const testCases = [
  [[1], [1]],
  [
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2, 3],
    [1, 3, 2],
  ],
  [
    [1, 2, 3, 4],
    [1, 3, 2, 4],
  ],
  [
    [10, 1, 2, 3, 4, 5],
    [10, 2, 1, 3, 4, 5],
  ],
  [
    [28, 21, 14, 7],
    [28, 14, 21, 7],
  ],
  [
    [11, 12, 13, 14, 15],
    [11, 13, 12, 15, 14],
  ],
]

describe('04 Linked List Reversal / Reverse nodes in even length', () => {
  test.each(testCases)('ReverseInEvenPlace(%j)', (input, output) => {
    const inputLinkedList = new SinglyLinkedList(input)
    const outputLinkedList = reverseNodeInEvenPlace(inputLinkedList)

    expect(outputLinkedList).toBe(inputLinkedList)
    // expect([...outputLinkedList]).toEqual(expect.arrayContaining(output))
    expect(outputLinkedList.toString()).toEqual(output.toString())
  })
})
