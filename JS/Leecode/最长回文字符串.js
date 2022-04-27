//中心扩展算法
 var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";
    let maxLen = 1, start = 0;
    for (let i = 0; i < s.length; i++) {
    	// 查询以i为中心和以（i+1+1）/2为中心的长度
        let len1 = expandAroundCenter(s, i, i); //回文子串的长度为奇数时,左边和右边都是i
        let len2 = expandAroundCenter(s, i, i + 1);//回文子串的长度为偶数时，左边是i右边是i+1
        let len = Math.max(len1, len2);//取两种情况中的最大值
        // 如果此位置为中心的回文数长度大于之前的长度，则进行处理
        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);//i表示回文串的中心位置，然后减去这个回文串长度的一半就到了start位置
        }
    }
    return s.substring(start, start+maxLen);
}
// 查询s在left，right位置的对称长度
//left：起始左边界
//right:起始右边界
function expandAroundCenter(s, left, right) {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}
console.log(longestPalindrome("abccbadh"));