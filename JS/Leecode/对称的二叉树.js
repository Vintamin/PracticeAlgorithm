/* 
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
输入：root = [1,2,2,3,4,4,3]
输出：true

 * @param {TreeNode} root
 * @return {boolean}
 * 
 * 
 * 解题思路

递归求解
两个数互为镜像的条件：
1.他们的两个根节点具有相同的值
2.每个树的右子树都与另一个树的左子树镜像对称
*/

 function TreeNode(val) {
         this.val = val;
        this.left = this.right = null;
}

//自定向下
function isSymmetric(root) {
    if(!root){
        return true
    }
    return check(root.left,root.right)
}

//自顶向下判断左右子树是否相同
function check(left,right){
    //无左右子树，二叉树对称
    if(left == null && right == null){
        return true
    }
    //只有左子树或只有右子树，二叉树不对称
    if(left == null || right == null){
        return false
    }
    //有左右子树，且左右子树的节点对称相同,当左子树的指针向左移，右子树的指针向右移；当左子树的指针向右移，右子树的指针向左移
    return left.val == right.val && check(left.left,right.right) && check(left.right,right.left)
}


