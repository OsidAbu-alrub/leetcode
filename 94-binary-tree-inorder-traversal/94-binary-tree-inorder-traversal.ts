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

function inorderTraversal(root: TreeNode | null): number[] {
    const traversedTree:number[] = []
    if(root) inOrderTraversal(root,traversedTree);
    return traversedTree;
};

function inOrderTraversal(root:TreeNode | null,traversedTree:number[]){
    if(!root) return null;
    inOrderTraversal(root.left,traversedTree);
    traversedTree.push(root.val);
    inOrderTraversal(root.right,traversedTree);
}