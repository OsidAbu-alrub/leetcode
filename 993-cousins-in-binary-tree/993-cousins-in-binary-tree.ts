/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    const queue:any[] = [{
        current:root,
        currentParent:null,
        currentDepth:0
    }];
    
    let xNode = null;
    let yNode = null;
    while(queue.length) {
        const { current, currentDepth, currentParent } = queue.shift();
        if(current.left)
            queue.push({
                current:current.left,
                currentParent:current,
                currentDepth:currentDepth + 1
            });
        
        if(current.right) 
            queue.push({
                current:current.right,
                currentParent:current,
                currentDepth:currentDepth + 1
            });
        
        if(current.val === x)
            xNode = { current,currentParent,currentDepth }
        if(current.val === y)
            yNode = { current,currentParent,currentDepth }
    }
    return Boolean(xNode && yNode && 
            xNode.currentDepth === yNode.currentDepth && 
            xNode.currentParent !== yNode.currentParent)
};