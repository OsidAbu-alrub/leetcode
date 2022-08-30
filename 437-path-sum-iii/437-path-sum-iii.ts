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

function pathSum(root: TreeNode | null, targetSum: number): number {
  return dfs(root, targetSum, []);
};

function dfs(root: TreeNode | null, targetSum: number, currentPath: number[]) {
  if(!root) return 0;
  currentPath.push(root.val);
  let count = 0;
  let sum = 0;
  for(let i = currentPath.length - 1 ; i >= 0 ; i--){
    sum = sum + currentPath[i];
    if(sum === targetSum)
      count++;
  }
  
  count += dfs(root.left, targetSum, currentPath);
  count += dfs(root.right, targetSum, currentPath);
  currentPath.pop();
  return count;
}