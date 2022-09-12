/* 
    全排列一：
    给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
    输入：nums = [1,2,3]
    输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = []
    let path = []
    let used = []

    function backTracking(){
        if(path.length === nums.length){
            res.push([...path])
            return
        }
        for(let i = 0;i<nums.length;i++){
            if(used[i]){
                continue
            }
            used[i] = true
            path.push(nums[i])
            backTracking()
            path.pop()
            used[i] =false
        }
    }
    backTracking()
    return res
};

/* 
    全排列二
    给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
    输入：nums = [1,1,2]
        输出：
        [[1,1,2],
        [1,2,1],
        [2,1,1]]

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let res = []
    let path = []
    let used = []
    nums.sort((a,b)=>a-b)
    function backTracking(){
        if(path.length == nums.length){
            res.push([...path])
            return
        }
        for(let i = 0;i<nums.length;i++){
              if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {//used[i - 1]为false说明同一层这个元素已经用过了
                continue
            }
            if (!used[i]) {
                used[i] = true
                path.push(nums[i])
                backTracking()
                path.pop()
                used[i] = false
            }
        }
    }
    backTracking()
    return res
};