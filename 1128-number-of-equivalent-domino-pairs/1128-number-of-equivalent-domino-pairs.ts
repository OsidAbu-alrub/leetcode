function numEquivDominoPairs(dominoes: number[][]): number {
  const mapOfDominoes = new Map<number, number>();
  let count = 0;
  for(const domino of dominoes){
    const parsedDomino = Math.max(domino[0],domino[1]) * 10 + Math.min(domino[0],domino[1]);
    mapOfDominoes.set(parsedDomino, mapOfDominoes.get(parsedDomino) + 1 || 1);
  }
  
  for(const [, frequency] of mapOfDominoes)
    count += (frequency * (frequency - 1))/2;
  
  return count;
};