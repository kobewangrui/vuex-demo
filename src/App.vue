<template>
  <div id="app">
    <img src="./assets/logo.png">
    <b>王睿龙的第一个vuex状态count:{{$store.state.count}}</b>
    <button @click="$store.commit('add')">count add</button>
    <button @click="$store.commit('reduce')">count reduce</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
