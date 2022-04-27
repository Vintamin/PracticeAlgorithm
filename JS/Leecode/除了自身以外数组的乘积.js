/* 
输入：[1,2,3,4];
输出：[24,12,8,6]

可以通过建两个表进行动态规划
*/
/* 
走两遍，去一遍累乘，回来一遍累乘，结果就出来
例如：1,2,3,4 去一遍的时候是 1,1,2,6 这个时候已经算出除自身以外的，每个元素左边的所有乘积，现在回过头来算右边的即24,12,4,1，
（可以新建一个数组存储，由于进阶对空间复杂度的要求），在原本数组上继续累积，即为24,12,8,6

*/
/* 
要求空间复杂度为常数
*/
function productExceptSelf(arr){
    const res =Array(arr.length).fill(1);
    let product =1;
    //从左往右
    for(let i=0; i<arr.length; i++){
        res[i] =res[i]*product;
        product =product *arr[i];
    }
    product = 1;
    for(let i=arr.length-1; i>=0; i--){
        res[i] =res[i]*product;
        product =product *arr[i];
    }
    return res;
}