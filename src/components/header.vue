<template>
	<div id="header">
		<mt-header :title="headerTitle">
	      <router-link to="" slot="left" v-show="backshow" :show="backshow">
	        <mt-button>
			  		<img src="../assets/img/icon/back.png" class="back_img" slot="icon" width="20" height="20" @click="$router.go(-1)">
					</mt-button>
	      </router-link>
        <mt-button slot="right" v-show="show" :show="show">
				  <img src="../assets/img/icon/person.png" class="per_img" slot="icon" width="20" height="20" @click="$router.push('/person')">
				</mt-button>
	    </mt-header>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Header } from 'mint-ui'
	Vue.use(Header)

	export default {
	  name: 'Header',
	  data () {
	    return {

	    }
	  },
	  props:{
	  	headerTitle: String,
	  	show: Boolean,
	  	backshow: Boolean
    }
	}
</script>

<style scoped>
#header{
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 20;
}
/deep/ .mint-header{
	height: 88px;
	background: #fff;
	font-size: 32px;
	color: #333;
	padding: 0 20px;
}
/deep/ .mint-header .mint-header-title{
	padding: 5px 0;
	overflow: visible;
}
/*.back_img{
	width: 45px;
	height: 45px;
}
.per_img{
	width: 48px;
	height: 48px;
}*/
</style>
