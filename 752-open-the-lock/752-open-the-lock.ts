function openLock(deadends: string[], target: string): number {
  if(deadends.includes("0000")) return -1;
  const queue:Array<[string, number]> = [["0000", 0]];
  const seen = new Set(["0000"]);
  while(queue.length){
    const [sequence, moves] = queue.shift();

    if(sequence === target) return moves;
    for(let i = 0 ; i < 4 ; i++){
      const [nextSequenceIncremented, nextSequenceDecremented]
        = getNextSequence(sequence, i);
      if(check(nextSequenceIncremented, deadends, seen)){
        seen.add(nextSequenceIncremented);
        queue.push([nextSequenceIncremented, moves + 1]);
      }
      
      if(check(nextSequenceDecremented, deadends, seen)){
        seen.add(nextSequenceDecremented);
        queue.push([nextSequenceDecremented, moves + 1]);
      }
    }
  }
  
  return -1;
};

function check(nextSequence: string, deadends: string[], seen:Set<string>){
  if(seen.has(nextSequence)) return false;
  return deadends.every(deadend => deadend !== nextSequence);
}

function getNextSequence(currentSequence:string, position: number){
  const [nextValueIncremented, nextValueDecremented] = 
        [
          (Number(currentSequence[position]) + 1) % 10, 
          (((Number(currentSequence[position]) - 1) % 10) + 10) % 10
        ]
  let nextSequenceIncremented = "";
  let nextSequenceDecremented = "";
  for(let i = 0 ; i < currentSequence.length ; i++){
    nextSequenceIncremented += i === position ? nextValueIncremented : currentSequence[i];
    nextSequenceDecremented += i === position ? nextValueDecremented : currentSequence[i]
  }
  return [nextSequenceIncremented, nextSequenceDecremented];
}