<template>
	<div id="lawyer">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="lawyer_box">
			<div class="lawyer_head">
				<img src="../../assets/img/store_head.png" class="head_img">
				<h3>符律师</h3>
				<h3>编号 — 5503</h3>
				<div class="lawyer_year">
					<div @click="$router.push('certify')"><h4>律师年审期限<span>至2019-08-19</span><img src="../../assets/img/icon/right1.png" height="31" width="17"></h4></div>
					<div @click="$router.push('certify')"><h4>律师年审期限<span>至2019-08-19</span><img src="../../assets/img/icon/right1.png" height="31" width="17"></h4></div>
				</div>
				<router-link to="client">我的客户<img src="../../assets/img/icon/right2.png" alt=""></router-link>
				<router-link to="advisory">我的咨询<img src="../../assets/img/icon/right2.png" alt=""></router-link>
			</div>
			<div class="lawyer_order">
				<router-link to="order">我的订单<img src="../../assets/img/icon/right2.png" alt=""></router-link>
				<ul class="order_ul">
					<li v-for="(item,index) in orderList" :key="index"><img :src="item.icon"><p>{{item.title}}<span>{{item.status}}</span><span>{{item.time}}</span></p></li>
				</ul>
			</div>
			<div class="lawyer_income">
				<h3>收入记录</h3>
				<ul>
					<li v-for="(item,index) in incomeList" :key="index"><h4>{{item.number}}<span>日期：{{item.date}}</span><b>¥{{item.price}}</b></h4></li>
				</ul>
				<p>服务费 <span>¥10.00</span></p>
			</div>
			<div class="lawyer_shop">
				<h3><span>我的店铺</span></h3>
				<router-link to="shop" v-if="noShop">申请店铺<img src="../../assets/img/icon/right2.png" alt=""></router-link>
				<div class="shop_box" v-else>
					<lawyer-item :list="lawyer_list"></lawyer-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import dsFooter from '@/components/footer'
import comItem from '@/components/common/item'

export default{
	data(){
		return{
			headerTitle: "我是律师",
			backshow: true,
			show: false,
			noShop: true,

			orderList:[{
				icon:require("../../assets/img/icon/e_icon1.png"),
				title:"订单名称1",
				status:"服务中",
				time:"2018-08-18"
			},{
				icon:require("../../assets/img/icon/e_icon2.png"),
				title:"订单名称2",
				status:"服务中",
				time:"2018-07-17"
			},{
				icon:require("../../assets/img/icon/e_icon3.png"),
				title:"订单名称3",
				status:"已完成",
				time:"2018-06-16"
			}],
			incomeList:[{
				number:"订单号544768934859",
				date:"2018-08-18",
				price:"88.98"
			},{
				number:"订单号544768934859",
				date:"2018-08-18",
				price:"88.98"
			},{
				number:"订单号544768934859",
				date:"2018-08-18",
				price:"88.98"
			}],
			lawyer_list:[{
				background:require("../../assets/img/store_img1.png"),
				nums: 300,
				company:"华翌法律咨询有限公司",
				info:"华翌和你一起探讨和解决法律问题.",
				name:"Alexander",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼..."
			},{
				background:require("../../assets/img/store_img1.png"),
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
		'lawyer-item':comItem
	}
}
</script>

<style scoped>
	#lawyer{
		padding: 88px 0 0;
	}
	.lawyer_box{
		border-top: 12px solid #f2f3f6;
	}
	.lawyer_head{
		overflow: hidden;
		padding: 40px 0 0;
		text-align: center;
	}
	.lawyer_head .head_img{
		display: block;
		width: 112px;
		height: 112px;
		border-radius: 50%;
		margin: 0 auto 20px;
	}
	.lawyer_head h3{
		color: #3e3e3e;
		font-size: 28px;
		margin-bottom: 5px;
	}
	.lawyer_year{
		margin: 30px 0;
	}
	.lawyer_year div{
		display: inline-block;
		width: 60%;
		padding: 10px 35px 10px 25px;
		border: 1px solid #33A7DA;
		border-radius: 10px;
		text-align: left;
		margin-bottom: 10px;
	}
	.lawyer_year div h4{
		width: 100%;
		color: #515151;
		font-size: 24px;
		float: left;
	}
	.lawyer_year div h4 span{
		margin-left: 20px;
	}
	.lawyer_year div img{
		display: block;
		float: right;
		width: 17px;
		height: 31px;
	}
	.lawyer_head a{
		display: block;
		padding: 30px;
		background: #f2f3f6;
		border: 1px solid #DFDFDF;
		border-left: 0;
		border-right: 0;
		margin-bottom: 25px;
		color: #2b2b2b;
		font-size: 28px;
		text-align: left;
	}
	.lawyer_head a img{
		display: block;
		width: 16px;
		height: 28px;
		float: right;
	}

	.lawyer_order,.lawyer_income{
		padding: 30px;
		border-bottom: 12px solid #f2f3f6;
	}
	.lawyer_income{
		padding-bottom: 15px;
	}
	.lawyer_order a,.lawyer_income h3,.lawyer_shop a{
		display: block;
		padding: 10px 0;
		color: #2b2b2b;
		font-size: 28px;
		border-bottom: 1px solid #EDEDED;
		overflow: hidden;
		margin-bottom: 30px;
	}
	.lawyer_order a img,.lawyer_shop a img{
		float: right;
		display: block;
		width: 16px;
		height: 28px;
	}

	.order_ul{
		overflow: hidden;
		margin: 0 0 20px;
	}
	.order_ul li{
		width: 97%;
		float: right;
		margin-bottom: 25px;
		height: 51px;
		color: #444;
		font-size: 26px;
		/*overflow: hidden;*/
		background: #f2f3f7;
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 20px 0 50px;
		box-sizing: border-box;
	}
	.order_ul li img{
		display: block;
		width: 51px;
		height: 51px;
		border-radius: 50%;
		position: absolute;
		left: -20px;
		top: 0;
	}
	.order_ul li p{
		display: block;
		width: 100%;
	}
	.order_ul li span{
		float: right;
		color: #b0b0b0;
		font-size: 22px;
		margin: 5px 0 0 30px;
	}
	.order_ul li:last-child{
		margin-bottom: 0;
	}

	.lawyer_income ul li{
		background: #f2f3f7;
		margin-bottom: 20px;
		padding: 15px;
	}
	.lawyer_income ul li h4{
		color: #606060;
		font-size: 26px;
	}
	.lawyer_income ul li h4 span{
		margin-left: 35px;
	}
	.lawyer_income ul li h4 b{
		float: right;
		color: #e74f5b;
		font-size: 24px;
		font-weight: normal;
	}
	.lawyer_income p{
		color: #444;
		font-size: 24px;
		text-align: right;
		margin-top: 30px;
	}
	.lawyer_income p span{
		color: #e74f5b;
	}

	.lawyer_shop{
		overflow: hidden;
		padding: 40px 30px;
	}
	.lawyer_shop h3{
		color: #2b2b2b;
		font-size: 28px;
		border-bottom: 1px solid #ECECEC;
		margin-bottom: 30px;
	}
	.lawyer_shop h3 span{
		display: inline-block;
		padding: 0 0 13px;
		border-bottom: 1px solid #189BD5;
	}
	.shop_box{
		padding: 0 25px;
	}
</style>