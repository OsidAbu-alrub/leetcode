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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if(!root) return [];
  
  const queue: Array<[TreeNode, number]> = [[root, 1]];
  const traversedValues = []
  let currentLevelValues = []
  let currentLevel = 1;
  while(queue.length){
    const [node, level] = queue.shift();
    if(node.left) queue.push([node.left, level + 1]);
    if(node.right) queue.push([node.right, level + 1]);
    
    if(currentLevel !== level) {
      traversedValues[currentLevel - 1] = currentLevelValues;
      currentLevelValues = [];
      currentLevel = level;
    }
    
    if(currentLevel % 2 === 0) currentLevelValues.unshift(node.val);
    else currentLevelValues.push(node.val);
  }
  traversedValues[currentLevel - 1] = currentLevelValues;
  return traversedValues;
};
