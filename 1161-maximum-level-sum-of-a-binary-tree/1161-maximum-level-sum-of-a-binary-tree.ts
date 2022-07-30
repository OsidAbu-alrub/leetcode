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

function maxLevelSum(root: TreeNode | null): number {
    let currentLevel = [root];
    let nextLevel = [];
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentLevelSum = 0;
    let level = 1;
    let ans = 1;
    while(currentLevel.length){
        const current = currentLevel.shift();
        currentLevelSum += current.val;
        if(current.left) nextLevel.push(current.left);
        if(current.right) nextLevel.push(current.right);
        
        if(!currentLevel.length){
            if(currentLevelSum > maxSum){
                ans = level;
                maxSum = currentLevelSum;
            }
            level++;
            currentLevelSum = 0;
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
        }
    }
    return ans;
};