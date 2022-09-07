function minRemoveToMakeValid(s: string): string {
  const stringAsArray = [...s];
  const stack = [];
  for(let i = 0 ; i < stringAsArray.length ; i++){
    const char = stringAsArray[i];
    const stackPeekChar = stack.at(-1);
    
    // skip if char is not parentheses
    if(!["(", ")"].includes(char)) continue;
    
    if(char === ")" && stackPeekChar === undefined){
      stringAsArray[i] = "";
      continue;
    }
    
    if(stackPeekChar === "(" && char === ")"){
      stack.pop();
      continue;
    }
    
    stack.push("(");
  }
  
  let i = stringAsArray.length - 1;
  let counter = 0;
  while(counter !== stack.length){
    if(stringAsArray[i] === "("){
      stringAsArray[i] = "";
      counter++;
    }
    i--;
  }
  return stringAsArray.join("");
};