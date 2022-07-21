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

function findBottomLeftValue(root: TreeNode | null): number {
    let currentLevel = [root];
    let nextLevel = [];
    let firstNode = root;
    while(currentLevel.length && root){
        const node = currentLevel.shift();
        if(!firstNode) firstNode = node;
        if(node.left) nextLevel.push(node.left);
        if(node.right) nextLevel.push(node.right);
        if(!currentLevel.length){
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
            if(currentLevel.length) firstNode = null;
        }
    }
    return firstNode?.val;
};