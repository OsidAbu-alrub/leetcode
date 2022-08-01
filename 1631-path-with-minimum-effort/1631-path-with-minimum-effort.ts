const DIRECTIONS = [[0, -1], [0, 1], [1, 0], [-1, 0]];
function minimumEffortPath(heights: number[][]): number {
    const visited = new Set<string>();
    const heap = new MinPriorityQueue({ priority: comparator }); 
    heap.enqueue([0, 0, 0]);
    let ans = 0;
    while(!heap.isEmpty()){
        const [i, j, weight] = heap.dequeue().element;
        
        if(i === heights.length - 1 && j === heights[i].length - 1) return weight;
        if(visited.has(getKey(i, j))) continue;
        visited.add(getKey(i, j));
        for(const [x, y] of DIRECTIONS){
            const nextX = i + x;
            const nextY = j + y;
            if(check(nextX, nextY, heights, visited))
                heap.enqueue([nextX, nextY, Math.max(weight, Math.abs(heights[i][j] - heights[nextX][nextY]))]);
        }
    }
    return 0;
};

function check(i:number, j:number, heights: number[][],visited: Set<string>){
    if(visited.has(getKey(i, j))) return false;
    try{
        if(heights[i][j] === undefined) return false;
        return true;
    }
    catch(e){
        return false;
    }
}

function comparator([,, weight]:[number, number, number]): number {
    return weight;
}

function getKey(i:number, j:number){
    return `${i}-${j}`;
}