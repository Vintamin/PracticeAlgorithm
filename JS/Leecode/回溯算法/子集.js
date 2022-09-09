/* 
    子集一
    给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。

    输入：nums = [1,2,3]
    输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

    输入：nums = [0]
    输出：[[],[0]]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = []
    let path = []
    function backTracking(startIndex){
        res.push([...path])
        for(let i =startIndex;i<nums.length;i++){
            path.push(nums[i])
            backTracking(i+1);
            path.pop()
        }
    }
    backTracking(0)
    return res
};

/* 
    子集二
    给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

    解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

    输入：nums = [1,2,2]
    输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
    思路：
    （注意去重需要先对集合排序）

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let result = []
    let path = []
    let sortNums = nums.sort((a, b) => {
        return a - b
    })
    function backtracing(startIndex, sortNums) {
        result.push([...path])
        if(startIndex > nums.length - 1) {
            return
        }
        for(let i = startIndex; i < nums.length; i++) {
            if(i > startIndex && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            backtracing(i + 1, sortNums)
            path.pop()
        }
    }
    backtracing(0, sortNums)
    return result
};