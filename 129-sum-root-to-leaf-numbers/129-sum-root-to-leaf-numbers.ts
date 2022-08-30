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

function sumNumbers(root: TreeNode | null): number {
  return dfs(root, "");
};

function dfs(root: TreeNode | null, currentNumber: string){
  if(!root) return 0;
  currentNumber = currentNumber + root.val;
  if(!root.left && !root.right) return Number(currentNumber);
  return dfs(root.left, currentNumber) + dfs(root.right, currentNumber);
}