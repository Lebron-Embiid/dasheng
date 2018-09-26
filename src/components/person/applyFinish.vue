<template>
	<div id="apply">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="apply_box">
			<h3>申请律师<span>|</span>第三步</h3>
			<div class="first_box">
				<div class="first_item">
					<div class="left">身份证认证</div>
					<div class="right"><div><img-upload :multiple="multiple" :count="count"></img-upload></div></div>
				</div>
				<div class="first_item">
					<div class="left">律师证认证</div>
					<div class="right"><div><img-upload :multiple="multiple" :count="count"></img-upload></div></div>
				</div>
				<div class="first_item">
					<div class="left">聘用合同认证</div>
					<div class="right"><div><img-upload :multiple="multiple" :count="count"></img-upload></div></div>
				</div>
			</div>
		</div>
		<div class="buy_box">
			<a href="javascript:void(0);" @click="finish">认证完成</a>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import comUpload from '@/components/common/uploadPhoto'

export default{
	data(){
		return{
			headerTitle: "申请律师",
    		backshow: true,
			show: false,
			multiple: false,
			count: 1
		}
	},
	components:{
		dsHeader,
		'img-upload':comUpload
	},
	methods:{
		finish(){
	  		this.$router.push('/person')
		}
	}
}
</script>

<style scoped>
	#apply{
		padding: 88px 0 108px;
	}

	/deep/ .image_upload{
		background: url(../../assets/img/upload_pic_bg1.jpg) center center no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		float: none;
	}
	/deep/ .image_upload, /deep/ .prewImg img{
		width: 123px;
		height: 123px;
		margin-bottom: 0;
	}
	/deep/ .prewImg img{
	 	float: left;
	}
	/deep/ .shade .top-view{
		height: 80px;
		padding: 10px 0;
	}
	/deep/ .shade .top-view p{
		font-size: 24px;
	}
	/deep/ .shade .image img{
		/*position: static;*/
		height: auto;
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