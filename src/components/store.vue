<template>
	<div id="store">
		<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<app-banner :swipeList="swipeList" :vipShow="vip"></app-banner>
		<div class="store_content">
	      <div class="container">
	      	<form class="search_box">
		        <div class="sleft"><input type="text" name="search" placeholder="搜律所，律师" autocomplete="off"></div>
		        <div class="sright"><img src="../assets/img/icon/search_w.png"></div>
	      	</form>
		      <div class="lawyer">
		      	<lawyer-item :list="lawyer_list"></lawyer-item>
		      </div>
	      </div>
		</div>
    <dsFooter :selected="selected"></dsFooter>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import dsFooter from '@/components/footer'
import comBanner from '@/components/common/banner'
import comItem from '@/components/common/item'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe).use(SwipeItem)

export default{
	data(){
		return{
			headerTitle: "商城",
			backshow: false,
			show: true,
			vip: true,
			selected: "store",
			swipeList:[{
				href: "",
				img: require("../assets/img/swipe_img1.jpg")
			},{
				href: "",
				img: require("../assets/img/swipe_img1.jpg")
			},{
				href: "",
				img: require("../assets/img/swipe_img1.jpg")
			},{
				href: "",
				img: require("../assets/img/swipe_img1.jpg")
			},{
				href: "",
				img: require("../assets/img/swipe_img1.jpg")
			}],
			lawyer_list:[{
				background:require("../assets/img/store_img1.png"),
				nums: 300,
				company:"华翌法律咨询有限公司",
				info:"华翌和你一起探讨和解决法律问题.",
				name:"Alexander",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼..."
			},{
				background:require("../assets/img/store_img1.png"),
				nums: 300,
				company:"华翌法律咨询有限公司",
				info:"华翌和你一起探讨和解决法律问题.",
				name:"Alexander",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			}]
		}
	},
	components:{
		dsHeader,
    	dsFooter,
		'app-banner':comBanner,
		'lawyer-item':comItem
	}
}
</script>

<style scoped>
	#store{
    padding: 88px 0 98px;
	}
	/deep/ .mint-swipe-indicator{
		width: 16px;
		height: 16px;
		margin-right: 10px;
		border-radius: 50%;
		background: rgba(255,255,255,.51);
		opacity: 1;
	}
	/deep/ .mint-swipe-indicator:last-child{
		margin-right: 0;
	}
	/deep/ .mint-swipe-indicator.is-active{
		background: rgba(255,255,255,1);
	}

	.search_box{
		margin: 15px 0 30px;
		background: #e3e4e6;
		border-radius: 10px;
		overflow: hidden;
		box-sizing: border-box;
	}
	.search_box .sleft{
		width: 84%;
		float: left;
		padding: 15px 0 15px 30px;
		box-sizing: border-box;
	}
	.search_box .sleft input{
		width: 100%;
	}
	.search_box .sright{
		width: 16%;
		float: right;
		background: #169bd5;
		padding: 15px 0;
	}
	.search_box .sright img{
		display: block;
		width: 32px;
		height: 32px;
		margin: 0 auto;
	}
</style>