function runningSum(nums: number[]): number[] {
    return nums.reduce<number[]>((acc,num,idx) => {
        if(idx === 0) return [num];
        acc[idx] = num + acc[idx-1];
        return acc;
    },[]);
};