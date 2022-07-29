/* 
输入：[1,2,3,4];
输出：[24,12,8,6]

可以通过建两个表进行动态规划
*/
/* 
    建一个表，从左走一遍，记录当前位置左侧的乘积，存入到表中，
    再建一个表，从右走一遍，记录当前位置右侧的乘积，存入到表中
    然后如果要获得上面除去3自身的乘积，那么就取第一个表中2的左侧乘积*第二个表中4的右侧乘积即可
    我们需要用两个循环来填充 L 和 R 数组的值。对于数组 L，L[0] 应该是 1，因为第一个元素的左边没有元素。对于其他元素：L[i] = L[i-1] * nums[i-1]。
    同理，对于数组 R，R[length-1] 应为 1。length 指的是输入数组的大小。其他元素：R[i] = R[i+1] * nums[i+1]。
*/
/* 
要求空间复杂度为常数
*/
function productExceptSelf(arr){
    const left =Array(arr.length).fill(1);
    const right =Array(arr.length).fill(1);
    //从左往右
    for(let i=1; i<arr.length; i++){
        left[i] =left[i-1]*arr[i-1];;
    }
    //从右向左
    for(let i=arr.length-2; i>=0; i--){
        right[i] =right[i+1]*arr[i+1];
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = left[i] * right[i]
        
    }
    return arr;
}