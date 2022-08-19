const myReduce = (arr, callback, initialValue) => {
    let initlIndex = initialValue?1:0;
    let all = initialValue?initialValue:0;
    for (let i = initlIndex; i < arr.length; i++) {
        all=callback(all,arr[i])
    }
    return all
}
