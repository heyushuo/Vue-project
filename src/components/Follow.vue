<template>
	<div class="newsList mt30">
    	<ul>
            <li v-for="(item,index) in arrList">
            	<a href="conText.html">
                    <h2>关住</h2>
                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
	export default{
		mounted(){
			this.fetchData()
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
		}
	}
</script>
<style scoped>
	.mt30{
		margin-top:30px;
	}
</style>
<!--<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item, index) in arrList">
	            	<a href="javascript:;">
	                    <h2>{{index+1}} .{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	            
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('src/data/follow.data').then(function(res){
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
	.mt40{
		margin-top:40px;
	}
</style>-->