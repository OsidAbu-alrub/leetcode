function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  while(start <= end){
    const mid = start + Math.floor((end - start) / 2);
    if(target === nums[mid])
      return mid;
    
    if(target < nums[mid])
      end = mid - 1;
    else 
      start = mid + 1;
  }
  return -1;
};