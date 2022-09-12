function arraySign(nums: number[]): number {
  let product = 1;
  for(const num of nums){
    if(num === 0)
      return 0;
    product *= num > 0 ? 1 : -1 ;
  }
  return product ;
};