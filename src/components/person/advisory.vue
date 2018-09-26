<template>
	<div id="advisory">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="advisory_box">
			<ul>
				<li v-for="(item,index) in advisoryList" :key="index">
					<div class="img" :class="item.hot"><img :src="item.head_img"></div>
					<div class="info">
						<h4>{{item.name}} <span>{{item.time}}</span></h4>
						<p>{{item.info}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
// import moment from 'moment/min/moment-with-locales'

export default{
	data(){
		return{
			headerTitle: "我的咨询",
    		backshow: true,
			show: false,
			advisoryList:[{
				hot:"",
				head_img:require("../../assets/img/advisory1.png"),
				name:"Peter Chan",
				time:"2分钟前",
				info:"眼瞅着客户欠钱不还没信用，企业只能干着急..."
			},{
				hot:"active",
				head_img:require("../../assets/img/advisory2.png"),
				name:"Crustal Au",
				time:"1小时前",
				info:"眼瞅着客户欠钱不还没信用，企业只能干着急..."
			},{
				hot:"active",
				head_img:require("../../assets/img/advisory3.png"),
				name:"Anthony Chu",
				time:"下午7:50",
				info:"眼瞅着客户欠钱不还没信用，企业只能干着急..."
			},{
				hot:"",
				head_img:require("../../assets/img/advisory4.png"),
				name:"171201-PW3",
				time:"下午7:50",
				info:"眼瞅着客户欠钱不还没信用，企业只能干着急..."
			},{
				hot:"",
				head_img:require("../../assets/img/advisory5.png"),
				name:"171201-PW4",
				time:"2017年11月15日",
				info:"眼瞅着客户欠钱不还没信用"
			},{
				hot:"",
				head_img:require("../../assets/img/advisory6.png"),
				name:"171201-PW3",
				time:"2017年11月3日",
				info:"谢谢"
			},{
				hot:"",
				head_img:require("../../assets/img/advisory7.png"),
				name:"171201-PW3",
				time:"2017年10月6日",
				info:"谢谢"
			}]
		}
	},
	components:{
		dsHeader
	}
}
</script>

<style scoped>
	#advisory{
		padding: 88px 0 0;
	}
	.advisory_box{
		overflow: hidden;
		padding: 15px 0;
		padding-top: 12px solid #f2f3f6;
	}
	.advisory_box ul li{
		overflow: hidden;
		padding: 30px;
		border-bottom: 1px solid #EDEDED;
	}
	.advisory_box .img{
		width: 70px;
		height: 70px;
		float: left;
		position: relative;
		margin-right: 20px;
	}
	.advisory_box .img img{
		display: block;
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}
	.advisory_box .img.active::after{
		content: "";
		display: block;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #ca1815;
		position: absolute;
		top: 0;
		right: 0;
	}
	.advisory_box .info{
		width: 86%;
		float: left;
	}
	.advisory_box .info h4{
		color: #333;
		font-size: 28px;
		margin-bottom: 10px;
	}
	.advisory_box .info h4 span{
		float: right;
		color: #999;
		font-size: 20px;
	}
	.advisory_box .info p{
		color: #666;
		font-size: 24px;
	}
</style>