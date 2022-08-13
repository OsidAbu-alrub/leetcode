function removeDuplicates(nums: number[]): number {
  let left = 0;
  for(let right = 0 ; right < nums.length ; right++){
    if(nums[left] !== nums[right]){
      left++;
      nums[left] = nums[right];
    }
  }
  return left + 1;
};