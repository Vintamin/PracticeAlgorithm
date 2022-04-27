//JavaScript的原始值是指数字、字符串、布尔值、null和undefined。

/* console.log([] == null);  //false
console.log(Boolean([])); //true
console.log(![]); // false
console.log(![] == ![]); //true
console.log([] == []); //false */

/* 
Boolean转换为false的有：undefined,null,0,NaN,false,''
其余剩下的都是true
*/

console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

let obj ={
    toString(){
        return 1;
    },
    valueOf(){
        return 2;
    }
}
console.log(Number(obj));