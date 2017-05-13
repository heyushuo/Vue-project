<template>
	<div>
		<div class="content mt30">
		    <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in arrList">
		            	<a href="conText.html">
		                    <h2>{{item.title}}</h2>
		                    <p>{{item.detail}}</p>
		                </a>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.fetchData();
		},
		data(){
			return {
				arrList:[]
			}
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get("static/data/follow.data").then((res)=>{
					console.log(res)
					_this.arrList=res.data;
				}).catch(function(){
					alert("error")
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.mt30{
		margin-top: 30px;
	}
</style>