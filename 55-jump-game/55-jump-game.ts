function canJump(nums: number[]): boolean {
    let currentLevelQueue = [0];
    let nextLevelQueue = [];
    const seen = new Set([0]);
    
    while(currentLevelQueue.length){
        const currentIndex = currentLevelQueue.shift();
        
        if(currentIndex === nums.length - 1) return true;
        for(let i = 1 ; i <= nums[currentIndex] && i+currentIndex < nums.length ; i++){
            if(!seen.has(i+currentIndex)){
                seen.add(i+currentIndex);
                nextLevelQueue.push(i+currentIndex)
            }
        }
        
        if(!currentLevelQueue.length)
            [currentLevelQueue, nextLevelQueue] = [nextLevelQueue, currentLevelQueue]  ;  
    }
    return false;
};