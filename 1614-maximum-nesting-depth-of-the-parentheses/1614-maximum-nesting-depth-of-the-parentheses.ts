function maxDepth(s: string): number {
  let numberOfOpenParentheses = 0;
  let maxDepth = 0;
  for(const char of s){
    if(!["(", ")"].includes(char)) {
      continue;
    }
    if(char === ")"){
      numberOfOpenParentheses--;
    }
    else {
      numberOfOpenParentheses++;
    }
    maxDepth = Math.max(maxDepth, numberOfOpenParentheses);
  }
  return maxDepth;
};