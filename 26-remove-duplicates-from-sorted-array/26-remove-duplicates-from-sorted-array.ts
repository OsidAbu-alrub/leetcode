function removeDuplicates(nums: number[]): number {
  let ans = 1;
  for(let left = 0, right = 0 ; right < nums.length ; right++){
    if(nums[left] !== nums[right]){
      left++;
      ans++;
      nums[left] = nums[right];
    }
  }
  return ans;
};