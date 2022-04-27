
//1.原型链继承.js

/* 缺点：
创建⼦类实例的时候，不能传⽗类的参数（⽐如name）
⼦类实例共享了⽗类构造函数的引⽤属性，⽐如arr属性。
⽆法实现多继承。 */

function Parent(name){
        this.name = name;
        this.arr =[1];//强调私有
}

Parent.prototype.say = function(){
    console.log('我是父类原型上的方法');
}

function Child(hobby){
    this.hobby = hobby;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

let c1 =new Child('篮球')

console.log(c1.hobby);

console.log(c1.arr);//缺点：拿到父类的私有属性
c1.say(); //优点：可以调用父类的原型上的方法
