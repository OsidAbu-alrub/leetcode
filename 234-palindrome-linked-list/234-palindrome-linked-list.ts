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

function isPalindrome(head: ListNode | null): boolean {
    const stack = []
    let current = head;
    let length = 0;
    while(current){
        length++;
        current = current.next
    }
    
    current = head;
    for(let i = 0 ; i < length / 2; i++){
        stack.push(current);
        current = current.next
    }
    
    if(length % 2 === 1)
        stack.pop()
    
    while(current){
        const node = stack.pop()
        if(node.val !== current.val) return false;
        current = current.next
    }
    
    return true;
};