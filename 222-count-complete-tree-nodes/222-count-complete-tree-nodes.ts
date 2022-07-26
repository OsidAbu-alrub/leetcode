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

function countNodes(root: TreeNode | null): number {
    let currentLevel = [root];
    let numberOfNodes = 0;
    
    while(currentLevel.length && root){
        const current = currentLevel.shift();
        numberOfNodes++;
        if(current.left) currentLevel.push(current.left);
        if(current.right) currentLevel.push(current.right);
    }
    return numberOfNodes;
};