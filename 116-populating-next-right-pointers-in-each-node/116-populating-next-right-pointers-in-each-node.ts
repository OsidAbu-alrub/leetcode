/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if(!root) return root;
    let currentLevelQueue = [root];
    let nextLevelQueue = [];
    let level = [];
    while(currentLevelQueue.length){
        const node = currentLevelQueue.shift();
        
        level.push(node);
        if(node.left) nextLevelQueue.push(node.left);
        if(node.right) nextLevelQueue.push(node.right);
        
        if(!currentLevelQueue.length){
            pointToRight(level);
            level = [];
            [currentLevelQueue, nextLevelQueue] = [nextLevelQueue, currentLevelQueue];
        }
    }
    return root;
};
    
function pointToRight(list: Array<Node>){
    list.forEach((node, idx, l) => {
        if(idx === l.length - 1) return;
        node.next = l[idx + 1]
    })
}