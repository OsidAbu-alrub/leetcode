/**
 Do not return anything, modify board in-place instead.
 */
function getKey(i:number, j:number){
  return [i,j].join("-")
}
function solve(board: string[][]): void {
  const n = board.length;
  const m = board[0].length;
  const visited = new Set<string>();

  // check topmost and bottommost rows
  for(let i = 0 ; i < m ; i++){
    if(board[0][i] === "O" && !visited.has(getKey(0, i)))
      dfs(0, i, board, visited);
    if(board[n - 1][i] === "O" && !visited.has(getKey(n-1, i)))
      dfs(n-1, i, board, visited);
  }

  // check leftmost and rightmost columns
  for(let i = 0 ; i < n ; i++){
    if(board[i][0] === "O" && !visited.has(getKey(i, 0)))
      dfs(i, 0, board, visited);
    if(board[i][m - 1] === "O" && !visited.has(getKey(i, m-1)))
      dfs(i, m - 1, board, visited);
  }

  for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < m ; j++){
      if(!visited.has(getKey(i, j)) && board[i][j] === "O")
        board[i][j] = "X";
    }
  }
};

function dfs(i: number, j:number, board: string[][], visited: Set<string>) {
  if(i < 0 || i >= board.length  || j < 0 || j >= board[0].length) return;
  if(board[i][j] === "X") return;
  if(visited.has(getKey(i, j))) return;
  visited.add(getKey(i, j));
  dfs(i - 1, j, board, visited);
  dfs(i + 1, j, board, visited);
  dfs(i, j - 1, board, visited);
  dfs(i, j + 1, board, visited);
}