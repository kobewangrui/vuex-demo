<template>
<div>
    -------------------------- index page -------------------------------
    <indexchilds :propsData="fatherData" @emitFuns="parentMethods"></indexchilds>
    <span @click="changeFatherData">改变fatherData</span>
</div>
</template>
<script>
import indexChild from '@/components/indexChild'
    export default{
        data(){
            return{
                fatherData:11111,

            }
        },
        methods:{
            parentMethods(msg){
                this.fatherData = msg;
                alert(`我是父组件的方法啊,并且还有子组件传递的参数:${msg}`)
            },
            changeFatherData(){
                this.fatherData ++
            },

        },
        components:{
            'indexchilds':indexChild
        }
    }
</script>
