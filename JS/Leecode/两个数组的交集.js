/* 
    给定两个数组，编写一个函数来计算它们的交集(不重复)
    比如：
        输入:nums1 = [1,2,2,1] nums2 = [9,4,9,8,4]
        输出：[2]
    思路：
        一看到不重复，想到Set数据类型
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const res = new Set();
    for (num of nums1) {
        if (nums2.includes(num)) {
            res.add(num);
        }
    }
    return Array.from(res);
};

/* 
    优化，因为上面的数组搜索值includes的时间复杂度是O(n)
        而Set和Map的.has的复杂度是O(1)
*/
var intersection2 = function(nums1, nums2) {
    const res = new Set();
    const set = new Set(nums2);
    for (num of nums1) {
        if (set.has(num)) {
            res.add(num);
        }
    }
    return Array.from(res);
};