// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//路由对象
import routerConfig from './router/index.js'
import store from './store/index.js'
import axios from 'axios'

//正在加载中
import loading from './components/loading'

//饿了吗mui插件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);




//全局引入css
require("./assets/css/base.css");
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(loading);


//axios的配置相关的
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading');  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading');
  return response;
}, function (error) {
  return Promise.reject(error);
});

//设置默认头部信息,在post请求时需要用到          设置post头部信息
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/


//axios.defaults.baseURL='http://localhost:8089/';  //设置访问的根路径
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了



const router=new VueRouter({
		mode: 'history', //切换路径模式，变成history模式
  	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
		routes:routerConfig
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
