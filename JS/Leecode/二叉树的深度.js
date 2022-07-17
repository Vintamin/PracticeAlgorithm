/* 
一旦没有找到节点就返回 0，每弹出一次递归函数就会加 1，树有三层就会得到 3
*/

//二叉树最大深度
function maxDepth(root) {
    if (!root) {
      return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

//二叉树的最小深度
/* 
  DFS  递归
*/
function minDepthDFS(root) {
    if(root == null) {
      return 0;
  }
  let depth = 1;
  if(root.left && root.right){
      const left = minDepthDFS(root.left);
      const right = minDepthDFS(root.right);
      depth += Math.min(left,right);
  } else if(root.left){
      depth += minDepthDFS(root.left)
  }else if(root.right){
      depth += minDepthDFS(root.right)
  }
  return depth
}
/* 
  BFS 
*/
function minDepthBFS(root) {
  if(root == null) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while(queue.length){
      const n = queue.length;
      for(let i =0;i<n;i++){
          const cur = queue.shift();
          if(cur.left == null && cur.right == null){
              return depth
          }
          if(cur.left){
              queue.push(cur.left)
          }
          if(cur.right){
              queue.push(cur.right)
          }
      }
      depth++;
  }
}


//多叉树的最大深度

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