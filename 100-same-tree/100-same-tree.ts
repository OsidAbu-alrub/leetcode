/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if(root1 && !root2 || !root1 && root2) return false;
  
  const queueRoot1 = [root1];
  const queueRoot2 = [root2]; 
  while(queueRoot1.length && queueRoot2.length && root1 && root2){
    const node1 = queueRoot1.shift();
    const node2 = queueRoot2.shift();
    
    if(node1.val !== node2.val) return false;
    if(node1.left && !node2.left || !node1.left && node2.left) return false;
    if(node1.right && !node2.right || !node1.right && node2.right) return false;
    
    if(node1.left) {
      queueRoot1.push(node1.left);
      queueRoot2.push(node2.left);
    }
    
    if(node1.right) {
      queueRoot1.push(node1.right);
      queueRoot2.push(node2.right);
    }
  }
  
  return true;
};