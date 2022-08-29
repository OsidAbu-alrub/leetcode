function thirdMax(nums: number[]): number {
  
  // find first max
  let max = -Infinity;
  for(const num of nums)
    if(num > max) max = num;
  
  // use difference to find second max
  let minDiff = Infinity;
  let secondMax = max;
  for(const num of nums){
    const difference = max - num;
    if(num !== max && difference < minDiff){
      minDiff = difference;
      secondMax = num;
    }
  }
  
  // use difference to find third max
  minDiff = Infinity;
  let thirdMax = max;
  for(const num of nums){
    const difference = secondMax - num;
    if(num !== max && num !== secondMax && difference < minDiff){
      minDiff = difference;
      thirdMax = num;
    }
  }
  
  return thirdMax;
};