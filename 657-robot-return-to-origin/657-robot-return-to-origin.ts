const MOVE_TO_NUMBER_MAP = {
  "U": [-1, 0],
  "D": [1, 0],
  "L": [0, 1],
  "R": [0, -1],
  
}

function judgeCircle(moves: string): boolean {
  const coordinates = [0, 0];
  for(const char of moves){
    coordinates[0] = coordinates[0] + MOVE_TO_NUMBER_MAP[char][0]; 
    coordinates[1] = coordinates[1] + MOVE_TO_NUMBER_MAP[char][1]
  }
  return coordinates[0] === 0 && coordinates[1] === 0;
};