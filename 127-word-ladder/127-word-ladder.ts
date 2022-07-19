function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const queue: Array<[string, number]> = [[beginWord, 1]];
    const seen = new Set([beginWord]);
    
    while(queue.length){
        const [currentWord, numberOfMoves] = queue.shift();
        
        if(currentWord === endWord) return numberOfMoves;
        
        wordList.forEach(potentialNextWord => {
            if(check(currentWord, potentialNextWord, seen)){
                seen.add(potentialNextWord);
                queue.push([potentialNextWord, numberOfMoves + 1])
            }
        })
    }
    return 0;
};

function check(currentWord:string, nextWord:string, seen:Set<string>){
    if(seen.has(nextWord)) return false;
    let count = 0;
    for(let i = 0 ; i < currentWord.length ; i++){
        if(currentWord[i] !== nextWord[i]) count++;
    }
    return count === 1;
}