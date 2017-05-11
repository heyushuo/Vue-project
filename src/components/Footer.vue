<template>
	<div class="foot-btn">
		<ul>
	    	<!--<li class="home"><a href="index.html"></a></li>
	        <li class="write"><a href="javascript:;"></a></li>
	        <li class="my"><a href="mydoc.html"></a></li>-->
	        <router-link tag="li" to="/home" class="home">
	        	<a href="javascript:;"></a>
	        </router-link>
	        <router-link tag="li" to="/column" class="write">
	        	<a href="javascript:;"></a>
	        </router-link>
	        <router-link tag="li" to="/userinfo" class="my">
	        	<a href="javascript:;"></a>
	        </router-link>
	    </ul>
	</div>
</template>