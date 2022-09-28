function findCenter(edges: number[][]): number {
  const graph = new Map<number, number>();
  for(const [src, dest] of edges){
    graph.set(src, graph.get(src) + 1 || 1);
    graph.set(dest, graph.get(dest) + 1 || 1);
  }
  
  const numberOfNeighbors = graph.size;
  for(const [key, neighborsCount] of graph){
    if(neighborsCount === numberOfNeighbors - 1){
      return key;
    }
  }
  
  return -1;
};