function diagonalSort(mat: number[][]): number[][] {
    const numberOfRows = mat.length;
    const numberOfColumns = mat[0].length;
    const sortedMatrix = new Array<number[]>(numberOfRows);
    
    // sort left bottom half of matrix 
    for(let row = numberOfRows - 1, column = 0 ; row >= 0 ; row--){
        sortedMatrix[row] = new Array<number>(numberOfColumns); 
        let diagonal = [];
        for(let currentColumn = column, currentRow = row; 
            currentColumn < numberOfColumns && currentRow < numberOfRows; 
            currentColumn++, currentRow++) {
                diagonal[currentColumn] = mat[currentRow][currentColumn];
        }
        
        diagonal = diagonal.sort((a,b) => a - b)
        for(let currentColumn = column, currentRow = row; 
            currentColumn < numberOfColumns && currentRow < numberOfRows; 
            currentColumn++, currentRow++){
                sortedMatrix[currentRow][currentColumn] = diagonal[currentColumn];
        }
    }
    
    // sort right top half of matrix
    for(let column = 1, row = 0 ; column < numberOfColumns ; column++){
        let diagonal = [];
        for(let currentColumn = column, currentRow = row; 
            currentColumn < numberOfColumns && currentRow < numberOfRows; 
            currentColumn++, currentRow++) {
                diagonal[currentRow] = mat[currentRow][currentColumn];
        }
        
        diagonal = diagonal.sort((a,b) => a - b)
        for(let currentColumn = column, currentRow = row; 
            currentColumn < numberOfColumns && currentRow < numberOfRows; 
            currentColumn++, currentRow++){
                sortedMatrix[currentRow][currentColumn] = diagonal[currentRow];
        }
    }
    return sortedMatrix;
};