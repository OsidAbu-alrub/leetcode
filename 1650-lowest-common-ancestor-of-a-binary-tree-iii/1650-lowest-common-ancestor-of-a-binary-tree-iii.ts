/**
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     parent: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.parent = (parent===undefined ? null : parent)
 *     }
 * }
 */

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
  const pathToP = [];
  const pathToQ = [];
  dfs(p, pathToP);
  dfs(q, pathToQ);
  
  let lcs = null;
  for(let i = pathToP.length - 1, j = pathToQ.length - 1 ; j >= 0 && i >= 0 ; j--, i--)
    if(pathToP[i] === pathToQ[j])
      lcs = pathToP[i];
  return lcs;
}

function dfs(root: Node | null, path: Node[]){
  if(!root) return;
  path.push(root);
  dfs(root.parent, path);
}