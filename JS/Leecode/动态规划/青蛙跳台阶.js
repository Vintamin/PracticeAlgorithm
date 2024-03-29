/* 
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

*/


/* 
    递推思想
    设跳上 n 级台阶有 f(n) 种跳法。在所有跳法中，青蛙的最后一步只有两种情况： 跳上 1 级或 2 级台阶。

    当为 1 级台阶： 剩 n−1 个台阶，此情况共有 f(n−1) 种跳法；
    当为 2 级台阶： 剩 n−2 个台阶，此情况共有 f(n−2) 种跳法。
    f(n) 为以上两种情况之和，即 f(n)=f(n−1)+f(n−2) ，以上递推性质为斐波那契数列
    本题可转化为 求斐波那契数列第 n项的值 ，唯一的不同在于起始数字不同。 
    青蛙跳台阶问题： f(0)=1, f(1)=1 , f(2)=2 ；
    斐波那契数列问题： f(0)=0 , f(1)=1 , f(2)=1 。

    n=0的时候初始为1
    n=1的时候初始为1

*/
//动态规划
function numWays(n){
    const dp =[];
    dp[0] =1;
    dp[1]=1;
    for (let i = 2; i <=n; i++) {
        dp[i] =(dp[i-1]+dp[i-2])%1000000007;
    }
    return dp[n]
}
/* 
    记忆化搜索。记忆化搜索可以理解为优化过后的递归。
    防止重复计算

*/
// 定义记忆数组 f
const f = []
const climbStairs = function(n) {
  if(n==1) {
      return 1
  }
  if(n==2) {
      return 2
  }
  // 若f[n]不存在，则进行计算
  if(f[n]===undefined)  f[n] = climbStairs(n-1) + climbStairs(n-2)
  // 若f[n]已经求解过，直接返回
  return f[n]
};