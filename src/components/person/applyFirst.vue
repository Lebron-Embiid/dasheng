<template>
	<div id="apply">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="apply_box">
			<h3>申请律师<span>|</span>第一步</h3>
			<div class="first_box">
				<div class="first_item">
					<div class="left">手机号码</div>
					<div class="right"><div>
						<input type="text" name="phone" class="phone_ipt" v-model="phone" placeholder="填写手机号码">
						<span><button :class="active" @click="getVerificationCode" :disabled="codeDis">{{phoneCode}}</button></span>
					</div></div>
				</div>
				<div class="first_item">
					<div class="left">发送验证</div>
					<div class="right"><div><input type="text" name="code" v-model="code" placeholder="填写验证信息"></div></div>
				</div>
				<div class="first_item">
					<div class="left">您的姓名</div>
					<div class="right"><div><input type="text" name="real_name" v-model="real_name" placeholder="须填写真实姓名"></div></div>
				</div>
				<div class="first_item">
					<div class="left">执业证编号</div>
					<div class="right"><div><input type="text" name="number" v-model="number" placeholder="须填写执业证编号"></div></div>
				</div>
			</div>
			<div class="buy_box">
				<a href="javascript:void(0);" @click="nextSecond">下一步</a>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import { MessageBox } from 'mint-ui'

export default{
	data(){
		return{
			headerTitle: "申请律师",
    		backshow: true,
			show: false,
			phone: "",
			code: "",
			real_name: "",
			number: "",
			active: '',
			codeDis: false,
			phoneCode: "获取验证码",
			currentTime: 60
		}
	},
	components:{
		dsHeader
	},
	methods:{
		changeCode() {
			let telephone = this.phone
			if (telephone.length != 11 || isNaN(telephone)) {
				this.codeDis = false
				MessageBox('提示', '请输入正确的手机号码！');
				return false
			}
			
			let interval = setInterval(()=>{
				this.currentTime--;
				this.phoneCode = this.currentTime + '秒',
				this.codeDis = true,
				this.active = 'active'
			},1000)
		},
		getVerificationCode() {
	    this.changeCode();
	  },
	  nextSecond(){
	  	if(this.phone=='' || this.real_name=='' || this.number==''){
	  		MessageBox('提示','请将信息填写完整！')
	  		return false
	  	}else{
	  		this.$router.push('/applySecond')
	  	}
	  }
	}
}
</script>

<style scoped>
	#apply{
		padding: 88px 0 108px;
	}
	.first_item .right span{
		width: 40%;		
	}
	.first_item .right div{
		overflow: hidden;
	}
	.first_item .right .phone_ipt{
		width: 52%;
		margin-right: 5%;
	}
	.first_item .right button{
		background: #e74f5b;
		border: 0;
		color: #fff;
		font-size: 22px;
		width: 40%;
		height: 50px;
		line-height: 50px;
		border-radius: 50px;
	}
	.first_item .right button.active{
		background: #ccc;
	}

	
	/deep/ .mint-msgbox-confirm{
	    color: #e74f5b;
	  }
	/deep/ .mint-msgbox-header{
	    padding-top: 30px;
	  }
	/deep/ .mint-msgbox-title{
	    font-size: 30px;
	  }
	/deep/ .mint-msgbox-content{
	    font-size: 28px;
	    padding: 20px 0;
	  }
	/deep/ .mint-msgbox-btn{
	    font-size: 28px;
	  }
	/deep/ .mint-msgbox-btns{
	    height: 80px;
	  }
</style>