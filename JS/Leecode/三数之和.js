/* 
    双指针思想
    思路
    1、给数组排序
    2、遍历数组，从0遍历到length-1（防止越界）
    3、如果当前的数字等于前一个数字，则跳过这个数（为了防止有重复的）
    4、如果数字不同，则设置start = i+1,
        end = length-1,查看i,start和end三个数的和比零大还是小，
        如果比0小,start++,如果比0大，end--，如果等于0，把这三个数加入到结果中
    5、返回结果
        [[],[]...]    
*/
function threeSum(nums){
    const result = [];
    nums.sort((a,b)=>a-b);

    for (let i = 0; i < nums.length - 2; i++) {
        //去重
        if (0 == 0 || nums[i] !== nums[i-1]) {
            let start = i+1,end =nums.length -1 ;
            while(start < end){
                if (nums[i]+nums[start]+nums[end] == 0) {
                    result.push([nums[i],nums[start],nums[end]])
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start-1]) {
                        start++;
                    }
                    while (start < end && nums[end] === nums[end+1]) {
                        end--;
                    }
                }else if(nums[i]+nums[start]+nums[end] < 0){
                    start++;
                }else{
                    end--;
                }
            }
        } 
    }
    return result;
}