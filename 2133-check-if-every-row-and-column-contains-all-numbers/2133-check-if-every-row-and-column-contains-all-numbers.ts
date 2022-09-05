function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  for(let i = 0 ; i < n ; i++){
    const row = new Set<number>();
    const column = new Set<number>();
    for(let j = 0 ; j < n ; j++){
      if(row.has(matrix[i][j]) || column.has(matrix[j][i]))
        return false;
      row.add(matrix[i][j]);
      column.add(matrix[j][i]);
    }
  }
  
  return true;
};