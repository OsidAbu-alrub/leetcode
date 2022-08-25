function mostCommonWord(paragraph: string, banned: string[]): string {
  const frequencyMap = new Map<string, number>();
  const parsedParagraph = paragraph.split(/[!?',;. ]/).filter(word => word).map(word => word.toLowerCase()); 
  
  for(const word of parsedParagraph)
    if(!banned.includes(word))
      frequencyMap.set(word, frequencyMap.get(word) + 1 || 1);
  
  const max: [string, number] = ["", 0];
  for(const [key, value] of frequencyMap)
    if(value > max[1])      
      [max[0], max[1]] = [key, value];
  return max[0];
};