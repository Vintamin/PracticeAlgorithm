/* 
    给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
    计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
    你可以认为每种硬币的数量是无限的。

    输入：coins = [1, 2, 5], amount = 11
    输出：3 
    解释：11 = 5 + 5 + 1

*/

/* 
动规五部曲分析如下：

1、确定dp数组以及下标的含义
    dp[j]：凑足总额为j所需钱币的最少个数为dp[j]
2、确定递推公式
    得到dp[j]（考虑coins[i]），只有一个来源，dp[j - coins[i]]（没有考虑coins[i]）。
    凑足总额为j - coins[i]的最少个数为dp[j - coins[i]]，那么只需要加上一个钱币coins[i]即dp[j - coins[i]] + 1就是dp[j]（考虑coins[i]）
    所以dp[j] 要取所有 dp[j - coins[i]] + 1 中最小的。
    递推公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);

3、dp数组如何初始化
    首先凑足总金额为0所需钱币的个数一定是0，那么dp[0] = 0;
    其他下标对应的数值呢？
    考虑到递推公式的特性，dp[j]必须初始化为一个最大的数，否则就会在min(dp[j - coins[i]] + 1, dp[j])比较的过程中被初始值覆盖。
    所以下标非0的元素都是应该是最大值。
    代码如下：
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;
4、确定遍历顺序
    本题求钱币最小个数，那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数。
    所以本题并不强调集合是组合还是排列。
    如果求组合数就是外层for循环遍历物品，内层for遍历背包。
    如果求排列数就是外层for遍历背包，内层for循环遍历物品。
    在动态规划专题我们讲过了求组合数是动态规划：518.零钱兑换II (opens new window)，求排列数是动态规划：377. 组合总和 Ⅳ (opens new window)。
    所以本题的两个for循环的关系是：外层for循环遍历物品，内层for遍历背包或者外层for遍历背包，内层for循环遍历物品都是可以的！
    那么我采用coins放在外循环，target在内循环的方式。
    本题钱币数量可以无限使用，那么是完全背包。所以遍历的内循环是正序
    综上所述，遍历顺序为：coins（物品）放在外循环，target（背包）在内循环。且内循环正序。
5、举例推导dp数组
以输入：coins = [1, 2, 5], amount = 11为例

    arr[11]=Math.min(arr[11-1]+1,arr[11-2]+1,arr[11-5]+1);
    所以现在我们把11改成n
    arr[n]=Math.min(arr[n-1]+1,arr[n-2]+1,arr[n-5]+1);
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = [];
    dp[0] = 0;
    for(let i =1;i<=amount;i++){
        let res = Infinity;
        for(let j = 0;j<coins.length;j++){
            if(i>=coins[j]){
                res = Math.min(dp[i-coins[j]]+1,res);
            }
        }
        dp[i]=res;

    }
    return dp[amount]==Infinity?-1:dp[amount];
};