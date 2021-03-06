function lengthOfLongestSubstring(s: string): number {
    const lastOccur = new Array(256);
    let startIndex = 0;
    let max = 0;
    for(let i = 0 ; i < s.length ; i++){
        const currentChar = s[i].charCodeAt(0);
        if(lastOccur[currentChar] !== undefined){
            startIndex = startIndex > lastOccur[currentChar] + 1 ? startIndex : lastOccur[currentChar] + 1;
        }
        lastOccur[currentChar] = i;
        max = max > i - startIndex + 1 ?max : i - startIndex + 1;
    }
    return max;
};