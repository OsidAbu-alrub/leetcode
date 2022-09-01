function findDisappearedNumbers(nums: number[]): number[] {
  let i = 0;
  const result = [];
  while(i < nums.length){
    let j = nums[i] - 1;
    if(nums[i] !== nums[j])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else
      i++;
  }
  
  for(let i = 0 ; i < nums.length ; i++)
    if(nums[i] !== i + 1)
      result.push(i + 1);
  return result;
};