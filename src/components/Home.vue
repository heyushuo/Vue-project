<template>
	<div class="content">
	<SliderView></SliderView>
    <div class="newsList">
    	<ul>
            <li v-for="(item,index) in arrList">
                <router-link :to="'/article/'+item.id">
                	<a>
	                    <h2>{{index+1}}.{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
                </router-link>
            </li>
        </ul>
    </div>
</div>

</template>
<script>
	import SliderView from './Slider.vue'
	export default{
		mounted(){
			this.fetchData();
			//this.ceshiData();
		},
		components:{
			SliderView
		},
		data(){
			return{
				arrList:[]
			}
		},
		methods:{
			fetchData(){
				var _this=this;
				//因为数据在数组里,需要用forEarch循环遍历把数据在放到数组里边
				this.$http.get('static/data/index.data').then(function(res){
					res.data.forEach(function(arr){
						_this.arrList.push(arr);
					})
				}).catch(function(error){
					alert('error');
				});
			}
//			,
//			ceshiData(){
//				this.$http.get('api/gongan/app/user/doSelectUser.do?userId=1').then(function(res){
//					alert("测试数据获取成功")
//				}).catch(function(error){
//					alert('测试数据获取失败');
//				});
//			}
		}
	}
</script>
<!--<template>
	<div class="content">
		<Slider></Slider>
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList">
	                <router-link :to="'/article/'+item.id">
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
			//获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('src/data/index.data').then(function(res){
					//console.log( res.data);
					//setTimeout(function(){
						_this.arrList=res.data;
					//},1000);
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}

</script>
<style scoped>
	@import '../assets/css/index.css';
</style>-->