//例如：get-element-by-id 转换为 getElementById
function converse(str){
    let arr =str.split("-");
    let res =arr.shift();
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i][0].toUpperCase() +arr[i].substr(1)
        res =res+arr[i]; 
    }
    return res
}

console.log(converse("get-element-by-id"));



