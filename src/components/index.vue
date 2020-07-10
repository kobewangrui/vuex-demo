<template>
<div>
    三次握手的目的：是为了确认双方都有收发数据的能力。（参考前后端【客户端、服务端】交互）
        第一次： A->B，A发送消息给B,证明A有发消息的能力。
        第二次： ->B && B->A，b收到消息并发给A,证明B有收消息，并且有发消息的能力。
        第三次： A->B，a收到消息，证明A有收消息的能力。
        二次握手达不到目的，四次多余。




            浏览器输入URL后发生了什么？简约
            1.浏览器向DNS服务器查找输入URL对应的IP地址。
            2.DNS服务器返回网站的IP地址。
            3.浏览器根据IP地址与目标web服务器在80端口上建立TCP连接
            4.浏览器获取请求页面的html代码。
            5.浏览器在显示窗口内渲染HTML。
            6.窗口关闭时，浏览器终止与服务器的连接。

            1.浏览器向dns服务器查询url对象的ip地址
            2.dns返回ip地址
            3.浏览器根据ip地址与目标服务器在80端口建立tcp链接
            4.浏览器获取html代码
            5.浏览器小渲染html
            6.窗口关闭时，浏览器终止与服务器对的链接



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
