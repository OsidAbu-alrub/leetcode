/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  const mapper = new Map<Node, Node>();
  return dfs(head, mapper);
};

function dfs(head: Node | null, mapper: Map<Node, Node>) {
  if(!head) return null;
  if(mapper.has(head)) return mapper.get(head);
  const copy = new Node(head.val);
  mapper.set(head, copy);
  copy.next = dfs(head.next, mapper);
  copy.random = dfs(head.random, mapper);
  return copy;
}