/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* 
    

*/
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    let arr1 = getLastVal(root1);
    let arr2 = getLastVal(root2);

    function getLastVal(root){
        let res = [];
        function dfs(node) {
            if(!node.left && !node.right){
                res.push(node.val)
                return 
            }
            if (node.left) {
                dfs(node.left)
            }
            if (node.right) {
               dfs(node.right) 
            }
        }
        dfs(root);
        return res
    }
    return arr1.toString() === arr2.toString()
};
