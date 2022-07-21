function findTarget(root: TreeNode | null, k: number): boolean {
    let currentLevel = [root];
    let nextLevel = [];
    const differenceMap = {};
    while(currentLevel.length){
        const current = currentLevel.shift();
        
        if(differenceMap[current.val])
            return true;
        differenceMap[k - current.val] = true;
        
        if(current.left) nextLevel.push(current.left);
        if(current.right) nextLevel.push(current.right);
        
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    
    return false;
};