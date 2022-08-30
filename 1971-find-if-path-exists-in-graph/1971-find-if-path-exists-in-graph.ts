function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  
  // initliaze visited set to not visit same node twice
  // and queue for BFS
  const visited = new Set<number>([source]);
  const queue = [source];
  
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
  
  
  // as long as queue has nodes
  while(queue.length){
    
    // dequeue the first element
    const current = queue.shift();
    
    // if equal to destination, then return true
    if(current === destination)
      return true;
    
    
    // if not, then loop over neighbors and add
    // the unvisited neighbors to my queue
    for(const neighbor of graph.get(current)){
      if(!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  
  // if I exit the loop without reaching the destination
  // then I knwo that it is impossible to reach destination
  // (disconnected graph) thus return false
  return false;
};