function addStrings(num1: string, num2: string): string {
  const ans = [];
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while(i >= 0 && j >= 0){
    const n1 =  num1[i];
    const n2 = num2[j];
    const digitsSum = Number(n1) + Number(n2) + carry;
    carry = 0;
    ans.push(digitsSum);
    if(digitsSum >= 10){
      ans.pop();
      ans.push(digitsSum % 10);
      carry = 1;
    }
    
    i--;
    j--;
  }
  
  while(i >= 0){
    const n1 =  num1[i];
    const digitsSum = Number(n1) + carry;
    carry = 0;
    ans.push(digitsSum);
    if(digitsSum >= 10){
      ans.pop();
      ans.push(digitsSum % 10);
      carry = 1;
    }
    i--;
  }
  
  while(j >= 0){
    const n2 =  num2[j];
    const digitsSum = Number(n2) + carry;
    carry = 0;
    ans.push(digitsSum);
    if(digitsSum >= 10){
      ans.pop();
      ans.push(digitsSum % 10);
      carry = 1;
    }
    j--;
  }
  
  if(carry > 0){
    ans.push(carry);
  }
  
  return ans.reverse().join("");
};


// ans = [3, 3, 0, 0, 0, 1]
// carry = 1
// 999956
//     77