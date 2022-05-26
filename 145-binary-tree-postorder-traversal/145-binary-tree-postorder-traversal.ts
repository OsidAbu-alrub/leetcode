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

function postorderTraversal(root: TreeNode | null): number[] {
    const arrayOfVals = [];
    postorder(root,arrayOfVals);
    return arrayOfVals;
};

function postorder(root,arrayOfVals) {
	if(!root) return;

	postorder(root.left, arrayOfVals);
	postorder(root.right, arrayOfVals);
    arrayOfVals.push(root.val);
}