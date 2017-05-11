<template>
	<div>
		<div class="content">
			<BannerView></BannerView>
		    <div class="newsList">
		    	<ul>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		            <li>
		            	<a href="conText.html">
		                    <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
		                    <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
		                </a>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>

<script>
	import BannerView from './Banner.vue'
	export default{
		components:{
			BannerView
		},
		mounted(){
			this.slider();
		},
		methods:{
			slider(){
					$(function (){
						var mySwipe=Swipe($('.banner')[0],{
							auto:2000,
							continuous:true,
							stopPropation:true,
							callback:function (index,element){
								$('.banner ol li').removeClass('active');
								$('.banner ol li').eq(index).addClass('active');
							}
						});
					});
			}
		}
	}
</script>

<style>
</style>