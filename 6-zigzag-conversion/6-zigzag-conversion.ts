function convert(s: string, numRows: number): string {
    if(s.length < numRows || numRows === 1) return s;
    const matrix = new Array<string[]>(numRows);
    let i = 0;
    let isIncreasing = true;
    for(const char of s){
        if(!matrix[i]) matrix[i] = [];
        if(i === 0)
            isIncreasing = true
        if(i === numRows - 1)
            isIncreasing = false;
        
        matrix[i].push(char);
        i = isIncreasing ? i + 1 : i - 1;
    }
    
    let answer = "";
    for(const row of matrix)
        answer += row.join("");
    return answer;
};