// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'//引入store
import '@/assets/asyncFun'//关于promise 和async await
import '@/assets/properTypeApply'//关于原型链继承
import Print from 'vue-print-nb'
Vue.use(Print); //注册
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//添加store对象
  template: '<App/>',
  components: { App }
})
