function fourSum(arr: number[], target: number): number[][] {
  const ans = [];
  arr.sort((a, b) => a - b);
  for(let i = 0 ; i < arr.length - 2 ; i++){
    if(arr[i] === arr[i - 1])
      continue;
    for(let j = i + 1 ; j < arr.length - 1; j++){
      if(j !== i + 1 && arr[j] === arr[j-1])
        continue;
      let left = j + 1;
      let right = arr.length - 1;
      while(left < right){
        const sum = arr[i] + arr[j] + arr[left] + arr[right];
        if(sum === target){
          ans.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
          while(arr[left] === arr[left - 1])
            left++;
          right--;
          while(arr[right] === arr[right + 1])
            right--;
        }
        else if(sum < target)
          left++;
        else 
          right--;
      }
    }
  }
  return ans;
};