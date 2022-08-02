function groupAnagrams(strs: string[]): string[][] {
    const ans = [];
    const map = new Map<string, Array<string>>();
    for(const str of strs){
        const sortedStr = [...str].sort().join("");
        if(!map.has(sortedStr))
            map.set(sortedStr, []);
        map.get(sortedStr).push(str);
    }
    for(const [,values] of map)
        ans.push(values);
    return ans;
};