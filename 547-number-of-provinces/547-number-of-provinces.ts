function findCircleNum(isConnected: number[][]): number {
  let numberOfProvinces = 0;
  const visited = new Set<number>();
  for(let i = 0 ; i < isConnected.length ; i++)
    if(!visited.has(i)){
      numberOfProvinces++;
      dfs(i, isConnected, visited);
    }
  
  return numberOfProvinces;
};

function dfs(city: number, graph: number[][], visited: Set<number>){
  visited.add(city);
  for(let neighbor = 0 ; neighbor < graph[city].length ; neighbor++){
    if(graph[city][neighbor] === 1 && !visited.has(neighbor))
      dfs(neighbor, graph, visited);
  }
}