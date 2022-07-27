function maxNumberOfBalloons(text: string): number {
    const balloonMap = new Map<string, number>();
    balloonMap.set("b",0);
    balloonMap.set("a",0);
    balloonMap.set("l",0);
    balloonMap.set("o",0);
    balloonMap.set("n",0);
    for(const char of text){
        if(balloonMap.has(char))
            balloonMap.set(char, balloonMap.get(char) + 1);
    }
    balloonMap.set("l", balloonMap.get("l") >> 1);
    balloonMap.set("o", balloonMap.get("o") >> 1);
    let answer = Number.MAX_SAFE_INTEGER;
    for(const [, value] of balloonMap)
        answer = Math.min(answer, value);
    return answer;
};