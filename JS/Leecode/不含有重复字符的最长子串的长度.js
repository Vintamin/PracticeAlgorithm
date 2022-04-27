//滑动窗口及优化
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // rk右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    //ans保存上次的无重复的字符串长度
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 窗口左边界，左指针向右移动一格，移除一个字符，如果occ中有就delete没有的话就不delete
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {//这里用来判断无重复
            // 不断地移动右指针，但需要保证这两个指针对应的子串中没有重复的字符。
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};

//扩展版本，返回这个子字符串
function maxSearch(s){
    const occ =new Set();
    const n =s.length;
    let rk= -1;
    let res ="";
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            occ.delete(s.charAt(i-1))
        }
        while (rk+1 <n && !occ.has(s.charAt(rk+1))) {
            occ.add(s.charAt(rk+1));
            rk++;
        }
        if (res.length <[...occ].length) {
            res ='';
            for(let val of occ){
                res+=val;
            }
        }
    }
    return res;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
