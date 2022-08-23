function topKFrequent(words: string[], k: number): string[] {
  const map = {};
  for(const word of words)
    map[word] = map[word] + 1 || 1;
  const ans = Object.keys(map).sort((strA, strB) => {
    const frequencyDifference = map[strB] - map[strA];
    if(frequencyDifference === 0) return strA.localeCompare(strB);
    return frequencyDifference
  })
  return ans.slice(0, k);
};
