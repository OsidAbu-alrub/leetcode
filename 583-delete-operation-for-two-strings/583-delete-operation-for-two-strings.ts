function minDistance(word1: string, word2: string): number {
  const cache = Array.from(new Array(Math.max(word1.length, word2.length)), () => []);
  return helper(word1, word2, 0, 0, cache);
};

function helper(word1, word2, i, j, cache) {
  if(i === word1.length && j === word2.length){
    return 0;
  }
  
  if(i === word1.length){
    return word2.length - j;
  }
  
  if(j === word2.length){
    return word1.length - i;
  }
  
  if(cache[i][j]) return cache[i][j];
  
  if(word1[i] === word2[j]){
    cache[i][j] = helper(word1, word2, i+1, j+1, cache);
    return cache[i][j];
  }
  
  cache[i][j] = Math.min(helper(word1, word2, i + 1, j, cache), helper(word1, word2, i, j + 1, cache)) + 1;
  return cache[i][j];
}