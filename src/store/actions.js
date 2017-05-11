export default{
	showHeader:({commit})=>{
		//提交到mutations.js里
		commit('showHeader')
	},
	hideHeader:({commit})=>{
		commit('hideHeader');
	},
	showLoading:({commit})=>{
		commit('showLoading');
	},
	hideLoading:({commit})=>{
		commit('hideLoading');
	}
}
