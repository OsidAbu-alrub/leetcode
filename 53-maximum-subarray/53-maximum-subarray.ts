function maxSubArray(nums: number[]): number {
  let sum = 0;
  let max = -Infinity;
  for(const num of nums){
    sum = sum + num;
    max = Math.max(sum, max);
    if(sum < 0)
      sum = 0;
  }
  return max;
};