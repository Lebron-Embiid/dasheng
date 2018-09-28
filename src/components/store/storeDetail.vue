<template>
	<div id="storeDetail">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<app-banner :swipeList="swipeList" :vipShow="vip"></app-banner>
		<div class="city_select">
			<span @click="popupVisible = true">{{defaultType}} <img src="../../assets/img/icon/down1.png"></span>
			<mt-popup
			  v-model="popupVisible"
			  position="bottom">
			  <div class="edit_title">
				<div class="query" @click="popupVisible = false">确定</div>
			</div>
			  <mt-picker :slots="types" @change="onValuesChange"></mt-picker>
			</mt-popup>
			<span @click="popupVisible1 = true">{{defaultValue}} <img src="../../assets/img/icon/down1.png"></span>
			<mt-popup
			  v-model="popupVisible1"
			  position="bottom">
			  <div class="edit_title">
				<div class="query" @click="popupVisible1 = false">确定</div>
			</div>
			  <mt-picker :slots="defaultVals" @change="onValuesChange1"></mt-picker>
			</mt-popup>
		</div>
		<div class="shop_box">
			<div class="shop_item" v-for="(item,index) in lawyer_list" :key="index">
				<div class="shop_top">
					<div class="shop_left">
						<img src="../../assets/img/store_head.png">
						<h4>主律师：{{item.name}}</h4>
					</div>
					<div class="shop_right">
						<p>已受理：{{item.nums}}件</p>
						<p>好评度：<img src="../../assets/img/icon/star1.png" v-for="(i,idx) in item.starNum" :key="idx" alt=""></p>
						<p>执业年限：{{item.year}}年</p>
						<p>专业擅长：{{item.love}}</p>
					</div>
				</div>
				<div class="shop_bottom">
					<ul>
						<li><router-link to="/productDetail/1"><img src="../../assets/img/icon/show_icon1.png"><p>咨询</p></router-link></li>
						<li><router-link to="/productDetail/2"><img src="../../assets/img/icon/show_icon2.png"><p>和解</p></router-link></li>
						<li><router-link to="/productDetail/3"><img src="../../assets/img/icon/show_icon3.png"><p>起诉</p></router-link></li>
						<li><router-link to="/productDetail/4"><img src="../../assets/img/icon/show_icon4.png"><p>执行</p></router-link></li>
						<li><router-link to="/productDetail/5"><img src="../../assets/img/icon/show_icon5.png"><p>应诉</p></router-link></li>
						<li><router-link to="/productDetail/6"><img src="../../assets/img/icon/show_icon6.png"><p>会员卡</p></router-link></li>
					</ul>
				</div>
			</div>
			<div class="legal">
				<h3>法律文书</h3>
				<div><router-link to="/productDetail/7"><img src="../../assets/img/icon/book.jpg"><span>购买法律文书<i>价格：{{price}}元 ></i></span></router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import comBanner from '@/components/common/banner'
import { Swipe, SwipeItem, Picker , Popup } from 'mint-ui'
Vue.use(Swipe).use(SwipeItem).use(Picker).use(Popup)

export default{
	data(){
		return{
			headerTitle: "店铺详情",
			backshow: true,
			show: true,
			vip: true,
			popupVisible: false,
			popupVisible1: false,
			defaultType:"咨询",
			defaultValue:"付费咨询",
			types:[{
				flex: 1,
				values: ['咨询', '和解', '起诉', '执行', '应诉', '文书'],
				className: 'slot1',
				textAlign: 'center'
	        }],
	        defaultVals:[{
        		flex: 1,
				values: ['付费咨询', '和解方案咨询', '证据信息准备', '案件材料准备', '证据信息查询', '投资协议'],
				className: 'slot1',
				textAlign: 'center'
	        }],
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
			lawyer_list:[{
				nums: 300,
				name:"Alexander",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼..."
			},{
				nums: 300,
				name:"Alexander",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			},{
				nums: 300,
				name:"Alexander",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
      }],
      price:"100"
		}
	},
	components:{
		dsHeader,
		'app-banner':comBanner
	},
	methods:{
		onValuesChange(picker, values) {
			this.defaultType = values[0]
	  	},
		onValuesChange1(picker, values) {
			this.defaultValue = values[0]
	  	}
	}
}
</script>

<style scoped>
	#storeDetail{
    padding: 88px 0 98px;
  }
	.city_select{
		overflow: hidden;
		padding: 15px 30px;
		background: #eee;
	}
	.city_select span{
		display: block;
		width: 48%;
		padding: 20px;
		border: 1px solid #E1E1E1;
		border-radius: 10px;
		color: #404040;
		font-size: 26px;
		background: #fff;
		box-sizing: border-box;
		float: left;
	}
	.city_select span:last-of-type{
		float: right;
	}
	.city_select span img{
		display: block;
		width: 20px;
		height: 12px;
		float: right;
		margin-top: 10px;
	}

	.shop_box{
		padding: 25px 30px 10px;
	}
	.shop_item{
		border-radius: 20px;
		overflow: hidden;
		margin-bottom: 35px;
		box-shadow: 0 5px 10px #D0D0D0;
	}
	.shop_top{
		background: #67809f;
		padding: 15px 20px 25px;
		overflow: hidden;
	}
	.shop_left{
		width: 40%;
		float: left;
	}
	.shop_left img{
		display: block;
		width: 120px;
		height: 120px;
		margin: 5px auto 10px;
		border-radius: 50%;
	}
	.shop_left h4{
		color: #fff;
		font-size: 26px;
		text-align: center;
	}
	.shop_right{
		width: 60%;
		float: right;
		padding-left: 35px;
		box-sizing: border-box;
		border-left: 1px solid #CFD7E0;
	}
	.shop_right img{
		display: inline-block;
		width: 20px;
		height: 19px;
		margin-right: 6px;
	}
	.shop_right p{
		color: #fff;
		font-size: 22px;
		margin-bottom: 3px;
		line-height: 1.5;
	}
	.shop_right p:last-child{
		margin-bottom: 0;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-wrap: break-word;
		word-break: break-all;
	}

	.shop_bottom{
		overflow: hidden;
		background: #fff;
		padding: 20px 0;
	}
	.shop_bottom ul{
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.shop_bottom ul li{
		float: left;
		text-align: center;
		border-right: 1px solid #F5F5F5;
	}
	.shop_bottom ul li a{
		color: #3e7bb1;
		font-size: 22px;
		display: block;
		padding: 10px 30px 5px;
		box-sizing: border-box;
	}
	.shop_bottom ul li:last-child{
		border-right: 0;
	}
	.shop_bottom ul li img{
		display: block;
		width: 36px;
		height: 36px;
		margin: 0 auto 10px;
	}

	.legal{
		border: 1px solid #E8E8E8;
		padding: 20px 15px 35px;
	}
	.legal h3{
		color: #2b2b2b;
		font-size: 30px;
		padding-bottom: 20px;
		margin-bottom: 20px;
		border-bottom: 1px solid #E8E8E8;
	}
	.legal div{
		overflow: hidden;
		background: #fafafa;
	}
	.legal div a{
		display: flex;
		align-items: center;
		color: #444;
		font-size: 26px;
		padding-right: 30px;
		box-sizing: border-box;
	}
	.legal div a span{
		display: block;
		width: 100%;
	}
	.legal div a span i{
		float: right;
		font-style: normal;
	}
	.legal div img{
		display: inline-block;
		width: 56px;
		height: 56px;
		margin-right: 10px;
	}
</style>
