function makeFancyString(s: string): string {
  let nonFancyIndices = new Set<number>();
  for(let windowStart = 0,windowEnd = 0 ; windowEnd < s.length ; windowEnd++){
    if(windowEnd >= 2){
      if(s[windowEnd] === s[windowEnd - 1] && s[windowEnd] === s[windowEnd - 2])
        nonFancyIndices.add(windowStart);
      windowStart++;
    }
  }
  const ans = [];
  for(let i = 0 ; i < s.length ; i++)
    if(!nonFancyIndices.has(i))
      ans.push(s[i]);
  return ans.join("");
};