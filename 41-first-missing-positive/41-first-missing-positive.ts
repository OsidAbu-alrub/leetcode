function firstMissingPositive(nums: number[]): number {
  let i = 0;
  while(i < nums.length){
    let j = nums[i] - 1;
    if(nums[i] > 0 && nums[i] <= nums.length && nums[j] !== nums[i])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else 
      i++;
  }
  
  for(let i = 0 ; i < nums.length ; i++)
    if(nums[i] !== i + 1)
      return i + 1;
  return nums.length + 1;
};