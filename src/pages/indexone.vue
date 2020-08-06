<template>
<div>

</div>
</template>
<script>
// 应当直接在 Object 构造器对象上调用此方法，而不是在任意一个 Object 类型的实例上调用。
//vue双向绑定原理  数据劫持 结合 发布订阅模式
// 核心： object.defineProperty 

    let obj = {
        a:1,
    }
    Object.defineProperty(obj,'a',{
        value:17,
    });
    console.error(obj)
    Object.defineProperty(obj,'a',{
        get(val){
            console.warn('获取');
            return value
        },
        set(val){
            console.warn('设置')
            val = val
        }
    });
    obj.a = 6;
    obj.a;





export default {
    data(){
        return{

        }
    },
}
</script>

<style>

</style>