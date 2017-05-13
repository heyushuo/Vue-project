// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js' //路由
import store from './components/store/'  //vuex
import axios from 'axios'
import Loading from './components/loading'
import filters from './filters/index.js'
console.log(filters)
//创建全局的filters
//循环遍历所有的过滤器
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));

//require("../static/assets/js/font.js");
//require("../static/assets/js/jquery-1.7.2.js");
//require("../static/assets/js/swipe.js");



//Vue.use(axios)  不能用use
Vue.use(VueRouter);
Vue.use(Loading);

//关于axios的一些配置

//axios的配置相关的
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading');  
  return config;
}, function (error) {
  return Promise.reject(error);
});
//----------------------------------------------------------------------------------------------------------------------------------------------
//                   axios  axios
//----------------------------------------------------------------------------------------------------------------------------------------------
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading');
  return response;
}, function (error) {
  return Promise.reject(error);
});

//设置默认头部信息,在post请求时需要用到          设置post头部信息
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/


axios.defaults.baseURL='http://localhost:8080/';  //设置访问的根路径
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//                   axios  axios
//--------------------------------------------------------------------------------------------------------------------------------------------------------

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
