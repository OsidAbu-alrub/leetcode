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

function minCameraCover(root: TreeNode | null): number {
    let ans = 0
    const dfs = node => {
        if (!node) return 0
        let val = dfs(node.left) + dfs(node.right)
        if (val === 0) return 3
        if (val < 3) return 0
        ans++
        return 1
    }
    return dfs(root) > 2 ? ans + 1 : ans  
};