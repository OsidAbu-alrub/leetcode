function averageOfLevels(root: TreeNode | null): number[] {
  let currentLevel: Array<any> = [root];
  let nextLevel: Array<any> = [];
  let sumAtLevel = 0;
  let numberOfNodesAtLevel = 0; 
  const averages = [];
  while(currentLevel.length){
    const current = currentLevel.shift();
    sumAtLevel = sumAtLevel + current.val;
    numberOfNodesAtLevel++;

    if(current.left) nextLevel.push(current.left);
    if(current.right) nextLevel.push(current.right);

    if(!currentLevel.length){
      averages.push(average(sumAtLevel, numberOfNodesAtLevel));
      sumAtLevel = 0;
      numberOfNodesAtLevel = 0;
      [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
  }
  return averages;
};
    
function average(sum:number, quantity:number){
    return (sum / quantity).toFixed(5) 
}