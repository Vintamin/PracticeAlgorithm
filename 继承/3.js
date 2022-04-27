/* 3.组合继承
优点：
    保留构造函数的优点：创建⼦类实例，可以向⽗类构造函数传参数。
    保留原型链的优点：⽗类的⽅法定义在⽗类的原型对象上，可以实现⽅法复⽤。
    不共享⽗类的引⽤属性。⽐如arr属性
缺点：
    由于调⽤了2次⽗类的构造⽅法，会存在⼀份多余的⽗类实例属性， */

//同一文件夹内JS文件相同的变量会冲突

function Parent(name){
    this.name = name;
    this.arr = [1];
}

Parent.prototype.say = function(){
    console.log('我是父类原型上的方法');
}

function Child(hobby,name){
    this.hobby =hobby;
    Parent.call(this,name,hobby);//第一次调用父类构造函数
}

Child.prototype = new Parent();//第二次调用父类构造函数
Child.prototype.constructor = Child;
let c3 = new Child('篮球','康康')
console.log(c3.name);
console.log(c3.hobby);
c3.say();
