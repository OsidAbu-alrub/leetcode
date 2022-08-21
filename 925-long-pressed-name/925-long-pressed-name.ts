function isLongPressedName(name: string, typed: string): boolean {
  let i = 0;
  let j = 0;
  while(j < typed.length && i < name.length){
    if(name[i] === typed[j]){
      i++;
      j++;
    }
    else {
      
      // this would mean that we have a char in 
      // typed that is not in name
      if(typed[j] !== typed[j - 1])
        return false;
      
      // skip over all the long pressed chars
      while(typed[j] === typed[j - 1])
        j++;
    }
  }
  
  while(j < typed.length){
    if(typed[j] !== typed[j - 1])
      return false;
    j++;
  }
  
  return i === name.length
};