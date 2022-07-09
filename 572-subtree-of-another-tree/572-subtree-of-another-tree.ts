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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!root) return false;
    return traverse(root,subRoot) || 
        isSubtree(root.left,subRoot) || 
        isSubtree(root.right,subRoot) 
};

function traverse(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    return (
      root.val === subRoot.val &&
      traverse(root.left, subRoot.left) &&
      traverse(root.right, subRoot.right)
    );
}