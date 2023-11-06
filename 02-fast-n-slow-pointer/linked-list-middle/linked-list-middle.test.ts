import { SinglyLinkedList } from "../../ds/linked-list/singly-linked-list"
import { getLinkedlistMiddleElement } from "./linked-list-middle.solution"

describe('02 Fast & Slow Pointers - Linked List Middle', () => {
  test('Empty LinkedList', () => {
    const input = new SinglyLinkedList<unknown>([])
    const res = getLinkedlistMiddleElement(input.head)
    expect(res).toBe(null)
  })

  test('One Element in LinkedList', () => {
    const input = new SinglyLinkedList([1])
    const res = getLinkedlistMiddleElement(input.head)
    expect(res).toBe(1)
  })

  test('Two Element in LinkedList', () => {
    const input = new SinglyLinkedList([1, 2])
    const res = getLinkedlistMiddleElement(input.head)
    expect(res).toBe(1)
  })

  test('Odd Element in LinkedList', () => {
    const testCases = [
      { input: [1, 2, 3], res: 2 },
      { input: [1, 2, 3, 4, 5], res: 3 },
      { input: [1, 2, 3, 4, 5, 6, 7], res: 4 },
    ]
    testCases.forEach(testCase => {
      const input = new SinglyLinkedList(testCase.input)
      const res = getLinkedlistMiddleElement(input.head)
      expect(res).toBe(testCase.res)
    });
  })

  test('Even Element in LinkedList', () => {
    const testCases = [
      { input: [1, 2, 3, 4], res: 2 },
      { input: [1, 2, 3, 4, 5, 6], res: 3 },
      { input: [1, 2, 3, 4, 5, 6, 7, 8], res: 4 },
    ]
    testCases.forEach(testCase => {
      const input = new SinglyLinkedList(testCase.input)
      const res = getLinkedlistMiddleElement(input.head)
      expect(res).toBe(testCase.res)
    });
  })
})