function qucikSort(arr){
    if (arr.length <2) {
        return arr;
    }
    let index =Math.floor(arr.length / 2);
    let item =arr.splice(index,1);
    let left =[],right =[];
    arr.forEach((val)=>{
        if (val<item) {
            left.push(val);
        }else if (val>=item) {right.push(val);}
    })
    return quickSort(left).concat(item).concat(right);
}

function selectSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min =i;
        for (let j = i+1; j < array.length; j++) {
            if (arr[j] < min) {
                min =j
            }
        }
        [arr[min],arr[i]] = [arr[i],arr[min]]
    }
    return arr
}

function insertSort(arr){
    for (let i = 1; i < arr.length; i++){
        let pre =i-1;
        let current =arr[i];
        while (pre>=0 && arr[pre]>current) {
            arr[pre+1] =arr[pre];
            pre--;
        }
        arr[pre+1] =current
    }
    return arr;
}

function shellSort(arr){
    let gap =arr.length;
    while (gap>1) {
        gap =parseInt(gap/2);
        for (let i = gap; i < arr.length; i++){
            let pre =i-gap;
            let current =arr[i];
            while (pre>=0 && arr[pre]>current) {
                arr[pre+gap] =arr[pre];
                pre-=gap;
            }
            arr[pre+gap] =current
        }
    }
}

Function.prototype.mycall =function(){
    const args =Array.prototype.slice.call(arguments);
    let selfFn =this;
    let t =args.shift();
    t.fn =selfFn;
    let res =t.fn(...args);
    delete t.fn;
    return res;
}
Function.prototype.myapply =function(){
    const args =Array.prototype.slice.call(arguments);
    let selfFn =this;
    let t =args.shift();
    t.fn =selfFn;
    let res =t.fn(args);
    delete t.fn;
    return res;
}
Function.prototype.mybind =function(){
    const args =Array.prototype.slice.call(arguments);
    let selfFn =this;
    let t =args.shift();
    t.fn =selfFn;
   return function(){
       return t.fn(args)
   }
}

function mynew(){
    let args =Array.prototype.slice.call(arguments);
    let Fn =args.shift();
    let obj =Object.create(Fn.prototype);
    Fn.apply(obj,args)
    return obj
}
//中左右
function  preOrder(root) {
    const res = [];
    if (!root) {
        return res;
    }
    const stack =[root];
    while (stack.length>0) {
        const item = stack.pop();
        res.push(item.val)
        if (item.right) {
            stack.push(item.right)
        }
        if (item.left) {
            stack.push(item.left)
        }
    }
    return res
}

//左中右
function madiumOrder(root) {
    const res = [];
    if (!root) {
        return res
    }
    const stack =[];
    stack.push(root.val)
    let left = root.left;
    while (left) {
        stack.push(left.val);
        left = left.left;  
    }
    while (stack.length>0) {
        const temp = stack.pop();
        res.push(temp.val);
        const right = temp.right;
        while (right) {
            stack.push(right);
            right = right.right
        }
    }
    return res;
}

function myReduce(fn,initValue) {
    let arr = this;
    let initalIndex;
    let sum;
    initalIndex = arguments.length===1?1:0;
    sum = arguments.length === 1? arr[0]:initValue;
    for (let i = initalIndex; i < arr.length; i++) {
        sum+=fn(sum,arr[i],i,arr)
    }
    return sum 
}
function myMap(fn,toThis) {
    let arr =this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn.call(toThis,arr[i],i,arr))
    }
    return res
}

function maxSubArr(arr) {
    let pre = 0,max = 0;
    arr.forEach(x=>{
        pre = Math.max(pre+x,x)
        max =Math.max(max,pre)
    })
    return max
}

class MyPromise{
    static PEDDING ="等待";
    static FULFILLED="成功";
    static REJECTED ="失败"
    constructor(func){
        this.status = MyPromise.PEDDING;
        this.result =null;
        this.fulfilledCallback = [];
        this.rejectedCallback = [];
        try {
            func(this.resolve.bind(this),this.rejectedCallback.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result){
        setTimeout(() => {
            if (this.status === MyPromise.PEDDING) {
                this.status === MyPromise.FULFILLED;
                this.result= result;
                this.fulfilledCallback.forEach(callback=>callback(result))
            }
        });
    }
    reject(err){
        setTimeout(() => {
            if (this.status === MyPromise.PEDDING) {
                this.status === MyPromise.REJECTED;
                this.result= err;
                this.rejectedCallback.forEach(callback=>callback(err))
            }
        });
    }
    then(onfulfill,onreject){
        return new MyPromise((resolve,reject)=>{
            onfulfill = typeof onfulfill =="function"?onfulfill:()=>{};
            onreject = typeof onreject =="function"?onreject:()=>{};
            if (this.status ==MyPromise.PEDDING) {
                this.fulfilledCallback.push(onfulfill);
                this.rejectedCallback.push(onreject);
            }
            if (this.status == Commitment.FULFILLED) {
                setTimeout(()=>{
                    onfulfill(this.result);
                })    
            }
            if (this.status == Commitment.REJECTED) {
                setTimeout(()=>{
                    onreject(this.result);
                })  
            }

        })
    }
}

function promiseAll(promises){
    return new Promise((resolve,reject)=>{
        const promiseArr = Array.from(promises);
        const res = [];
        const len = promiseArr.length;
        let count = 0;
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(o=>{
                res[i] = o;
                if (++count === len) {
                    resolve(res)
                }
            }).catch(e=>reject(e))
            
        }
    })
}

function promiseRace(promises) {
    return new Promise((resolve,reject)=>{
        promises.forEach(p=>Promise.resolve(p).then(data=>{
            resolve(data)
        }),err=>reject(err))
    })
}

function promiseAny(promises) {
    return new Promise((resolve,reject)=>{
        if (promises.length) {
            return new AggregateError()
        }
        let errs = [];
        let count = 0;
        promises = Array.from(promises);
        promises.forEach(promise=>promise.then((res)=>{
            resolve(res)
        },err=>{
            cout++;
            errs.push(err)
            if (count === errs.length) {
                reject(new AggregateError(errs))
            }
        }))
    })
}

function maxDepth(root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}
function minDepthBFS(root) {
    if(root == null) {
      return 0;
    }
    const queue = [root];
    let depth = 1;
    while(queue.length){
        const n = queue.length;
        for(let i =0;i<n;i++){
            const cur = queue.shift();
            if(cur.left == null && cur.right == null){
                return depth
            }
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
        depth++;
    }
  }
function numWays(n){
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i-1]+dp[i-2]
        
    }
}

function mockFetch(param) {
    return new Promise((resovle) => {
    setTimeout(() => {
        console.log('param',param);
        resovle(param);
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
/*     Promise.all(pool).then(() => { 
        console.log('请求已经全部结束');
    }); */
}
// 函数调用
limitedRequest([1, 2, 3, 4, 5, 6, 7, 8], 3);