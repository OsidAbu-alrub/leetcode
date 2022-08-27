function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const subsets = [[]];
  let prevLength = 0;
  for(let i = 0 ; i < nums.length ; i++){
    let start = 0;
    
    // if we find a duplicate element, 
    // then don't add element to all exisiting subsets
    // but instead add to subsets that were added
    // in the previous step only
    if(nums[i] === nums[i - 1])
      start = prevLength;
    prevLength = subsets.length;
    for(let j = start ; j < prevLength ; j++){
      const set = [...subsets[j]];
      set.push(nums[i]);
      subsets.push(set);
    }
  }
  return subsets;
};