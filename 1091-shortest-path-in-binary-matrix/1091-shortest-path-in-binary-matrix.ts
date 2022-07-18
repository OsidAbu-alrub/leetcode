function shortestPathBinaryMatrix(grid: number[][]): number {
    if(grid[0][0] !== 0) return -1;
    const queue = [[0, 0, 1]];
    const seen = new Set(["00"]);
    const size = (grid.length - 1) * (grid.length - 1);
    while(queue.length){
        const [row, column, path] = queue.shift();
        if(row * column === size)
            return path;
        for(let i = -1 ; i < 2 ; i++){
            for(let j = -1; j < 2 ; j++){
                const nextRow = row + i;
                const nextColumn = column + j;
                if(check(nextRow, nextColumn, grid, seen)){
                    seen.add(nextRow + "" + nextColumn);
                    queue.push([nextRow, nextColumn, path + 1]);
                }
            }
        }
    }
    return -1;
};

function check(nextRow: number, nextColumn: number, grid: number[][], seen: Set<string>){
    if(seen.has(nextRow + "" + nextColumn)) return false;
    if(!isIndexWithinLength(nextRow, grid.length) || 
       !isIndexWithinLength(nextColumn, grid.length)) 
        return false;
    return grid[nextRow][nextColumn] === 0; 
}

function isIndexWithinLength(index: number, length: number){
    return index >= 0 && index < length
}