/* 
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
如果不存在符合条件的子数组，返回 0 。

例如：
    输入：target = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/

/* 
    思路：滑动窗口
    窗口就是 满足其和 ≥ s 的长度最小的 连续 子数组。
    先移动终止位置，再移动起始位置
    窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。

    窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。
    时间复杂度是：O(n)


*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    // 长度计算一次
    const len = nums.length;
    //l为窗口起点,r为窗口终点
    let l = r = sum = 0,
        res = len + 1; // 子数组最大不会超过自身
    while(r < len) {
        sum += nums[r++];
        // 窗口滑动,当子和大于target后
        //记录最小的子数组个数，同时减去起始位置项，起始位置向前走
        while(sum >= target) {
            // r始终为开区间 [l, r)
            res = res < r - l ? res : r - l;
            sum-=nums[l++];
        }
    }
    return res > len ? 0 : res;

};