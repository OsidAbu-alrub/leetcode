function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let j = 0;
  const ans = [];
  for( ; i < word1.length && j < word2.length ; i++, j++)
    ans.push(word1[i], word2[j]);
  
  for( ; i < word1.length ; i++)
    ans.push(word1[i]);
  
  for( ; j < word2.length ; j++)
    ans.push(word2[j]);
  
  return ans.join("");
};