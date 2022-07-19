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

function levelOrderBottom(root: TreeNode | null): number[][] {
    if(!root) return []
  let currentLevelQueue = [root];
  let nextLevelQueue = [];
  const answer = []
  let level = [];
  while(currentLevelQueue.length){
    const node = currentLevelQueue.shift();

    level.push(node.val);
      
    if(node.left) nextLevelQueue.push(node.left);
    if(node.right) nextLevelQueue.push(node.right);
    if(!currentLevelQueue.length)
    {
        answer.unshift(level);
        level = [];
        [currentLevelQueue, nextLevelQueue] = [nextLevelQueue, currentLevelQueue]
    }
  }
    return answer
};










