Array.prototype.forEach = function(fn, toThis){
    if( this === null || this === undefined){
        throw new TypeError("this is null or not defined");
    }
    if( object.prototype.toString.call(callback) !== "[object function]"){
        throw new TypeError(callback+"is not a function");
    }
    let arr =this;
    for (let i = 0; i < arr.length; i++) {
       fn.call(toThis,arr[i],i,arr)

    }

}