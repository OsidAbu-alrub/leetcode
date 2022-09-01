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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let current = head;
  let nodeBeforeGroup = null;
  let left = 1;
  while(current)
  {
    const right = left + k - 1; 
    for(let i = left ; i < right; i++)
    {
      current = current.next;
      if(!current)
        return head;
    }
    
    // store first node in group
    // because it will be last node in group
    // after reversal
    let groupLastNode = nodeBeforeGroup ? nodeBeforeGroup.next : head;
    let firstNodeAfterGroup = current.next; 
    
    // so now current is last node in group
    // and nodeBeforeGroup is first node before group
    // reverse
    let prev = null;
    let groupNode = nodeBeforeGroup ? nodeBeforeGroup.next : head;
    while(prev !== current && groupNode){
      const nextNode = groupNode.next;
      groupNode.next = prev;
      prev = groupNode;
      groupNode = nextNode;
    }
    
    // if first iteration, then set new head
    if(!nodeBeforeGroup)
      head = prev;
    
    if(nodeBeforeGroup)
      nodeBeforeGroup.next = prev;
    groupLastNode.next = firstNodeAfterGroup;
    
    left = left + k;
    nodeBeforeGroup = groupLastNode;
    current = firstNodeAfterGroup;
  }
  return head;
};