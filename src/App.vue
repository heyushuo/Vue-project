<template>
	<div id="app">
		<NavView v-show="headShow"></NavView>
		<loading v-show="loading"></loading>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!--<HomeView></HomeView>需要替换为router-view-->
		<FooterView></FooterView>
	</div>
</template>
<script>
	import NavView from './components/Nav.vue'
//	import HomeView from './components/Home.vue'
	import FooterView from './components/Footer.vue'
	import {mapGetters,mapActives} from 'vuex'
	export default{
		computed:mapGetters([
			'headShow',
			'loading'
		]),
		watch:{
			'$route'(to,form){
				if(to.path=="/userinfo"){
					//发送到actions,js里接受数据
					this.$store.dispatch('hideHeader');	
				}else{
					this.$store.dispatch('showHeader');	
				}
			}
		},
		components:{
				NavView,
//				HomeView,
				FooterView
			}	
	}
</script>
<style scoped>
	@import './assets/css/index.css';
</style>