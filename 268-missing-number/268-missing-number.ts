function missingNumber(nums: number[]): number {
    const sortedArray = nums.sort((a,b) => a - b);
    for(var i = 0 ; i < sortedArray.length ; i++){
        if(i !== sortedArray[i]) return i;
    }
    return i++;
};