function letterCombinations(digits: string): string[] {
  if(digits.length === 0) return [];
  const result = [];
  const digitsMapper = {
    "2":["a", "b", "c"],
    "3":["d", "e", "f"],
    "4":["g", "h", "i"],
    "5":["j", "k", "l"],
    "6":["m", "n", "o"],
    "7":["p", "q", "r", "s"],
    "8":["t", "u", "v"],
    "9":["w", "x", "y", "z"],
  }
  dfs(digits, result, digitsMapper, [], 0);
  return result;
};

function dfs(digits: string, result: string[], digitsMapper, path: string[], index: number){
  if(index === digits.length){
    result.push(path.join(""));
    return;
  }
  
  for(const char of digitsMapper[digits[index]]){
    path.push(char);
    dfs(digits, result, digitsMapper, path, index + 1);
    path.pop();
  }
}