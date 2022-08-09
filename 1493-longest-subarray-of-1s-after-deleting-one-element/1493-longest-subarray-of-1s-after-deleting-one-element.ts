function longestSubarray(nums: number[]): number {
  const MAXIMUM_NUMBER_OF_REMOVALS = 1;
  const frequencyHash = [0, 0];
  let ans = 0;

  for(let windowStart = 0, windowEnd = 0 ; windowEnd < nums.length ; windowEnd++){
    
    // increase window size
    frequencyHash[nums[windowEnd]] += 1;
    let numberOfRemovals = windowEnd - windowStart + 1 - frequencyHash[1];

    // if the number of removed zeros is greater than one, 
    // start shrinking window size until number of removed 
    // zeros in window is less than or equal to one
    while(numberOfRemovals > MAXIMUM_NUMBER_OF_REMOVALS)
    {
      frequencyHash[nums[windowStart]] -= 1;
      windowStart += 1;
      numberOfRemovals = windowEnd - windowStart + 1 - frequencyHash[1];
    }
    ans = Math.max(ans, windowEnd - windowStart + 1);
  }
  
  // we subtract by one because we have to remove at least one element
  // even if its a one
  return ans - 1;
};