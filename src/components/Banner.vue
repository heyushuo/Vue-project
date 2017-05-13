<template>
	<div>
		<div class="banner">
		        <ul class="clearfix">
		            <li><img src="../../static/assets/images/img_1.jpg" alt=""/>
		            	<div class="text-box">
		                	<h2>还可以降低首付款健身房11111</h2>
		                    <p>刘德华11 / 文</p>
		                </div>
		            </li>
		            <li><img src="../../static/assets/images/img_2.jpg" alt=""/>
		            	<div class="text-box">
		                	<h2>还可以降低首付款健身房2222</h2>
		                    <p>刘德华22 / 文</p>
		                </div>
		            </li>
		            <li><img src="../../static/assets/images/img_3.jpg" alt=""/>
		            	<div class="text-box">
		                	<h2>还可以降低首付款健身房333</h2>
		                    <p>刘德华33 / 文</p>
		                </div>
		            </li>
		        </ul>
		        <ol>
		            <li class="active"></li>
		            <li></li>
		            <li></li>
		        </ol>
		    </div>		
	</div>
</template>
<script>
	export default{
	mounted(){
		//数据加载完后调用,相当于ready()
		this.slider();
	},
	methods:{
		slider(){
			//必须放到$(function(){})里边
				$(function(){
					var mySwipe=Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				})
		}
	}
}
</script>

<style>
</style>