function averageOfLevels(root: TreeNode | null): number[] {
    let currentLevel = [root];
    let nextLevel = [];
    let sumAtLevel = 0;
    let lengthAtLevel = 0;
    const averages = [];
    while(currentLevel.length){
        const current = currentLevel.shift();
        
        sumAtLevel = (sumAtLevel + current.val) % Number.MAX_SAFE_INTEGER;
        lengthAtLevel += 1;
        
        if(!currentLevel.length)
            averages.push(average(sumAtLevel, lengthAtLevel))
        
        if(current.left) nextLevel.push(current.left);
        if(current.right) nextLevel.push(current.right);
        
        if(!currentLevel.length){
            sumAtLevel = 0;
            lengthAtLevel = 0;
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
        }
    }
    return averages;
};
    
function average(sum:number, quantity:number){
    return (sum / quantity).toFixed(5) 
}