function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result = [];
  dfs(nums, [], [], result);
  return result;
};

function dfs(nums, used, path, result){
  
  // if path has same length as nums
  // then we have a new permutation
  if(path.length === nums.length){
    result.push([...path]);
    return;
  }
  
  for(let i = 0 ; i < nums.length ; i++){
    // skip over seen elements OR 
    // if the current element is the same as previous element AND
    // the previous element is not used, then skip
    // The reason for the second condition is the fact that if
    // I'm at index "i" and previous element is same as me, and 
    // I'm not using the previous element. This means if I used my current
    // element (me) then this will result in duplicate permutaiton
    if(used[i] || nums[i - 1] === nums[i] && !used[i - 1]) continue;
    used[i] = true;
    path.push(nums[i]);
    
    dfs(nums, used, path, result);
    
    used[i] = false;
    path.pop();
  }
}

