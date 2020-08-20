<template>
  <div class="hello">
    child components
    <p>helloData:{{parentData}}</p>
    <span @click="parentFunRun">子组件内父组件方法运行</span>
	<h1 style="color:red;">mapState:{{newcount}}</h1>
	<h1 style="color:green;">mapGetters:{{newGettersConut}}</h1>
	<button @click="addAction(10)">mapActions:addAction</button>
	<button @click="reduceAction(10)">mapActions:reduceAction</button>
	<button @click="add(10)">mapMutations:add</button>
	<button @click="reduce(10)">mapMutations:reduce</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'//方便调用不用再使用this.$store.state之类的。直接可以'本地化',this.调用
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
	  ...mapGetters({newGettersConut:'gettersConut'}),
	//   ...mapGetters({newGettersConut:state=>state.gettersConut+10}),
	//   ...mapGetters(['gettersConut']),
	  ...mapState({newcount:'count'}),
	//   ...mapState({newcount:state=>state.count+10}),
	//   ...mapState(['count']),
  },
  methods:{
	...mapActions(['addAction','reduceAction']),
	...mapMutations(['add','reduce']),
    // ...mapMutations({
    //   newAdd: 'add' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // }),
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
