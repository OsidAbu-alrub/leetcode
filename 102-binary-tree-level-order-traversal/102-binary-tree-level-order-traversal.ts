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

function levelOrder(root: TreeNode | null): number[][] {
  let currentLevel = [root];
  let nextLevel = [];
  let currentLevelValues = [];
  const ans = [];
  while(currentLevel.length && root){
    const node = currentLevel.shift();
    currentLevelValues.push(node.val);
    
    if(node.left) nextLevel.push(node.left);
    if(node.right) nextLevel.push(node.right);
    
    if(!currentLevel.length){
      ans.push(currentLevelValues);
      currentLevelValues = [];
      [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
  }
  return ans;
};

function traverse(root: TreeNode | null, levelOrderArray: object,currentLevel:number){
}