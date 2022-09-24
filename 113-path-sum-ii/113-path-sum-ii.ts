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

function dfs(root: TreeNode | null, targetSum: number, currentSum: number, currentPath: number[], result: number[][]) {
  if(!root) return;
  
  // add the current node to our path
  currentPath.push(root.val);
  currentSum = currentSum + root.val;
  
  // check if we are at leaf and current sum is equal to target sum
  // then copy over our current path to the result array
  if(!root.left && !root.right && currentSum === targetSum)
    result.push([...currentPath]);
  else { 
    // if not leaf nodes or current sum doesn't equal target sum 
    // continue traversing over the tree
    dfs(root.left, targetSum, currentSum, currentPath, result);
    dfs(root.right, targetSum, currentSum, currentPath, result);
  }
  // at the end, pop the current node from our current path array
  // because we are backtracking => so we are going to use a path with
  // different node
  currentPath.pop();
}