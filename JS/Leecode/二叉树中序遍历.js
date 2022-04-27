/* 
给你二叉树的根节点 root ，返回它节点值的 中序 遍历。
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

   //左中右
   var arr = []
   if(!root){
       return arr
   }
   preorder(root)
   return arr

   function preorder(node){
    if(node.left != null){
        preorder(node.left)
    }
      arr.push(node.val)
      
      if(node.right != null){
          preorder(node.right)
      }
   }

};
/* 
迭代思想：根据栈先进后出的原则
左中右
先把根节点放入栈，然后放左，如果左还有左继续放，直到左没有了，然后再看最后一个
有没有右，如果没有就直接弹出
*/

//方法二：迭代

var preorderTraversal2 = function(root) {

    //左中右
    var arr = []
    if(!root){
        return arr
    }
    //栈
    const stack =[];
    let temp =root;
    //将所有的左侧压到栈中
    while(temp!= null){
        stack.push(temp);
        temp=temp.left;
    }
    while(stack.length >0){
        const current =stack.pop();
        arr.push(current.val);
        if(current.right !==null){
            let temp2 =current.right;
            //将右节点所有的左侧压到栈中
            while(temp2!= null){
                stack.push(temp2)
                temp2 =temp2.left
            } 
        }
    }
    return arr
};

