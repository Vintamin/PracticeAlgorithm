/* 
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  
例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  

思路一：就可以找到这个分界点,当前元素比下一个元素大就找到了分界点，特殊情况呢就是所有的数字都一样，那就返回随便一个就行
思路二：二分查找（元素有序+顺序查找），先找中间的位置
    先找中间位置的值middle，然后与最后一个值end比较
        如果end<middle，middle前面有序,交界点在后面
        如果end>middle,middle后面有序，交界点在前面
    为了应对有重复元素的情况，需要结合从右向左暴力查找
*/

function minArray(arr){
    let left =0;
    let right =arr.length-1;
    if(right ==0){
        return arr[0]
    }
    while(left<=right){
        let middle =left+Math.floor((right-left) / 2);
        if(arr[middle]>arr[right]){//边界在右边
            left =middle+1
        }else if(arr[middle]<arr[right]){//边界在左边
            right =middle;
        }else{//相等情况
            right--;
        }
    }
    return arr[left]
}