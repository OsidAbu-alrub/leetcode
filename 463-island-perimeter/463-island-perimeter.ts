const WATER = 0;
const LAND = 1;
function islandPerimeter(grid: number[][]): number {
    const visited = new Set<string>();
    for(let i = 0 ; i < grid.length ; i++)
        for(let j = 0 ; j < grid[i].length ; j++)  
            if(grid[i][j] === LAND)
                
                // since all land is connected, first land we see
                // and do DFS over, will return the answer
                return dfs(i, j, grid, visited);
    return 0;
};

function dfs(i:number, j:number, grid:number[][], visited: Set<string>){
    if(isWater(i, j, grid)) return 1;
    if(visited.has(getKey(i, j))) return 0;
    visited.add(getKey(i, j));
    const up = dfs(i - 1, j, grid, visited);
    const down = dfs(i + 1, j, grid, visited);
    const left = dfs(i, j - 1, grid, visited);
    const right = dfs(i, j + 1, grid, visited);
    return up + down + left + right;
}

function isWater(i:number, j:number, grid:number[][]){
    try{
        // if index is out of bound
        if(grid[i][j] === undefined) return true;
        return grid[i][j] === WATER;
    }
    catch(e){
        return true;
    }
}

function getKey(i:number, j:number){
    return `${i}-${j}`;
}