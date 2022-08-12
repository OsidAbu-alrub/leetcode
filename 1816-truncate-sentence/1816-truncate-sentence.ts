function truncateSentence(s: string, k: number): string {
  const splittedString = s.split(" ");
  let ans = [];
  for(let i = 0 ; i < k ; i++)
    ans[i] = splittedString[i];
  return ans.join(" ");
};