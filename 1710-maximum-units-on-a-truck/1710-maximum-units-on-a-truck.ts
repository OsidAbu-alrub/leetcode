function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let totalNumberOfUnits = 0;
  let availableTruckSize = truckSize;
  const sortedBoxesByUnit = [...boxTypes].sort(([, a], [, b]) => b - a);
  for(const [numberOfBoxes, numberOfUnitsPerBox] of sortedBoxesByUnit){
    if(availableTruckSize <= 0)
      break;
    const numberOfBoxesToAdd = Math.min(numberOfBoxes, availableTruckSize);
    availableTruckSize = availableTruckSize - numberOfBoxesToAdd;
    totalNumberOfUnits = totalNumberOfUnits + numberOfBoxesToAdd * numberOfUnitsPerBox;
  }
  return totalNumberOfUnits;
};