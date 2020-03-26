<template>
  <div id="app">
    <div id="printTest">
      <b>王睿龙的第一个vuex状态count:{{$store.state.count}}</b>
      <button @click="$store.commit('add',10)">mutations同步修改：count add</button>
      <button @click="$store.commit('reduce',10)">mutations同步修改：count reduce</button>
      <br>
      <button @click="addAction(1000)">actions异步修改：count add</button>
      <button @click="reduceAction(1000)">actions异步修改：count reduce</button>
      <router-view/>
      </div>
      <button v-print="'#printTest'">打印111111111111111111111111</button>
      <button v-print="'#printTest'">2222222222222222222</button>
      <button v-print="'#printTest'">3333333333333333333333</button>
      <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){return{}},
  created(){
    this.$store.commit('reduce',10);
    this.reduceAction(10);
  },
  methods:{
    addAction(n){
      this.$store.dispatch('addAction',n);
    },
    reduceAction(n){
      this.$store.dispatch('reduceAction',n);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
