import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {//在state可以添加全局共享的状态，
    count:1
}
const mutations = {//mutations是固定的写法，用来改变state的值的放假，需要写在其中。同步修改state状态
    add(state,n){
        state.count += n;
        console.log('立即执行的mutations/actions add');
    },
    reduce(state,n){
        console.log('立即执行的mutations/actions reduce');
        state.count -= n;
    }
}
const actions = {//actions和mutations功能一样，不同得是actions是异步修改该state状态，actions提交的是multation而不是直接更改状态
    addAction(context,n){
        // 这里可以写点异步取数据等操作，例如ajax取数据、vue-resource取数据
        setTimeout(()=>{
            console.log('异步 action add');
            context.commit('add',n);//actions是可以调用mutations里面的方法的
        },n)
    },
    reduceAction(context,n){
        setTimeout(()=>{
            console.log('异步 action reduce');
            context.commit('reduce',n);
        },n)
    },
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
})



    // Action通过store.dispatch方法触发
    // store.dispatch('addAction')
    this['a'].dispatch('addAction',10);//context即是store(在当前页面立即执行的actions)


    // mutations方法触发
    this['a'].commit('add',10);






// 关于分割模块的做法
// const moduleA = {
//     state:{},
//     mutations:{},
//     actions:{}
// }
// const moduleB = {
//     state:{},
//     mutations:{},
//     actions:{}
// }

// const store = new Vuex.Store({
//     modules:{
//         a:moduleA,
//         b:moduleB
//     }
// })


// store.state.a//取a的状态
// store.state.b//取b的状态

