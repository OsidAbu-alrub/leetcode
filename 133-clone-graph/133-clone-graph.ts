class GraphNode {
     val: number
     neighbors: GraphNode[]
     constructor(val?: number, neighbors?: GraphNode[]) {
         this.val = (val===undefined ? 0 : val)
         this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}


function cloneGraph(node: GraphNode | null): GraphNode | null {
    if(!node) return null;
    const clone = new GraphNode(node.val);
    const visited = new Map<number, GraphNode>();
    dfs(node, clone, visited);
    return clone;
};

function dfs(node: GraphNode | null, clone: GraphNode, visited: Map<number, GraphNode>) {
    if(!node) return;
    visited.set(clone.val, clone);
    for(const neighbor of node.neighbors){
        if(visited.has(neighbor.val))
            clone.neighbors.push(visited.get(neighbor.val));
        else{
            const clonedNeighbor = new GraphNode(neighbor.val);
            clone.neighbors.push(clonedNeighbor);
            dfs(neighbor, clonedNeighbor, visited)
        }
    }
}