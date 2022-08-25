function insert(intervals: number[][], newInterval: number[]): number[][] {
  const mergedIntervals = [];
  let i = 0;
  while(i < intervals.length && intervals[i][1] < newInterval[0]){
    mergedIntervals.push(intervals[i]);
    i++;
  }
  
  while(i < intervals.length && newInterval[1] >= intervals[i][0]){
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  
  mergedIntervals.push(newInterval);
  
  for( ; i < intervals.length ; i++)
    mergedIntervals.push(intervals[i]);
  return mergedIntervals;
};
