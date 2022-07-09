/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number { 
    if(!root) return 0;
    
    let maxDepth = 1;
    const queue = [{current:root,depth:maxDepth}]
    while(queue.length){
        const {current, depth} = queue.shift();
        if(current.children)
            queue.push(...current.children.map(node => ({current:node,depth:depth+1})))
        if(depth > maxDepth)
            maxDepth = depth;
    }
    return maxDepth;
};