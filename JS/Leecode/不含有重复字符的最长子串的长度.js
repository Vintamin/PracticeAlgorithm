//滑动窗口及优化
//时间复杂度是O(n)
/* 
做法：用两个指针代表窗口两端。右指针一直向右移动，到头时结束。每移动一格元素判断是否有重复的，把重复元素及以前的元素都删掉，
*/
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const set = new Set();
    const n = s.length;
    //maxLength保存上次的无重复的字符串长度
    let j = 0, maxLength = 0;
    for (let i = 0; i < n; ++i) {
        //set中没有的情况，并更新最大长度
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size)
        }else{
            while (set.has(s[i])) {
                set.delete(s[j]);//删除之前位置的字符
                j++
            }
            set.add(s[i])
        }
    }
    return maxLength;
};

//扩展版本，返回这个子字符串
function maxSearch(s){
    const set =new Set();
    const n =s.length;
    let j= -1;
    let res ="";
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            set.delete(s.charAt(i-1))
        }
        while (j+1 <n && !set.has(s.charAt(j+1))) {
            set.add(s.charAt(j+1));
            j++;
        }
        if (res.length <[...set].length) {
            res ='';
            for(let val of set){
                res+=val;
            }
        }
    }
    return res;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
