type Tuple = [number, number];

function networkDelayTime(times: number[][], n: number, k: number): number {
    const startVertex = k;
    const startTime = 0;
    const graph = new Map<number, Array<Tuple>>();
    
    // heap is used to ensure we are always processing 
    // the smallest path to some node
    const heap = new MinPriorityQueue({ priority: comparator }); 
    heap.enqueue([startVertex, startTime]);
    const visited = new Set<number>();
    
    // initialize graph
    for(let i = 1 ; i <= n ; i++)
        graph.set(i, []);
    for(const [from, to, time] of times)
        graph.get(from).push([to, time]);
    
    let time = 0;
    while(!heap.isEmpty()){
        const [currentNode, smallestDistanceToCurrentNode] = heap.dequeue().element
        
        if(visited.has(currentNode)) continue;
        
        // We only add to visited set if we dequeue
        // element from stack (so we are currently on it)
        visited.add(currentNode);
        
        // this will always resemble the time taken
        // to visit all the nodes
        // It is also the time needed after traversing over
        // the last node because we are using a PQ
        time = smallestDistanceToCurrentNode;
        
        for(const [neighbor, distanceToNeighbor] of graph.get(currentNode))
            if(!visited.has(neighbor))
                heap.enqueue([neighbor, smallestDistanceToCurrentNode + distanceToNeighbor]);
    }
    return visited.size === n ? time : -1
}

function comparator([, time]:Tuple): number {
    return time;
}
