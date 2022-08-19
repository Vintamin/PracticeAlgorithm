/* 
    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
    你可以按任意顺序返回答案。
例如：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

*/


//方法一:暴力求解
function sumFind(arr,num){
    for(let i=0;i<arr.length-1;i++){
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]+arr[j] ===num){
                return [arr[i],arr[j]]
            }
            
        }
    }
    return false
}

//方法二:哈希表
function sumFind2(arr,target){
    const map = new Map()
    arr.forEach((num, i) => map.set(num, i))//num是value值，而i是索引

    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];
        if (map.has(target - x)) {
            const index = map.get(target - x)
            if (i != index) return [i, index] //这个if判断必须要有，防止出现  [3,2,4]  6  输出[0,0]
        }
    }
    
    return []
}

console.log(sumFind2([2,7,11,15], 9));

function insertSort(list){
    for (let i = 1; i < list.length; i++) {
        var preIndex = i-1;
        var current = arr[i];
        while (preIndex>=0 && arr[preIndex]>current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current
    }
    return list
}

function gapSort(list){
    let gap = list.length
    while (gap>1) {
        gap = parseInt(gap/2)
        for (let i = gap; i < list.length; i++) {
            let preIndex= i-gap;
            let temp = list[i];
            while(preIndex>=0 && list[preIndex]>temp){
                list[preIndex+gap] = list[preIndex];
                preIndex-=gap;
            }
            list[preIndex+gap] = temp
            
        }
    }

}