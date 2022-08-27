function subsets(nums: number[]): number[][] {
  const subsets = [[]];
  for(const num of nums){
    
    // store the original length of subsets array
    const lengthOfSubets = subsets.length;
    
    // loop over subsets copying over existing sets, 
    // and adding the new number to the copied set
    // the adding the copied set to the subsets array
    for(let i = 0 ; i < lengthOfSubets ; i++){
      const set = [...subsets[i]];
      set.push(num);
      subsets.push(set);
    }
  }
  return subsets;
};