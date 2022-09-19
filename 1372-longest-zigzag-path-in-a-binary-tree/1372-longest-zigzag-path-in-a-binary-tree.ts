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

function longestZigZag(root: TreeNode | null): number {
  if(!root.left && !root.right) return 0;
  return Math.max(dfs(root.left, true, 1), dfs(root.right, false, 1));
};

function dfs(root: TreeNode | null, isLeftChild: boolean, path: number){
  if(!root) return path - 1;
  return Math.max(dfs(root.left, true, isLeftChild ? 1 : path + 1), dfs(root.right, false, isLeftChild ? path + 1 : 1));
}