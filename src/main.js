// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './components/store/'
Vue.use(VueRouter);


const router=new VueRouter({
		mode: 'history', //切换路径模式，变成history模式
  	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
		routes:routerConfig  //如果只写一个单词相当于routes:routes
})
//require('./.css');
//require('./.js');   在这里引入的都是全局引入,,,相当于在index页面直接引入
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
