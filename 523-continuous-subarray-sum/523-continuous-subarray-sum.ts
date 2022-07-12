function checkSubarraySum(nums: number[], k: number): boolean {
    const remainders = { 0:-1 };
    let sum = 0;
    return nums.some((num,idx) => {
        sum = sum + num;
        const remainder = k === 0 ? sum : sum % k;
        if(!(remainder in remainders))
            remainders[remainder] = idx;
        else if(idx - remainders[remainder] > 1) 
            return true;
        return false;
    })
};