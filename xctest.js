const myReduce = (arr, callback, initialValue) => {
    let initlIndex = initialValue?1:0;
    let all = initialValue?initialValue:0;
    for (let i = initlIndex; i < arr.length; i++) {
        all=callback(all,arr[i])
    }
    return all
}

const a = [1, 2, 3]
a.reduce((pre, cur) => pre + cur, 0)

myReduce(a, (pre, cur) => pre + cur, 0)