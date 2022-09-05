function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const subsets = [];
  dfs(nums, 0, [], subsets);
  return subsets;
};

function dfs(nums, index, currentPath, subsets){
  if(index === nums.length){
    subsets.push([...currentPath])
    return;
  }
  
  currentPath.push(nums[index]);
  dfs(nums, index + 1, currentPath, subsets);
  currentPath.pop();
  
  while(nums[index] === nums[index + 1])
    index++;
  dfs(nums, index + 1, currentPath, subsets);
}