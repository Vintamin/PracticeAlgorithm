/* 2.借用构造函数

优点：创建⼦类实例，可以向⽗类构造函数传参数。
    ⼦类实例不共享⽗类构造函数的引⽤属性。如arr属性
    可实现多继承（通过多个call或者apply继承多个⽗类）

缺点：⽗类的⽅法不能复⽤ 
        不能获得⽗类原型上的⽅法)
*/


function Parent(name){
    this.name = name;
    this.arr =[1];//私有属性
    this.say =function(){
        console.log('我是父类定义的方法');
    }
}
Parent.prototype.walk = function(){
    console.log('我是父类原型上的方法');
}
Parent.prototype.age =38;
function Child(hobby,name){
    this.hobby =hobby;
    Parent.call(this,name);//在这只是调用了一下Parent（）构造函数
}

console.log(Child.prototype );//Child {},并没有指向Parent
console.log(Child.prototype.constructor);//[Function: Child]


let c2= new Child('篮球','康康')
console.log(c2.name);
console.log(c2.hobby);
c2.say();
//c.walk();//报错
console.log(c2.age);//undefined
