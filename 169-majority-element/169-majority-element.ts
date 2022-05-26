function majorityElement(nums: number[]): number {
    const hash = {};
    for(let i = 0 ; i < nums.length ; i++){
        hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1;
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    let wantedKey = '';
    Object.entries(hash).forEach(([key,value]) => {
        if(value > max){
            max = value as number;
            wantedKey = key; 
        } 
    });
    return +wantedKey;
};