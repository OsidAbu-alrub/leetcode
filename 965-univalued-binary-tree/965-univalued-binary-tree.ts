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

function isUnivalTree(root: TreeNode | null): boolean {
    if(!root) return true;
    let currentLevel = [root];
    let nextLevel = [];
    const value = root.val;
    while(currentLevel.length && root){
        const current = currentLevel.shift();
        if(current.val !== value)
            return false;
        if(current.left) nextLevel.push(current.left);
        if(current.right) nextLevel.push(current.right);
        
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    return true;
};