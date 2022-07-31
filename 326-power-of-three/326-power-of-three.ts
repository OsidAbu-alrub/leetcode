function isPowerOfThree(n: number): boolean {
    if(n === 0) return false;
    return (3 ** Math.floor(logBaseThree(n))) === n;
};

function logBaseThree(num:number){
    return Math.log(num) / Math.log(3);
}