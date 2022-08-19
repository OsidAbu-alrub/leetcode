function isSubsequence(s: string, t: string): boolean {
  let sPtr = 0;
  let tPtr = 0;
  
  while(sPtr < s.length && tPtr < t.length){
    if(s[sPtr] === t[tPtr]){
      sPtr++;
      tPtr++;
    }
    else 
      tPtr++;
  }
  
  return sPtr === s.length;
};