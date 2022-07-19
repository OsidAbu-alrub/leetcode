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

function minDepth(root: TreeNode | null): number {
    if(!root) return 0;
    let currentLevelQueue = [root];
    let nextLevelQueue = [];
    let level = 1;
    while(currentLevelQueue.length){
      const node = currentLevelQueue.shift();
      if(!node.left && !node.right) return level;
      if(node.left) nextLevelQueue.push(node.left);
      if(node.right) nextLevelQueue.push(node.right);
      if(!currentLevelQueue.length)
      {
          level = level + 1;
          [currentLevelQueue, nextLevelQueue] = [nextLevelQueue, currentLevelQueue]
      }
    }
    return level;
};