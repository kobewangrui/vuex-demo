<template>
<div>
    三次握手的目的：是为了确认双方都有收发数据的能力。（参考前后端【客户端、服务端】交互）
        第一次： A->B，A发送消息给B,证明A有发消息的能力。
        第二次： ->B && B->A，b收到消息并发给A,证明B有收消息，并且有发消息的能力。
        第三次： A->B，a收到消息，证明A有收消息的能力。
        二次握手达不到目的，四次多余。



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
