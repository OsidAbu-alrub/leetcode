function oddCells(m: number, n: number, indices: number[][]): number {
  const matrix = new Array(m);
  for(let i = 0 ; i < matrix.length ; i++)
    matrix[i] = new Array(n).fill(0)
  
  let oddCount = 0;
  for(const [rowIndex, columnIndex] of indices){
    for(let i = 0 ; i < n ; i++)
      matrix[rowIndex][i] += 1;
    for(let i = 0 ; i < m ; i++)
      matrix[i][columnIndex] += 1;
  }
  
  for(const row of matrix)
    for(const cell of row)
      if(cell % 2 !== 0) oddCount++;
  return oddCount;
};