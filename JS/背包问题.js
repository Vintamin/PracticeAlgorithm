//将数组分成两部分，使得这两部分的和的差最小
//转换成使得这个子集中的元素的和尽可能接近sum/2，其中sum为数组中所有元素的和

//动态规划
/* 
    背包：背包容量一定，在一组东西中如何选择，使得背包最有价值
    本质：是一个组合优化的问题。
    问题描述：给一个固定大小，能够携重W的背包，以及一组有价值重量的物品，
    请找出一个最佳的方案，使得装入包中的物品重量不超过W且总价值最大。
*/
/* 
    假设一个函数为: f(i,j) :表示装入背包的最大价值
		其中的  i:表示装入的物品     (从第一个到第五个都有可能装入)
		其中的  j:表示背包目前的重量   (j<w)
    逻辑分析：
    对于一种物品，要么装入背包，要么不装。
    所以对于一种物品的装入状态只是1或0, 此问题称为01背包问题

*/
//weightsArr是存放重量的数组   valuesArr是存放对应价值的数组    backpage是一个背包
/* 
    这里的二维数组是n*backpage+1的，因为背包可以是0

*/
function knapsack(weightsArr, valuesArr, backpage){
    var n = weightsArr.length; // 盒子个数
    var f = new Array(n)  // 定义矩阵
    for(var i = 0 ; i < n; i++){
        f[i] = [] // 共计五行数据
    }
   for(var i = 0; i < n; i++ ){ // i表示当前盒子
       for(var j = 0; j <= backpage; j++){ // j表示当前背包的重量
            if(i === 0){ //第一行
                f[i][j] = j < weightsArr[i] ? 0 : valuesArr[i]
                // 三元表达式 小于盒子重量  价值0  大于盒子重量 价值第一个盒子重量
            }else{
                if(j < weightsArr[i]){ //等于上一行同列的值
                    f[i][j] = f[i-1][j]
                }else{
                    f[i][j] = Math.max(f[i-1][j], f[i-1][j-weightsArr[i]] + valuesArr[i]) 
                }
            }
        }
    }
    return f[n-1][backpage]//右下角的为最大
}

