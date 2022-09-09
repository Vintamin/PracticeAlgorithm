/* 
    在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
    你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
    给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
    实例：
        输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
        输出: 3
        解释:
        从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
        开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
        开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
        开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
        开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
        开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
        因此，3 可为起始索引。


*/
/* 
        贪心算法：
        可以换一个思路，首先如果总油量减去总消耗大于等于零那么一定可以跑完一圈，说明 各个站点的加油站 剩油量rest[i]相加一定是大于等于零的。
        每个加油站的剩余量rest[i]为gas[i] - cost[i]。
        i从0开始累加rest[i]，和记为curSum，一旦curSum小于零，说明[0, i]区间都不能作为起始位置，起始位置从i+1算起，再从0计算curSum。

*/
var canCompleteCircuit = function(gas,cost){
    let totalGas = 0;//所有的油
    let totalCost = 0;//所有消耗的
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }
    //总的油小于总的油耗，肯定到不了
    if (totalGas<totalCost ) {
        return -1;
    }
    let currentGas = 0;//当前携带的油量
    let start = 0;//最终返回的结果,就是开始的地方
    for (let i = 0; i < gas.length; i++) {
        currentGas = currentGas -(cost[i] - gas[i]);
        if (currentGas <0 ) {
            currentGas = 0;
            start = i+1;
        }
    }
    return start;
}

/* 
    贪心算法
    可以换一个思路，首先如果总油量减去总消耗大于等于零那么一定可以跑完一圈，说明 各个站点的加油站 剩油量rest[i]相加一定是大于等于零的。
    每个加油站的剩余量rest[i]为gas[i] - cost[i]。
    i从0开始累加rest[i]，和记为curSum，一旦curSum小于零，说明[0, i]区间都不能作为起始位置，起始位置从i+1算起，再从0计算curSum。
*/
var canCompleteCircuit2 = function(gas, cost) {
    const gasLen = gas.length
    let start = 0
    let curSum = 0
    let totalSum = 0//总的剩余量

    for(let i = 0; i < gasLen; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        if(curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }

    if(totalSum < 0) return -1

    return start
};