/* 
    组合求和一
    给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，
    并以列表形式返回。你可以按 任意顺序 返回这些组合。
    candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
*/
/* 
    输入：candidates = [2,3,6,7], target = 7
    输出：[[2,2,3],[7]]
    解释：
    2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
    7 也是一个候选， 7 = 7 。
    仅有这两种组合。
*/
var combinationSum = function(candidates, target) {
    let res = [];
    let item = [];
    let sum = 0;
    function backTracking(index,sum){
        if(sum>target){
            return
        }
        if(sum==target){
            res.push([...item])
        }
        for(let i =index;i<candidates.length;i++){
            sum+=candidates[i];
            item.push(candidates[i])
            backTracking(i,sum);
            sum-=candidates[i];
            item.pop()
        }
    }
    backTracking(0,sum)
    return res
};
/* 
    组合求和二
        给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
            candidates 中的每个数字在每个组合中只能使用 一次 。
            元素在同一个组合内是可以重复的，怎么重复都没事，但两个组合不能相同。
            本题数组candidates的元素是有重复的
        输入: candidates = [10,1,2,7,6,1,5], target = 8,
        输出:
        [
        [1,1,6],
        [1,2,5],
        [1,7],
        [2,6]
        ]

*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const res = []; path = [], len = candidates.length;
    candidates.sort((a,b)=>a-b);//先排个序
    backtracking(0, 0);
    return res;
    function backtracking(sum, index) {
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        for(let j = index; j < len; j++) {
            const n = candidates[j];
            if(j > index && candidates[j] === candidates[j-1]){
              //若当前元素和前一个元素相等
              //则本次循环结束，防止出现重复组合
              continue;
            }
            //如果当前元素值大于目标值-总和的值
            //由于数组已排序，那么该元素之后的元素必定不满足条件
            //直接终止当前层的递归
            if(n > target - sum) break;
            path.push(n);
            sum += n;
            backtracking(sum, j + 1);
            path.pop();
            sum -= n;
        }
    }
};

/* 
    组合求和三
        找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
        只使用数字1到9
        每个数字 最多使用一次 
        返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
    输入: k = 3, n = 9
    输出: [[1,2,6], [1,3,5], [2,3,4]]
    解释:
    1 + 2 + 6 = 9
    1 + 3 + 5 = 9
    2 + 3 + 4 = 9
    没有其他符合的组合了。


*/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    let res= [];
    let item = [];
    function backTracking(index){
        const len = item.length;
        if(len==k){
            const sum = item.reduce((a, b) => a + b);
            if(sum===n){
                res.push([...item])
            }
            return
        }
        for(let i=index;i<=9-(k-len)+1;i++){
            item.push(i)
            backTracking(i+1)
            item.pop();
        }
    }
    backTracking(1);
    return res

};