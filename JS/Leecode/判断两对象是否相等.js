//版本一，只能判断值是简单数据类型
function judgeObjectSame(Obj1,Obj2){
    let keys1 =Object.keys(Obj1);
    let keys2 =Object.keys(Obj2);
    if (keys1.length != keys2.length) {
        return false
    }
    for (let i = 0; i < keys1.length; i++) {
        let k1 =keys1[i];//第一个对象的第i个key值
        let k2 =keys2[i];//第二个对象的第i个key值
        if(k1!==k2){    //如果连Key值都不一样就直接return false
            return false;
        }
        if(Obj1[k1]!=Obj2[k2]){
            return false
        }     
    }
    return true
}
//最终版，可以检测两个对象有子对象（复杂数据类型）


//进阶版，判断数组里存着对象
//判断两个对象是否相等
function judgeObjectSame2(Obj1,Obj2){
    let keys1 =Object.keys(Obj1);
    let keys2 =Object.keys(Obj2);
    if (keys1.length != keys2.length) {
        return false
    }
    for (let i = 0; i < keys1.length; i++) {
        let k1 =keys1[i];       
        let k2 =keys2[i];
        if(k1!==k2){
            return false;
        }
        if(typeof Obj1[k1] == "object" && typeof Obj2[k2] == "object"){
             return judgeObjectSame2(Obj1[k1],Obj2[k2])
        }else if(typeof Obj1[k1] == "object" || typeof Obj2[k2] == "object"){
            return false;
        }else{
            //简单数据类型
            if(Obj1[k1]!==Obj2[k2]){
                return false
            }
        }
             
    }
    return true
}

//判断两数组是否相等
function judgeArraySame(arr1,arr2){
    return arr1.length === arr2.length &&arr1.every((item,index)=>{
        return judgeObjectSame2(item,arr2[index])
    })
}


let Obj1=[
    {
        name:'kk',
        age:18,
        son:{
            name:'kk',
            age:18,
            son:{
                name:'kk',
                age:18,
            }
        }
    },
    {
        name:'kk',
        age:18,
        son:{
            name:'kk',
            age:18,
            son:{
                name:'kk',
                age:16,
            }
        }
    }
]
let Obj2=[
    {
        name:'kk',
        age:18,
        son:{
            name:'kk',
            age:18,
            son:{
                name:'kk',
                age:18,
            }
        }
    },
    {
        name:'kk',
        age:18,
        son:{
            name:'kk',
            age:18,
            son:{
                name:'kk',
                age:18,
            }
        }
    }
]
console.log(judgeArraySame(Obj1,Obj2));