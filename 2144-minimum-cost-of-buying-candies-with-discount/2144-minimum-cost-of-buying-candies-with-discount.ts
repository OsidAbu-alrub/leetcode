function minimumCost(costs: number[]): number {
  costs.sort((a, b) => b - a);
  let minPaid = 0;
  for(let i = 0 ; i < costs.length ; i++){
    
    // get first candy
    minPaid = minPaid + costs[i];
    
    // buy second candy if possible (if index not out of bounds)
    i++;
    minPaid = (minPaid + costs[i]) || minPaid;
    
    // get free candy
    i++; 
  }
  return minPaid
};