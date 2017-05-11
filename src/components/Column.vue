<template>
	<div class="newsList mt30">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" >
			<ul>
	            <li v-for="(item,index) in arrList">
	            	<a>
	                    <h2>{{index+1}}.{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	        </ul>
		</mt-loadmore>
		<!--<mt-badge size="small">30</mt-badge>
		<mt-badge size="normal">10</mt-badge>
		<mt-badge size="large">10</mt-badge>
		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search>
		{{value}}-->
    	
    </div>
</template>
<script>
	export default {
		mounted(){
			this.fetchData()
		},
		data(){
			return {
				arrList:[],
				value:"",
				allLoaded:false
			}

		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http("static/data/index.data").then(function(res){
					res.data.forEach(function(arr){
						_this.arrList.push(arr);
					})
				}).catch(function(){
					alert("error")
				})
			},
			loadTop(id) {
			  // 加载更多数据
			  this.$broadcast('onTopLoaded', id);
			},
			loadBottom(id) {
			  // 加载更多数据
			  this.allLoaded = true;// 若数据已全部获取完毕
			  this.$broadcast('onBottomLoaded', id);
			}
		}
	}
</script>
<style scoped>
	.mt30{
		margin-top:30px;
	}
</style>