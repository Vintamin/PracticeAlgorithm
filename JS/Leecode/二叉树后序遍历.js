//后序遍历 左右中
/* 
    其实就是模仿前序排列只不过是中右左的顺序来
    然后把这个反过来就是左右中
*/
function postorderTraversal(root){
    if (!root) return null;
    const res = [];
    const stack = [root];
    while (stack.length) {
      const cur = stack.pop();
      // 总是头部插入，先被插入的在后面。
      res.unshift(cur.val);
      cur.left && stack.push(cur.left);
      cur.right && stack.push(cur.right);
    }
  
    return res;
  
}


