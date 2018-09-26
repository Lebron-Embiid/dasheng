<template>
	<div id="store">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="chat_box">
			<h3>律师信息</h3>
			<div class="chat">
				<div class="chat_item" v-for="(item,index) in chatList" :key="index" :class="item.class">
					<div class="left_head">
						<img :src="item.head">
					</div>
					<div class="right_info">
						<h4>{{item.name}}<span>{{item.time}}</span></h4>
						<p>{{item.info}}?</p>
					</div>
				</div>
			</div>
		</div>
		<div class="chat_submit">
			<form>
				<input type="text" name="chat_val" placeholder="请输入咨询内容" class="chat_ipt" autocomplete="off">
				<div class="btn_box"><img src="../assets/img/icon/ok.png"></div>
			</form>
		</div>
		<a href="javascript:void(0);" @click="$router.back(-1)" class="customer_service"><img src="../assets/img/back_order.png"></a>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'

export default{
	data(){
		return{
			headerTitle: "咨询服务",
			backshow: true,
			show: false,
			chatList:[{
				class:"cr",
				head:require("../assets/img/chat_head1.png"),
				name:"王二狗",
				time:"16:11",
				info:"我被公司起诉了，改怎么办"
			},{
				class:"cl",
				head:require("../assets/img/chat_head2.png"),
				name:"符律师",
				time:"16:11",
				info:"认真阅读原告的诉状。第一遍阅读的时候，先大致浏览，了解原告起诉的具体诉由，如果看到你认为不合理的地方，先不要着急，因为原告陈述的可能并都是真实的情况。完成第一遍的阅读后，你需要接着再逐句阅读第二遍。记住，在你汇报诉讼情况的时候，业务部门问你的第一个问题肯定是“这起案件起诉的是什么事情？”"
			},{
				class:"cl",
				head:require("../assets/img/chat_head2.png"),
				name:"符律师",
				time:"16:11",
				info:"这份案情说明能有效地帮助你集中注意力解决案件的核心问题，这份说明当中应当包含以下基本信息：案件当事人、法院所在地、主审法官、原告的诉由、原告主张的赔偿（金钱赔偿的数额、是否申请禁止令等）。你还可以开始罗列你所在公司的辩护理由和主要依据。"
			}]
		}
	},
	components:{
		dsHeader
	}
}
</script>

<style scoped>
	#store{
		padding: 88px 0 108px;
	}
	#store #header{
		border-bottom: 2px solid #EBEBEB;		
	}
	.chat_box{
		overflow: hidden;
		padding: 35px 30px 108px;
	}
	.chat_box h3{
		color: #363636;
		font-size: 28px;
		padding-bottom: 10px;
		border-bottom: 1px solid #EBEBEB;
	}
	.chat{
		overflow: hidden;
		padding: 30px 0;
	}
	.chat_item{
		overflow: hidden;
		margin-bottom: 25px;
	}
	.chat_item .left_head{
		width: 20%;
		float: left;
	}
	.chat_item .left_head img{
		display: block;
		width: 75px;
		height: 75px;
		border-radius: 50%;
		margin-top: 15px;
	}
	.chat_item.cr .left_head{
		float: right;
	}
	.chat_item.cr .left_head img{
		float: right;
	}
	.chat_item .right_info{
		width: 80%;
		float: left;
		padding: 15px;
		background: #f6f6f6;
		box-sizing: border-box;
		position: relative;
	}
	.chat_item .right_info h4{
		color: #4999d0;
		font-size: 26px;
		margin-bottom: 15px;
	}
	.chat_item .right_info h4 span{
		color: #8e8e8e;
		font-size: 22px;
		margin-left: 30px;
	}
	.chat_item .right_info p{
		color: #5b5b5b;
		font-size: 22px;
		line-height: 1.3;
	}
	.chat_item.cr .right_info{
		text-align: right;
		border-right: 6px solid #e74f5b;
	}
	.chat_item.cl .right_info{
		text-align: left;
		border-left: 6px solid #6782a2;
	}
	.chat_item.cr .right_info::after,.chat_item.cl .right_info::after{
		content:"";
		width: 0;
		height: 0;
		border: 12px solid transparent;
		position: absolute;
		top: 23px;
	}
	.chat_item.cr .right_info::after{
		border-left: 15px solid #e74f5b;
		right: -28px;
	}
	.chat_item.cl .right_info::after{
		border-right: 15px solid #6782a2;
		left: -28px;
	}

	.chat_submit{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 108px;
		padding: 0 30px;
		background: #f2f3f7;
		border-top: 1px solid #E5E5E5;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	.chat_submit form{
		width: 100%;
		overflow: hidden;
		border: 1px solid #EBEBEB;
		border-radius: 20px;
	}
	.chat_ipt{
		width: 80%;
		height: 76px;
		float: left;
		background: #fff;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.btn_box{
		width: 20%;
		height: 76px;
		background: #e74f5b;
		float: right;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn_box img{
		display: block;
		width: 48px;
		height: 47px;
	}
</style>