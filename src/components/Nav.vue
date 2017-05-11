<template>
	<div class="nav">
		<ul>
	    	<!--<li class="active"><a href="javascript:;">首页</a></li>
	    	<li><a href="javascript:;">关注</a></li>
	    	<li><a href="javascript:;">栏目</a></li>-->
			<router-link to="/home" tag="li">
				<a href="javascript:;">首页</a>
			</router-link>
			<router-link to="/follow" tag="li">
				<a href="javascript:;">关住</a>
			</router-link>
			<router-link to="/column" tag="li">
				<a href="javascript:;">栏目</a>
			</router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		//name:'nav'
	}
</script>
<style type="text/css">
	.nav ul li.router-link-active a {
	    height: 0.5rem;
	    border-bottom: 0.1rem solid #5477b2;
	    color: #5477b2;
	}
</style>