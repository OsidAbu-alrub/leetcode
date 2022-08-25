function isPrefixString(s: string, words: string[]): boolean {
  let i = 0;
  let j = 0;
  while(i < s.length && j < words.length){
    const word = words[j];
    for(const char of word){
      if(char !== s[i])
        return false;
      i++;
    }
    j++;
  }
  return i === s.length;
};