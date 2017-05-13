<template>
  <div>
  	<loading v-show='loadingShow'></loading>
  	<NavView v-show="headerShow"></NavView>
  	<!--keep-alive  保存现在的状态,不在去请求数据-->
  	<transition name="slider-down">
  		<keep-alive>
	  			<router-view></router-view>
	  	</keep-alive>
  	</transition>
  	<!--<HomeView></HomeView>-->
		<FooterView></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import HomeView from './components/Home.vue'
import FooterView from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
	computed:mapGetters([
		'headerShow',
		'loadingShow'
	]),
	components:{
			NavView,
			HomeView,
			FooterView
		},
		watch:{
			$route(to,from){
			console.log(to.path+"-----"+from.path);
				if(to.path=='/user-info'){
					//这个store来自main.js,main.js的store来自store下的index,js,这里需要导出store
						//通知actions
						this.$store.dispatch('hideHeader')
				}else{
					this.$store.dispatch('showHeader')
				}
			}
		},
		mounted(){
		},
		methods:{
			
		}
}
</script>

<style>
	@import url("../static/assets/css/base.css");
	@import url("../static/assets/css/index.css");
	.slider-down-enter-active{
			transition: .4s all ease;
		opacity: 0.5;
		transform: translate3d(0,2em,0);
	}
	.slider-down-leave-active{
	
	}
	.slider-down-enter{
			opacity: 1;
		transform: translate3d(0,2em,0);
	}
	.slider-down-leave{
	
	}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
