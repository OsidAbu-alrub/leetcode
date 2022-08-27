function searchRange(nums: number[], target: number): number[] {
  return [binarySearch(nums, target, true),binarySearch(nums, target, false)];
};

function binarySearch(nums: number[], target: number, isFindingLeftRange: boolean){
  let index = -1;
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end){
    const mid = Math.floor(start + (end - start) / 2);
    
    if(target === nums[mid])
    {
      index = mid;
      if(isFindingLeftRange)
        end = mid - 1;
      else
        start = mid + 1;
    }else if(target < nums[mid])
      end = mid - 1;
    else
      start = mid + 1;
  }
  return index;
}