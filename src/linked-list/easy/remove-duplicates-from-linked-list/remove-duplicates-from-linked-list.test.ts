import { LinkedList, removeDuplicatesFromLinkedList } from './remove-duplicates-from-linked-list';

describe('removeDuplicatesFromLinkedList', () => {
    it('should remove duplicates from the linked list', () => {
        const list = new LinkedList(1);
        list.next = new LinkedList(1);
        list.next.next = new LinkedList(2);
        list.next.next.next = new LinkedList(3);
        list.next.next.next.next = new LinkedList(3);

        const result = removeDuplicatesFromLinkedList(list);

        expect(result.value).toBe(1);
        expect(result.next?.value).toBe(2);
        expect(result.next?.next?.value).toBe(3);
        expect(result.next?.next?.next).toBeNull();
    });

    it('should handle a list with no duplicates', () => {
        const list = new LinkedList(1);
        list.next = new LinkedList(2);
        list.next.next = new LinkedList(3);

        const result = removeDuplicatesFromLinkedList(list);

        expect(result.value).toBe(1);
        expect(result.next?.value).toBe(2);
        expect(result.next?.next?.value).toBe(3);
        expect(result.next?.next?.next).toBeNull();
    });

    it('should handle a list with all duplicates', () => {
        const list = new LinkedList(1);
        list.next = new LinkedList(1);
        list.next.next = new LinkedList(1);

        const result = removeDuplicatesFromLinkedList(list);

        expect(result.value).toBe(1);
        expect(result.next).toBeNull();
    });

    it('should handle an empty list', () => {
        const list = new LinkedList(1);
        list.next = null;

        const result = removeDuplicatesFromLinkedList(list);

        expect(result.value).toBe(1);
        expect(result.next).toBeNull();
    });
});