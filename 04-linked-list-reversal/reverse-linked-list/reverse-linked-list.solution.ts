import { SinglyLinkedList, SinglyLinkedListNode } from '../../ds/linked-list/singly-linked-list'

export function reverseLinkedList<T>(ll: SinglyLinkedList<T>): SinglyLinkedList<T> {
  if (!ll.head || !ll.head.next) return ll

  let prev: SinglyLinkedListNode<T> | null = null
  let curr: SinglyLinkedListNode<T> | null = ll.head
  let next: SinglyLinkedListNode<T> | null = null

  ll.tail = curr
  while (curr) {
    next = curr.next
    curr.next = prev as SinglyLinkedListNode<T> | null
    prev = curr
    curr = next
  }

  ll.head = prev
  return ll
}
