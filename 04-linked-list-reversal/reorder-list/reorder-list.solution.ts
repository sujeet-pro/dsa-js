import { SinglyLinkedList, SinglyLinkedListNode } from "../../ds/linked-list/singly-linked-list";

type Node<T = unknown> = SinglyLinkedListNode<T> | null

function getMiddleNode<T>(node: Node<T>): Node<T> {
  if (!node) return node
  let low = node
  let high: Node<T> = node.next
  while (low.next && high?.next) {
    low = low.next
    high = high.next?.next
  }
  return low
}

function reverseNode<T>(node: Node<T>): Node<T> {
  let prev: Node<T> = null
  let curr: Node<T> = node
  let next: Node<T> = null

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

export function reverseSecondHalf<T>(linkedList: SinglyLinkedList<T>): SinglyLinkedList<T> {
  if (!linkedList.head) return linkedList
  const middleNode = getMiddleNode(linkedList.head)
  if (middleNode) {
    middleNode.next = reverseNode(middleNode.next)
  }
  return linkedList
}

function popNextNode<T>(node: Node<T>): Node<T> {
  if (!node) return null
  const nextNode = node.next
  if (nextNode) {
    node.next = nextNode.next
  }
  return nextNode
}

export function reOrderNode<T>(linkedList: SinglyLinkedList<T>): SinglyLinkedList<T> {
  if (!linkedList.head) return linkedList
  const middleNode = getMiddleNode(linkedList.head)
  if (!middleNode) return linkedList
  middleNode.next = reverseNode(middleNode.next)

  let startNode: Node<T> = linkedList.head
  let nodeFromEnd: Node<T> = popNextNode(middleNode)

  while (startNode && nodeFromEnd) {
    const nextStartNode: Node<T> = startNode.next
    startNode.next = nodeFromEnd
    nodeFromEnd.next = nextStartNode
    startNode = nextStartNode
    nodeFromEnd = popNextNode(middleNode)
  }
  return linkedList

}