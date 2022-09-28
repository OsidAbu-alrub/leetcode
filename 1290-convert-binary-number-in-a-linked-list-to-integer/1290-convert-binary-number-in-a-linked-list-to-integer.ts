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

function getDecimalValue(head: ListNode | null): number {
  let length = 0;
  let current = head;
  while(current){
    current = current.next;
    length++;
  }
  
  let decimalValue = 0;
  current = head;
  while(length - 1 >= 0){
    decimalValue = decimalValue + (current.val << (length - 1)); 
    length--;
    current = current.next;
  }
  return decimalValue;
};