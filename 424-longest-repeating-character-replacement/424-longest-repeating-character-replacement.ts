function characterReplacement(s: string, k: number): number {
  let mostFrequentCharCount = 0;
  let ans = 0;
  const frequencyHash = {};
  
  for(let windowStart = 0, windowEnd = 0; windowEnd < s.length ; windowEnd++){
    
    // increase window size by adding new character
    const currentChar = s[windowEnd];
    if(!(currentChar in frequencyHash))
      frequencyHash[currentChar] = 0;
    frequencyHash[currentChar] += 1;
    
    // get the most frequent character count
    mostFrequentCharCount = Math.max(mostFrequentCharCount, frequencyHash[currentChar]);
    
    // decrease window size if number 
    // of characters that need to be  
    // replaced is greater than k
    // Note that the +1 is needed because 
    // we are dealing with 0 indexed counter
    let numberOfReplacements = windowEnd - windowStart - mostFrequentCharCount + 1;
    while(numberOfReplacements > k){
      const leftChar = s[windowStart];
      frequencyHash[leftChar] -= 1;
      windowStart++;
      numberOfReplacements = windowEnd - windowStart - mostFrequentCharCount + 1;
    }
    
    // take the max value between our previous
    // max and the current max
    ans = Math.max(ans, windowEnd - windowStart + 1);
  }
  return ans;
};