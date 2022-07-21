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

function minDiffInBST(root: TreeNode | null): number {
    let currentLevel = [root];
    let nextLevel = [];
    const nodes = [];
    while(currentLevel.length){
        const current = currentLevel.shift();
        
        nodes.push(current.val);
        if(current.left) nextLevel.push(current.left);
        if(current.right) nextLevel.push(current.right);
        
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    
    nodes.sort((a, b) => a - b);
    return nodes.reduce((min, num, i) => min > nodes[i + 1] - nodes[i] ? nodes[i + 1] - nodes[i] : min ,Number.MAX_VALUE)
};