function generateMatrix(n: number): number[][] {
  const matrix = Array.from(new Array(n), () => []);
  const size = n ** 2;
  let traversed = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let columnStart = 0;
  let columnEnd = n - 1;
  while(traversed <= size){

    // traverse right from columnStart until columnEnd
    for(let i = columnStart ; traversed <= size && i <= columnEnd ; i++, traversed++)
      matrix[rowStart][i] = traversed;
    rowStart++;
    
    // now go down from rowStart to rowEnd
    for(let i = rowStart ; traversed <= size && i <= rowEnd ; i++, traversed++)
      matrix[i][columnEnd] = traversed;
    columnEnd--;
    
    // now go left from columnEnd to columnStart
    for(let i = columnEnd ; traversed <= size && i >= columnStart ; i--, traversed++)
      matrix[rowEnd][i] = traversed;
    rowEnd--;
    
    // now go up from rowEnd to rowStart
    for(let i = rowEnd; traversed <= size && i >= rowStart ; i--, traversed++)
      matrix[i][columnStart] = traversed;
    columnStart++;
  }
  return matrix;
};