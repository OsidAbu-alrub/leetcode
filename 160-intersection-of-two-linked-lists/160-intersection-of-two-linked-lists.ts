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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(!headA || !headB) return null;
    const intersectionMapper = {};
    let currentA = headA;
    while(currentA){
        intersectionMapper[currentA.val] = 
            intersectionMapper[currentA.val] 
            ? [...intersectionMapper[currentA.val],currentA]
            : [currentA];
        currentA = currentA.next;
    }
    
    let currentB = headB;
    while(currentB){
        
        let intersectionNode = null;
        if(intersectionMapper[currentB.val]){
            intersectionNode = intersectionMapper[currentB.val].find(currentA => currentA === currentB);
        }
        
        if(intersectionNode) return intersectionNode;
        currentB = currentB.next;
    }
    return null;
};