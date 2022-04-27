//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
/* 
 * @param {TreeNode} root
 * @return {number[][]}
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

*/
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
    const res =[];
    if(root ==null)return res;
    const queue =[]
    queue.push(root);
    while(queue.length!=0){
       const layergroup =[];
       const n =queue.length;
       for (let i = 0; i < n; i++) {
           const target =queue.shift();
           layergroup.push(target.val);
           if(target.left){
               queue.push(target.left)
           }
           if(target.right){
            queue.push(target.right)
            }
       }
       res.push(layergroup)
    }
    return res
};
