import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {//在state可以添加全局共享的状态，
    count:1
}
const mutations = {//mutations是固定的写法，用来改变state的值的放假，需要写在其中。
    add(state,n){
        state.count += n;
    },
    reduce(state,n){
        state.count -= n;
    }
}
export default new Vuex.Store({
    state,
    mutations,
})