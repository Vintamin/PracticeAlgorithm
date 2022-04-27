/* 
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * @param {TreeNode} root
 * @return {number[]}

*/
    

//方法一：递归
 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }


     var preorderTraversal = function(root) {
    
        //中左右
        var arr = []
        if(!root){
            return arr
        }
        preorder(root)
        return arr
    
        function preorder(node){
           arr.push(node.val)
           if(node.left != null){
               preorder(node.left)
           }
           if(node.right != null){
               preorder(node.right)
           }
        }
    
    };
/* 
迭代思想：根据栈先进后出的原则
    前序是中左右
    放的时候也是中，但是要先放右再放左
*/

//方法二：迭代

var preorderTraversal2 = function(root) {
    
    //中左右
    var arr = []
    if(!root){
        return arr
    }
    //栈
    const stack =[];
    stack.push(root)
    while(stack.length>0){
        const current =stack.pop();
        arr.push(current.val);
        //要先放右边
        if(current.right != null){
            stack.push(current.right)
        }
        if(current.left != null){
            stack.push(current.left)
        }
    }
    return arr;
};

