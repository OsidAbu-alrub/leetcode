function twoSum(numbers: number[], target: number): number[] {
  for(let start = 0, end = numbers.length - 1 ; start < end ; )
  {
    const sum = numbers[start] + numbers[end];
    if(sum === target)
      return [start + 1, end + 1];
    if(sum < target)
      start++;
    if(sum > target)
      end--;
  }
};