function arrayRankTransform(arr: number[]): number[] {
  const sortedArray = [...arr].sort((a, b) => a - b);
  const rank = new Map<number, number>();
  for(const num of sortedArray)
    rank.set(num, rank.get(num) || rank.size + 1);
  const result = [];
  for(const num of arr)
    result.push(rank.get(num));
  return result;
};