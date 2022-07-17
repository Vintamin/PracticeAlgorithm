/* 
    给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。
    返回满足此条件的 任一数组 作为答案。
    输入：[3,1,2,4]
    输出：[2,4,3,1]
*/

function sortArrayByParity(arr){
    let i=0, j=arr.length-1;
    //利用双指针
    while(i<j){
        //第一种情况：前面是奇数，后面是偶数
        if (arr[i]%2 == 1 && arr[j]%2 ==0) {
            [arr[i], arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }else if(arr[i]%2 == 0 && arr[j]%2 ==0){
            //第二种情况：前面是偶数，后面是偶数
            i++;
        }else if(arr[i]%2 == 0 && arr[j]%2 ==1){
            //第三种情况：前面是偶数，后面是奇数，正确的位置
            i++;
            j--;
        }else{
             //第四种情况：前面是奇数，后面是奇数
             j--
        }
    }
    return arr;
}

/* 
    按奇偶排序数组II
    给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
    对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
    也就是交叉排序，一个偶数一个奇数
    思路：
        也是利用两个指针

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    let j = 1;
    for (let i = 0; i < nums.length; i+=2) { //遍历所有的偶数位置
        if (nums[i]%2 === 1) {//如果是奇数
            while (nums[j]%2 === 1 && j<nums.length) {
                j+=2;
            }//直到是偶数
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }  
    }
    return nums;
};