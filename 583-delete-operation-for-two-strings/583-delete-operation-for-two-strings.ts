function minDistance(word1: string, word2: string): number {
  const cache = Array.from(new Array(Math.max(word1.length, word2.length)), () => []);
  return helper(word1, word2, 0, 0, cache);
};

function helper(word1, word2, i, j, cache) {
  // we reached end of both strings, stop
  if(i === word1.length && j === word2.length){
    return 0;
  }
  
  // we reched the end of word1
  // but word2 still has characters that we
  // need to delete
  if(i === word1.length){
    return word2.length - j;
  }
  
 // we reched the end word2
  // but word1 still has characters that we
  // need to delete
  if(j === word2.length){
    return word1.length - i;
  }
  
  // return the value if it is already cached
  if(cache[i][j]) return cache[i][j];
  
  // if chars are equal at this index
  // do nothing except storing the value in cache
  if(word1[i] === word2[j]){
    cache[i][j] = helper(word1, word2, i+1, j+1, cache);
    return cache[i][j];
  }
  
  // since chars at index i and j are different
  // we try to either delete from word1 or word2
  // the one that returns the minimum number of deletions
  // is our answer
  cache[i][j] = Math.min(helper(word1, word2, i + 1, j, cache), helper(word1, word2, i, j + 1, cache)) + 1;
  return cache[i][j];
}