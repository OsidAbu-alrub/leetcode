const UNVISITED = 0; // haven't reached node yet
const VISITING = 1; // I called the DFS for this node, but I'm still visiting neighbors
const VISITED = 2; // visited all neighbors of node
function findOrder(n: number, edges: number[][]): number[] {
	const graph = new Map<number, Array<number>>();
	const visited = new Array<number>(n).fill(UNVISITED);
	for (let i = 0; i < n; i++) graph.set(i, []);
	for (const [n1, n2] of edges) 
		graph.get(n2)!.push(n1);

	let numberOfGraphs = 0;
    const topologicalSortPath = [];
	for (let i = 0; i < n; i++)
		if (visited[i] === UNVISITED && !dfs(i, graph, topologicalSortPath, visited)) 
			return [];
    return topologicalSortPath.reverse();
}

function dfs(
	node: number,
	graph: Map<number, Array<number>>,
	stack: Array<number>,
    visited: Array<number>
) {
    // this node is in state visiting until I finish all neighbors
    visited[node] = VISITING;
	for (const neighbor of graph.get(node)!){
        // cycle detected, stop
        if(visited[neighbor] === VISITING) return false;
        
        // to not fall in an infinite loop
        if (visited[neighbor] === UNVISITED) 
            if(!dfs(neighbor, graph, stack, visited)) return false;;   
    }
    
    // node is at state visited when we finish from all neighbors 
    visited[node] = VISITED;
    stack.push(node);
    return true;
}
