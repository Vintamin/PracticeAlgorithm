/* 
    题目一：存在重复元素
    给你一个整数数组 nums 。如果任一值在数组中出现
    至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
*/

var containsDuplicate = function(nums) {
    if(nums.length<2){
        return false;
    }
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            map.set(nums[i],map.get(nums[i])+1)
        }
    }
    for(let item of map.values()){
        if(item >1){
            return true
        }
    }
    return false
};
var containsDuplicate2 = function(nums) {
    if(nums.length<2){
        return false;
    }
    const set = Array.from(new Set(nums));
    if (set.length < nums.length) {
        return true
    }
    return false
};

/* 
    题目二：存在重复元素2
    给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
    如果存在，返回 true ；否则，返回 false 。
    事例：
        输入：nums = [1,2,3,1], k = 3
        输出：true
    思路：
        采用map数据类型，遍历数组，数组项作为map的key，数组的索引作为map的value
        每次判断map中是否有这个值，然后也要判断对应的value索引与当前索引的差值是否小于等于k
        如果不满足小于等于k那么就得更新map对应的value，为了后面的判断
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && (i - map.get(nums[i])) <= k) {
            return true;
        }else{
            map.set(nums[i],i)
        }
    }
    return false
};
