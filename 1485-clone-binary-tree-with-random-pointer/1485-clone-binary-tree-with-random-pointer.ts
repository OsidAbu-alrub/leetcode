/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     random: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, random?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomBinaryTree(root: Node | null): NodeCopy | null {
  const randomMapper = new Map<Node, NodeCopy>();
  return dfs(root, randomMapper);
};

function dfs(root: Node | null, randomMapper: Map<Node, NodeCopy>) {
  if(!root) return null;
  if(randomMapper.has(root)) return randomMapper.get(root)
  
  const copy = new NodeCopy();
  copy.val = root.val;
  randomMapper.set(root, copy);
  
  copy.random = dfs(root.random, randomMapper);
  copy.left = dfs(root.left, randomMapper);
  copy.right = dfs(root.right, randomMapper);
  
  return copy;
}