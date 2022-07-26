function titleToNumber(columnTitle: string): number {
    const modulo = 64;
    let answer = 0;
    let digit = 1;
    for(let i = columnTitle.length - 1; i >= 0 ;i--){
        digit = i === columnTitle.length - 1 ? 1 : digit * 26; 
        answer = answer + ((columnTitle.charCodeAt(i) - modulo) * digit)
    }
    return answer;
};