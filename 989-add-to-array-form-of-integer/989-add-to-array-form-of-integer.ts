function addToArrayForm(num: number[], k: number): number[] {
  let i = num.length - 1;
  let carry = 0;
  const ans = [];
  while(k !== 0 && i >= 0){
    const rightMostKDigit = k % 10;
    const digitsSum = num[i] + rightMostKDigit + carry;
    carry = 0;
    ans.push(digitsSum);
    if(digitsSum >= 10){
      ans.pop();
      ans.push(digitsSum % 10);
      carry = 1;
    }
    
    k = Math.floor(k / 10);
    i--;
  }
  
  while(k !== 0){
    const rightMostKDigit = k % 10;
    const digitsSum = rightMostKDigit + carry;
    carry = 0;
    ans.push(digitsSum);
    if(digitsSum >= 10){
      ans.pop();
      ans.push(digitsSum % 10);
      carry = 1;
    }
    
    k = Math.floor(k / 10);
  }
  
  while(i >= 0){
    const digitsSum = num[i] + carry;
    carry = 0;
    ans.push(digitsSum);
    if(digitsSum >= 10){
      ans.pop();
      ans.push(digitsSum % 10);
      carry = 1;
    }
    
    i--;
  }
  
  if(carry === 1){
    ans.push(carry);
  }
  
  return ans.reverse()
};