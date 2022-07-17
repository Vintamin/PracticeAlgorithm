/* 
    将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
    比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
    P   A   H   N
    A P L S I I G
    Y   I   R
    之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
    思路：
        遍历一次s字符串，每取一个s[i] 将对应元素放入 arr[i] ，设置一个flag表示此时z字变换需要往上还是往下，每当flag=0或者flag=numRows-1的时候就变换flag

*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    //定义一个数组存储每行的字符串，num标记属于哪行的字符串，flag表示此时向上还是向下，true是向下，false是向上
    let arr = [],num = 0,flag =false;
    if (numRows ==1) {
        return s;
    }
    for (let c = 0; c < numRows; c++) {
        arr[c] = "";
    }
    for (let c = 0; c < s.length; c++) {
        //到达最后一行或第一行
        if (num === numRows-1 || num ===0) {
            flag =!flag;
        }
        arr[num]+=s[c];
        flag?++num:--num;
    }
    let ans = '';
    for (const item of arr) {
        ans+=item;
    }
    return ans;
};