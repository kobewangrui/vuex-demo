<template>
  <div id="app">
    <img src="./assets/logo.png">
    <b>王睿龙的第一个vuex状态count:{{$store.state.count}}</b>
    <button @click="$store.commit('add',10)">mutations同步修改：count add</button>
    <button @click="$store.commit('reduce',10)">mutations同步修改：count reduce</button>
    <br>
    <button @click="addAction(1000)">actions异步修改：count add</button>
    <button @click="reduceAction(1000)">actions异步修改：count reduce</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){return{}},
  created(){
    console.log(this.$store.commit)
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
