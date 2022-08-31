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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let result = [];
  dfs(root, p, [], result);
  dfs(root, q, [], result);
  const [pathToP, pathToQ] = result;
  let lowestCommonAncestor = null;
  for(let i = 0 ; i < Math.min(pathToP.length, pathToQ.length) ; i++){
    if(pathToP[i] === pathToQ[i])
      lowestCommonAncestor = pathToP[i];
  }
  return lowestCommonAncestor;
};

function dfs(root: TreeNode | null, targetNode: TreeNode | null, path: TreeNode[], result: Array<TreeNode[]>) : boolean {
  if(!root) return false;
  path.push(root);
  if(root === targetNode)
    result.push([...path]);
  dfs(root.left, targetNode, path, result);
  dfs(root.right, targetNode, path, result);
  path.pop();
} 