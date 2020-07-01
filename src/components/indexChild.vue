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
            }
        },
        methods:{
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
