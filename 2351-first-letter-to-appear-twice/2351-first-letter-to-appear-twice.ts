function repeatedCharacter(s: string): string {
  const charsMapper = {};
    for(const c of s){
      if(c in charsMapper)
        return c;
      charsMapper[c] = (charsMapper[c] ?? 0) + 1; 
    }
    return "";
};