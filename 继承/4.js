/* 4.组合继承优化1
优点：
    只调⽤⼀次⽗类构造函数。
    保留构造函数的优点：创建⼦类实例，可以向⽗类构造函数传参数
    保留原型链的优点：⽗类的实例⽅法定义在⽗类的原型对象上，可以实现⽅法复⽤。
缺点：
    修正构造函数的指向之后，⽗类实例的构造函数指向，同时也发⽣变化(这是我们不希望的)
注意：'组合继承优化1'这种⽅式，要记得修复Child.prototype.constructor指向 */

function Parent(name){
    this.name = name;
    this.arr = [1];
}

Parent.prototype.say = function(){
    console.log('我是父类原型上的方法');
}

function Child(hobby,name){
    this.hobby =hobby;
    Parent.call(this,name);//这里必须要传入hobby
}

Child.prototype = Parent.prototype;//重点：使得子类原型和父类原型指向同一个
Child.prototype.constructor = Child;//记得要改回constructor
let c4 = new Child('篮球','康康')
console.log(c4.name);
console.log(c4.hobby);
c4.say();

console.log(Child.prototype.constructor);//[Function: Child]   
console.log(Parent.prototype.constructor);//[Function: Child]    使得Parent的构造函数指向也出了问题