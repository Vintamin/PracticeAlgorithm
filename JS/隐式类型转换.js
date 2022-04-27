Number(undefined)//NaN
Number(null)//0
Number('')//0
Number(' ')//0
Number([1,2]);//NaN,先调用Array原型上的valueOf,然后再找toString,就变成了1,2,但是1,2转不了Number就成了NaN

//除了下面的值其他的都是true
//undefined  null  0  NaN  ''  false


/* 
 JS的原始值（类型）：Undefined、Null、Boolean、Number 和 String
 对象转换原始值，所有的对象都继承了toString()和valueOf()方法。
 前者返回该对象的字符串，后者如果存在原始值，返回原始值，如果对象无法表示一个原始值，则返回该对象本身。 
注：Math 和 Error 对象没有 valueOf 方法。
*/

//对象到字符串的转换过程
/* 
1.如果对象具有toString()方法，则调用这个方法。如果它返回一个原始值，js将这个值转换成字符串，并返还这个字符串结果。
2.如果对象没有toString()方法，或者这个方法并不返回一个原始值，那么js将调用valueOf()方法。
3.否则，js无法从toString()或者valueOf()获得一个原始值，因此这时它将抛出一个类型错误异常。
*/
String({

    //如果没有重写toString和valueOf方法，会返回一个字符串'[object Object]'
    toString(){//重写对象上的toString，但是toString会优先于valueOf
        return 1;//这里会根据他的原始值来进行number包装。
                //如果这里return false;则会返回false，就是变成了'false'字符串
                //因为此时调用的是原始值原型身上的toString方法，Boolean.prototype.toString方法，
    },
    valueOf(){//重写对象上的valueOf
            
        return 2
    }
})
//对象到数字的转换过程
/* 
1.如果对象具有valueOf()方法，后者返回一个原始值，则js将这个原始值转换成数字，并返回这个数字。
2.否则，如果对象具有toString()方法，后者返回一个原始值，则js将转换并返回。
（首先js转换成相应的字符串原始值，再继续将这个原始值转换成相应的数字类型，再返回数字）
3.否则，js抛出一个类型错误异常。
*/
Number({
    toString(){//重写对象上的toString
        return 1;
    },
    valueOf(){//重写对象上的valueOf，但是valueOf会优先于toString
            //这里会根据他的原始值(五种类型)来进行number包装。
            //比如这里如果return的是false，那么仍然会使用valueOf函数，然后这个false会被Number包装成0
                //但是如果这个地方是return一个对象的话，那么因为不是原始值，所以会调用toString方法
            //如果此时toString仍然return的是一个对象，那么最后会报错
            //如果我们在上面没有重写toString方法，那么就会返回NaN
                //因为原始的对象的toString方法返回的就是一个字符串[object object]，所以这个字符串转Number就是NaN
        return 2
    }
})

//函数到数字的转换过程
/* 
    function test2(){
        console.log('哈哈哈');
    }
    console.log(test2.toString());同样String(test2)也是一样的结果
    结果是：function test2(){
            console.log('哈哈哈');
        }就是函数本身
*/

//隐式类型转换,
//当两个值的类型不同进行比较时，才需要隐式转换

/*
    1、+号 会变成字符串 
 200 +'3'  变成字符串string 2003
  */


/* 
    2、 - * / % 符号会变成数字
'200'-3   变成数字number   197
 */

/* 
    3、++，--也会变成数字
    var a ="100";
    console.log(typeof (a++)); 变成数字number：100
    console.log(typeof (a--)); 变成数字number：100
*/

/* 
    4、><符号
    console.log('10'>'9'); 这样会按照字符串的编码来比较，按照一位一位来比较，
                            就直接比较1和9，结果是false
    console.log('10'>9); 结果是true
*/

/* 
    5、==号(都用Number转，然后再用toString)
    (一)原始值类型比较
        //在==判断时候，null之和undefined和自身相等
        console.log(undefined == null); //true
        console.log(NaN == NaN); //false
            （1）字符串和数值比较
            console.log('1' == 1); //true
            字符串先转换成数值 Number("1")
            (2)布尔值和数值比较
            console.log(1 == true); //true
            布尔值先转换成数值 Number(true)
            （3）字符串和布尔值比较
            console.log('1' == true); //true
            各自都先转换成数值 Number()
        总之：原始值比较都用 Number()来比较
    (二)原始值类型和引用型类型比较
        console.log([1] == 1);//true
        console.log([1] == true);//true
        console.log([] == false);//true
        同样也都是用Number来转换[1]用Number转换成1
    (三)引用型类型和引用型类型比较
        (1) console.log([] == ![]); //true
                先看用Number转[]，用Number([]),过程中调用Array原型上的toString方法
            得到了''，然后''转成了0
            过程：Number([]) -> Array.prototype.toString -> '' -> Number('')
                ![]是false ，因为是取反，优先级最高。也就相当于数组和布尔值在比较，然后再进行Number转换比较。
        (2)console.log([] == []); //false
           console.log({} == {}); //false
            当两边的类型相同时，就会比较地址。
        (3)console.log({} == !{}); //false
            左边会调用object的tostring得到'[object Object]'，然后转成Number就是NaN
            右边就是false
            所以就是NaN和false进行比较，得到的是false

*/


console.log([] == ![]); //true


