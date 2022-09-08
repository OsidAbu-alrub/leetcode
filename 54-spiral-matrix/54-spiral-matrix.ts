function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const size = n * m;
  const ans = [];
  let traversed = 0;
  let rowStart = 0;
  let rowEnd = m - 1;
  let columnStart = 0;
  let columnEnd = n - 1;
  while(traversed < size){

    // traverse right from columnStart until columnEnd
    for(let i = columnStart ; traversed < size && i <= columnEnd ; i++, traversed++)
      ans.push(matrix[rowStart][i]);
    rowStart++;
    
    // now go down from rowStart to rowEnd
    for(let i = rowStart ; traversed < size && i <= rowEnd ; i++, traversed++)
      ans.push(matrix[i][columnEnd]);
    columnEnd--;
    
    // now go left from columnEnd to columnStart
    for(let i = columnEnd ; traversed < size && i >= columnStart ; i--, traversed++)
      ans.push(matrix[rowEnd][i]);
    rowEnd--;
    
    // now go up from rowEnd to rowStart
    for(let i = rowEnd; traversed < size && i >= rowStart ; i--, traversed++)
      ans.push(matrix[i][columnStart]);
    columnStart++;
  }
  return ans;
};