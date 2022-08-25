function generateTheString(n: number): string {
  const output = new Array(n);  
  if(n % 2 === 1)
    return output.fill("a").join("");
  output[0] = "b";
  for(let i = 1 ; i < n ; i++)
    output[i] = "a";
  return output.join("");
};