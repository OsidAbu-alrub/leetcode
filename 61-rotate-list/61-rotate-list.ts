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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if(!head) return head;
  let length = 0;
  let current = head;
  let tail = head;
  while(current){
    current = current.next;
    
    if(tail.next)
      tail = tail.next;
    
    length++;
  }
  
  k = k % length;
  
  // we want to get to node that comes
  // before the start node of rotation
  // this is why we do length - k - 1
  current = head;
  for(let i = 0 ; i < length - k - 1 && current; i++)
    current = current.next;
  
  // now current is the last node of list that won't be rotated
  // let tail.next equal our head
  tail.next = head;
  
  // make head equal the first node in rotated sublist
  head = current.next;
  
  // make current.next (the new last node) equal to null 
  current.next = null;
  return head;
};