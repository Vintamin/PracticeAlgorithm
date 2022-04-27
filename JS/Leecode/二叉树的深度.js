/* 
一旦没有找到节点就返回 0，每弹出一次递归函数就会加 1，树有三层就会得到 3
*/

//二叉树深度
function maxDepth(root) {
    if (!root) {
      return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

//多叉树的深度

function maxDepth2(root){
  if (!root) {
    return 0;
  }
  let max = 0;
  const children = root.children;
  for(const child of children){
    const childDepth = maxDepth2(child);
    max =Math.max(max, childDepth);
  }
  return max + 1;
}