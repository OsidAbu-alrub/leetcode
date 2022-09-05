function combinationSum(nums: number[], target: number): number[][] {
  const result = [];
  dfs(nums, target, 0, 0, [], result);
  return result;
};

function dfs(nums, target, index, sum, path, result){
  if(sum === target){
    result.push([...path]);
    return;
  }
  
  // if sum is greater than target
  // or index is eqaul to length of nums
  // then we know that the path we are
  // going in is wrong, so stop
  if(sum > target || index === nums.length)
    return
    
  // retake current element
  sum = sum + nums[index];
  path.push(nums[index]);
  dfs(nums, target, index, sum, path,result);
  
  // exclude current element
  path.pop();
  sum = sum - nums[index];
  dfs(nums, target, index + 1, sum, path, result);
}