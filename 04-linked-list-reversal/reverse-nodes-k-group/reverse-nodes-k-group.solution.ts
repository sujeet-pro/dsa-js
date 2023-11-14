import { SinglyLinkedList, SinglyLinkedListNode } from "../../ds/linked-list/singly-linked-list";

type Node<T = unknown> = SinglyLinkedListNode<T> | null

export function reverseKnodes(node: Node, k: number): Node {
  if (!node) return null
  let prev: Node = null
  let curr: Node = node
  let next: Node = null

  while (k > 0 && curr) {
    k -= 1
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  node.next = curr
  return prev
}

export function hasKItems(node: Node, k: number) {
  while (node && k > 1) {
    node = node.next
    k -= 1
  }
  return k === 1 && !!node
}

export function reverseKGroups(linkedList: SinglyLinkedList<unknown>, k: number): SinglyLinkedList<unknown> {
  if (!linkedList.head) return linkedList
  let head = linkedList.head
  let dummy: Node = new SinglyLinkedListNode(head.value, head)
  let node = dummy
  while (node?.next && hasKItems(node.next, k)) {
    const prev = reverseKnodes(node.next, k)

    const lastNodeOfReversedGroup: Node = node.next;
    node.next = prev
    node = lastNodeOfReversedGroup
  }

  linkedList.head = dummy.next
  return linkedList
}