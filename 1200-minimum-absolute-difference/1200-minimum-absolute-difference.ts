function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let ans = [];
  for(let i = 1 ; i < arr.length ; i++){
    const diff = arr[i] - arr[i - 1]; 
    if(diff === minDiff)
      ans.push([arr[i - 1], arr[i]]);
    else if(diff < minDiff){
      minDiff = diff;
      ans = [[arr[i - 1], arr[i]]];
    }
  }
  return ans;
};