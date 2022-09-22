function minAddToMakeValid(s: string): number {
  // solve it as a normal valid parentheses question
  // but when you find a closing parenthesis that 
  // doesn't have an opening parentheses, then we 
  // add the closing prentheses to the stack
  // stack length is the number that we need to make 
  // it valid
  const stack = [];
  for(const char of s){
    if(char === "("){
      stack.push(char);
    }
    else{
      const peek = stack.at(-1);
      if(peek === "("){
        stack.pop();
      }
      else {
        stack.push(char)
      }
    }
  }
  return stack.length;
};