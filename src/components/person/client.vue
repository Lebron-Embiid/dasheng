<template>
	<div id="client">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="client_box">
			<ul>
				<li v-for="(item,index) in clientList" :key='index'>
					<div class="left">
						<img :src="item.head_img">
						<h4>{{item.name}}</h4>
					</div>
					<div class="right">
						<p>电话：{{item.phone}}</p>
						<p>邮箱：{{item.email}}</p>
						<p>微信：{{item.wechat}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'

export default{
	data(){
		return{
			headerTitle: "我的客户",
			backshow: true,
			show: false,
			clientList:[{
				head_img:require("../../assets/img/store_head.png"),
				name:"冉小小",
				phone:"136-8989-5656",
				email:"585800@qq.com",
				wechat:"2565555"
			},{
				head_img:require("../../assets/img/store_head.png"),
				name:"冉小小",
				phone:"136-8989-5656",
				email:"585800@qq.com",
				wechat:"2565555"
			},{
				head_img:require("../../assets/img/store_head.png"),
				name:"冉小小",
				phone:"136-8989-5656",
				email:"585800@qq.com",
				wechat:"2565555"
			},{
				head_img:require("../../assets/img/store_head.png"),
				name:"冉小小",
				phone:"136-8989-5656",
				email:"585800@qq.com",
				wechat:"2565555"
			},{
				head_img:require("../../assets/img/store_head.png"),
				name:"冉小小",
				phone:"136-8989-5656",
				email:"585800@qq.com",
				wechat:"2565555"
			}]
		}
	},
	components:{
		dsHeader
	}
}
</script>

<style scoped>
	#client{
		padding: 88px 0 0;
	}
	.client_box{
		overflow: hidden;
		padding: 40px 30px;
		border-top: 12px solid #f2f3f6;
	}
	.client_box ul li{
		overflow: hidden;
		padding-bottom: 25px;
		border-bottom: 1px solid #EDEDED;
		margin-bottom: 50px;
	}
	.client_box .left{
		width: 20%;
		float: left;
	}
	.client_box .left img{
		display: block;
		width: 98px;
		height: 98px;
		border-radius: 50%;
		margin: 0 0 20px;
	}
	.client_box .left h4{
		color: #3e3e3e;
		font-size: 28px;
	}
	.client_box .right{
		width: 80%;
		float: left;
		padding-top: 20px;
	}
	.client_box .right p{
		color: #444;
		font-size: 24px;
		margin-bottom: 10px;
	}
</style>