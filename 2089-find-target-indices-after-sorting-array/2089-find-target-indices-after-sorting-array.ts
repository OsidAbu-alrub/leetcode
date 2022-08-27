function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);
  return nums.map((num, index) => num === target ? index : -1).filter(num => num !== -1);
};