function numSquares(n: number): number {
    let currentLevel = [[n, 0]];
    let nextLevel = [];
    const visited = new Set([n]);
    
    while(currentLevel.length){
        const [current, numberOfPerfectSquares] = currentLevel.shift();
        if(current === 0) return numberOfPerfectSquares;
        for(let i = 1 ; i <= 100 ; i++){
            const nextState = current - (i * i);
            if(nextState < 0)
                break;
            if(!visited.has(nextState)){
                visited.add(nextState);
                nextLevel.push([nextState, numberOfPerfectSquares + 1]);
            }
        }
        
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    return -1;
}