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

function rightSideView(root: TreeNode | null): number[] {
    const rightSideView = [];
    let currentLevelQueue = [root];
    let nextLevelQueue = [];
    let firstNodeAtCurrentLevel = null;
    while(currentLevelQueue.length && root){
        const node = currentLevelQueue.shift();
        if(!firstNodeAtCurrentLevel)
            firstNodeAtCurrentLevel = node;
        
        if(node.right) nextLevelQueue.push(node.right);
        if(node.left) nextLevelQueue.push(node.left);
        
        if(!currentLevelQueue.length){
            if(firstNodeAtCurrentLevel)
                rightSideView.push(firstNodeAtCurrentLevel.val);
            firstNodeAtCurrentLevel = null;
            [currentLevelQueue, nextLevelQueue] = [nextLevelQueue, currentLevelQueue];
        }
    }
    
    return rightSideView;
};