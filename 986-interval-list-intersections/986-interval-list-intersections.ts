function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  const result = [];
  let i = 0;
  let j = 0;
  while(i < firstList.length && j < secondList.length){
    const maxStart = Math.max(firstList[i][0], secondList[j][0]);
    const minEnd = Math.min(firstList[i][1], secondList[j][1]);

    if(maxStart <= minEnd)
      result.push([maxStart, minEnd]);

    if(firstList[i][1] < secondList[j][1])
      i++;
    else 
      j++;
  }
  return result;
};