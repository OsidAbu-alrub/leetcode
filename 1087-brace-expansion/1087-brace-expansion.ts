function expand(s: string): string[] {
  const result = [];
  let lengthOfSWithoutCurlyBraces = 0;
  let i = 0
  while(i < s.length){
    if(s[i] === "{")
      while(s[i] !== "}")
        i++;
    lengthOfSWithoutCurlyBraces++;
    i++;
  }
  dfs([...s], lengthOfSWithoutCurlyBraces, result, [], 0);
  return result.sort((a, b) => a.localeCompare(b));
};

function dfs(str:string[], length: number, result: string[], permutation: string[], index: number){
  if(permutation.length === length){
    result.push(permutation.join(""));
    return;
  }
  
  if(str[index] === "{"){
    // get closing index of current curly brace, starting from index position
    const indexOfClosingBrace = str.indexOf("}", index) + 1;
    for(let i = index ; i < indexOfClosingBrace ; i++){
      if(["{", "}", ","].includes(str[i])) continue;
      permutation.push(str[i]);
      dfs(str, length, result, permutation, indexOfClosingBrace)
      permutation.pop();
    }
  }
  else {
    permutation.push(str[index]);
    dfs(str, length, result, permutation, index + 1);
    permutation.pop();
  }
}