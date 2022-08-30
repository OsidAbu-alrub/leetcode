function levelOrderBottom(root: TreeNode | null): number[][] {
  if(!root) return []
  let currentLevelQueue = [root];
  let nextLevelQueue = [];
  const answer = []
  let level = [];
  while(currentLevelQueue.length){
    const node = currentLevelQueue.shift();

    level.push(node.val);
      
    if(node.left) nextLevelQueue.push(node.left);
    if(node.right) nextLevelQueue.push(node.right);
    if(!currentLevelQueue.length)
    {
        answer.push(level);
        level = [];
        [currentLevelQueue, nextLevelQueue] = [nextLevelQueue, currentLevelQueue]
    }
  }
    return answer.reverse();
};










