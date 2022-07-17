/* 
    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
    请注意 ，必须在不复制数组的情况下原地对数组进行操作。
    比如：
        输入: nums = [0,1,0,3,12]
        输出: [1,3,12,0,0]
    思路：
        把所有非0的数挪到前面，剩下的全部设为0
        利用两个指针i,j  
        i用来遍历数组，如果遇到0就什么都不用做，如果不是0就将j位置的数换成i位置的数
        然后j位置的数换后,j向前移动
        i走完后，从j到i之间的数全部改为0
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !==0) {
            nums[j] = nums[i];
            j++
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0  
    }
    return nums;
};