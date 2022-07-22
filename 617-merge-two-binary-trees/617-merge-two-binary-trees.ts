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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1) return root2;
    if(!root2) return root1;
    
    const root = new TreeNode(root1.val + root2.val)
    let currentLevel:Array<[TreeNode, TreeNode, TreeNode]> = [[root, root1, root2]];
    let nextLevel = [];
    while(currentLevel.length){
        const [current, current1, current2] = currentLevel.shift();
        
        const currentOneHasLeftNode = current1 && current1.left;
        const currentTwoHasLeftNode = current2 && current2.left;
        const currentOneHasRightNode = current1 && current1.right;
        const currentTwoHasRightNode = current2 && current2.right;
        if(currentOneHasLeftNode || currentTwoHasLeftNode){
            current.left = new TreeNode(0);
            const nextIteration = [current.left];
            if(currentOneHasLeftNode){
                current.left.val += current1.left.val;
                nextIteration[1] = current1.left
            }
            if(currentTwoHasLeftNode){
                current.left.val += current2.left.val;
                nextIteration[2] = current2.left
            }
            nextLevel.push(nextIteration);
        }
        
        if(currentOneHasRightNode || currentTwoHasRightNode){
            current.right = new TreeNode(0);
            const nextIteration = [current.right];
            if(currentOneHasRightNode){
                current.right.val += current1.right.val;
                nextIteration[1] = current1.right;
            }
            if(currentTwoHasRightNode){
                current.right.val += current2.right.val;
                nextIteration[2] = current2.right;
            }
            nextLevel.push(nextIteration);
        }
        
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    return root;
};