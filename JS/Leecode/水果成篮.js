/* 
    你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。

    你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

    你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
    你可以选择任意一棵树开始采摘，你必须从每棵树（包括开始采摘的树）上 恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，
    你将会向右移动到下一棵树，并继续采摘。
    一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘，后面的水果不能再采摘了。
    给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。
    比如：
        输入：fruits = [1,2,1] fruits[i] 是第 i 棵树上的水果 种类
        输出：3
        解释：可以采摘全部 3 棵树。
    思路：
        使用Map当做篮子存储，key是不同水果树类型，value是对应水果树类型最后出现的位置

*/
/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    const map = new Map();
    let max = 1;
    let j = 0;
    for (let i = 0; i < fruits.length; i++) {
        map.set(fruits[i],i)
        if (map.size>2) {
            let minIndex = fruits.length-1;//先定义一个非常大的数
            for (const [fruit,index] of map) {
                if (index < minIndex) {
                    minIndex = index;
                }
            }
            map.delete(tree[minIndex]);// 删除比较靠前的水果
            j = minIndex + 1; 
        }
        max = Math.max(max,i-j+1)
    }
    return max;
};