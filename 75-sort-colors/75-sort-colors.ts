/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let latestNonZeroIndex = 0;
  let latestNonTwoIndex = nums.length - 1;
  let i = 0;
  while(i <= latestNonTwoIndex){
    if(nums[i] === 0){
      const temp = nums[latestNonZeroIndex];    
      nums[latestNonZeroIndex] = nums[i]  
      nums[i] = temp;
      i++;
      latestNonZeroIndex++;
    }
    else if(nums[i] === 2){
      const temp = nums[latestNonTwoIndex];    
      nums[latestNonTwoIndex] = nums[i]  
      nums[i] = temp;
      latestNonTwoIndex--;
    }
    else
      i++;
  }
};
