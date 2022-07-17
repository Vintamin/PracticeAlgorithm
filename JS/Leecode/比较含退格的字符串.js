/* 
    给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。退格就表示删除前面一个字符
    注意：如果对空文本输入退格字符，文本继续为空。
    事例：
        输入：s = "ab#c", t = "ad#c"  s相当于ac(删除了b) t相当于ac(删除了d)
        输出：true
        解释：s 和 t 都会变成 "ac"。
    你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let i = s.length -1,j = t.length-1;
    let backspaceS= 0,
        backspaceT = 0;
    while (i>=0 || j>=0) {
        while (i>=0) {
            if (s[i] === "#") {
                backspaceS++;
                i--;
            }else if(backspaceS>0){
                backspaceS--;
                i--;
            }else{
                break;
            }
        }
        while (j>=0) {
            if (t[j] === "#") {
                backspaceT++;
                j--;
            }else if(backspaceT>0){
                backspaceT--;
                j--;
            }else{
                break;
            }
        }
        if (s[i]!=t[j]) {
            return false
        }
        i--;
        j--;
    }
    return true    
};