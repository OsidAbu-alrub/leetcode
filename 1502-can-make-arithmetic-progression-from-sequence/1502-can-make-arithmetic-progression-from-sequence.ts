function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const difference = arr[0] - arr[1];
  for(let i = 0 ; i < arr.length - 1; i++){
    if(arr[i] - arr[i + 1] !== difference){
      return false;
    }
  }
  return true;
};