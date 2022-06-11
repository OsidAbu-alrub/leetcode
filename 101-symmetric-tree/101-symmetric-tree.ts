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

function isSymmetric(root: TreeNode | null): boolean {
    return isSymmetricRec(root.left,root.right);
};

function isSymmetricRec(left: TreeNode | null, right: TreeNode | null){
    if(!left || !right) return left === right;
    return left.val === right.val && isSymmetricRec(left.left,right.right) && isSymmetricRec(left.right,right.left);
}