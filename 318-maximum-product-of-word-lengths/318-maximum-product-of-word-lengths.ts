function maxProduct(words: string[]): number {
    const hash:{[key:string]:number} = {}
    for(let i = 0 ; i < words.length - 1 ; i++){
        const wordOneSet = wordToCharHash(words[i]);
        
        for(let j = i + 1 ; j < words.length ; j++){
            const hasDuplicateChar = [...words[j]].some(char => wordOneSet.has(char));
            if(!hasDuplicateChar){
                hash[words[i]] = 
                    hash[words[i]] && hash[words[i]] > words[j].length
                    ? hash[words[i]]
                    : words[j].length;
            }
        }
    }
    
    const numberOfKeys = Object.keys(hash).length
    const entries = Object.entries(hash)
    return numberOfKeys > 0 ? entries.reduce((acc,[key,value]) => {
        return Math.max(acc , key.length * value);
    },-1) : 0;
};

const wordToCharHash = (word:string) =>{
    return new Set([...word]);
}