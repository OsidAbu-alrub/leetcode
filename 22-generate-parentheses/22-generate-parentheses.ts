function generateParenthesis(n: number): string[] {
  const result = [];
  dfs(n, result, [], 0, 0);
  return result;
};

function dfs(n, result, path, numberOfOpening, numberOfClosing) {
  // if path length is n * 2, then we 
  // have a new completed permutation
  if(path.length === n << 1){
    result.push(path.join(""));
    return;
  }
  
  if(numberOfOpening < n){
    path.push("(")
    dfs(n, result, path,numberOfOpening + 1, numberOfClosing);
    path.pop();
  }
  
  if(numberOfClosing < n && numberOfClosing < numberOfOpening){
    path.push(")")
    dfs(n, result, path, numberOfOpening, numberOfClosing + 1);
    path.pop();
  }
}