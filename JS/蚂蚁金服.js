//题目一
// 编写一个简单的事件监听处理器
// 1. 具备 on 方法绑定事件
// 2. 具备 off 方法解绑事件
function EventEmitter() {
    // todo
    this.message ={};
    // todo
    EventEmitter.prototype.on =function(type, fn){
        if (!this.message[type]) {
            this.message[type] =[];
        }
        this.message[type].push(fn);
    }

    EventEmitter.prototype.off =function(type ,fn){
        if (!this.message[type]) {
            return
        }
        if (!fn) {
          delete this.message[type];
          return;  
        }
        this.message[type] =this.message[type].filter(item=>item!=fn)
    }
    EventEmitter.prototype.emit=function(type){
        if (!this.message[type]) {
            return
        }
        let args =Array.prototype.slice.call(arguments);
        args.shift();
        this.message[type].forEach(fn=>fn.apply(this,args))
    }
    
}

// test
var emitter = new EventEmitter();
emitter.on('foo', function (e) {
    console.log('foo event: ', e);
});

emitter.on('*', function (e, type) {
    console.log('some event: ', e, type);
});

function onBar(e) {
    console.log('bar event: ', e);
}

emitter.on('bar', onBar);

emitter.emit('foo', {
    name: 'John'
});

emitter.emit('bar', {
    name: 'John'
});

emitter.off('bar', onBar);

emitter.emit('foo', {
    name: 'John'
});

emitter.emit('bar', {
    name: 'John'
});


//题目二
// 获取给定字符串中最长无重复字符的子字符串，例如：'adgadgz' => 'adgz'
function maxSearch(s){
    const occ =new Set();
    const n =s.length;
    let rk= -1;
    let res ="";
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            occ.delete(s.charAt(i-1))
        }
        while (rk+1 <n && !occ.has(s.charAt(rk+1))) {
            occ.add(s.charAt(rk+1));
            rk++;
        }
        if (res.length <[...occ].length) {
            res ='';
            for(let val of occ){
                res+=val;
            }
        }
    }
    return res;
}