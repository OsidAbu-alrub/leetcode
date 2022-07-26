const LAND = 0;
const WATER = 1;
function closedIsland(grid: number[][]): number {
    const visited = new Set<string>()
    let count = 0;
    for(let i = 0 ; i < grid.length ; i++)
        for(let j = 0 ; j < grid[i].length ; j++)
            if(grid[i][j] === LAND && !visited.has(getKey(i, j)) && dfs(i, j, grid, visited))
                count++;
    return count;
};

function dfs(i:number, j:number, grid: number[][], visited: Set<string>){
    if(isEdge(i, j, grid)) return false;
    if(visited.has(getKey(i,j)) || grid[i][j] === WATER) return true;
    visited.add(getKey(i, j));
    const up = dfs(i - 1, j, grid, visited);
    const down = dfs(i + 1, j, grid, visited);
    const left = dfs(i, j - 1, grid, visited);
    const right = dfs(i, j + 1, grid, visited);
    return up && down && left && right;
}

function isEdge(i:number, j:number, grid: number[][]){
    try{
        return grid[i][j] === undefined;
    }
    catch(e){
        return true;
    }
}

function isLand(i:number, j:number, grid: number[][]){
    return ;
}

function getKey(i:number, j:number){
    return `${i}-${j}`;
}