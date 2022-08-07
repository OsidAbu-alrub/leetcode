function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity;
    let windowSum = 0;
    for(let windowEnd = 0, windowStart = 0; windowEnd < nums.length ; windowEnd++){
        windowSum += nums[windowEnd];
        
        while(windowSum >= target){
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }
    
    if(minLength === Infinity)
        return 0;
    return minLength;
};