function sortedSquares(nums: number[]): number[] {
  const ans = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  for(let i = nums.length - 1 ; left <= right ; i--){
    const squareStart = nums[left] ** 2;
    const squareEnd = nums[right] ** 2;
    ans[i] = squareEnd > squareStart ? squareEnd : squareStart;
    if(squareEnd > squareStart)
      right--;
    else 
      left++;
      
  }
  return ans;
};