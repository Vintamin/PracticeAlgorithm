/* 给定二维数组 [['A','B'], ['a','b'], [1, 2]], 
二维数组长度不限 ，输出所有的排列组合项，
即['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2'] */

//上一次的结果作为下一次的初始数组

//回溯算法
function solution(nums){
    var len = nums.length;
    var res = [''];
    for (var i = 0; i < len; i ++) {
        res = getValues(res, nums[i]);
    }
    return res;
}

function getValues(arr1, arr2) {
    var arr = [];
    for (var i = 0; i < arr1.length; i++) {
        var val = arr1[i];
        for (var j = 0; j < arr2.length; j++) {
            var val2 = arr2[j];
            var value = val + val2;
            arr.push(value);
        }
    }
    return arr;
}

let res = solution([['A','B'], ['a','b'], [1, 2]]);
console.log(res);

