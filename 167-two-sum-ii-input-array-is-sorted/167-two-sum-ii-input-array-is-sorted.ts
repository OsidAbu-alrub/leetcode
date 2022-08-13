function twoSum(numbers: number[], target: number): number[] {
  const length = numbers.length;
  for(let start = 0, end = length - 1 ; start < end ; )
  {
    const sum = numbers[start] + numbers[end];
    if(sum === target)
      return [start + 1, end + 1];
    else if(sum < target)
      start++;
    else
      end--;
  }
};