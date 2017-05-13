<template>
	<div>
		<div class="content mt30">
		    <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in arrList">
		            	<a href="conText.html">
		                    <h2>{{item.title}}</h2>
		                    <p>{{item.content}}</p>
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
			this.fenchData();
		},
		data(){
			return {
				arrList:[]
			}
		},
		methods:{
			fenchData(){
				var _this=this;
				this.$http.get("static/data/article.data").then((res)=>{
					_this.arrList=res.data;
				}).catch(()=>{
					alert("error")
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.mt30{
		margin-top:30px;
	}
</style>