/**
 * class ArrayReader {
 *		// This is the ArrayReader's API interface.
 *		// You should not implement it, or speculate about its implementation
 *		get(index: number): number {};
 *  };
 */

function search(reader: ArrayReader, target: number): number {
  let start = 0;
  let end = 1;
  while(reader.get(end) < target){
    const temp = start + 1;
    end = (end - start + 1) * 2;
    start = temp;
  }
  
  while(start <= end){
    const mid = Math.floor(start + (end - start) / 2);
    if(target === reader.get(mid))
      return mid;
    else if(target > reader.get(mid))
      start = mid + 1;
    else
      end = mid - 1;
  }
  return -1;
};