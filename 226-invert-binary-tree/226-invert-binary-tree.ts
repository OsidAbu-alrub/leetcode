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

function invertTree(root: TreeNode | null): TreeNode | null {
    invert(root);
    return root;
};

function invert(root: TreeNode | null){
    if(!root) return null;
    invert(root.left);
    invert(root.right);
    const tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
}