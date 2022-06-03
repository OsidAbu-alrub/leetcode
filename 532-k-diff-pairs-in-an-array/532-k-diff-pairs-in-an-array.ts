function findPairs(nums: number[], k: number): number {
    let numberOfDifferences = 0;
    const numbersMap = nums.reduce<any>((acc,num) => {
        acc[num] = acc[num] ?  acc[num] + 1 : 1;
        return acc;
    },{})
    
    for(const num of nums){
        if(k > 0 && numbersMap[k + num] || k === 0 && numbersMap[num] > 1){
            numberOfDifferences++;
            numbersMap[k + num]= 0
        }
    }

    return numberOfDifferences;
};