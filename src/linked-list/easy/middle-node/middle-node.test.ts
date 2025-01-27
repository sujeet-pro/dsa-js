import { LinkedList, middleNode } from './middle-node';

describe('middleNode', () => {
    it('should return the middle node of an odd-length linked list', () => {
        const head = new LinkedList(1);
        head.next = new LinkedList(2);
        head.next.next = new LinkedList(3);
        head.next.next.next = new LinkedList(4);
        head.next.next.next.next = new LinkedList(5);

        const result = middleNode(head);
        expect(result?.value).toBe(3);
    });

    it('should return the middle node of an even-length linked list', () => {
        const head = new LinkedList(1);
        head.next = new LinkedList(2);
        head.next.next = new LinkedList(3);
        head.next.next.next = new LinkedList(4);
        head.next.next.next.next = new LinkedList(5);
        head.next.next.next.next.next = new LinkedList(6);

        const result = middleNode(head);
        expect(result?.value).toBe(4);
    });

    it('should return the head node if the list has only one node', () => {
        const head = new LinkedList(1);

        const result = middleNode(head);
        expect(result?.value).toBe(1);
    });

    // it('should return null if the list is empty', () => {
    //     const result = middleNode(null);
    //     expect(result).toBeNull();
    // });
});