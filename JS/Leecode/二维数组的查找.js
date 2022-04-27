/* 
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

给定 target = 5，返回 true。

给定 target = 20，返回 false。
*/

//从右上角找target即可，主要利用了有序的性质
function findNumberIn2DArray(matrix, target){
    if (!matrix) {
        return false
    }
    //从右上角开始查询
    let i =0;
    let j =matrix[o].length-1;
    while(i<matrix.length && j>=0){
        if(matrix[i][j]>target){
            //如果该值>target，那么就在这个一维数组中向左找
            j--
        }else if(matrix[i][j]<target){
            //往下找
            i++
        }else{
            return true
        }
    }
    return false;
}