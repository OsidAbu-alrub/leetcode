const MAPPER = {
  "U": [-1, 0],
  "D": [1, 0],
  "L": [0, -1],
  "R": [0, 1],
}
function executeInstructions(n: number, startPos: number[], s: string): number[] {
  const ans = [];
  for(let i = 0 ; i < s.length ; i++)
    ans[i] = dfs(n, startPos, s, i);
  return ans;
};
  
function dfs(n, pos, moves, index){
  if(index === moves.length)
    return 0;
  if(pos[1] === 0 && moves[index] === "L")
    return 0;
  if(pos[1] === n - 1 && moves[index] === "R")
    return 0;
  if(pos[0] === 0 && moves[index] === "U")
    return 0;
  if(pos[0] === n - 1 && moves[index] === "D")
    return 0;
  const [x, y] = MAPPER[moves[index]];
  return dfs(n, [pos[0] + x, pos[1] + y], moves, index + 1) + 1;
}