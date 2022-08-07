function divisorSubstrings(num: number, k: number): number {
    let divisor = 0;
    let numberOfBeauties = 0;
    let power = 1;
    let n = num;
    while(n > 0){
        divisor += (n % 10) * power;
        k--;
        if(k > 0)
            power = power * 10; // increase power by 10 if substring length is not reached
        else {
            numberOfBeauties = divisor && num % divisor === 0 ? 
                numberOfBeauties + 1 : numberOfBeauties
            // remove rightmost digit from window 
            // this is the equivalent of removing window start
            divisor = Math.floor(divisor / 10); 
        }
        n = Math.floor(n / 10);
    }
    return numberOfBeauties;
};