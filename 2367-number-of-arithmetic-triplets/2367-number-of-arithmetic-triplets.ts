function arithmeticTriplets(nums: number[], diff: number): number {
  let count = 0;
  nums.sort((a, b) => a - b);
  for(let i = 0 ; i < nums.length ; i++){
    if(nums[i-1] === nums[i])
      continue;
    let left = i + 1;
    let right = nums.length - 1;
    
    while(left < right){
      // i = i
      // right = k
      // left = j
      const leftDiff = nums[left] - nums[i];
      const rightDiff =  nums[right] - nums[left]; 
      if(leftDiff === diff && rightDiff === diff){
        count++;
        left++;
        while(nums[left] === nums[left - 1])
          left++;
        right--;
        while(nums[right] === nums[right + 1])
          right++;
      }
      
      if(leftDiff < diff || rightDiff === diff)
        left++;
      else
        right--;
    }
  }
  return count;
};