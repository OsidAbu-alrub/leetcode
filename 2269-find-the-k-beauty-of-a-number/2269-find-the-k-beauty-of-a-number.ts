function divisorSubstrings(num: number, k: number): number {
    let divisor = "";
    let numberOfBeauties = 0;
    let stringifiedNum = String(num);
    
    for(let windowEnd = 0 ; windowEnd < stringifiedNum.length ; windowEnd++){
        divisor = `${divisor}${stringifiedNum[windowEnd]}`;
        if(windowEnd >= k - 1){
            const divisorAsNumber = Number(divisor);
            numberOfBeauties = divisorAsNumber !== 0 && num % divisorAsNumber === 0 ? 
                numberOfBeauties + 1 : numberOfBeauties
            divisor = divisor.substring(1);
        }
    }
    return numberOfBeauties;
};