function numIslands(grid: string[][]): number {
    let numberOfIslands = 0;
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[i].length ; j++){
            if(Boolean(Number(grid[i][j]))){
                numberOfIslands++;
                dfs(i, j, grid);
            }
        }
    }
    return numberOfIslands;
};

const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]]

function dfs(i:number, j:number, grid:string[][]){
    grid[i][j] = "0";
    for(const [x, y] of directions)
        if(check(x+i, y+j, grid))
            dfs(x+i, y+j, grid);
}
    
function check(i:number, j:number, grid:string[][]){
    try{
        if(grid[i][j] === undefined) throw new Error();
        return Boolean(Number(grid[i][j]));
    }
    catch(e){
        return false;
    }
}