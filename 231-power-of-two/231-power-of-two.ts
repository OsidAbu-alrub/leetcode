function isPowerOfTwo(n: number): boolean {
    return (1 << Math.floor(logBaseTwo(n))) === n;
};

function logBaseTwo(num:number){
    return Math.log(num) / Math.log(2);
}