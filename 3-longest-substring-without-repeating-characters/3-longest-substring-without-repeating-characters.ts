function lengthOfLongestSubstring(s: string): number {
    const lastOccur = {};
    let startIndex = 0;
    let max = 0;
    for(let i = 0 ; i < s.length ; i++){
        const currentChar = s[i];
        if(lastOccur[currentChar] !== undefined){
            startIndex = Math.max(startIndex,lastOccur[currentChar] + 1);
        }
        lastOccur[currentChar] = i;
        max = Math.max(max,i - startIndex + 1);
    }
    return max;
};