<template>
<div>

</div>
</template>
<script>
export default{}
// 应当直接在 Object 构造器对象上调用此方法，而不是在任意一个 Object 类型的实例上调用。
//vue双向绑定原理  数据劫持 结合 发布订阅模式
// 核心： Object.defineProperty 

// defineProperty 接收三个参数
// object （必须有  操作的对象本身 这个很容易理解不传它操作谁？）
// propertyname (必须有 属性名 添加修改属性得有属性名)
// descriptor （必须有 官方说的我理解不了，我理解的是 属性描述

// 1、简单点就是 设置属性的值value，
// 2、是否可操作属性值 writable，
// 3、是否可修改配置configurable
// 如果值为false descriptor内的属性都不可操作
// 4、是否可枚举enumerable

    let obj = {
        a:1,
    }
    Object.defineProperty(obj,'a',{
        value:17,
    });
    console.warn(obj)
    Object.defineProperty(obj,'a',{
        get(value){
            console.warn('获取',value);
            return value
        },
        set(value){
            console.warn('设置',value)
            value = value
        }
    });
    obj.a = 6;
    obj.a


    // 所有对象的__proto__都指向其构造器的prototype
    // 关于prototype和__proto__
        class Person{
            constractor(x,y){
                this.x = x;
                this.y = y;
            }
            reverse(){
                return x.reverse;
            }
        }
        var wrl = new Person(10,20)
        console.warn(Person.prototype)//class的原型
        console.warn(wrl.__proto__)//实例获取class的原型
        console.warn(Person.prototype===wrl.__proto__)//true


        Promise.resolve(1).then().then((res)=>{
            console.warn('promise',res);//1
        })


        // es6 proxy双向数据绑定实现
        let targetObj = {
            name:'wrl',
            age:33,
        }
        // 参数详解
        // get(target, propKey, receiver)
        // target：目标对象
        // propKey：属性名
        // receiver（可选）：proxy 实例本身（严格地说，是操作行为所针对的对象


        // set(target, propKey, value, receiver)
        // target：目标对象
        // propKey：属性名
        // value：属性值
        // receiver（可选）：Proxy 实例本身
        let target = new Proxy(targetObj,{//不申明，报target is not defined  
            get(targetObj,key){
                console.log('get',key)
                return targetObj[key]
            },
            set(targetObj,key,value){
                console.log('set',key)
                targetObj[key] = value
                return true//不加会报错
            },
        })
        target.age = 6
        target.age

        // proxy 举例
        // var target = {
        //     name: 'poetries'
        // };
        // var logHandler = {
        //     get: function(target, key) {
        //         console.log(`${key} 被读取`);
        //         return target[key];
        //     },
        //     set: function(target, key, value) {
        //         console.log(`${key} 被设置为 ${value}`);
        //         target[key] = value;
        //     }
        // }
        // var targetWithLog = new Proxy(target, logHandler);
        
        // targetWithLog.name; // 控制台输出：name 被读取
        // targetWithLog.name = 'others'; // 控制台输出：name 被设置为 others
        
        // console.log(target.name); // 控制台输出: others

</script>