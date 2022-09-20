function validPalindrome(s: string): boolean {
  return recursion(s, 0, s.length - 1, false);
};

function recursion(s: string, start: number, end:number, didDelete: boolean){
  if(start >= end)
    return true;
  if(didDelete && s[start] !== s[end])
    return false;
  if(s[start] !== s[end])
    return recursion(s, start + 1, end, true) || recursion(s, start, end - 1, true);
  return recursion(s, start + 1, end - 1, didDelete);
}