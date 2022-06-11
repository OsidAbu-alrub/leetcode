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

function sumOfLeftLeaves(root: TreeNode | null): number {
    return dfs(root, false);
    
    function dfs(node, isLeft) {
        if (node == null) return 0;
        
        if (node.left == null && node.right == null && isLeft) {
            return node.val;
        }
        
        const left = dfs(node.left, true);
        const right = dfs(node.right, false);
        
        return left + right;
    }
};