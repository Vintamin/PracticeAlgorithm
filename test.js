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

//console.log(Object.prototype.toString.call(null));
function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
}
//console.log(add(1)(2)(3)(4)());



  
  