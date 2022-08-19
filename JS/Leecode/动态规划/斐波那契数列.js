/* 
    动态规划：递归+记忆化
    写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）
    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

*/

/**
 * @param {number} n
 * @return {number}
 */
// top-down方式：从顶部向下推，需要那个时候再去计算哪个
 var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    const cache = [];
    cache[0] = 0;
    cache[1] = 1;
    function memoize(number) {
        if (cache[number] !== undefined) {
            return cache[number];
        }
        cache[number] = memoize(number-1) + memoize(number-2);
        return cache[number];
    }
    const result = memoize(n);
    return result;
};
// bottom-up方式：从下往上推，先计算好所有的存进去
var fib2 = function(n) {
    if (n <= 1) {
        return n;
    }
    const cache = [];
    cache[0] = 0;
    cache[1] = 1;
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i-1] + cache[i-2];
        
    }
    return cache[n]
};