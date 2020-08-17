<template>
  <div id="app">
      <router-link to="/pageOne" tag="h5">跳转indexone</router-link>
      <router-link to="/pageTwo" tag="h5">跳转indexTwo</router-link>
      <router-view/>
<<<<<<< HEAD
      </div>
      <button v-print="'#printTest'">打印</button>
      <img src="./assets/logo.png">
	  <div class="pdf" v-show="fileType === 'pdf'">
    <p class="arrow">
    <!-- // 上一页 -->
    <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">Preview</span>
    {{currentPage}} / {{pageCount}}
    <!-- // 下一页 -->
    <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">Next</span>
    </p>
    <!-- // 自己引入就可以使用,这里我的需求是做了分页功能,如果不需要分页功能,只要src就可以了 -->
    <pdf
      :src="src" 
      :page="currentPage" 
      @num-pages="pageCount=$event" 
      @page-loaded="currentPage=$event" 
      @loaded="loadPdfHandler"> 
    </pdf>
  </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'app',
  data(){return{
    currentPage: 0, // pdf文件页码
    pageCount: 0, // pdf文件总页数
    fileType: 'pdf', // 文件类型
　　　　　src: '', // pdf文件地址
  }},
  components: {pdf},
  created(){
    this.$store.commit('reduce',10);
	this.reduceAction(10);
　　　　// 有时PDF文件地址会出现跨域的情况,这里最好处理一下
　　　　this.src = pdf.createLoadingTask(this.src)
  },
  methods:{
	    changePdfPage (val) {
        // console.log(val)
        if (val === 0 && this.currentPage > 1) {
          this.currentPage--
          // console.log(this.currentPage)
        }
        if (val === 1 && this.currentPage < this.pageCount) {
          this.currentPage++
          // console.log(this.currentPage)
        }
      },

      // pdf加载时
      loadPdfHandler (e) {
        this.currentPage = 1 // 加载的时候先加载第一页
      },
    addAction(n){
      this.$store.dispatch('addAction',n);
    },
    reduceAction(n){
      this.$store.dispatch('reduceAction',n);
    }
  }
}
</script>

=======
  </div>
</template>
>>>>>>> homebranch
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
