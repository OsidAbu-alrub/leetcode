function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort(([, aEnd], [, bEnd]) => aEnd - bEnd);
  let count = 0;
  for(let i = 1 ; i < intervals.length ; i++){
    const [startA, endA] = intervals[i - 1];
    const [startB, endB] = intervals[i];
    if(endA > startB){
      intervals[i] = [startA, endA];
      count++;
    }
  }
  return count;
};