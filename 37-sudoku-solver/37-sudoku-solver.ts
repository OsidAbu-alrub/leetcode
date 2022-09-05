const EMPTY_CELL = ".";
const NUMBER_OF_ROWS = 9;
const NUMBER_OF_COLUMNS = 9;
const SUB_BOARD_WIDTH = 3;
const SUB_BOARD_HEIGHT = 3;

function solveSudoku(board: string[][]): void {
  solve(board);
};

function solve(board: string[][]) : boolean{
  for(let i = 0 ; i < NUMBER_OF_ROWS ; i++){
    for(let j = 0 ; j < NUMBER_OF_COLUMNS ; j++){
      if(board[i][j] === EMPTY_CELL){
        for(let val = 1 ; val <= 9 ; val++) {
          if(check(i, j, String(val), board)) {
            board[i][j] = String(val)
            if(solve(board))
              return true;  
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
}

function check(row: number, column:number, value: string, board: string[][]){
  for(let i = 0 ; i < NUMBER_OF_COLUMNS ; i++)
    if(board[row][i] === value)
      return false;
  
  for(let i = 0 ; i < NUMBER_OF_ROWS ; i++)
    if(board[i][column] === value)
      return false;
  
  const subBoardRows = Math.floor(row / SUB_BOARD_HEIGHT) * SUB_BOARD_HEIGHT;
  const subBoardColumns = Math.floor(column / SUB_BOARD_WIDTH) * SUB_BOARD_WIDTH;
  
  for(let i = 0 ; i < SUB_BOARD_HEIGHT ; i++)
    for(let j = 0 ; j < SUB_BOARD_WIDTH ; j++)
      if(board[i + subBoardRows][j + subBoardColumns] === value)
        return false;
  return true;
}