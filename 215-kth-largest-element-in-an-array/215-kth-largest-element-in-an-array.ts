function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  let ans = 0;
  for(let i = 0 ; i < k ; i++)
    ans = nums[i];
  return ans;
};