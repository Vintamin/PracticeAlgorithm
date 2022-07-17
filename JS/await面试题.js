async function async1() {
    console.log('async1 start---2');//2   
     await async2();

    /* 这里为什么不先执行下面这句呢，是因为：
对于await后面的值来说，分2个情况：不是promise对象和是promise对象
如果不是 promise , await会阻塞后面的代码，先执行async外面的同步代码，同步代码执行完，再回到async内部，
把这个非promise的东西，作为 await表达式的结果
如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，
然后把 resolve 的参数作为 await 表达式的运算结果。 */


/* 先得到await右侧表达式的结果。执行async2()，打印同步代码console.log('async2'), 并且return Promise.resolve(undefined)
await后，中断async函数，先执行async外的同步代码 */

    console.log('async1 end---6');//6   
}

async function async2() {
    console.log('async2---3');//3
}

console.log('script start---1');//1

setTimeout(() => {
    console.log('setTimeout---8');//8
}, 0)

async1();

new Promise((resolve) => {
    console.log('promise1---4');//4
    resolve();
}).then(() => {
    console.log('promise2---7');//7
});

console.log('script end---5');//5

