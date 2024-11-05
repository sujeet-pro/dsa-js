import { SinglyLinkedList, SinglyLinkedListNode } from '../../ds/linked-list/singly-linked-list'
import { isLinkedListCyclic } from './linked-list-cycle.solution'

describe('02 - Fast and Slow Pointer / Linked List Cycle', () => {
  test('No nodes', () => {
    expect(isLinkedListCyclic(new SinglyLinkedList([]))).toBe(false)
  })

  test('Single Node', () => {
    expect(isLinkedListCyclic(new SinglyLinkedList([1]))).toBe(false)
  })

  test('Multi Node - Acyclic', () => {
    expect(isLinkedListCyclic(new SinglyLinkedList([1, 2, 3]))).toBe(false)
  })

  test('Multi Node - Circular', () => {
    const circularLinkedList = new SinglyLinkedList([1, 2, 3])
    const lastNode = new SinglyLinkedListNode(4, circularLinkedList.head)
    circularLinkedList.append(lastNode)
    expect(isLinkedListCyclic(circularLinkedList)).toBe(true)
  })
})
