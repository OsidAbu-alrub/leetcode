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
  return Math.max(dfs(root.left, true, 1), dfs(root.right, false, 1));
};

function dfs(root: TreeNode | null, isLeftChild: boolean, path: number){
  // we subtract one because this is a null node
  // but we incremented one to the path that leads to it
  if(!root) return path - 1;
  
  // if the current node is a left child
  // then we reset the left path to 1 again
  // because there's no zig zag here
  // if it is not a left child, then we increment the 
  // path by one
  const newLeftPath = isLeftChild ? 1 : path + 1;
  
  // if the current node is a left child
  // then we increment the path by one (because 
  // we are going to the right now) but if it is a 
  // right child, then we reset the path to one again
  const newRightPath = isLeftChild ? path + 1 : 1;
  return Math.max(dfs(root.left, true, newLeftPath), dfs(root.right, false, newRightPath));
}