/* 
    给定一个表示 DNA序列的字符串s，返回所有在DNA分子中出现不止一次的长度为10的序列(子字符串)。
    你可以按任意顺序返回答案。
    例如：
        输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
        输出：["AAAAACCCCC","CCCCCAAAAA"]

    思路：(滑动窗口)
        从开始向后遍历到倒数第十个位置（防止越界）
        然后用一个map来存储子字符串作为map的key
        对应的value为子字符串出现的次数，最后返回value为2的key即可

*/

/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    if (s.length<10) {
        return [];
    }
    const map = new Map();
    const result = [];
    for (let i = 0; i <= s.length - 10; i++) {
        const subStr = s.substring(i,i+10);//substring的第二个参数end取不到
        if (!map.has(subStr)) {
            map.set(subStr,1)
        }else if(map.get(subStr) === 1){
            map.set(subStr,2)
            result.push(subStr)
        }else{
            map.set(subStr,map.get(subStr)+1 )
        } 
    }
    return result
};
