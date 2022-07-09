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

let max = 0;
let duplicateHash:{[key:string]:number} = {};
function findMode(root: TreeNode | null): number[] {
    duplicateHash = {}
    max = 0;
    traverse(root)
    return Object.entries(duplicateHash)
        .filter(([key,occur]) => occur === max)
        .map(([key]) => +key)
};

function traverse(root: TreeNode | null){
    if(!root) return;
    traverse(root.left)
    duplicateHash[root.val] = root.val in duplicateHash ? duplicateHash[root.val] + 1 : 1;
    if(duplicateHash[root.val] > max)
        max = duplicateHash[root.val]
    traverse(root.right)
}