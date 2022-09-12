//按照奇偶来排序数组
function evenovenarray(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (i % 2 == 0 && j % 2 == 0) {
            i++;
        } else if (i % 2 == 0 && j % 2 !== 0) {
            i++;
            j--;
        } else if (i % 2 !== 0 && j % 2 !== 0) {
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--
        }
    }
    return arr;
}

//连续子数组的最大和，并输出子数组的索引
function subMaxSumArr(arr) {
    let pre = 0, max = 0;
    let start = 0, end = 0;
    for (let i = 0; i < arr.length; i++) {
        pre += arr[i];
        if (pre < 0) {
            pre = 0;
            start++
        }
        if (pre > max) {
            max = pre;
            end = i
        }
    }

    if (max == 0) {
        max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
                start = end = i;
            }
        }
    }
    console.log('最大和为' + max + "start" + start + "end" + end);
}

//判断两个数组是否相同
function arrSame(arr1, arr2) {
    return arr1.length == arr2.length && arr1.every((item, index) => {
        return item === arr2[index];
    })
}


//判断两个对象是否相同
function objectSame(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] != keys2[i]) {
            return false;
        }
        if (typeof obj1[keys1[i]] == "object" && typeof obj2[keys2[i]] == "object") {
            return objectSame(obj1[keys1[i]], obj2[keys2[i]])
        }
        if (typeof obj1[keys1[i]] == "object" || typeof obj2[keys2[i]] == "object") {
            return false
        }
        if (obj1[keys1[i]] !== obj2[keys2[i]]) {
            return false
        }

    }
    return true
}

//比较版本号
function compareVersion(v1, v2) {
    let arr1 = v1.split(".").map(item => +item);
    let arr2 = v2.split(".").map(item => +item);
    let min = Math.min(arr1.length, arr2.length);
    let i = 0
    for (; i < min; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        } else if (arr1[i] < arr2[i]) {
            return -1
        }
    }
    if (arr1.length > arr2.length) {
        for (let index = i; index < arr1.length; index++) {
            if (arr1[index] != 0) {
                return 1
            }
        }
        return 0
    } else if (arr1.length < arr2.length) {
        for (let index = i; index < arr2.length; index++) {
            if (arr2[index] != 0) {
                return -1
            }
        }
        return 0
    }
    return 0
}


//除了自身以外数组的乘积
function produceMyself(arr) {
    let res = Array(arr.length).fill(1);
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        res[i] = res[i] * product;
        product = product * arr[i]
    }
    product = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] = res[i] * product;
        product = product * arr[i]

    }
}

//从尾到头打印链表
function reverseListNode(head) {
    let res = [];
    if (!head) {
        return res;
    }
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}

//大数相加
function bigNumSum(a, b) {
    let arrA = a.split("").reverse().map(item => +item);
    let arrB = b.split("").reverse().map(item => +item);
    let shortArr, longArr, shortLen, longLen;
    if (arrA.length < arrB.length) {
        shortArr = arrA;
        shortLen = arrA.length;
        longLen = arrB.length;
        longArr = arrB;
    } else {
        shortArr = arrB;
        shortLen = arrB.length;
        longLen = arrA.length;
        longArr = arrA;
    }
    let add = 0;
    let res = [];
    for (let i = 0; i < shortLen; i++) {
        let temp = (arrA[i] + arrB[i] + add) % 10;
        res.push(temp);
        add = Math.floor((arrA[i] + arrB[i] + add) / 10)
    }
    if (shortLen == longLen) {
        res.push(add)
    } else {
        for (let j = shortLen; j < longLen; j++) {
            if (j == longLen - 1) {
                res.push(longArr[j] + add)
            } else {
                let temp = (longArr[j] + add) % 10;
                res.push(temp);
                add = Math.floor((longArr[j] + add) / 10)
            }
        }
    }
    return res.reverse().join("")
}
//判断是否是对称二叉树
function isDuichenTree(root) {
    if (!root) {
        return true
    }
    return check(root.left, root.right)
}
function check(left, right) {
    if (letf === null && right === null) {
        return true
    } else if (letf === null || right === null) {
        return false
    }
    return left.val === right.val && check(left.left, left.right) && check(right.left, right.right)
}

//多叉树的前序遍历
function preorder(root) {
    const res = [];
    const pre = (root) => {
        if (!root) {
            return
        }
        res.push(root.val);
        root.children.forEach(child => pre(child))
    }
    pre(root);
    return res;
}

//二叉树的深度
function deepTwo(root) {
    if (!root) {
        return 0
    }
    return Math.max(deepTwo(root.left), deepTwo(root.right)) + 1
}

//多叉树的深度
function deepMany(root){
    if (!root) {
        return 0
    }
    let children = root.children;
    let max=0;
    for(let child of children){
        let childDeep =deepMany(child);
        max= Math.max(max,childDeep)
    }
    return max+1
}
//二叉树的第K个节点
function KthNode(root,k){
    if (!root) {
        return 
    }
    let res=[];
    function inorder(root){
        if (root.left) {
            inorder(root.left);
        }
        res.push(root.val);
        if (root.right) {
            inorder(root.right)
        }
        
    }
    inorder(root);
    return res[k-1]
}

//二维数组的查找
function findNumberFromArray(matrix,target){
    let row =0;
    let col =matrix[0].length-1;
    while (row <matrix.length &&col >=0) {
        if (target <matrix[row][col]) {
            col--;
        }else if(target>matrix[row][col]){
            row++;
        }else if(target == matrix[row][col]){
            return true;
        }
    }
      return false;          
}

//二维数组的随机组合
function solution(nums){
    let len = nums.length;
    let res=[''];
    for (let i = 0; i <len; i++) {
       res =getValues(res,nums[i])
    }
    return res;
}

function getValues(arr1,arr2){
    let arr =[];
    for (let i = 0; i < arr1.length; i++) {
       let val1 =arr1[i];
       for (let j = 0; j < arr2.length; j++) {
           let val2 =arr2[j];
           let val =val1+val2;
           arr.push(val);
       }
    }
    return arr;
}


//合并排序链表
function mergeList(l1,l2){
    let fadeNode =new ListNode(-1);
    let cur =fadeNode.next;
    while(l1 ||l2){
        if (l1.val <l2.val) {
            cur =l1;
            l1 =l1.next;
        }else{
            cur =l2;
            l2 =l2.next;
        }
        cur =cur.next
    }
    return fadeNode.next
}

//合并排序数组
function mergeArray(arr1,arr2){
    let m =arr1.length;
    let n =arr2.length;
    let res=[];
    let p1=p2=0;
    while(p1<m ||p2<n){
        if (p1 ==m) {
            res.push(arr2[p2++])
        }else if(p2 ==n){
            res.push(arr1[p1++])
        }else if(arr1[p1]<arr2[p2]){
            res.push(arr1[p1++]);
        }else{
            res.push(arr2[p2++]);
        }
    }
    return res;
}


//连续子数组的最大和
function maxSubSum(arr){
    let pre =0,max=0;
    let start = 0, end = 0;
    for (let i = 0; i < arr.length; i++) {
        pre+=arr[i];
        if (pre<0) {
            pre =0;
            start++;
        }
        if (pre>max) {
            max=start;
            end =i
        }
    }
    while(max==0){
         max =arr[0];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j]>max) {
                max= arr[j];
                start =end =j
            }        
        }
    }
}

//判断数组中有两数之和
function sumFindhhh(arr,target){
    let res=[];
    let map =new Map();
    arr.forEach((item,index)=>{
        map.set(item,index);
    })
    for (let i = 0; i < arr.length; i++) {
        let d =target -arr[i];
        if (map.has(d)) {
            if ( i != map.get(d)) {
                res=[d,arr[i]]
                return res
            }
        }
    }
    return false
}


//手写forEach函数
Array.prototype.MyForEach =function(fn,tothis){
    let arr =this;
    for (let i = 0; i < arr.length; i++) {
        fn.call(tothis,arr[i],i,arr)
        
    }
}
//手写reduce函数
Array.prototype.MyReduce =function(fn,initValue){

    let arr =this;
    let initIndex =arguments.length ===1?1:0;
    let sum =arguments.length ===1?arr[0]:initValue;
    for (let i = initIndex; i < arr.length; i++) {
        sum =fn(sum,arr[i],i,arr)  
    }
    return sum
}

//手写map函数
Array.prototype.MyMap =function(fn,tothis){

    let arr =this;
    const res=[];
    for (let i = 0; i < arr.length; i++) {
        const item =fn.call(tothis,arr[i],i,arr)
        res.push(item)
    }
    return res
}
//旋转数组中的最小数字
function minArray(arr){
    let left =0;
    let right =arr.length-1;
    if (right ==0) {
        return arr[0]
    }
    while (left < right) {
        let middle =left+Math.floor((right-left)/2);
        if (arr[middle]>arr[right]) {
            left =middle+1;
        }else if(arr[middle]<arr[right]){
            right =middle;
        }else{
            right--;
        }
    }
    return arr[left]
}

//指定个数分割数组
function chunkArrhh(arr,size){
    let res=[];
    let n =Math.ceil(arr.length /size);
    for (let i = 0; i < n; i++) {
        let start =i*size;
        let sub =arr.slice(start,start+size);
        res.push(sub)
    }
    return res;
}

//最长回文字符串
function longest(s){
    let max =1,start =0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expand(s,i,i);
        let len2 =expand(s,i,i+1);
        let len =Math.max(len1,len2)
        if (len>max) {
            max =len;
            start = i-Math.floor((len-1)/2)
        }
    }
    return s.substring(start,start+max)
}
function expand(s,left,right){
    let L =left,R =right;
    while (L>=0 && R< s.length &&s[L] == s[R]) {
        L--;
        R++;
    }
    return R-L-1
}
//重建二叉树
function buildTree(preorder,inorder){
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let rootVal = preorder[0];
    let rootNode =new ListNode(rootVal);
    let i =0;
    for (; i < inorder.length; i++) {
        if (inorder[i] ==rootVal) {
            break;
        }
    }
    rootNode.left =buildTree(preorder.slice(1,i+1),inorder.slice(0,i));
    rootNode.right =buildTree(preorder.slice(i+1),inorder.slice(i+1))
    return rootNode
}

//整数反转
function intReverse(x){
    let res=0;
    while(x!=0){
        let diff =x%10;
        x=x/10|0;
        res = res*10+diff;
    }
    return res;
}
//手写promise
class MyPromise{
    static PEDDING ="等待";
    static FULFILLED ="成功";
    static REJECTED ="失败";
    constructor(func){
        this.status =MyPromise.PEDDING;
        this.result =null;
        this.resolveCallback =[];
        this.rejectCallback =[];
        try{
            func(this.resolve.bind(this),this.reject.bind(this))
        }catch(e){
            this.reject(e);
        }
    }
    resolve(result){
        setTimeout(()=>{
            if (this.status == MyPromise.PEDDING) {
                this.status =MyPromise.FULFILLED;
                this.result =result;
                this.resolveCallback.forEach(callback=>callback(result))
            }
        })
    }
    reject(err){
        setTimeout(()=>{
            if (this.status == MyPromise.PEDDING) {
                this.status = MyPromise.REJECTED;
                this.result =err;
                this.rejectCallback.forEach(callback=>callback(err))
            }
        })
    }
    then(onfulfilled,onrejected){
        return new MyPromise((resolve,reject)=>{
            onfulfilled =typeof onfulfilled === "function" ?onfulfilled:()=>{};
            onrejected =typeof onrejected === "function" ?onrejected:()=>{};
            if (this.status == MyPromise.PEDDING) {
                this.resolveCallback.push(onfulfilled);
                this.rejectCallback.push(onrejected)
            }
            if (this.status == MyPromise.FULFILLED) {
                setTimeout(()=>{
                    onfulfilled(this.result)
                })
                
            }
            if (this.status == MyPromise.REJECTED) {
                setTimeout(()=>{
                    onrejected(this.result)
                })
                
            }
        })
    }
}

//手写promise.all
function promiseAll(_promises){
    return new Promise((resolve,reject)=>{
        let promises =Array.from(_promises);
        let count =0;
        let res=[];
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((o)=>{
                res.push(o);
                if (++count ==promises.length) {
                    resolve(res)
                }
            }).catch(e=>reject(e))      
        }    
    })
}

//手写promise.race
function promiseRace(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((p)=>{
            Promise.resolve(p).then(o=>{
                resolve(o)
            }).catch(err=>reject(err))
        })
    })
}
//快速排序
function quickSort(arr){
    if (arr.length ==0 ||arr.length ==1) {
        return arr;
    }
    let index =Math.floor(arr.length/2);
    let curItem =arr.splice(index,1);
    let left =[],right =[];
    arr.forEach(item=>{
        if (item<curItem) {
            left.push(item)
        }else{
            right.push(item)
        }
    })

    return quickSort(left).concat(curItem).concat(quickSort(right))
}
//冒泡排序
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
           if (arr[j]>arr[j]) {
               [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
           }   
        } 
    }
    return arr;
}

//选择排序
function selectSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min =i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min]>arr[j]) {
                min =j;
            }         
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

//插入排序
function insertSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let pre = i-1;
        let cur =arr[i];
        while (pre >=0 && arr[pre]>cur) {
            arr[pre+1] =arr[pre];
            pre--;
        }
        arr[pre+1] =cur; 
    }
    return arr;
}

//防抖
function debounce(fn,time){
    let timeout =null;
    return function(){
        let firstclick =!timeout;
        if (firstclick) {
            fn.apply(this,arguments);
        }
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout =setTimeout(()=>{
            fn.apply(this,arguments)
            timeout =null;
        },time)
    }
}

//节流
function throttle(fn,time){
    let timeout =null;
    let pre =0;
    return function(){
        let now =new Date();
        if (timeout) {
            clearTimeout(timeout);
            timeout =null;
        }
        if (npw-pre>time) {
            fn.apply(this,arguments);
            pre =now;
        }
        if (!timeout) {
            timeout =setTimeout(()=>{
                fn.apply(this,arguments)
            },time)
        }
    
    }
}

//手写new 
function mynew(){
    let args =Array.prototype.slice.call(arguments);
    let Fn =args.shift();
    let obj =Object.create(Fn.prototype);
    Fn.apply(obj,args);
    return obj
}

//手写call函数
function mycall(){
    let args =Array.prototype.slice.call(arguments);
    let selfFn =this;
    let t =args.shift();
    t.fn =selfFn;
    let res =t.fn(...args);
    delete t.fn;
    return res;
}

//深拷贝
function deepClone(o){
    if (typeof o !== "object" ||o === null) {
        return o
    }
    let res;
    if (o instanceof Array) {
        res =[];
    }else{
        res={}
    }
    for(let key in o){
        res[key] =deepClone(o[key])
    }
    return res;
}


//手写instanceof
function myinstanceof(left, right){
    let _proto =left.__proto__;
    let prototype =right.prototype;
    while(_proto){
        if (_proto === prototype) {
            return true
        }
        _proto =_proto.__proto__;
    }
    return false
}
//二叉树的层序遍历
function level(root){
    if (!root) {
        return []
    }
    let res =[];
    let queue =[root];
    while (queue.length!=0) {
        let cur=[];
        const n =queue.length;
        for (let i = 0; i < n; i++) {
            let target =queue.shift();
            cur.push(target.val);
            if (target.left) {
                queue.push(target.left)
            }
            if (target.right) {
                queue.push(target.right)
            } 
        }
        res.push(cur)
    }
    return res
}


//数组扁平化
function arrbian(arr){

    while (arr.some((item)=>{Array.isArray(item)})) {
        arr =[].concat(...arr)
    }
    return arr;
}
function arrbian2(arr){
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item)?arrbian2(item):item)
    },[])

}

let kk ={
    name:'hhh',
    name:'哈哈哈'
}

function levelorder(root){
    let res=[];
    let queue = [];
    if (!root) {
        return res;
    }
    queue.push(root);
    while (queue.length!=0) {
        let layergroup =[];
        const  n=queue.length;
        for (let i = 0; i < n; i++) {
            let target =queue.shift();
            layergroup.push(target.val);
            if (target.left) {
                queue.push(target.left)
            }
            if (target.right) {
                queue.push(target.right)
            }  
        }
        res.push(layergroup)
    }
}

//前序  中左右  递归
function preOder(root){
    const res = [];
    if (!root) {
      return res  
    }
    order(root);
    return res;

    function order(node){
        res.push(node.val)
        if (node.left) {
            order(node.left)
        }
        if (node.right) {
            order(node.right)
        }
    }
}
//前序  采用栈的思想 中左右
function preorder2(root){
    const res = [];
    if (!root) {
        return res;
    }
    const queue = [];
    queue.push(root);
    while(queue.length!=0){
        let item = queue.pop();
        res.push(item.val);
        if (item.right) {
            queue.push(item.right)
        }
        if (item.left) {
            queue.push(item.left)
        }
    }
    return res
}

//中序  递归  左中右
function madOrder(root){
    const res = [];
    if (!root) {
        return res;
    }
    order(root);
    return res;
    function order(root){
        if (root.left) {
            order(root.left)
        }
        res.push(root.val)
        if (root.right) {
            order(root.right)
        }
    }
}

//中序 采用栈的思想 左中右
function madOrder2(root){
    const res = [];
    const stack = [];
    let temp = root;
    while (temp) {
        stack.push(temp);
        temp = temp.left;
    }
    while (stack.length>0) {
        const item = stack.pop();
        res.push(item.val);
       if (item.right) {
           const temp2 = item.right;
           while (temp2) {
               stack.push(temp2.right)
               temp2 = temp2.left
           }
       }
    }
}
let arr = [1,1,3,5,'1',[1,2,2]];
//输出[1,3,5,'1',[1,2]]

function mockFetch(param) {
    return new Promise((resovle) => {
      setTimeout(() => {
        resovle(param);
      }, 2000);
    });
  }


  var numTrees = function(n) {
    let dp = []
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2
    for(let i =3;i<=n;i++){
        for(let j =1;j<=i;j++){
            dp[i]+=dp[j-1]*dp[i-j]
        }
    }
    return dp[n]
};
numTrees(3)
