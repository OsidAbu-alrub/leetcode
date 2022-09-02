function expand(s: string): string[] {
  const result = [];
  
  // so get the length of the string without options
  // i.e. if we had {a,b}ec then length will be 3
  // (either aec or bec)
  let lengthOfSWithoutCurlyBraces = 0;
  let i = 0
  while(i < s.length){
    if(s[i] === "{")
      while(s[i] !== "}")
        i++;
    lengthOfSWithoutCurlyBraces++;
    i++;
  }
  
  // perform DFS
  dfs(s, lengthOfSWithoutCurlyBraces, result, [], 0);
  
  // return in sorted lexicographical order
  return result.sort((a, b) => a.localeCompare(b));
};

function dfs(str:string, length: number, result: string[], permutation: string[], index: number){
  
  // if permutation is same length as our string
  // then push that permutation to result array
  if(permutation.length === length){
    result.push(permutation.join(""));
    return;
  }
  
  // if current char is curly brace
  if(str[index] === "{"){
    
    // get closing index of current curly brace, starting from index position
    const indexOfClosingBrace = str.indexOf("}", index) + 1;
    for(let i = index ; i < indexOfClosingBrace ; i++){
      
      // if value is not english character, skip it
      if(["{", "}", ","].includes(str[i])) continue;
      
      // add char to our current permutation
      permutation.push(str[i]);
      
      // perform dfs on new permutation
      dfs(str, length, result, permutation, indexOfClosingBrace);
      
      // remove current char for next permutation
      permutation.pop();
    }
  }
  else {
    // if char is just plain english char
    // add it to permutation, increment index, perform dfs, then remove it from permutation
    permutation.push(str[index]);
    dfs(str, length, result, permutation, index + 1);
    permutation.pop();
  }
}