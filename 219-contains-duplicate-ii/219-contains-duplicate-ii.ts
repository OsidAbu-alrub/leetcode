function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hash = {};
    return nums.some((num,index) => {
        if(num in hash && Math.abs(index - hash[num]) <= k)
            return true;
        hash[num] = index;
    })
};