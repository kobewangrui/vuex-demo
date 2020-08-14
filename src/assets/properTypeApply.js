// es5 继承   
function Animal(name){//构造方法
    this.name = name || 'names';
    this.sleep = function(){
        console.log('sleep Fun')
    }
}

Animal.prototype.eat = function(){//原型添加方法
    console.log('ead Fun')
}
console.log(Animal === Animal.prototype.constructor)//true

// 1.原型链继承
function Cat(){}
Cat.prototype = new Animal();//给Cat的原型指向 Animal 的实例
let scat = new Cat();//实例化子类
scat.sleep()
console.log(scat.__proto__ === Cat.prototype)//true
console.log(Animal === Cat.prototype.constructor)//true

// 2.构造继承
// function Cat(){
//     Animal.call(this);//用call\bind\apply改变this指向
//     this.name = '打垂'
// }
// let cat = new Cat();
// cat.sleep();
// console.log(cat.name);//打垂


// class ParClass{//每个class都有一个构造器constructor 不写，也会默认生成
//     constructor(){
//         this.name = 'wangdachui';
//         this.sex = 'boy';
//     }
//     parFun(){
//         console.log(this.name)
//     }
// }
// let a = new ParClass();//实例化
// a.parFun();
// class ChildClass extends ParClass{
//     constructor(){
//         super()//ES6 要求，子类的构造函数必须执行一次super函数,执行了super()才能使用this。
//         console.log(this)//this指向childClass
//     }
//     funSmall(){
//         console.log(this);//
//     }
// }
// let b = new ChildClass();
// b.parFun();
// b.funSmall();

