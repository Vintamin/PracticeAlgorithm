/* 
    验证回文字符串II
    给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
    事例：
        输入: s = "abca"
        输出: true
        解释: 你可以删除c字符。
    思路：利用双指针i,j
        一个从前往后，一个从后向前
        当i不等于j的时候分两种情况
            · i+1 的位置是否 等于 j的位置
            · i 的位置是否 等于j-1的位置
        如果这两个情况任意一个情况是true，那就可以继续回文比较
            直到两个指针碰头为止
        如果这两个情况都是false，那么就直接return false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    function isPalindrome(left, right){
        while (left < right) {
            if (s[left] !== s[right])  {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    let left = 0,right =s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            const result = isPalindrome(left+1,right) ||
            isPalindrome(left,right-1);
            return result; 
        }
        left++;
        right--;
    }
    return true;
};