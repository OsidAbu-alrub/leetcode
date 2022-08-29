function thirdMax(nums: number[]): number {
  let max = -Infinity;
  for(const num of nums)
    if(num > max) max = num;
  
  let minDiff = Infinity;
  let secondMax = -Infinity;
  for(const num of nums){
    const difference = max - num;
    if(num !== max && difference < minDiff){
      minDiff = difference;
      secondMax = num;
    }
  }
  
  minDiff = Infinity;
  let thirdMax = -Infinity;
  for(const num of nums){
    const difference = secondMax - num;
    if(num !== max && num !== secondMax && difference < minDiff){
      minDiff = difference;
      thirdMax = num;
    }
  }
  
  return thirdMax === -Infinity ? max : thirdMax;
};