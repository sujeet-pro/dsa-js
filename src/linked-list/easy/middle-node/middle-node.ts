// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function middleNode(linkedList: LinkedList): LinkedList {
  // Write your code here.
  let slow: LinkedList = linkedList
  let fast: LinkedList | null | undefined= linkedList
  while(slow && slow.next && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow;
}
