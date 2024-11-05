import { SinglyLinkedList, SinglyLinkedListNode } from '../../ds/linked-list/singly-linked-list'

function reverse<T>(head: SinglyLinkedListNode<T> | null, length: number) {
  if (!head) return head
  const tail = head

  let prev: SinglyLinkedListNode<T> | null = null
  let curr: SinglyLinkedListNode<T> | null = head
  let next: SinglyLinkedListNode<T> | null = null

  let itemCount = 0
  while (itemCount < length && curr) {
    itemCount += 1
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  tail.next = curr

  return prev
}

function groupLengthWithinBound<T>(node: SinglyLinkedListNode<T> | null, maxLength: number): number {
  let len = 0
  let n = node
  while (n && len < maxLength) {
    n = n.next
    len += 1
  }
  return len
}

export function reverseNodeInEvenPlace<T>(linkedList: SinglyLinkedList<T>) {
  if (!linkedList.head) return linkedList
  let maxGroupItemCount = 1
  let groupLength = 1
  let prevGroupTail: SinglyLinkedListNode<T> | null = linkedList.head

  while (prevGroupTail?.next) {
    maxGroupItemCount += 1
    groupLength = groupLengthWithinBound(prevGroupTail.next, maxGroupItemCount)

    if (groupLength % 2 === 0) {
      prevGroupTail.next = reverse(prevGroupTail.next, groupLength)
    }

    for (let i = 0; i < groupLength && prevGroupTail; i += 1) {
      prevGroupTail = prevGroupTail.next
      linkedList.tail = prevGroupTail
    }
  }
  return linkedList
}
