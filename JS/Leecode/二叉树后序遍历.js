//后序遍历 左右中
/* 
    其实就是模仿前序排列只不过是中右左的顺序来
    然后把这个反过来就是左右中
*/
function postorderTraversal(node){
    const res = [];
    if(!root){
        return res;
    }
    const stack = [root];
    while(stack.length>0){
        const item = stack.pop();
        res.push(item.val);
        if(item.left){
            stack.push(item.left)
        }
        if(item.right){
            stack.push(item.right)
        }
    }
    return res.reverse();
}