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

function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  let current = head;
  while(current){
    let skipped = 0;
    let deleted = 0;
    while(current && skipped < m - 1){
      current = current.next;
      skipped++;
    }
    while(current && current.next && deleted < n){
      current.next = current.next.next;
      deleted++;
    }
    
    if(current)
      current = current.next;
  }
  return head;
};