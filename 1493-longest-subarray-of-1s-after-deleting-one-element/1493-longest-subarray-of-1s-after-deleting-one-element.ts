function longestSubarray(nums: number[]): number {
  const MAXIMUM_NUMBER_OF_REMOVALS = 1;
  const frequencyHash = [0, 0];
  let ans = 0;

  for(let windowStart = 0, windowEnd = 0 ; windowEnd < nums.length ; windowEnd++){
    frequencyHash[nums[windowEnd]] += 1;
    let numberOfRemovals = windowEnd - windowStart + 1 - frequencyHash[1];

    while(numberOfRemovals > MAXIMUM_NUMBER_OF_REMOVALS)
    {
      frequencyHash[nums[windowStart]] -= 1;
      windowStart += 1;
      numberOfRemovals = windowEnd - windowStart + 1 - frequencyHash[1];
    }
    ans = Math.max(ans, windowEnd - windowStart + 1);
  }
  return ans - 1;
};