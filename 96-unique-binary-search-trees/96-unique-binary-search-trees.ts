function numTrees(n: number): number {
  return dfs(n);
};

function dfs(n: number) {
  if(n <= 1) return 1;
  
  let count = 0;
  for(let i = 1 ; i <= n ; i++){
    const leftSubTrees = dfs(i - 1);
    const rightSubTrees = dfs(n - i)
    count += leftSubTrees * rightSubTrees;
  }
  return count;
}