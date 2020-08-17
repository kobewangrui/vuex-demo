<template>
  <div id="app">
      <router-link to="/pageOne" tag="h5">跳转indexone</router-link>
      <router-link to="/pageTwo" tag="h5">跳转indexTwo</router-link>
      <router-view/>
  </div>
</template>
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
