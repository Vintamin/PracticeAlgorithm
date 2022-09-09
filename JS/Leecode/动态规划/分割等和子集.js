/* 

解题思路：判断数组中是否有加起来等于数组和一半的集合
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。


输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。

*/
/* dp[j]表示 背包总容量是j，最大可以凑成j的子集总和为dp[j]
本题，相当于背包里放入数值，那么物品i的重量是nums[i]，其价值也是nums[i]。
所以递推公式：dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]);
如果dp[j] == j 说明，集合中的子集总和正好可以凑成总和j，理解这一点很重要。
*/

var canPartition = function(nums) {
    const sum = (nums.reduce((p, v) => p + v));
    if (sum & 1) return false;
    const dp = Array(sum / 2 + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        for(let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }
    return dp[sum / 2] === sum / 2;
};
