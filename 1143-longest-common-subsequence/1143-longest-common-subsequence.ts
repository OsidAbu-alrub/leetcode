function longestCommonSubsequence(text1: string, text2: string): number {
  const n = text1.length;
  const m = text2.length;
  const cache = Array.from(new Array(Math.max(n, m)), () => []);
  return helper(text1, text2, 0, 0, cache);
};

function helper(word1, word2, i, j, cache) {
  // we reached the end of one string
  if(i === word1.length || j === word2.length){
    return 0;
  }
  
  // return the value if it is already cached
  if(cache[i][j]) return cache[i][j];
  
  // if chars are equal at this index
  // do nothing except storing the value in cache
  if(word1[i] === word2[j]){
    cache[i][j] = helper(word1, word2, i+1, j+1, cache) + 1;
    return cache[i][j];
  }
  
  // since chars at index i and j are different
  // we try to either delete from word1 or word2
  // the one that returns the minimum number of deletions
  // is our answer
  cache[i][j] = Math.max(helper(word1, word2, i + 1, j, cache), helper(word1, word2, i, j + 1, cache));
  return cache[i][j];
}