function targetIndices(nums: number[], target: number): number[] {
  let count = 0;
  let lessThanTarget = 0;
  for(const num of nums)
    if(num === target) count++;
    else if(num < target) lessThanTarget++;
  const result = [];
  for(let i = 0 ; i < count ; i++)
    result.push(i + lessThanTarget);
  return result;
};