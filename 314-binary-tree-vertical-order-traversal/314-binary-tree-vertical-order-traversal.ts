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

function verticalOrder(root: TreeNode | null): number[][] {
  // now we got the leftmost column number
  // we will consider this column to be the 
  // the column for the root node of tree
  // this means that leftmost column will be at 
  // index zero
  const treeRootColumn = Math.abs(findLeftMostColumn(root, 0)) - 1;
  
  // Now do BFS, and store elements in ans array
  // based on cloumn value. If we go left, we decrement column value
  // if we go right, we increment column value
  const ans = [];
  const queue: Array<[TreeNode, number]> = [[root, treeRootColumn]];
  
  while(queue.length && root){
    const [node, column] = queue.shift();
    if(!ans[column]) ans[column] = [];
    ans[column].push(node.val);
    
    if(node.left) queue.push([node.left, column - 1]);
    if(node.right) queue.push([node.right, column + 1]);
  }
  
  return ans;
};

function findLeftMostColumn(root: TreeNode | null, column: number) {
  if(!root) return column;
  return Math.min(
    findLeftMostColumn(root.left, column - 1),
    findLeftMostColumn(root.right, column + 1)
  );
}