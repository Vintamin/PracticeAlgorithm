/* 
    不确定参数实现sum(1)(2)(3)(4)(5)(6)...无限累加
*/
//未知参数个数
 
function curry(fn){
    let parmas = []
    return function sum(...args){
        if(args.length){//判断是否有参数 ，如果有就继续返回sum函数
            parmas = [...parmas,...args]
            return sum
        }
        return fn(parmas) //如果没有参数，那就返回传进来的fn函数，在最下面调用一下
    }
}
function add(arr){
   return arr.reduce((acc,item)=>{
        return acc+item
    })
}
 
let curried = curry(add) //这里的curried就相当于是sum函数
console.log(curried(1)(2)(3)(4)(10,20)())//40
// 注意最后的调用用方式，()调用不传递参数，会跳出判断，调用累加函数