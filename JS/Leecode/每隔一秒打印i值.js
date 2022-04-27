//方法一，立即执行函数
for (var i = 0; i <5;i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },1000*i)
    })(i)
}

//方法二：let块级作用域
for (let i = 0; i < 5; i++) {
   setTimeout(function(){
       console.log(i);
   },1000*i)
    
}

