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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  dfs(root, targetSum, 0, [], result);
  return result;
};

function dfs(root: TreeNode | null, targetSum: number, currentSum: number, currentPath: number[], result: number[][]): void {
  if(!root) return;
  currentPath.push(root.val);
  currentSum = currentSum + root.val;
  if(!root.left && !root.right && currentSum === targetSum)
    result.push([...currentPath]);
  else {
    dfs(root.left, targetSum, currentSum, currentPath, result);
    dfs(root.right, targetSum, currentSum, currentPath, result);
  }
  currentPath.pop();
}