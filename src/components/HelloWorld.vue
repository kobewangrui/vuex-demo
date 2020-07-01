<template>
  <div class="hello">
    child components
    <p>helloData:{{parentData}}</p>
    <span @click="parentFunRun">子组件内父组件方法运行</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    parentFunRun(){
      this.$emit('emitFun','我是子组件传过来的数据啊');
    },
  },
  watch:{
    'parentData':function(val,oldVal){
      console.log('change')//再子组件可以监听父组件props传值的改变
    }
  },
  props:['parentData'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
