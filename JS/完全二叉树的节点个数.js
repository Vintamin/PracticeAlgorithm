/* 
    给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
    完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，
    并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

    判断满二叉树：在完全二叉树中，如果递归向左遍历的深度等于递归向右遍历的深度，那说明就是满二叉树。

*/

/* 
    实例：
    输入：root = [1,2,3,4,5,6]
    输出：6

*/

// 递归版本
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function(root) {
    //递归法计算二叉树节点数
    // 1. 确定递归函数参数
    const getNodeSum=function(node){
        //2. 确定终止条件
            if(node===null){
                return 0;
            }
        //3. 确定单层递归逻辑
            let leftNum=getNodeSum(node.left);
            let rightNum=getNodeSum(node.right);
            return leftNum+rightNum+1;
        }
        return getNodeSum(root);
};
//迭代版本
var countNodes = function(root) {
    //层序遍历
    let queue=[];
    if(root===null){
        return 0;
    }
    queue.push(root);
    let nodeNums=0;
    while(queue.length){
        let length=queue.length;
        while(length--){
            let node=queue.shift();
            nodeNums++;
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return nodeNums;
};