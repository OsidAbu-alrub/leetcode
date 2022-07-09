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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    const root = new TreeNode(preorder.shift())
    preorder.forEach((value) => {
        addNode(root,value)
    });
    return root;
};

function addNode(root:TreeNode | null,value:number) : void {
    if(value > root.val && root.right) addNode(root.right,value)
    else if(value > root.val && !root.right) root.right = new TreeNode(value);
    else if(value <= root.val && root.left) addNode(root.left,value)
    else if(value <= root.val && !root.left) root.left = new TreeNode(value);
}