function firstUniqChar(s: string): number {
    const charsMapper = {};
    for(const c of [...s]){
        charsMapper[c] = charsMapper[c] ? charsMapper[c] + 1 : 1; 
    }
    
    for(let i = 0 ; i < s.length ; i++){
        if(charsMapper[s[i]] === 1) return i;
    }
    return -1;
};