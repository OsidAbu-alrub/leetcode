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

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: number[][] = [];
  dfs(root, [], paths)
  return paths.reduce<string[]>((acc, path) => {
    acc.push(path.join("->"));
    return acc;
  },[])
};

function dfs(root: TreeNode | null, currentPath: number[], paths: number[][]) {
  if(!root) return;
  currentPath.push(root.val);
  if(!root.left && !root.right) paths.push([...currentPath]);
  dfs(root.left, currentPath, paths);
  dfs(root.right, currentPath, paths);
  currentPath.pop();
}