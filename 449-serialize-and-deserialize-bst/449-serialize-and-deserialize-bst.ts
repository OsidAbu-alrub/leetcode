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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    let currentLevel = [root];
    let nextLevel = []; 
    const ans = [];
    while(currentLevel.length && root){
        const node = currentLevel.shift();
        ans.push(node.val);
        if(node.left) nextLevel.push(node.left);
        if(node.right) nextLevel.push(node.right);
        
        if(!currentLevel.length)
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    return ans.join(",");
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if(!data.length) return null;
    const dataAsArray = data.split(",");
    const root = new TreeNode(Number(dataAsArray[0]));
    for(let i = 1 ; i < dataAsArray.length ; i++){
        let previousNode = null;
        let currentNode = root;
        const newNode = new TreeNode(Number(dataAsArray[i]));
        while(currentNode){
            previousNode = currentNode;
            if(newNode.val < currentNode.val)
                currentNode = currentNode.left;
            else 
                currentNode = currentNode.right;
        }
        if(newNode.val < previousNode.val)
            previousNode.left = newNode;
        else 
            previousNode.right = newNode;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */