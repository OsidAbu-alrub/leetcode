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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return sameLevel(p,q);
};

function sameLevel(p: TreeNode | null, q: TreeNode | null){
    if(!q || !p) return q === p;
    return p.val === q.val && sameLevel(p.left,q.left) && sameLevel(p.right,q.right);
}