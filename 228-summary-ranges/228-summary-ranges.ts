function summaryRanges(nums: number[]): string[] {
  const ranges = [];
  for(let i = 0 ; i < nums.length ; i++){
    const start = nums[i];
    while(nums[i] + 1 === nums[i + 1])
      i++;
    if(start !== nums[i])
      ranges.push(`${start}->${nums[i]}`);
    else
      ranges.push(`${start}`);
  }
  return ranges;
};