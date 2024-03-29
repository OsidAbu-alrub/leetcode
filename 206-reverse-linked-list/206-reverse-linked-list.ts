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

function reverseList(head: ListNode | null): ListNode | null {
  let current = head;  
  let prev = null;
  while(current){
    const tempNode = current.next;
    current.next = prev;
    prev = current;
    current = tempNode;
  }
  return prev;
};