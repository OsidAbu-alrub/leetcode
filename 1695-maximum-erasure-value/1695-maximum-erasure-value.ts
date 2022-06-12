function maximumUniqueSubarray(nums: number[]): number {
    const seen = new Set();
    let maxSum = 0;
    let sum = 0;
    let left = 0;
    let right = 0;
    while(right < nums.length) {
        while(seen.has(nums[right])) {
            sum -= nums[left];
            seen.delete(nums[left]);
            left++;
        }
        seen.add(nums[right]);
        sum += nums[right];
        right++;
        maxSum = Math.max(sum, maxSum);
    }
    
    return maxSum;
};