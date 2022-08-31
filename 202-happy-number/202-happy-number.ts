function isHappy(n: number): boolean {
  
  // we use this set to check if we've calcualted 
  // the sum of sqaures before or not
  const seen = new Set<number>();
  let sumOfSquares = n;
  
  // as long as we didn't calculate the same sum twice
  while(!seen.has(sumOfSquares)){
    
    // add it to seen set
    seen.add(sumOfSquares);
    
    // calculate the new sum of sqaures
    sumOfSquares = calculateSumOfSquares(sumOfSquares);
    
    // if it equals to zero, then return true (happy number)
    if(sumOfSquares === 1) return true; 
  }
  
  // if we enter an infinite loop
  // AKA we calculated the same sum of squares
  // then we don't have a happy number
  // return false
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