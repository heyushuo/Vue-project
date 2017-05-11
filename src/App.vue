<template>
  <div>
  	<NavView v-if="true"></NavView>
  	<router-view></router-view>
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
//	computed:mapGetters([
//		'headerShow'
//	]),
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
						this.$store.dispath('showHeader')
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
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
