// This is an input class. Do not edit.
export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let head = linkedList
  let next = linkedList.next
  while (head && next) {
    if (head.value === next.value) {
      next = next.next
      head.next = next
    } else {
      head = next
      next = next.next
    }
  }
  return linkedList
}
