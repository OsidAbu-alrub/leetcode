function generateAbbreviations(word: string): string[] {
  const result = [];
  dfs([...word], result, 0);
  return result;
};

function dfs(word:string[], result: string[], index: number) {
  if(index === word.length){
    result.push(getValidPermutation(word));
    return;
  }
  
  // store the current char
  const char = word[index];
  
  // replace current char with one
  word[index] = "1";
  dfs(word, result, index + 1);
  
  // then try without replacing current char
  word[index] = char;
  dfs(word, result, index + 1);
}

function getValidPermutation(word:string[]){
  const wordCopy = [...word];
  const lengthOfWordCopy = wordCopy.length;
  for(let i = 0 ; i < lengthOfWordCopy ; i++){
    const currentChar = Number(wordCopy[i]);
    const previousChar = Number(wordCopy[i - 1]);
    
    // if both chars are numbers
    if(!isNaN(currentChar) && !isNaN(previousChar)){
      // remove previous digit
      wordCopy[i - 1] = "";
      
      // replace current digit with sum of two digits
      wordCopy[i] = String(currentChar + previousChar);
    }
  }
  
  // remove empty string from word copy
  // and convert the wordCopy array to a string
  return wordCopy.filter(Boolean).join("");
}