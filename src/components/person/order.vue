<template>
	<div id="order">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="order_box">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="doing">服务中</mt-tab-item>
			  <mt-tab-item id="finish">已完成</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="doing">
				<ul class="order_ul">
					<li v-for="(item,index) in orderDoing" :key="index"><img src="../../assets/img/icon/e_icon2.png"><p>{{item.title}}<span>{{item.status}}</span><span>{{item.time}}</span></p></li>
				</ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="finish">
				<ul class="order_ul">
					<li v-for="(item,index) in orderFinish" :key="index"><img src="../../assets/img/icon/e_icon3.png"><p>{{item.title}}<span>{{item.status}}</span><span>{{item.time}}</span></p></li>
				</ul>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import { Navbar, TabItem } from 'mint-ui'
Vue.use( Navbar, TabItem )

export default{
	data(){
		return{
			headerTitle: "我的订单",
			backshow: true,
			show: false,
			selected: "doing",
			orderDoing:[{
				title:"0115789",
				status:"服务中",
				time:"2018-08-18"
			},{
				title:"0115789",
				status:"服务中",
				time:"2018-08-18"
			}],
			orderFinish:[{
				title:"0115789",
				status:"已完成",
				time:"2018-08-18"
			},{
				title:"0115789",
				status:"已完成",
				time:"2018-08-18"
			},{
				title:"0115789",
				status:"已完成",
				time:"2018-08-18"
			}]
		}
	},
	components:{
		dsHeader
	}
}
</script>

<style scoped>
	#order{
		padding: 88px 0 0;
	}
	.order_box{
		overflow: hidden;
		padding: 40px 30px;
		border-top: 12px solid #f2f3f6;
	}
	/deep/ .mint-navbar{
		margin-bottom: 30px;
	}
	/deep/ .mint-navbar .mint-tab-item{
		padding: 30px 0;
		border: 1px solid #70C1E5;
		border-radius: 15px;
	}
	/deep/ .mint-navbar .mint-tab-item:first-child{
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	/deep/ .mint-navbar .mint-tab-item:last-child{
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	/deep/ .mint-tab-item-label{
		color: #169bd5;
		font-size: 30px;		
	}
	/deep/ .mint-navbar .mint-tab-item.is-selected{
		border: 0;
		background: #169bd5;
		margin-bottom: 0;
	}
	/deep/ .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
		color: #fff;		
	}
	.order_ul{
		overflow: hidden;
		margin: 0 0 20px;
	}
	.order_ul li{
		width: 97%;
		float: right;
		margin-bottom: 25px;
		height: 71px;
		color: #444;
		font-size: 26px;
		/*overflow: hidden;*/
		background: #f2f3f7;
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 20px 0 70px;
		box-sizing: border-box;
	}
	.order_ul li img{
		display: block;
		width: 71px;
		height: 71px;
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
</style>