function isPowerOfFour(n: number): boolean {
    if(n === 0) return false;
    return (4 ** Math.floor(logBaseFour(n))) === n;
};

function logBaseFour(num:number){
    return Math.log(num) / Math.log(4);
}