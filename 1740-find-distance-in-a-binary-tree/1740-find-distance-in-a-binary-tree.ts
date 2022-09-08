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

function findDistance(root: TreeNode | null, p: number, q: number): number {
  const pathToP = [];
  const pathToQ = [];
  dfs(root, p, pathToP);
  dfs(root, q, pathToQ);
  
  let i = 0;
  let j = 0;
  
  while(i < pathToP.length && j < pathToQ.length && pathToP[i] === pathToQ[j]){
    i++;
    j++;
  }
  
  let count = 0;
  while(i < pathToP.length){
    count++;
    i++;
  }
  
  while(j < pathToQ.length){
    count++;
    j++;
  }
  
  return count;
};

function dfs(root, target, path){
  if(!root) return false;
  path.push(root);
  if(root.val === target) return true;
  if(dfs(root.left, target, path)) return true;
  if(dfs(root.right, target, path)) return true;
  path.pop();
  return false;
}