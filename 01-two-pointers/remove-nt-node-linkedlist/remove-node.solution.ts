import { SinglyLinkedList } from '../../ds/linked-list/singly-linked-list'
export { SinglyLinkedList } from '../../ds/linked-list/singly-linked-list'

export function removeNthNode<T>(linkedList: SinglyLinkedList<T>, k: number) {
  if (linkedList.head == null || k <= 0) return linkedList
  let startRef = linkedList.head
  let endRef = linkedList.head
  // Navigate to K-1 position, since we are starting from 1st
  for (let i = 1; i < k; i += 1) {
    if (endRef.next) {
      endRef = endRef.next
    } else {
      // nothing to remove
      return linkedList
    }
  }

  // For last position Navigation (kth position difference)
  if (endRef.next) {
    endRef = endRef.next
  } else {
    // If there is no position to navigate, remove the head
    linkedList.head = startRef.next
    startRef.next = null
    return linkedList
  }

  while (endRef.next && startRef.next) {
    endRef = endRef.next
    startRef = startRef.next
  }

  const nextRef = startRef.next
  if (nextRef) {
    startRef.next = nextRef.next || null
    nextRef.next = null
  }

  return linkedList
}