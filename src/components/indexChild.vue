<template>
<div>
    -------------------------- indexchild page -------------------------------
    再child显示fatherData:{{propsData}}
    <span @click="runFaterFun">点我调用父组件方法、子=>传值</span>
</div>
</template>
<script>
    export default{
        data(){
            return{
                childNum:1111111,
                msg:'',
            }
        },
        created(){
            this.deepCloneFun()//深拷贝、浅拷贝区别
            this.destructuringFun()//赋值解构
        },
        methods:{
            destructuringFun(){
                let [a,b,c] = [1,2,3];
                let [...number] = [3,2,1,4,5,6]
                console.log(a,b,c)
                console.log(number)
                let res = {
                    data:{
                        detail:{
                            a:1,
                            b:2,
                        }
                    }
                }
                let {
                    detail
                } = res.data
                let {
                    data
                } = res
                console.log(JSON.stringify(detail))
                console.log(JSON.stringify(data))
            },
            deepCloneFun(){
                let a = {
                    b:3,
                    c:{
                        d:1,
                    }
                }

                // 深拷贝与浅拷贝定义概念理解
                // 深拷贝指单独开辟另外一块内存空间（新的引用类型），两者值的修改互不影响
                // 浅拷贝并没单独开辟内存空间，两者值的修改会导致另一方改变，指针指向同一块内存地址（没有新的引用类型）


                // let b = a;//简单的赋值指针还是指向a，修改值相互影响
                let b = Object.assign({},a);//对象第一层是深拷贝（第一层值改变相互不会相互影响），第二层是是浅拷贝（对象第二层值改变会相互影响）
                // let b = JSON.parse(JSON.stringify(a));//深拷贝  开辟一块新的内存空间，并非引用。各自修改互不影响
                b.c.d = 4
                b.b = 10
                
                console.log(JSON.stringify(a))
                console.log(JSON.stringify(b))
            },
            runFaterFun(){
                this.$emit('emitFuns',this.childNum)
            },
        },
        props:['propsData'],
        watch:{
            'propsData':function(val,oldVal){
                alert('在子组件监听到父组件props数据在变化')
            }
        },
    }
</script>
