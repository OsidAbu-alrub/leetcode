function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result = [];
  dfs(nums, [], [], result);
  return result;
};

function dfs(nums, visited, path, result){
  if(path.length === nums.length){
    result.push([...path]);
    return;
  }
  
  for(let i = 0 ; i < nums.length ; i++){
    if(visited[i] || nums[i - 1] === nums[i] && !visited[i - 1]) continue;
    visited[i] = true;
    path.push(nums[i]);
    
    dfs(nums, visited, path, result);
    
    visited[i] = false;
    path.pop();
  }
}

