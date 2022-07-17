//中心扩展算法
 var longestPalindrome = function(s) {
    if (s.length <2) {
        return s;
    }
    let maxLen = 1, start = 0;
    // 查询s在left，right位置的对称长度
    //left：起始左边界
    //right:起始右边界
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            // 如果此位置为中心的回文数长度大于之前的长度，则进行处理
            if (right - left +1 >maxLen) {
                maxLen = right - left +1;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
    	// 查询以i为中心和以（i+1+1）/2为中心的长度
        expandAroundCenter(i-1, i+1); //回文子串的长度为奇数时,左边和右边都是i
        expandAroundCenter(i, i + 1);//回文子串的长度为偶数时，左边是i右边是i+1
       
    }
    return s.substring(start, start+maxLen);
}

console.log(longestPalindrome("abccbadh"));