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

function smallestFromLeaf(root: TreeNode | null): string {
  // "{" has value of 123 in ascii table, which is greater than
  // "z", which has the value of 122
  let result = "{";
  dfs(root, "");
  function dfs(root: TreeNode | null, currentPath: string) {
    if(!root) return;
    const newPath = String.fromCharCode(root.val + 97) + currentPath;
    
    if(!root.left && !root.right && newPath < result)
      result = newPath;
    
    dfs(root.left, newPath);
    dfs(root.right, newPath);
  }
  return result;
};

