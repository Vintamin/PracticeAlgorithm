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
            if (i != index) return [i, index]
        }
    }
    
    return []
}

console.log(sumFind2([2,7,11,15], 9));
