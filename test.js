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

function validPalindrome(s) {
    if (s.length<2) {
        return true
    }
    let left = 0,right =s.length-1;
    while (left<right) {
        if (s[left]!=s[right]) {
            let res = validPalindrome(left+1,right) || validPalindrome(left,right-1)
            return res
        }
        left++;
        right--
    }
    return 
}

function maxSubArray(nums) {
    let pre = 0,max=0;
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(nums[i],pre+nums[i]);
        max = Math.max(max,pre)
    }
}
function longPalindrome(s) {
    if (s.length<2) {
        return s
    }
    let max = 0;
    let start = 0;
    function expand(left,right) {
        while (left>=0 && right<s.length && s[left] ==s[right]) {
            if (right-left+1>max) {
                max= right - left+1;
                start = left
            }
            
            left--;
            right++;
            
        }
    }
    for (let i = 0; i < s.length; i++) {
        expand(i,i+1);
        expand(i-1,i+1)
        
    }
}
function promise1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('第一个promise'),3000)
    })
}
function promise2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('第二个promise'),2000)
    })
}
function promise3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('第三个promise'),1000)
    })
}
/* promise1().then(data=>{
    console.log(data);
    return promise2()
}).then(data2=>{
    console.log(data2);
    return promise3()
}).then(data3=>{
    console.log(data3);
}) */
function promiseChain(list) {
    return list.reduce((all,cur)=>{
        return  all.then(data=>{
            console.log(data);
            return cur()
        })
    },Promise.resolve('初始'))
}
/* promiseChain([promise1,promise2,promise3]).then(d=>{
    console.log('执行完啦');
    console.log(d);
}) */
/* const arr = [1,2,3]
arr.reduce((p,x)=>{
    return p.then(()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(console.log(x)),1000)
        })
    })
},Promise.resolve()) */

function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function light(cb,time) {
    return new Promise(r=>{
        setTimeout(()=>{
            cb();
            r()
        },time);
    })
}
function run() {
    light(red,3000).then(()=>{
        return light(green,2000)
    }).then(()=>{
        return light(yellow,1000)
    }).then(()=>{
        return run()
    })
}
//run()

