<template>
	<div id="service">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="service_box">
			<div class="service_item" v-for="(item,index) in serviceList" :key="index">
				<h3>{{item.title}}</h3>
				<ul>
					<li v-for="(order,index) in item.list" :key="index">{{order.name}}<span>{{order.time}}</span></li>
				</ul>
			</div>
		</div>
		<div class="service_bottom">
			<ul>
				<li><router-link to=""><img src="../../assets/img/icon/lawyer_icon1.png" height="50" width="48">我是律师</router-link></li>
				<li><router-link to=""><img src="../../assets/img/icon/lawyer_icon2.png" height="50" width="48">我是客服</router-link></li>
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
			headerTitle: "我是客服",
			backshow: true,
			show: false,
			serviceList:[{
				title:"客户咨询订单",
				list:[
					{name:"订单名称",time:"2018-08-18"},
					{name:"订单名称",time:"2018-07-17"},
					{name:"订单名称",time:"2018-06-16"}
				]
			},{
				title:"客户订单服务",
				list:[
					{name:"订单名称",time:"2018-08-18"},
					{name:"订单名称",time:"2018-07-17"},
					{name:"订单名称",time:"2018-06-16"}
				]
			}]
		}
	},
	components:{
		dsHeader
	}
}
</script>

<style scoped>
	#service{
		padding: 88px 0 120px;
	}
	.service_item{
		overflow: hidden;
		padding: 40px 30px 50px;
		border-top: 12px solid #f2f3f6;
	}
	.service_item h3{
		color: #2b2b2b;
		font-size: 28px;
		padding-bottom: 10px;
		border-bottom: 1px solid #F6F6F6;
		margin-bottom: 25px;
	}
	.service_item ul li{
		padding: 12px 45px 12px 15px;
		background: #f2f3f7;
		overflow: hidden;
		margin-bottom: 20px;
		color: #444;
		font-size: 26px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.service_item ul li span{
		float: right;
		color: #b0b0b0;
		font-size: 22px;
	}

	.service_bottom{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		overflow: hidden;
		z-index: 5;
	}
	.service_bottom ul{
		overflow: hidden;
	}
	.service_bottom ul li{
		float: left;
		width: 49.8%;
		background: #ccc;
	}
	.service_bottom ul li:last-child{
		float: right;
	}
	.service_bottom ul li:hover{
		background: #169bd5;
	}
	.service_bottom ul li a{
		height: 120px;
		color: #fff;
		font-size: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.service_bottom ul li a img{
		display: inline-block;
		width: 48px;
		height: 50px;
		vertical-align: middle;
		margin: 0 8px 5px 0;
	}
</style>
