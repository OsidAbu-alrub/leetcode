function permute(nums: number[]): number[][] {
  const result = [];
  const visited = new Set<number>();
  dfs(nums, result, [], visited);
  return result;
};

function dfs(nums: number[], result: number[][], currentPath: number[], visited: Set<number>) {
  if(currentPath.length === nums.length){
    result.push([...currentPath]);
    return;
  }
  
  for(let i = 0 ; i < nums.length ; i++){
    if(visited.has(i)) continue;
    currentPath.push(nums[i]);
    visited.add(i);
    
    dfs(nums, result, currentPath, visited);
    
    visited.delete(i);
    currentPath.pop();
  }
}