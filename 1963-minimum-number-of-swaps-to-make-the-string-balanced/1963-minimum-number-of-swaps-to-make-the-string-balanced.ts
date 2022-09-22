function minSwaps(s: string): number {
  let openingBrackets = 0;
  for(const char of s){
    if(char === "["){
      openingBrackets++;
    }
    else if(openingBrackets > 0){
      openingBrackets--;
    }
  }
  return (openingBrackets + 1) >> 1;
};