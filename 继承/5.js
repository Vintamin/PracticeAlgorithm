/* 5.完美组合继承 (完美方式)
 */

function Parent(name){
    this.name =name;
    this.arr =[1];
}

Parent.prototype.say =function(){
    console.log('我是父类原型上定义的方法');
}

function Child(hobby,name){
    this.hobby =hobby;
    Parent.call(this,name);
}

// 核⼼ 通过创建中间对象，⼦类原型和⽗类原型，就会隔离开。不是同⼀个啦，有效避免了⽅式4的缺点。
Child.prototype =Object.create(Parent.prototype);
Child.prototype.constructor =Child;

let c5 = new Child('篮球','康康');

console.log(c5.name);
console.log(c5.hobby);
c5.say();
console.log(Child.prototype.constructor);//[Function: Child]  
console.log(Parent.prototype.constructor);//[Function: Parent]  
