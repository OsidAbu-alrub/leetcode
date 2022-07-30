function maxAreaOfIsland(grid: number[][]): number {
    let ans = 0;
    const visited = new Set<string>();
    for(let i = 0 ; i < grid.length ; i++)
        for(let j = 0 ; j < grid[i].length ; j++){
            if(grid[i][j] === 1 && !visited.has(getKey(i,j))){
                const landMass = dfs(i, j, grid, visited);
                if(landMass > ans)
                    ans = landMass;
            }
        }
    return ans;
};

function dfs(i:number, j:number, grid:number[][], visited: Set<string>){
    if(!check(i, j, grid, visited)) return 0;
    
    visited.add(getKey(i, j));
    const up = dfs(i - 1, j, grid, visited);
    const down = dfs(i + 1, j, grid, visited);
    const left = dfs(i, j - 1, grid, visited);
    const right = dfs(i, j + 1, grid, visited);
    return up + down + left + right + 1;

}

function check(i:number, j:number, grid: number[][], visited: Set<string>){
    if(visited.has(getKey(i, j))) return 0;
    try{
        if(grid[i][j] === undefined) return 0;
        return grid[i][j];
    }
    catch(e){
        return 0;
    }
}

function getKey(i:number, j:number){
    return `${i}-${j}`;
}