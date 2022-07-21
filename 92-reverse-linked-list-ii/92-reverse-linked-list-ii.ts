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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(!head.next || left === right) return head;
    if(head && head.next && !head.next.next){
        const temp = head.next;
        head.next.next = head;
        head.next = null;
        head = temp;
        return head;
    }
    let nodeBeforeLeftNode = null; 
    let leftNode = head;
    for(let i = 1; i < left ; i++){
        nodeBeforeLeftNode = leftNode;
        leftNode = leftNode.next;
    }
    
    let rightNode = leftNode;
    let nodeAfterRightNode = rightNode.next;
    for(let i = left; i < right ; i++){
        rightNode = rightNode.next;
        nodeAfterRightNode = rightNode.next;
    }
    
    let previous = leftNode;
    let current = previous.next;
    let next = current.next;
    previous.next = null;
    for(let i = 0 ; i < right - left - 1 ; i++){
        current.next = previous;
        previous = current;
        current = next;
        next = next.next;
    }
    
    if(previous === head){
        rightNode.next = previous;
        leftNode.next = next;
        return rightNode;
    }
    
    
    rightNode.next = previous;
    leftNode.next = nodeAfterRightNode;
    if(nodeBeforeLeftNode)
        nodeBeforeLeftNode.next = rightNode;
    else
        head = rightNode;
    
    return head;
};