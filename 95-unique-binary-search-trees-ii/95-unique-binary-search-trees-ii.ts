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

function generateTrees(n: number): Array<TreeNode | null> {
  return dfs(1, n);
};

function dfs(start:number, end:number) {
  const result = [];
  if(start > end){
    result.push(null);
    return result;
  }
  
  
  for(let i = start ; i <= end ; i++){
    const leftSubTrees = dfs(start, i - 1);
    const rightSubTrees = dfs(i + 1, end)
    for(let j = 0 ; j < leftSubTrees.length ; j++)
      for(let k = 0 ; k < rightSubTrees.length ; k++){
        const root = new TreeNode(i, leftSubTrees[j], rightSubTrees[k]);
        result.push(root);
      }
  }
  return result;
}