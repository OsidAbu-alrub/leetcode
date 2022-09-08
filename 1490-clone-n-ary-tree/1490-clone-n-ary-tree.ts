/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function cloneTree(root: Node | null): Node | null {
  return dfs(root);
};

function dfs(root: Node | null){
  if(!root) return null;
  const copy = new Node(root.val);
  for(const child of root.children)
    copy.children.push(dfs(child));
  return copy;
}