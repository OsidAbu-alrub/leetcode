function validWordAbbreviation(word: string, abbr: string): boolean {
  if(abbr.length > word.length) return false;
  let i = 0;
  let j = 0;
  let num = "";
  while(i < word.length && j < abbr.length){
    if(word[i] === abbr[j]){
      i++;
      j++;
      continue;
    }
    
    let numberOfSkips = 0;
    while(!isNaN(Number(abbr[j])))
    {
      numberOfSkips = (numberOfSkips * 10) + Number(abbr[j]);
      
      if(numberOfSkips === 0)
        return false;
      
      j++;
    }
    
    i = numberOfSkips + i;
    
    if(word[i] !== abbr[j])
      return false;
  }
  return i === word.length && j === abbr.length;
};