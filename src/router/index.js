import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/vuex/store'//引入store

Vue.use(Router)
store.dispatch('addAction',10)//在其他(这里就指的是路由页面)页面立即执行的actions
store.commit('add',100);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
