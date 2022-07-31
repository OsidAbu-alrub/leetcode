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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const ans1 = [];
    const ans2 = [];
    dfs(root1,ans1);
    dfs(root2,ans2);
    console.log(ans1);
    console.log(ans2);
    return  ans1.join(",") === ans2.join(",");
};

function dfs(root: TreeNode | null, ans: number[]) : string[] {
    if(!root) return;
    dfs(root.left, ans);
    if(!root.left && !root.right)
        ans.push(root.val);
    dfs(root.right, ans);

}