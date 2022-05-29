function frequencySort(s: string): string {
    const charactersHash = [...s].reduce((acc,char) => {
        acc[char] = acc[char] ? acc[char] + char : char;
        return acc;
    },{})
    
    const sortedEntries = (Object.entries(charactersHash) as [string,string][]).sort(([,a],[,b]) => b.length - a.length);
    return sortedEntries.reduce((acc,[,concatenatedChars]) => acc + concatenatedChars,"");
};