function generate(numRows: number): number[][] {
  const result = []; 
  result[0] = [1];
  for (let i = 1; i < numRows; i++) {
    result[i] = [];
    for(let j = 0 ; j <= i ; j++){
      result[i][j] = (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0)
    }
  }

  return result
};