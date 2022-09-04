const VISITED = 2;
const VISITING = 1;
function validTree(n: number, edges: number[][]): boolean {
  if(n === 1) return true;
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
  
  let minInDegreeNode = 0;
  let minInDegree = Infinity;
  for(const [node, inDegree] of inDegrees.entries())
    if(inDegree < minInDegree){
      minInDegreeNode = node;
      minInDegree = inDegree;
    }
  
  const visited = new Map<number, number>();
  return dfs(minInDegreeNode, minInDegreeNode, graph, visited) && visited.size === n;
};

function dfs(parent, node, graph, visited){
  visited.set(node, VISITING);
  for(const neighbor of graph.get(node)){
    if(neighbor === parent) continue;
    if(visited.get(neighbor) === VISITING)
      return false;
    
    if(!visited.has(neighbor) && !dfs(node, neighbor, graph, visited))
      return false;
  }
  visited.set(node, VISITED);
  return true;
}