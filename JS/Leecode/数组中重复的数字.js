function findRepeatNumber(arr){
    const map =new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        }else{
            map.set(arr[i],i)
        }
        
    }
    return null;//找不到重复的
}
console.log(findRepeatNumber([2,3,1,0,2,5,3]));