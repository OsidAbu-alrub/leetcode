function findDuplicates(nums: number[]): number[] {
  const result = [];
  for(let i = 0 ; i < nums.length ; i++){
    // if zero-based value doesn't equal zero-base index
    let j = Math.abs(nums[i]) - 1;
    if(nums[j] < 0)
      result.push(j + 1)
    nums[j] *= -1;
  }
  return result;
};