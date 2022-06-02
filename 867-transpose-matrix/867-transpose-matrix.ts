function transpose(matrix: number[][]): number[][] {
    const rowsLength = matrix.length;
    const columnsLength = matrix[0].length;
    
    const transposedMatrix = [];
    for(let i = 0 ; i < columnsLength ; i++){
        transposedMatrix[i] = []
        for(let j = 0 ; j < rowsLength ; j++){
            transposedMatrix[i][j] = matrix[j][i];
        }
    }
    return transposedMatrix;
};