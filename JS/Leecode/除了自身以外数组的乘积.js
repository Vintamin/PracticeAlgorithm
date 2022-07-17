/* 
输入：[1,2,3,4];
输出：[24,12,8,6]

可以通过建两个表进行动态规划
*/
/* 
    建一个表，从左走一遍，记录当前位置左侧的乘积，存入到表中，
    再建一个表，从右走一遍，记录当前位置右侧的乘积，存入到表中
    然后如果要获得上面除去3自身的乘积，那么就取第一个表中2的左侧乘积*第二个表中4的右侧乘积即可
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
    //从右向左
    for(let i=arr.length-1; i>=0; i--){
        res[i] =res[i]*product;
        product =product *arr[i];
    }
    return res;
}