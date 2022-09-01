function firstMissingPositive(nums: number[]): number {
  let i = 0;
  
  // cyclic sort the array
  // ignore any values that are less 1 and more than length of array
  while(i < nums.length){
    let j = nums[i] - 1;
    if(nums[i] > 0 && nums[i] <= nums.length && nums[j] !== nums[i])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else 
      i++;
  }
  
  // find first element that doesn't match
  // its index + 1
  // return it
  for(let i = 0 ; i < nums.length ; i++)
    if(nums[i] !== i + 1)
      return i + 1;
  
  // if all elements match their index + 1
  // then the smallest positive missing value
  // from this array is the array length + 1
  return nums.length + 1;
};