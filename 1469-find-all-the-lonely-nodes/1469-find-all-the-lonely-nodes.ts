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

function getLonelyNodes(root: TreeNode | null): number[] {
  const result = [];
  dfs(root, result);
  return result;
};

function dfs(root: TreeNode | null, result: number[]) {
  if(!root) return;
  if(root.left && !root.right)
    result.push(root.left.val);
  if(root.right && !root.left)
    result.push(root.right.val);
  dfs(root.left, result);
  dfs(root.right, result);
}