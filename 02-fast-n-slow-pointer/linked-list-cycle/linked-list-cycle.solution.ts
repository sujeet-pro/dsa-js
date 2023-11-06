import { SinglyLinkedList, SinglyLinkedListNode } from "../../ds/linked-list/singly-linked-list";

export function isLinkedListCyclic<T>(linkedList: SinglyLinkedList<T>): boolean {
  if (linkedList.head === null) return false
  let slowPointer: SinglyLinkedListNode<T> | null = linkedList.head
  let fastPointer: SinglyLinkedListNode<T> | null = linkedList.head?.next

  while (fastPointer && fastPointer.next && slowPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
    if (slowPointer === fastPointer) return true
  }

  return false
}