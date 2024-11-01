import { SinglyLinkedList } from '../../ds/linked-list/singly-linked-list'
import { reverseLinkedList } from './reverse-linked-list.solution'

const testCases = [
  [[]],
  [[1]],
  [[1, -2, 3, 4, -5, 4, 3, -2, 1]],
  [[-1, -5, -3, -7, -8, -6, -2]],
  [[-1, 2, -3, 4]],
  [[1, -1, -2, 3, -4, 5]],
  [[28, 21, 14, 7]],
]

describe('04 Linked List Reversal / Reverse Linked list', () => {
  test.each(testCases)('Reverse: %j', inputArray => {
    const inputLinkedList = new SinglyLinkedList(inputArray)
    const outputLinkedList = reverseLinkedList(inputLinkedList)
    const reversedOutputArr = [...outputLinkedList]
    const reversedInput = inputArray.reverse()
    expect(outputLinkedList).toBe(inputLinkedList)
    expect(reversedOutputArr).toEqual(expect.arrayContaining(inputArray))
    expect(reversedOutputArr.toString()).toBe(reversedInput.toString())
  })
})
