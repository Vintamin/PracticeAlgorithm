/* 
    给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。
    s 的 旋转操作 就是将 s 最左边的字符移动到最右边。  
    例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
    思路：
        把第一个字符串变成两个一样的拼接在一起，然后直接判断拼接后的字符串是否有第二个字符串

*/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false
    }
    const str =  s+s;
    return str.includes(goal)
};