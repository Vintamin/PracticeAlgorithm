/* 
一旦没有找到节点就返回 0，每弹出一次递归函数就会加 1，树有三层就会得到 3
二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从0开始还是从1开始）
二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数后者节点数（取决于高度从0开始还是从1开始）
*/

//二叉树最大深度
function maxDepth(root) {
    if (!root) {
      return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/* 
  相当于 前序遍历 先计算左、右、中
  var maxdepth = function(root) {
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    const getdepth=function(node){
    //2. 确定终止条件
        if(node===null){
            return 0;
        }
    //3. 确定单层逻辑
        let leftdepth=getdepth(node.left);
        let rightdepth=getdepth(node.right);
        let depth=1+Math.max(leftdepth,rightdepth);
        return depth;
    }
    return getdepth(root);
};

*/

//二叉树最大深度层级遍历
var maxDepth2 = function(root) {
  if(!root) return 0
  let count = 0
  const queue = [root]
  while(queue.length) {
      let size = queue.length
      /* 层数+1 */
      count++
      while(size--) {
          let node = queue.shift();
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
  }
  return count
};

//二叉树的最小深度
//最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。
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