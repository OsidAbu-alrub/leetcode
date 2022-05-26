function hammingWeight(n: number): number {
    let numberOfOnes = 0;
    while(n > 0){
        numberOfOnes += n & 1;
        n = n >>> 1;
    }
    return numberOfOnes;
};