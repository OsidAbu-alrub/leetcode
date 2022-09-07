function findBuildings(heights: number[]): number[] {
  // store index of last element, because it will
  // always overlook the sea
  const ans = [heights.length - 1];
  let i = heights.length - 1;
  
  for(let j = heights.length - 2 ; j >= 0 ; j--){
    
    // if the height at j is greater than the height at i
    // then this is our new max height
    if(heights[j] > heights[i]){
      ans.push(j);
      i = j;
    }
  }
  
  // to have indices in sorted order (ascending)
  return ans.reverse();
};

/*
  [4, 2, 3, 1, 15, 10, 9, 8]
  
  Algorithm: 
  - Initialize two indices at array.length - 1 & array.length - 2 (i & j respectively)
  - Store last index in ans array (because it always overlooks the sea)
  - loop until j is less than zero
    - if the element at j is greater than element at i
      - store index of j
      - move i to j
    - increment j
  - return answer array reversed 
*/