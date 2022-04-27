//就是对应的括号成对出现结束(){}
//利用栈的属性
function isValid(s){
    //创建HashMap
    const map =new Map();
    //配置配对情况
    map.set("(",")");//key:value
    map.set("[","]");
    map.set("{","}");

    const stack =[];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {//判断key
            stack.push(map.get(s[i]));
        }else{
            if(stack.pop() !== s[i]){
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}