function letterCasePermutation(s: string): string[] {
  const result = [];
  dfs([...s], result, 0);
  return result;
};

function dfs(str, result, index){
  if(index === str.length){
    result.push(str.join(""));
    return;
  }
  
  if(isNaN(Number(str[index])))
  {
    str[index] = str[index].toUpperCase();
    dfs(str, result, index + 1);
    str[index] = str[index].toLowerCase();
    dfs(str, result, index + 1);
  }
  else
    dfs(str, result, index + 1);
}