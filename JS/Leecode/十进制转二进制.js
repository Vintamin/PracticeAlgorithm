
//利用栈的结构
function decbin(decNumber){
    var stack =[];
    while(decNumber >0){
        stack.push(decNumber %2);
        decNumber =Math.floor(decNumber /2);
    }
    var binaryString ='';
    while (stack.length != 0) {
        binaryString += stack.pop();
    }
    return binaryString
}