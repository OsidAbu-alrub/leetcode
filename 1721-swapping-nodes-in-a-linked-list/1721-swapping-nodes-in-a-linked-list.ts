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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let length = 0;
  let current = head;
  while(current){
    current = current.next;
    length++;
  }
  
  current = head;
  let startNodeIndex = k;
  let endNodeIndex = length - k + 1;
  let startNode = new ListNode(-1);
  let endNode = new ListNode(-1);
  
  let i = 1;
  while(current){
    if(i === startNodeIndex)
      startNode = current;
    if(i === endNodeIndex)
      endNode = current;
    current = current.next;
    i++;
  }
  const temp = startNode.val;
  startNode.val = endNode.val;
  endNode.val = temp;
  return head;
};