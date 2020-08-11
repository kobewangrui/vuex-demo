<template>
  <div>
    <div id="printTest">
        <b>王睿龙的第一个vuex状态count:{{$store.state.count}}</b>
        <button @click="$store.commit('add',10)">mutations同步修改：count add</button>
        <button @click="$store.commit('reduce',10)">mutations同步修改：count reduce</button>
        <br>
        <button @click="addAction(1000)">actions异步修改：count add</button>
        <button @click="reduceAction(1000)">actions异步修改：count reduce</button>
      </div>
      <button v-print="'#printTest'">打印111111111111111111111111</button>
      <button v-print="'#printTest'">2222222222222222222</button>
      <button v-print="'#printTest'">3333333333333333333333</button>
      <img src="@/assets/logo.png">
      <button @click="changeNumber">watch|computed区别</button>
      computed：会有缓存（只会基于数值变化,刷新不调用）、用于多个数据的变化影响一个数据、会有getter   依赖数据变化而计算、改变  ---------和method（刷新会调用）需要主动调用，
      watch:  监听数据、数据变化引发一些操作，类似一个数据的变化，触发一系列的操作或者影响多个数据
	  <p>computed：{{change}}</p>
	  <p>wath：{{computedORwatch}}</p>
      <!-- pdf预览 -->
      <!-- <pdf ref="pdf" :src="pdfUrl" style="width: 100%;"></pdf> -->
	  
      <button @click="changeHello">父组件改变helloData：changeHelloData</button>
      hello子组件组件：
      <hello :parentData="helloData" @emitFun="parentFun"/>
	  子=>父数据：{{childData}}
  </div>
</template>
<script>
// import pdf from 'vue-pdf'
import Hello from '@/components/HelloWorld'
export default {
  name: 'app',
  data(){return{
    pdfUrl:'',
	computedORwatch:1,
	helloData:1,
	childData:'',
  }},
  created(){
    this.$store.commit('reduce',10);
    this.reduceAction(10);
    // this.pdfUrl = pdf.createLoadingTask(pdfurl)
  },
  components:{
      // pdf:pdf
  },
  methods:{
	  parentFun(childMsg){
		  this.childData = childMsg;
		  alert(childMsg)
	  },
	changeHello(){
		this.helloData++;
	},
    addAction(n){
      this.$store.dispatch('addAction',n);
    },
    reduceAction(n){
      this.$store.dispatch('reduceAction',n);
    },
	changeNumber(){
		this.computedORwatch += 10;
	},
  },
  components:{
      'hello':Hello,
  },
  computed:{
	  change(){
		  return this.computedORwatch + 1;
	  },
  },
  watch:{
	  'computedORwatch':function(val,oldVal){
		  val + 1
	  }
  }
}
</script>