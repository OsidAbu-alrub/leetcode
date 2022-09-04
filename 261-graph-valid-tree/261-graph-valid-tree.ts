const VISITED = 2;
const VISITING = 1;
function validTree(n: number, edges: number[][]): boolean {
  
  // build graph and have a map that keeps track of indegrees
  // of each node
  const graph = new Map<number, Array<number>>();
  const inDegrees = new Map<number, number>();
  for(let i = 0 ; i < n ; i++)
    graph.set(i, []);
  for(const [src, dest] of edges){
    graph.get(src).push(dest);
    graph.get(dest).push(src);
    inDegrees.set(src, inDegrees.get(src) + 1 || 1);
    inDegrees.set(dest, inDegrees.get(dest) + 1 || 1);
  }
  
  // get the node with minimum indegree
  let minInDegreeNode = 0;
  let minInDegree = Infinity;
  for(const [node, inDegree] of inDegrees.entries())
    if(inDegree < minInDegree){
      minInDegreeNode = node;
      minInDegree = inDegree;
    }
  
  // the function will return true if tree has no cycles AND
  // we are able to visit all the nodes in tree
  const visited = new Set<number>();
  return dfs(minInDegreeNode, minInDegreeNode, graph, visited) && visited.size === n;
};

function dfs(parent, node, graph, visited){
  visited.add(node);
  for(const neighbor of graph.get(node)){
    if(neighbor === parent) continue;
    
    // this detects cycles
    if(visited.has(neighbor))
      return false;
    
    // if cycle is found, return false
    if(!dfs(node, neighbor, graph, visited))
      return false;
  }
  
  // if no cycle is found and we were able to go
  // down the whole path, return true
  return true;
}