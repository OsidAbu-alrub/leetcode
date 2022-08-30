function connect(root: Node | null): Node | null {
  let currentLevel = [root];
  let nextLevel = [];
  let prev = null;
  while(currentLevel.length && root){
    const node = currentLevel.shift();
    if(prev){
      prev.next = node;
      prev = node;
    }
    if(!prev)
      prev = node;
    if(node.left) nextLevel.push(node.left);
    if(node.right) nextLevel.push(node.right);

    if(!currentLevel.length){
      prev = null;
      [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
  }
  return root;
};