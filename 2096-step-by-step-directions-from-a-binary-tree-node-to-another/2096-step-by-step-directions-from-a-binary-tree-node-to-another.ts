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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  const graph = new Map<number, Array<[number, string]>>();
  // to build the graph
  dfs(root, graph);
  
  const queue: Array<[number, string]> = [[startValue, ""]];
  const visited = new Set<number>();
  
  while(queue.length){
    const [node, direction] = queue.shift();
    
    if(node === destValue)
      return direction;
    
    for(const [neighbor, stepToNeighbor] of graph.get(node))
      if(!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push([neighbor, direction + stepToNeighbor]);
      }
  }
  
  return "";
};

function dfs(root, graph){
  if(!root) return;
  
  if(!graph.has(root.val))
    graph.set(root.val, []);
  
  const left = root.left;
  const right = root.right;
  if(left){
    if(!graph.has(left.val))
      graph.set(left.val, []);
    graph.get(left.val).push([root.val, "U"]);
    graph.get(root.val).push([left.val, "L"]);
  }
  
  if(right){
    if(!graph.has(right.val))
      graph.set(right.val, []);
    graph.get(right.val).push([root.val, "U"]);
    graph.get(root.val).push([right.val, "R"]);
  }
  dfs(left, graph);
  dfs(right, graph);
}