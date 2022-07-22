
/* 
    买卖股票的最佳时机I
    Input:[7,1,5,3,6,4]
    Output:5
    只能进行一次交易
    注意：卖出时机永远都在买入时机后面
        所以先记录每个点左侧对应的最小的股票值，并不断更新最小值和最大利润

    主要思路：
    1.注意股票的买卖方式：卖出点在卖入点的后面
    2.找每个点在左半区域的最低点，计算每个点所能获得的最大利润
    3.找其中的最大值，就是股票的最大利润

*/

var maxProfit = function(prices){
    if (prices.length === 0) {
        return 0
    }
    let minPrice =prices[0],//左半边的最小值(有可能股票值是负数)
        maxProfit = 0;//当前的最大利润
    for (let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){//股票是下跌的,所以股票最大利润不用处理
            minPrice = prices[i];
        }else if((prices[i]-minPrice) > maxProfit){//产生新的最大利润
            maxProfit = prices[i]-minPrice;
        }
    }
    return maxProfit;//返回最大利润
}

/* 
    买卖股票的最佳时机II
    第一种方法：
    可以尽可能的完成更多的交易来实现最大利润(多次交易)，但注意要在再次购买之前出售掉之前的股票
    注意：对于一直向上的趋势，我们就可以从低端买入，顶端卖出，然后再去找后面的向上趋势。
        对于向下趋势，就不做处理

*/

var maxProfit21 = function(prices){
    if (prices.length === 0) {
        return 0
    }
    let profit = 0;//利润和
    let valley = prices[0],//最低端的值
        peak = prices[0];//最顶端的值
    //只用循环到倒数第二个值，因为是前一个数和后面的数来对比的
   let i = 0;
   while (i<prices.length-1) {
       //先计算平或者下跌的情况
       while (i<prices.length-1 && prices[i]>=prices[i+1]) {
           i++;
       }
       //不跌了，开始上涨,记录波谷的值
       valley = prices[i];
       while (i<prices.length-1 && prices[i]<=prices[i+1]) {
        i++;
        }
       //记录波峰的值
       peak = prices[i]; 
       profit +=peak - valley;
   }
    return profit;//返回 利润
}

/* 
    买卖股票的最佳时机II
    第二种方法：贪心算法
    解题步骤
        新建一个变量，用来统计总利润。
        遍历价格数组，如果当前价格比昨天高，就在昨天买，今天卖，否则就不交易。
        遍历结束后，返回所有利润之和。


*/
var maxProfit22 = function(prices){
    if (prices.length === 0) {
        return 0
    }
    let profit = 0;//利润和
    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i]<prices[i+1]) {
            profit+=prices[i+1]-prices[i]
        }
        
    }
    return profit;//返回 利润
}