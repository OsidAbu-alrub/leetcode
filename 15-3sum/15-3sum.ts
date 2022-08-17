const TARGET = 0;
function threeSum(nums: number[]): number[][] {
  const ans = [];
  nums.sort((a, b) => a - b);
  for(let i = 0 ; i < nums.length ; i++){
    if(i > 0 && nums[i-1] === nums[i])
      continue;
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right){
      const sum = nums[i] + nums[left] + nums[right];
      if(sum < TARGET)
        left++;
      else if(sum > TARGET)
        right--;
      else {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        while(nums[left] === nums[left - 1])
          left++;
      }
    }
  }
  return ans;
};