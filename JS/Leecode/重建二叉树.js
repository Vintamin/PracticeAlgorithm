/* 
输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]


*/

 function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
}

function buildTree(preorder,inorder){
    //通过前序和中序重建二叉树p[0] => root找到该节点 在中序的位置
    if (!preorder.length ||!inorder.length) {
        return null;
    }
    //找到根节点，前序遍历的第一个位置就是根节点
    let rootVal =preorder[0];
    let rootNode =new TreeNode(rootVal);//构建根节点

    //找到中序该节点的位置
    let i =0;//只能定义在外面，为了下面能够拿到
    for (; i < inorder.length; i++) {
        if (inorder[i] ==rootVal) {
            break;//这里找到子结点树的中间节点的位置i
        }
    }
    //开始递归.参数[前序][中序]
    //这里注意前序遍历那里的slice，preorder.slice(1,i+1)就表示拿到左边的树，
    //因为左树和右树永远都在一起，只不过前序是中间节点在头，后面跟着左子树，然后是右子树；中序呢是前面是左子树，中间节点在中间，后面跟着右子树
    rootNode.left =buildTree(preorder.slice(1,i+1),inorder.slice(0,i))//slice() 方法可从已有的数组中返回选定的元素。
    rootNode.right =buildTree(preorder.slice(i+1),inorder.slice(i+1))
    return rootNode;
}