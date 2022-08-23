function frequencySort(nums: number[]): number[] {
  const frequencyHash = {};
  for(const num of nums)
    frequencyHash[num] = (frequencyHash[num] || 0) + 1;
  const sortedFrequencyArray = Object.entries(frequencyHash)
      .sort(([numA, frequencyA], [numB, frequencyB]) => {
        if(Number(frequencyA) - Number(frequencyB) === 0)
          return Number(numB) - Number(numA);
        return Number(frequencyA) - Number(frequencyB);
      });
  const ans = [];
  for(const [num, frequency] of sortedFrequencyArray)
    for(let i = 0 ; i < frequency ; i++)
      ans.push(Number(num));
  return ans;
};

/*
  - create a frequencyHash and fill it up with number frequencies
  - sort frequencyHash by frequency
  - create a sorted array and fill it corresponding values, then return it
*/