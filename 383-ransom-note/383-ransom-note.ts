function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteMap = new Map<string, number>();
  const magazineMap = new Map<string, number>();
  for(const char of magazine)
    magazineMap.set(char, magazineMap.get(char) + 1 || 1);
  for(const char of ransomNote)
    ransomNoteMap.set(char, ransomNoteMap.get(char) + 1 || 1);
  for(const [char, frequency] of ransomNoteMap)
    if(!magazineMap.has(char) || frequency > magazineMap.get(char))
      return false;
  return true;
};
