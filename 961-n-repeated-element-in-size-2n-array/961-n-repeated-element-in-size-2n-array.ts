const MAXIMUM_INPUT_SIZE = 10**4 + 1; 
function repeatedNTimes(nums: number[]): number {
    const map = new Array(MAXIMUM_INPUT_SIZE).fill(0);
    const n = nums.length >> 1;
    return nums.find(num => ++map[num] === n)   
};