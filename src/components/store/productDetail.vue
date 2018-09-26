<template>
	<div id="productDetail">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<app-banner :swipeList="swipeList" :vipShow="vip"></app-banner>
		<div class="collect_box">
			<div class="left">
				<h4>¥10.00</h4>
				<p>咨询服务</p>
			</div>
			<div class="right">
				<a href="javascript:void(0);">
					<img src="../../assets/img/icon/star2.png">
					<p>收藏</p>
				</a>
			</div>
		</div>
		<div class="select_service">
			<div class="left more">可选服务</div>
			<div class="right">
				<button v-for="(item,index) in btn_list" :key="index" :class="{'active':index == curIndex}" @click="changeBtn(index)">{{item.name}}</button>
			</div>
		</div>
		<div class="select_service contour">
			<div class="left">VIP服务</div>
			<div class="right" @click="toSlideVip">
				开通VIP服务，立享折扣大礼包<img src="../../assets/img/icon/right1.png" alt="">
			</div>
		</div>
		<div class="select_service">
			<div class="left">服务地址</div>
			<div class="right">
				深圳市南山区学府路118号7层  某律师事务所
			</div>
		</div>
		<div class="select_service">
			<div class="appraise">
				<div>评价<span>好评 100%</span><router-link to="/assess">共20万+条评价<img src="../../assets/img/icon/right1.png" alt=""></router-link></div>
			</div>
			<div class="raise_box">
				<div class="raise_item" v-for="(item,index) in raise_list" :key="index">
					<div class="raise_head">
						{{item.name}}
						<img src="../../assets/img/icon/star3.png" v-for="i in item.starNum">
						<span>{{item.time}}</span>
					</div>
					<div class="raise_content">{{item.content}}</div>
				</div>
				<div class="see_more"><router-link to="/assess">查看全部评价</router-link></div>
			</div>
		</div>
		<div class="buy_box">
			<router-link to="/eOrder">我要购买</router-link>
		</div>
		<router-link to="Chat" class="customer_service"><img src="../../assets/img/service_ad.png"></router-link>
		<mt-popup v-model="vip_popup" position="bottom">
			<div class="vip_box">
				<h3>VIP 服务介绍</h3>
				<ul>
					<li>
						<img src="../../assets/img/vip_card1.jpg">
						<button class="active">已购买</button>
					</li>
					<li>
						<img src="../../assets/img/vip_card2.jpg">
						<button>点击购买</button>
					</li>
				</ul>
				<a href="javascript:void(0);" class="finish" @click="finish_vip">完成</a>
			</div>
		</mt-popup>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import comBanner from '@/components/common/banner'
import { Popup } from 'mint-ui';
Vue.use( Popup );

export default{
	data(){
		return{
			headerTitle: "产品详情",
			backshow: true,
			show: false,
			vip: false,
			swipeList:[{
				href: "",
				img: require("../../assets/img/shop_banner1.jpg")
			},{
				href: "",
				img: require("../../assets/img/shop_banner1.jpg")
			},{
				href: "",
				img: require("../../assets/img/shop_banner1.jpg")
			},{
				href: "",
				img: require("../../assets/img/shop_banner1.jpg")
			},{
				href: "",
				img: require("../../assets/img/shop_banner1.jpg")
			}],
			btn_list:[{
				name:"付费咨询"
			}],
			curIndex: 0,
			raise_list:[{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			}],
			vip_popup: false
		}
	},
	components:{
		dsHeader,
		'app-banner':comBanner
	},
	methods:{
		changeBtn(index){
			this.curIndex = index
		},
		toSlideVip(){
			this.vip_popup = true
		},
		finish_vip(){
			this.vip_popup = false
		}
	}
}
</script>

<style scoped>
	#productDetail{
    padding: 88px 0 98px;
  }
	.collect_box{
		overflow: hidden;
		padding: 20px 30px;
		border-bottom: 12px solid #f2f3f6;
	}
	.collect_box .left{
		float: left;
		width: 85%;
	}
	.collect_box .left h4{
		color: #f32f31;
		font-size: 30px;
		margin-bottom: 5px;
	}
	.collect_box .right{
		width: 15%;
		float: right;
		box-sizing: border-box;
		border-left: 1px solid #E7E7E7;
		padding-left: 30px;
		text-align: center;
	}
	.collect_box .right img{
		display: inline-block;
		width: 31px;
		height: 29px;
		margin-bottom: 5px;
	}
	.collect_box .right a{
		display: block;
		overflow: hidden;
	}
	.collect_box .left p,.collect_box .right p{
		color: #363636;
		font-size: 24px;
		font-weight: 500;
	}

	.select_service{
		overflow: hidden;
		padding: 0 30px;
		border-bottom: 12px solid #f2f3f6;
	}
	.select_service .left{
		padding: 20px 0;
		color: #363636;
		font-size: 24px;
		float: left;
		width: 23%;
	}
	.select_service .left.more{
		padding: 25px 0;
	}
	.select_service.contour .left,.select_service.contour .right{
		padding: 0;
		height: 70px;
		line-height: 70px;
	}
	.select_service .right{
		width: 77%;
		float: left;
		padding: 15px 0;
	}
	.select_service .right button{
		display: block;
		float: left;
		color: #7f7f7f;
		font-size: 22px;
		width: 32%;
		border: 1px solid #EBEBEB;
		background: #fff;
		outline: none;
		padding: 10px 0;
		border-radius: 10px;
		margin: 10px 2% 0 0;
		box-sizing: border-box;
	}
	.select_service .right button.active{
		color: #f32f32;
		background: #fde1e3;
		border-color: #F44144;
	}
	.select_service .right button:nth-child(3n){
		margin-right: 0;
	}
	.select_service .right button:first-child,.select_service .right button:nth-child(2),.select_service .right button:nth-child(3){
		margin-top: 0;
	}

	.select_service .right{
		color: #363636;
		font-size: 24px;
		line-height: 1.5;
	}
	.select_service .right img{
		display: block;
		width: 17px;
		height: 31px;
		float: right;
		margin-top: 20px;
	}

	.appraise{
		margin: 20px 0 10px;
		color: #363636;
		font-size: 24px;
	}
	.appraise div{
		overflow: hidden;
	}
	.appraise span{
		color: #e60012;
		margin-left: 10px;
	}
	.appraise a{
		display: block;
		float: right;
		color: #939393;
		font-size: 22px;
	}
	.appraise a img{
		display: inline-block;
		width: 17px;
		height: 31px;
		vertical-align: middle;
		margin: 0 0 8px 20px;
	}

	.raise_box{
		overflow: hidden;
		padding-bottom: 30px;
	}
	.raise_item{
		overflow: hidden;
		margin-bottom: 20px;
	}
	.raise_head{
		color: #2b2b2b;
		font-size: 20px;
		margin-bottom: 10px;
	}
	.raise_head img{
		display: inline-block;
		width: 20px;
		height: 19px;
		margin-right: 8px;
	}
	.raise_head img:first-child{
		margin-left: 15px;
	}
	.raise_head span{
		float: right;
		color: #939393;
	}
	.raise_content{
		color: #2b2b2b;
		font-size: 20px;
		line-height: 1.5;
	}
	
	.see_more{
		text-align: center;
	}
	.see_more a{
		display: inline-block;
		color: #5c5b5b;
		font-size: 22px;
		border: 1px solid #EDEDED;
		padding: 10px 20px;
		border-radius: 10px;
	}

	

	/deep/ .mint-popup-bottom{
		width: 100%;
		background: none;
	}
	.vip_box{
		background: #fff;
		width: 100%;
		z-index: 40;
		padding: 50px 30px;
		box-sizing: border-box;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.vip_box h3{
		color: #343434;
		font-size: 30px;
		margin-bottom: 40px;
		text-align: center;
	}
	.vip_box ul{
		overflow: hidden;
	}
	.vip_box ul li{
		overflow: hidden;
		margin-bottom: 40px;
		background: url(../../assets/img/vip_bg1.jpg) center center no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.vip_box ul li:last-child{
		background: url(../../assets/img/vip_bg2.jpg) center center no-repeat;
		background-size: 100% 100%;		
	}
	.vip_box ul li img{
		display: block;
		width: 470px;
		height: 279px;
		margin: 50px auto;
	}
	.vip_box ul li button{
		position: absolute;
		right: 23px;
		bottom: 17px;
		width: 147px;
		height: 47px;
		line-height: 47px;
		color: #fff;
		font-size: 26px;
		background: #ff9900;
		border: 0;
		border-radius: 15px;
		outline: none;
	}
	.vip_box ul li button.active{
		background: #dcdcdc;
	}

	.vip_box .finish{
		display: block;
		width: 100%;
		height: 82px;
		line-height: 82px;
		color: #fff;
		font-size: 30px;
		text-align: center;
		background: #e74f5b;
		border-radius: 10px;
		margin: 10px auto;
	}
</style>