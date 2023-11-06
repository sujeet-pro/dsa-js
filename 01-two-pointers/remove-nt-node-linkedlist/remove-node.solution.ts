import { SinglyLinkedListNode as LinkedListNode } from '../../ds/linked-list/singly-linked-list'
export { SinglyLinkedListNode as LinkedListNode, SinglyLinkedList as LinkedList } from '../../ds/linked-list/singly-linked-list'

// [9, 8, 7, 6, 5, 4, 3, 2, 1]
export function removeNthNodeFromEnd<T>(head: LinkedListNode<T> | null, n: number): LinkedListNode<T> | null {
  if (head == null || n <= 0) return head
  let fastPointer = head

  for (let i = 1; i < n; i += 1) {
    if (!fastPointer.next) return head // Handle case for n > length
    fastPointer = fastPointer.next
  }

  const dumbNode = new LinkedListNode(head.value, head)
  let slowPointer = dumbNode // start before the head

  while (fastPointer.next && slowPointer.next) {
    fastPointer = fastPointer.next
    slowPointer = slowPointer.next
  }

  const nextRef = slowPointer.next
  if (nextRef) {
    slowPointer.next = nextRef.next || null
    nextRef.next = null
  }

  const startNode = dumbNode.next
  dumbNode.next = null
  return startNode
}