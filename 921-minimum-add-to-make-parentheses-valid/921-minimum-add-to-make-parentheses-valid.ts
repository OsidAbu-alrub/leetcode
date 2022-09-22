function minAddToMakeValid(s: string): number {
  const stack = [];;
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