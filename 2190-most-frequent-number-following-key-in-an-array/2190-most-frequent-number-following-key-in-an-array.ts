function mostFrequent(nums: number[], key: number): number {
  const map = new Map<number, number>();
  for(let i = 0 ; i < nums.length - 1 ; i++)
    if(nums[i] === key)
      map.set(nums[i + 1], (map.get(nums[i + 1]) + 1) || 1);
  let currentMaximumCount = -Infinity;
  let targetWithMaximumCount = 0;
  map.forEach((frequency, num) => {
    if(frequency > currentMaximumCount){
      currentMaximumCount = frequency;
      targetWithMaximumCount = num;
    }
  })
  return targetWithMaximumCount;
};