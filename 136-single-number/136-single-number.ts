function singleNumber(nums: number[]): number {
  let singleNumber = 0;
  for(const num of nums)
    singleNumber = singleNumber ^ num;
  return singleNumber;
};