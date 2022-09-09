function hasGroupsSizeX(deck: number[]): boolean {
  const frequencyMap = new Map<number, number>();
  for(const card of deck)
    frequencyMap.set(card, frequencyMap.get(card) + 1 || 1);
  let ans = 0;
  for(const [, count] of frequencyMap){ 
    ans = gcd(count, ans);
    if(ans < 2)
      return false;
  }
  return true;
};

function gcd(x:number, y:number){
  if(!y) return x;
  return gcd(y, x % y);
}