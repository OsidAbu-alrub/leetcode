function isHappy(n: number): boolean {
  const seen = new Set<number>();
  let sumOfSquares = n;
  while(!seen.has(sumOfSquares)){
    seen.add(sumOfSquares);
    sumOfSquares = calculateSumOfSquares(sumOfSquares);
    if(sumOfSquares === 1) return true; 
  }
  return false;
};
  
function calculateSumOfSquares(n: number){
  let sum = 0;
  while(n !== 0){
    const digit = n % 10;
    sum = sum + (digit ** 2);
    n = Math.floor(n / 10);
  }
  return sum;
}