/* 
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）
*/
function fib(n) {
    const MOD = 1000000007;
  if (n < 2) {
      return n;
  }
  let pre = 0, prePre = 0, r = 1;
  for (let i = 2; i <= n; ++i) {
      prePre = pre; 
      pre = r; 
      r = (pre + prePre) % MOD;
  }
  return r;

};