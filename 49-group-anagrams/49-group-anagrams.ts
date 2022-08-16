function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, Array<string>>();
    for(const str of strs){
        const sortedStr = [...str].sort().join("");
        if(!map.has(sortedStr))
            map.set(sortedStr, []);
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
};