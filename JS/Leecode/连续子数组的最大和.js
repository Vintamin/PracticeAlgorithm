/* 
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

时间复杂度是O(N)
*/
/* 
    动态规划
    dp[i]表示以nums[i]结尾的连续子数组的最大和
    状态转移方程:
        如果dp[i-1]>0,dp[i] =dp[i-1]+nums[i];
        如果dp[i-1]<=0,dp[i]=nums[i]
    初始化：dp[0]=nums[0];
    输出max（dp）

*/

function maxSubArray(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);//前面最大子数组的和
        maxAns = Math.max(maxAns, pre);//maxAns永远存的都是最大的值
    });
    return maxAns;
};


//扩展：同时输出这个子数组
function maxSubArray2(arr){
    let pre =0,max=0;
    let start=0,end=0;
    //数组中正负数都有
    for (let i = 0; i < arr.length; i++) {
        pre +=arr[i];
        if (pre <0) {
            pre =0;
            start++
        }
        if (pre >max) {
            max=pre;
            end =i;
        }
    }
    //若数组中只有非正数，则找到最大的值即为最大和,
    //也就是上面的第二个判断就没进去，max的值始终为0,所以下面就是找到非正数中最大的那个
    if (max ==0) {
        start =end=0;
        max =arr[0];
        for (let i = 0; i < arr.length; i++) {   
            if (max<arr[i]) {
                max=arr[i];
                start =end =i
            } 
        }
    }
    console.log("sum:"+max +"--start:"+start+"--end:"+end)
}
