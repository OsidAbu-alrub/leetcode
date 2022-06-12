function removeDuplicates(nums: number[]): number {
    let uniqueCounter = 1;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[uniqueCounter - 1] !== nums[i]) {
            nums[uniqueCounter++] = nums[i];
        };
    }
    return uniqueCounter;
};