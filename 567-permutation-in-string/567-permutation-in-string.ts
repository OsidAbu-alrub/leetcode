function checkInclusion(s1: string, s2: string): boolean {
  const targetHash = {};
  for(const char of s1)
    targetHash[char] = (targetHash[char] ?? 0) + 1;

  let frequencyChar = {};
  for(let windowStart = 0, windowEnd = 0 ; windowEnd < s2.length ; windowEnd++){
    const char = s2[windowEnd];
    frequencyChar[char] = (frequencyChar[char] ?? 0) + 1;

    const hasPermutation = Object.entries(targetHash).every(([char, frequency]) => 
        frequencyChar[char] === frequency
    )

    if(hasPermutation) return true;

    // we found a character that is not in pattern
    // or a char is repeated more times than in pattern
    // shrink window
    if(windowEnd >= s1.length - 1){
      const leftChar = s2[windowStart];
      frequencyChar[leftChar] -= 1;
      if(frequencyChar[leftChar] === 0)
        delete frequencyChar[leftChar];
      windowStart++;
    }
  }
  return false;
};
