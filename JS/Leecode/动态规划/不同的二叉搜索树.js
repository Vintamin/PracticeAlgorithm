/* 
    给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 
    互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

    例如：
    输入：n = 3
    输出：5
*/
/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i =2;i<=n;i++){
        for(let j =1;j<=i;j++){
            dp[i]+=(dp[i-j]*dp[j-1])
        }
    }
    return dp[n]
};