function checkValid(matrix: number[][]): boolean {
  const rows = new Map<number, Set<number>>();
  const columns = new Map<number, Set<number>>();
  const n = matrix.length;
  for(let i = 0 ; i < n ; i++){
    if(!rows.has(i))
      rows.set(i, new Set<number>());
    for(let j = 0 ; j < n ; j++){
      if(!columns.has(j))
        columns.set(j, new Set<number>());
      rows.get(i).add(matrix[i][j]);
      columns.get(j).add(matrix[i][j]);
    }
  }
  
  for(let i = 0 ; i < n ; i++)
    if(rows.get(i).size !== n || columns.get(i).size !== n)
      return false;
  return true;
};