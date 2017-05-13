<template>
	<div>
		<div class="content">
			<BannerView></BannerView>
		    <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in arrList">
		            	<!--<a href="conText.html">
		                    <h2>{{index+1}}.{{item.title}}</h2>
		                    <p>{{item.detail}}</p>
		                </a>-->
		                <!-- :to 一定要加:冒号,要变成属性才能进行字符串链接-->
		                <router-link :to="'/article/'+item.id">
		                	<h2>{{index+1}}.{{item.title}}</h2>
		                    <p>{{item.detail}}</p>
		                </router-link>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>

<script>
	import BannerView from './Banner.vue'
	export default{
		data(){
			return{
				arrList:[]
			}
		},
		components:{
			BannerView
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				//默认是根目录下的
				//静态资源放在src下请求会失败
				//最好把静态资源放到static文件夹下
				var _this=this;
				this.$http.get("static/data/index.data").then(function(res){
					_this.arrList=res.data;
				}).catch(function(err){
					alert("error")
				})
			}
		}
	}
</script>

<style>
</style>