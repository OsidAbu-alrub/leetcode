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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if(depth === 1){
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    let currentLevel = [root];
    let nextLevel = [];
    let levelNodes = [];
    let currentDepth = 1;
    while(currentLevel.length){
        const current = currentLevel.shift();
        
        levelNodes.push(current);
        if(currentDepth === depth - 1 && !currentLevel.length){
            levelNodes.forEach((n) => {
                const leftNewNode = new TreeNode(val);
                if(n.left)
                    leftNewNode.left = n.left;
                n.left = leftNewNode;
                const rightNewNode = new TreeNode(val);
                if(n.right)
                    rightNewNode.right = n.right;
                n.right = rightNewNode;
            });
            return root;
        }
            
        if(current.left) nextLevel.push(current.left);
        if(current.right) nextLevel.push(current.right);
        
        if(!currentLevel.length){
            currentDepth++;
            [nextLevel, currentLevel] = [currentLevel,nextLevel];
            levelNodes = [];
        }
    }
    return root;
};