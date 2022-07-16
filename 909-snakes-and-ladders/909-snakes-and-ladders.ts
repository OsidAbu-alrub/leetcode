function snakesAndLadders(board: number[][]): number {
    const queue = [[1,0]];
    const length = board.length;
    const boardSize = length * length;
    const seen = new Set<number>();
    seen.add(1);

    const getBoardLocation = (pos: number) => {
        let row = Math.floor((pos - 1) / length);
        let col = (pos - 1) % length;
        col = (row % 2) === 1 ? length - col - 1 : col;
        row = length - row - 1;
        return [row < 0 ? 0 : row,col];
    }
    
    while(queue.length) {
        const [node, totalMoves] = queue.shift();
        if(node === boardSize)
            return totalMoves;
        
        for(let i = 1 ; i <= 6 ; i++) {
            let nextMove = node + i;
            const [row, column] = getBoardLocation(nextMove);
            console.log(row, column)
            if(board[row][column] !== -1)
                nextMove = board[row][column];
            if(!seen.has(nextMove)){
                seen.add(nextMove);
                queue.push([nextMove, totalMoves+1]);
            }
        }
    }
    return -1;
};