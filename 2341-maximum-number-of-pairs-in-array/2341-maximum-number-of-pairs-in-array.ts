function numberOfPairs(nums: number[]): number[] {
  const set = new Set<number>();
  let pairsRemoved = 0;
  for(const num of nums){
    if(set.has(num)){
      set.delete(num);
      pairsRemoved++;
    }
    else
      set.add(num)
  }
  return [pairsRemoved, nums.length - (pairsRemoved * 2)];
};