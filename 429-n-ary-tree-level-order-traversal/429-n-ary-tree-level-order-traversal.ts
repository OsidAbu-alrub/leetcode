function levelOrder(root: Node | null): number[][] {
    let currentLevel = [root];
    let nextLevel = [];
    let level = [];
    const ans = [];
    while(currentLevel.length && root){
        const current = currentLevel.shift();
        
        level.push(current.val);
        current.children.forEach(child => nextLevel.push(child));
        
        if(!currentLevel.length){
            ans.push(level);
            level = [];
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
        }
    }
    return ans;
};