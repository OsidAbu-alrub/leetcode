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

function deepestLeavesSum(root: TreeNode | null): number {
    let maxSum = 0;
    let maxLevel = 1;
    let currentLevel: Array<[TreeNode, number]> = [[root, maxLevel]];
    let nextLevel: Array<[TreeNode, number]> = [];
    while(currentLevel.length){
        const [current, level] = currentLevel.shift();
        
        if(!current.left && !current.right && level >= maxLevel){
            maxLevel = level;
            maxSum += current.val;
        }

        if(current.left) nextLevel.push([current.left, level + 1]);
        if(current.right) nextLevel.push([current.right, level + 1]);
        
        if(!currentLevel.length && nextLevel.length){
            maxSum = 0;
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
        }
            
    }
    return maxSum;
};