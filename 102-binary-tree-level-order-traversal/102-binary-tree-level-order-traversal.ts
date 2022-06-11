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

function levelOrder(root: TreeNode | null): number[][] {
    const levelOrderArray = {};
    const currentLevel = 1;
    traverse(root,levelOrderArray,currentLevel);
    return Object.values(levelOrderArray);
};

function traverse(root: TreeNode | null, levelOrderArray: object,currentLevel:number){
    if(!root) return;
    if(!levelOrderArray[currentLevel]) levelOrderArray[currentLevel] = [];
    levelOrderArray[currentLevel].push(root.val);
    traverse(root.left,levelOrderArray,currentLevel + 1);
    traverse(root.right,levelOrderArray,currentLevel + 1);
}