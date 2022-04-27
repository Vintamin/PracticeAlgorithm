arr =[1,2,3,4,5];
Array.prototype.reduceArr =function(fn,initValue){
    if (typeof fn !== 'function') {
        throw new Error('不是函数')
    }
    let arr=this;//调用的数组
    let initIndex;
    let sum;//累加器
    initIndex =arguments.length === 1 ? 1:0;//如果没有传入initValue，那么会从数据的第二项开始，如果传入了就从数组的第一项开始
    sum =arguments.length === 1 ? arr[0]: initValue; //如果没有传入initValue，那么数组的第一项作为累加器初始值，如果传入了就将initValue作为累加器初始值
    for (let i = initIndex; i < arr.length; i++) {
        sum = fn(sum,arr[i],i,arr);
    }
    return sum;

}
let res =arr.reduceArr((pre,cur)=>{return pre+cur})
console.log(res);
