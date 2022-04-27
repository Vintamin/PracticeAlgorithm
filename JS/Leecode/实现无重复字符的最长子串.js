//实现无重复字符的最长子串
function lengthOfLongestSubstring(s) {
    let str = ''
    let arr = []
    let target = []

    for (let i of s) {
        if (str.indexOf(i) < 0) {
            str += i
        } else {
            arr.push(str)
            str = i
        }
    }
    arr.push(str)
    // 排序
    arr.sort((a, b) => {
        return b.length - a.length
    })
    // 有几个子集长度相等的情况
    arr.forEach(list => {
        if (arr[0].length === list.length) {
            target.push(list)
        }
    })
    console.log(target)
}

// target 内容就是结果， 包含1或者n个子集长度相等的情况
lengthOfLongestSubstring("laijinxianzxcvbnm") // ["ianzxcvb"] 1个子集长度最长
lengthOfLongestSubstring("dsauhdahfufansdmn") // ["fansdm"] 1个子集长度最长
lengthOfLongestSubstring("laijinxianzxcvbnm") // ["qwert", "tyuio", "oasdf"] 3个子集长度相同