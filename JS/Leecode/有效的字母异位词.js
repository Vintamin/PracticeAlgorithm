/* 
    给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
    注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
    比如：
        输入: s = "anagram", t = "nagaram"
        输出: true
    思路：
        1、先判断两个字符串长度是否一致
        2、创建一个map，用来存储每个字符出现的次数
        3、遍历第一个字符串，在map里出现次数+1.
            遍历第二个字符串，在map里出现次数-1
        4、遍历完成后，检查map里每一个字母出现次数是不是0，如果都为0则返回true
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        //处理s
        if (map.has(s[i])) {
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
        //处理t
        if (map.has(t[i])) {
            map.set(t[i],map.get(t[i])-1);
        }else{
            map.set(t[i],-1);
        }    
    }
    for (const letter of map) {
        if (letter[1]!==0) {
            return false
        }
    }
    return true
};