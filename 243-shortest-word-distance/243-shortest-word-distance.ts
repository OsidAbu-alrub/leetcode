function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
  let minDiff = Infinity;
  let p1 = 0;
  let p2 = 0;
  for(let i = 0 ; i < wordsDict.length ; i++){
    if(wordsDict[i] === word1)
      p1 = i;
    if(wordsDict[i] === word2)
      p2 = i;
    if(wordsDict[p1] === word1 && wordsDict[p2] === word2)
      minDiff = Math.min(minDiff, Math.abs(p1 - p2));
  }
  return minDiff;
};