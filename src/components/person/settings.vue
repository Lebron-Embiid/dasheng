<template>
	<div id="settings">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="settings_box">
			<div class="settings_top">
				<h4>个人信息管理</h4>
  				<div class="text-center">
					<img :src="userAvatar" id="pick-avatar" class="ls_head">
					<avatar-cropper
				      @uploaded="handleUploaded"
				      trigger="#pick-avatar"
				      upload-url="" />
		      	</div>
				<h3>主律师：{{idName}}</h3>
			</div>
			<div class="settings_info">
				<ul>
					<li>
						<span>手机号码：</span>
						<input type="text" v-model="phone" name="phone">
					</li>
					<li>
						<span>姓名<i>*</i>：</span>
						<input type="text" v-model="username" name="username">
					</li>
					<li>
						<span>微信：</span>
						<input type="text" v-model="weixin" name="weixin">
					</li>
					<li>
						<span>Q Q：</span>
						<input type="text" v-model="qq" name="qq">
					</li>
					<li>
						<span>邮箱：</span>
						<input type="text" v-model="email" name="email">
					</li>
					<li>
						<span>所在城市：</span>
						<!-- <input type="text" v-model="city" name="city"> -->
            <comAddress></comAddress>
					</li>
				</ul>
				<button>保存</button>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import comAddress from '@/components/common/address'
import AvatarCropper from "vue-avatar-cropper"

export default{
	data(){
		return{
			headerTitle: "设置",
			backshow: true,
			show: false,
      userAvatar: require("../../assets/img/ls_head.png"),
      idName:"Alexander",
      phone:"",
      username:"",
      weixin:"",
      qq:"",
      email:"",
      city:""
		}
	},
	components:{
		dsHeader,
    AvatarCropper,
    comAddress
	},
    methods: {
      handleUploaded(resp) {
      	console.log(resp);
        this.userAvatar = resp.relative_url;
      }
    }
}
</script>

<style scoped>
	#settings{
		padding: 88px 0 0;
	}
	.settings_top{
		overflow: hidden;
		padding: 20px 30px 35px;
		border-bottom: 1px solid #D5D5D5;
		background: #f9f9f9;
		margin-bottom: 40px;
	}
	.settings_top h4{
		color: #2b2b2b;
		font-size: 28px;
	}
	.ls_head{
		display: block;
		width: 130px;
		height: 130px;
		border-radius: 50%;
		margin: 10px auto 20px;
		padding: 5px;
		border: 1px solid #ECECEC;
	}
	.settings_top h3{
		color: #3e3e3e;
		font-size: 30px;
		text-align: center;
		font-weight: 500;
	}
	.settings_info{
		overflow: hidden;
		padding: 0 30px;
	}
	.settings_info ul li{
		overflow: hidden;
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.settings_info ul li span{
		width: 23%;
		text-align: right;
		color: #757575;
		font-size: 26px;
	}
	.settings_info ul li span i{
		color: #cf0505;
		font-style: normal;
	}
	.settings_info ul li input{
		width: 75%;
		height: 72px;
		line-height: 72px;
		border: 1px solid #E5E5E5;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.settings_info button{
		display: block;
		width: 100%;
		height: 83px;
		line-height: 83px;
		color: #fff;
		font-size: 30px;
		background: #e74f5b;
		border-radius: 10px;
		margin: 90px 0;
	}

	/deep/ .avatar-cropper .avatar-cropper-close{
		display: none;
	}
	/deep/ .avatar-cropper .avatar-cropper-container .avatar-cropper-footer .avatar-cropper-btn:hover{
		background: #e74f5b;
	}

  /deep/ #address{
    width: 75%;
  }
  /deep/ #address ul li{
    border-radius: 0;
		height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-color: #E5E5E5;
  }
</style>
