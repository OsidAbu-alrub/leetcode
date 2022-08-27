function subsets(nums: number[]): number[][] {
  const subsets = [[]];
  for(const num of nums){
    const lengthOfSubets = subsets.length;
    for(let i = 0 ; i < lengthOfSubets ; i++){
      const set = [...subsets[i]];
      set.push(num);
      subsets.push(set);
    }
  }
  return subsets;
};