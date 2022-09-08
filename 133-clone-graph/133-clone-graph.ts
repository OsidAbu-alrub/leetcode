// class GraphNode {
//      val: number
//      neighbors: GraphNode[]
//      constructor(val?: number, neighbors?: GraphNode[]) {
//          this.val = (val===undefined ? 0 : val)
//          this.neighbors = (neighbors===undefined ? [] : neighbors)
//     }
// }


function cloneGraph(node: Node | null): Node | null {
    if(!node) return null;
    const visited = new Map<Node, Node>();
    return dfs(node, visited);
};

function dfs(node: Node | null, visited: Map<Node, Node>) {
  const copy = new Node();
  copy.val = node.val;
  visited.set(node, copy);
  for(const neighbor of node.neighbors)
    if(visited.has(neighbor))
      copy.neighbors.push(visited.get(neighbor));
    else
      copy.neighbors.push(dfs(neighbor, visited));
  return copy;
}