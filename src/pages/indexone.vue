<template>
<div>

</div>
</template>
<script>
// 应当直接在 Object 构造器对象上调用此方法，而不是在任意一个 Object 类型的实例上调用。
//vue双向绑定原理  数据劫持 结合 发布订阅模式
// 核心： object.defineProperty 

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
    console.error(obj)
    Object.defineProperty(obj,'a',{
        get(value){
            console.warn('获取');
            return value
        },
        set(value){
            console.warn('设置')
            value = value
        }
    });
    obj.a = 6;
    obj.a;



    // 关于prototype和__proto__
        class Person{

        }
        var wrl = new Person()
        console.warn(Person.prototype)//class的原型
        console.warn(wrl.__proto__)//实例获取class的原型
        console.warn(Person.prototype===wrl.__proto__)//true




</script>