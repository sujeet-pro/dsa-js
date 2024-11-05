import { SinglyLinkedListNode } from '../../ds/linked-list/singly-linked-list'

export function getLinkedlistMiddleElement<T>(head: SinglyLinkedListNode<T> | null): T | null {
  if (!head) return null
  let slowPointer = head
  /**
   * FastPointer
   * for [1,2,3,4]
   * use head.next, if we want middle to be 2
   * use head, if want middle to be 3
   */
  let fastPointer = head.next
  while (fastPointer?.next && slowPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer?.next.next
  }
  return slowPointer.value
}
