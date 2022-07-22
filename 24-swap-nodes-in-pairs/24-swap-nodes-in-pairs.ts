/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let current = head;
    let prev = dummyNode;
    while(current && current.next){
        prev.next = current.next;
        current.next = prev.next.next;
        prev.next.next = current;
        prev = current;
        current = current.next;
    }
    return dummyNode.next;
};