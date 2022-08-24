function majorityElement(nums: number[]): number[] {
  const map = new Map<number, number>();
  
  for(const num of nums)
    map.set(num, map.get(num) + 1 || 1);
  
  const ans = [];
  const constraint = Math.floor(nums.length / 3);
  for(const [key, value] of map)
    if(value > constraint) ans.push(key);
  return ans;
};