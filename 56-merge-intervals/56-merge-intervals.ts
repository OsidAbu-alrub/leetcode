function merge(intervals: number[][]): number[][] {
  intervals.sort(([a], [b]) => a - b);
  const ans: Array<number[]> = [intervals[0]];
  let ansIndex = 1;
  for(let i = 1 ; i < intervals.length ; i++)
  {
    const [startA, endA] = ans[ansIndex - 1];
    const [startB, endB] = intervals[i];
    if(endA >= startB){
      
      // I know for sure that the minimum start time will come 
      // from my ans array, because the intervals are sorted in 
      // ascending order based on start time
      ans[ansIndex - 1][0] = startA;
      
      
      ans[ansIndex - 1][1] = Math.max(endA, endB);
    }
    else {
      ans.push(intervals[i])
      ansIndex++;
    }
  }
  return ans;
};