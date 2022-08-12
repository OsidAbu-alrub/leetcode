function checkInclusion(s1: string, s2: string): boolean {
  const targetHash = {};
  for(const char of s1)
    targetHash[char] = (targetHash[char] ?? 0) + 1;

  let frequencyChar = {};
  let charCount = 0;
  for(let windowStart = 0, windowEnd = 0 ; windowEnd < s2.length ; windowEnd++){
    const char = s2[windowEnd];
    frequencyChar[char] = (frequencyChar[char] ?? 0) + 1;
    charCount++;

    const hasPermutation = Object.entries(targetHash).every(([char, frequency]) => 
        frequencyChar[char] === frequency
    )

    if(hasPermutation) return true;

    // we found a character that is not in pattern
    // or a char is repeated more times than in pattern
    // shrink window
    if(charCount >= s1.length){
      const leftChar = s2[windowStart];
      frequencyChar[leftChar] -= 1;
      if(frequencyChar[leftChar] === 0)
        delete frequencyChar[leftChar];
      windowStart++;
      charCount--;
    }
  }
  return false;
};
