
//实现相加
function addNum(a, b){
  //将a,b两个数转换为数组，并且将数组倒叙。
  let arrA = a.split('').reverse()
  let arrB = b.split('').reverse()
 
  //获取两个数组的长度
  let aLen = arrA.length
  let bLen = arrB.length
    
  
  let shortArr, shortLen, longArr, longLen
  let result = []
  if(aLen<bLen){
    shortArr = arrA
    shortLen = aLen
    longArr = arrB
    longLen = bLen
  }else {
    shortArr = arrB
    shortLen = bLen
    longArr = arrA
    longLen = aLen
  }
 
  let add = 0//用于记录进位数
  //将前面的数相加
  for(let i = 0; i < shortLen; i++){
    //下面的add会每次重新赋值
    let temp = (parseInt(arrA[i])+parseInt(arrB[i])+add)%10//相加后模10取余数
    result.push(temp)
    add = Math.floor((parseInt(arrA[i])+parseInt(arrB[i])+add)/10)//求进位数
  }
  
  if(shortLen===longLen){//如果两个数的长度相等，结果直接加上进位数即可
    result.push(add)
  }else{//如果两数字长度不相等
    for(let j = shortLen; j < longLen; j++){
      if(j===longLen-1){//最后一位直接等于长数组最后一位加上进位数字
        result.push(parseInt(longArr[j])+add)
      }else{
        let temp = (parseInt(longArr[j])+add)%10//长数组后面的数字加上进位模10取余数
        result.push(temp)
        add = Math.floor((parseInt(longArr[j])+add)/10)//求进位数字
      }
    }
  }
  return result.reverse().join('')//将结果数组倒叙，然后转换为字符串，最后输出的就是字符串
}


//正确方式
function addBigNum( s ,  t ) {

  //t和len_j存的永远都是短的,

     let len_i = s.length - 1;
     let len_j = t.length -1;
     if(len_i < len_j){
         //如果字符串s的长度比字符串t的长度小就交换
         let temp1 = s;
         s = t;
         t = temp1;

         let temp = len_i;
         len_i = len_j;
         len_j = temp;
     }
     let temp = 0;///用来就当前这一位的加和
     let add = 0;///保存进位
     let c = len_i - len_j;///用来给短的那一字符串添加前导“0”
     while(c > 0){
         t = '0' + t;
         c --;
     }
     let sum = "";
     for(let i = len_i;i >= 0;i --){///倒着开始进行进位运算
         temp = parseInt(s[i]) + parseInt(t[i]) + add;
         if(temp >= 10){///如果temp的值超过9则有进位
             temp -= 10;
             add = 1;
         }else{
             add = 0;
         }
         sum = String.fromCharCode(temp + 48) + sum;
         //s[i] = String.fromCharCode(temp + 48);///String.fromCharCode:将 Unicode 编码转为一个字符:当前这位做完加法后的值
     }

     if(add == 1){
         ///d
         sum  = "1" + sum ;
     }
     return sum;
 
}
let a ='0';
let b ='0';

console.log(addNum(a,b));

