function makeConnected(n: number, connections: number[][]): number {
    if(n - 1 > connections.length) return -1;
    const visited = new Set<number>();
    const graph = new Map<number, Array<number>>();
    
    for(let i = 0 ; i < n ; i++)
        graph.set(i, []);
    for(const [source, destination] of connections){
        graph.get(source).push(destination);
        graph.get(destination).push(source);
    }
    
    let answer = 0;
    for(let i = 0 ; i < n ; i++)
        if(!visited.has(i)) {
            dfs(i, graph, visited);
            answer++
        };
    return answer - 1;
};

function dfs(node:number, graph: Map<number, Array<number>>, visited: Set<number>){
    visited.add(node);
    for(const neighbor of graph.get(node))
        if(!visited.has(neighbor)) dfs(neighbor, graph, visited);
}