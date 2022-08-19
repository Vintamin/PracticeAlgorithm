/* 
    给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
    如果没有任何一种硬币组合能组成总金额，返回 -1。
    你可以认为每种硬币的数量是无限的。

*/
/* 
    输入：coins = [1, 2, 5], amount = 11
    输出：3 
    解释：11 = 5 + 5 + 1
*/
/* 
    动态规划思路
    1、dp数组和下标含义
    dp[i]表示凑足总额为j所需的硬币的最少个数时多少。对于dp[0~i]的每个状态，循环coins数组，寻找可以兑换的组合，用i面额减去当前硬币价值，dp[i-coin]在加上一个硬币数就是dp[i],最后取最小值就是答案

    2、状态转移方程
    dp[i] = Math.min(dp[i], dp[i - coin] + 1)

    3、dp数组初始化
    首先凑足总金额为0所需钱币的个数一定是0，那么dp[0] = 0。其他数组的下标应该是初始化为一个最大的数，否则就会在min(dp[j - coins[i]] + 1, dp[j])比较的过程中被初始值覆盖。

*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <=amount; i++) {
        for (const coin of coins) {
            if (i>=coin) {
                dp[i] = Math.min(dp[i],dp[i-coin]+1)
            }
        }
    }
    if (dp[amount] == Infinity) {
        return -1
    }else{
        return dp[amount]
    }
};
