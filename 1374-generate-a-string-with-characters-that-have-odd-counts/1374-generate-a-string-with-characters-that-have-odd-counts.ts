function generateTheString(n: number): string {
  const output = new Array(n).fill("a");  
  if(n % 2 === 0)
    output[0] = "b";
  return output.join("");
};