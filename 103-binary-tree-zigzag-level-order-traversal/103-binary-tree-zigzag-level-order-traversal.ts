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
  let currentLevel: Array<[TreeNode, number]> = [[root, 1]];
  let nextLevel: Array<[TreeNode, number]> = [];
  let currentLevelValues = []
  const ans = [];
  while(currentLevel.length && root){
    const [node, level] = currentLevel.shift();
    currentLevelValues.push(node.val);
    
    if(node.left) nextLevel.push([node.left, level + 1]);
    if(node.right) nextLevel.push([node.right, level + 1]);
    
    if(!currentLevel.length) {
      ans.push(level % 2 === 0 ? currentLevelValues.reverse() : currentLevelValues);
      currentLevelValues = [];
      [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
  }
  return ans;
};
