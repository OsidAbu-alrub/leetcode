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

function goodNodes(root: TreeNode | null): number {
  return dfs(root, -Infinity);
};

function dfs(root: TreeNode | null, currentMax: number) {
  if(!root) return 0;
  currentMax = Math.max(root.val, currentMax);
  return dfs(root.left, currentMax) + dfs(root.right, currentMax) + (currentMax === root.val ? 1 : 0);
}