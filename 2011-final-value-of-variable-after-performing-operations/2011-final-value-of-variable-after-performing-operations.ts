function finalValueAfterOperations(operations: string[]): number {
  let answer = 0;
  for(const operation of operations)
    answer = operation[1] === "+" ? answer + 1 : answer - 1;
  return answer;
};