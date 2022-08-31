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

function deleteMiddle(head: ListNode | null): ListNode | null {
  if(!head.next) return null;
  let slow = head;
  let fast = head;
  let prev = slow;
  while(fast && fast.next){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if(prev.next)
    prev.next = prev.next.next;
  return head;
};