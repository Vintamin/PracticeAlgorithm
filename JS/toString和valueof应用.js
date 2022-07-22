/* 
   一、 双等号实现a==1 && a==2 && a==3 为 true
    双等号(==)：会触发隐式类型转换，所以可以使用 valueOf 或者 toString 来实现。
    每次判断都会触发valueOf方法，同时让value+1，才能使得下次判断成立。 
*/

class A {  
    constructor(value) {  
        this.value = value;  
    }  
    valueOf() {  
        return this.value++;  
    }  
} 
const a = new A(1);  
if (a == 1 && a == 2 && a == 3) {  
    console.log("Hi Libai!");  
} 

/* 
    二、全等(===)：严格等于不会进行隐式转换，这里使用 Object.defineProperty 数据劫持的方法来实现 
    上面我们就是劫持全局window上面的a，当a每一次做判断的时候都会触发get属性获取值，并且每一次获取值都会触发一次函数实行一次自增，
    判断三次就自增三次，所以最后会让公式成立。
*/
let value = 1;  
Object.defineProperty(window, 'a', {  
    get() {  
        return value++  
    }  
})  
if (a === 1 && a === 2 && a === 3) {  
    console.log("Hi Libai!")  
} 

/* 
    三、用 JS 实现一个无限累加的函数 add 来判断是否等于某值 目的是在隐士转换的时候调用toString()
    add(1) == 1 
    add(1)(2) == 3  
    add(1)(2)(3) == 6  
    add(1)(2)(3)(4) == 10   
*/
/* 
    add函数内部定义sum函数并返回，实现连续调用
    sum函数形成了一个闭包，每次调用进行累加值，再返回当前函数sum
    add()每次都会返回一个函数sum，直到最后一个没被调用，默认会触发toString方法，所以我们这里重写toString方法，并返回累计的最终值a
    注意：只有在进行银时转换的时候才会去调用toString（）函数

*/
    function add(a) {  
        function sum(b) { // 使用闭包  
            a = a + b; // 累加  
            return sum;  
        }  
        sum.toString = function() { // 只在最后一次调用  
            console.log('调用了重新的toString函数');
            return a;  
        }  
        return sum; // 返回一个函数  
    }
    console.log(add(1)(2)(3))