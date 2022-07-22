/* 
    当我们的应用在瞬间发出很多请求,例如几十万 http 请求（tcp 连接数不足可能造成等待）
    或者堆积了无数调用栈导致内存溢出,这个时候需要我们对 http 的连接数做限制。在有限的并发数下尽快完成所有请求

    这时候考虑一个场景：如果你的promises数组中每个对象都是http请求，而这样的对象有几十万个。
    那么会出现的情况是，你在瞬间发出几十万个http请求，这样很有可能导致堆积了无数调用栈导致内存溢出。
    这时候，我们就需要考虑对Promise.all做并发限制。
    Promise.all并发限制指的是，每个时刻并发执行的promise数量是固定的，最终的执行结果还是保持与原来的Promise.all一致。


    思路分析:整体采用递归调用来实现：最初发送的请求数量上限为允许的最大值，并且这些请求中的每一个都应该在完成时继续递归发送，通过传入的索引来确定了urls里面具体是那个URL，保证最后输出的顺序不会乱，而是依次输出。

*/

//方式一：递归调用
function multiRequest(urls = [], maxNum) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;
  
    return new Promise((resolve, reject) => {
      // 请求maxNum个
      while (count < maxNum) {
        next();
      }
      function next() {
        let current = count++;
        // 处理边界条件
        if (current >= len) {
          // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
          !result.includes(false) && resolve(result);
          return;
        }
        const url = urls[current];
        fetch(url)
          .then((res) => {
            // 保存请求结果
            result[current] = res;
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          })
          .catch((err) => {
            result[current] = err;
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          });
      }
    });
  }

  //方式二 利用promise.all
  // 模仿一个fetch的异步函数，返回promise
    function mockFetch(param) {
        return new Promise((resovle) => {
        setTimeout(() => {
            resovle(param);//执行完这个resolve函数就会去执行对应的then的回调函数
        }, 2000);
        });
    }
    
    function limitedRequest(urls, maxNum) {
        const pool = [];
        // 处理maxNum比urls.length 还要大的情况。
        const initSize = Math.min(urls.length, maxNum);
        for (let i = 0; i < initSize; i++) {
            // 一次性放入初始的个数
            pool.push(run(urls.splice(0, 1)));
        }
        // r 代表promise完成的resolve回调函数
        // r 函数无论什么样的结果都返回promise，来确保最终promise.all可以正确执行
        function r() {
            console.log('当前并发度：', pool.length);
            if (urls.length === 0) {
                console.log('并发请求已经全部发起');
                return Promise.resolve();
            }
            return run(urls.splice(0, 1));
            }
        // 调用一次请求
        function run(url) {
            return mockFetch(url).then(r);
        }
        // 全部请求完成的回调
        Promise.all(pool).then(() => { 
            console.log('请求已经全部结束');
        });
    }
    // 函数调用
    limitedRequest([1, 2, 3, 4, 5, 6, 7, 8], 3);
  
  //面试题
  /* 
    有 8 个图片资源的 url，已经存储在数组 urls 中（即urls = [‘http://example.com/1.jpg’, …., ‘http://example.com/8.jpg’]），而且已经有一个函数 function loadImg，
    输入一个 url 链接，返回一个 Promise，该 Promise 在图片下载完成的时候 resolve，下载失败则 reject。但是我们要求，任意时刻，同时下载的链接数量不可以超过 3 个。
    请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。
  
  */
 //已有代码
 var urls = [ 'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 
            'https://www.kkkk1000.com/images/getImgData/gray.gif', 
            'https://www.kkkk1000.com/images/getImgData/Particle.gif', 
            'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 
            'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 
            'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
            'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 
            'https://www.kkkk1000.com/images/wxQrCode2.png' ]; 
 function loadImg(url) { 
    return new Promise((resolve, reject) => { 
        const img = new Image();
         img.onload = function () { 
            console.log('一张图片加载完成');
             resolve(); 
            } 
        img.onerror = reject
         img.src = url }) 
    };
    function limitLoad(urls, handler, limit) {
         // 对数组做一个拷贝 
         const sequence = [].concat(urls)
          let promises = []; 
          //并发请求到最大数 
          promises = sequence.splice(0, limit).map((url, index) => {
             // 这里返回的 index 是任务在 promises 的脚标， 
             //用于在 Promise.race 之后找到完成的任务脚标
              return handler(url).then(() => { 
                return index 
            }); 
         });
             (async function loop() {
                 let p = Promise.race(promises);
                  for (let i = 0; i < sequence.length; i++) { 
                    p = p.then((res) => { 
                        promises[res] = handler(sequence[i]).then(() => { 
                            return res
                         }); 
                     return Promise.race(promises) }) } 
            })() 
        } 
        limitLoad(urls, loadImg, 3)
  