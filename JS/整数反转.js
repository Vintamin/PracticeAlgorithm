/* 
输入：x = 123
输出：321

输入：x = -123
输出：-321

输入：x = 120
输出：21
*/
var reverse = function (x) {
    let res = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = x / 10 |0;//取整 或者用parseInt(x/10)
        res = res * 10 + digit;
        if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return res;
};
reverse(123)
