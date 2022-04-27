/* 
给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

   返回其自底向上的层序遍历为：

[
  [15,7],
  [9,20],
  [3]
]

 * @param {TreeNode} root
 * @return {number[][]}
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
       res.unshift(layergroup)
    }
    return res
};

