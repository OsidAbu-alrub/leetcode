function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  
  // initliaze visited set to not visit same node twice
  const visited = new Set<number>();
  
  // create the graph
  const graph = new Map<number, Array<number>>();
  for(const [src, dest] of edges){
    if(!graph.has(src))
      graph.set(src, []);
    if(!graph.has(dest))
      graph.set(dest, []);
    
    graph.get(src).push(dest);
    graph.get(dest).push(src);
  }
  dfs(source, graph, visited)
  return visited.has(destination);
};

function dfs(node: number, graph: Map<number, Array<number>>, visited: Set<number>){
  visited.add(node);
  for(const neighbor of (graph.get(node) || []))
    if(!visited.has(neighbor))
      dfs(neighbor, graph, visited);  
}