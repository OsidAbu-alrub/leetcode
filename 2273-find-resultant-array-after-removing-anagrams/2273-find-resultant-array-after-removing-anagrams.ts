function removeAnagrams(words: string[]): string[] {
  const wordsMapper = new Map<string, string>();
  const ans = [];
  for(let i = 0 ; i < words.length ; i++){
    const currentWordSorted = words[i].split("").sort().join("");
    const previousWordSorted = words[i - 1]?.split("").sort().join("");
    if(currentWordSorted !== previousWordSorted)
      ans.push(words[i]);
  }
  return ans;
};