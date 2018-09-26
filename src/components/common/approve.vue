<template>
	<div id="approve">
		<div class="certy_box">
			<h3>{{title}}</h3>
			<ul>
				<li>
					<div class="cleft">上传最新年检照片</div>
					<div class="cright">
						<img-upload :count="count" :multiple="multiple"></img-upload>
					</div>
				</li>
				<li>
					<div class="cleft">证件结束日期 </div>
					<div class="cright">
						<span @click="openPicker">{{dateValue}}</span>
						<mt-datetime-picker
					    ref="picker"
					    type="date"
					    @confirm="handleConfirm">
					  </mt-datetime-picker>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import imgUpload from '@/components/common/uploadPhoto'
import { DatetimePicker } from 'mint-ui'
Vue.use(DatetimePicker)
import moment from 'moment'

export default{
	data(){
		return{
	  		count: 1,
	  		multiple: false,
	  		dateValue: "2019-08-18"
		}
	},
	props:{
		title: String
	},
	components:{
		dsHeader,
		'img-upload':imgUpload
	},
	methods:{
		openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm (data) {
     	this.dateValue = moment(data).format('YYYY-MM-DD')
		},
	}
}
</script>

<style scoped>
	.certy_box{
		border-top: 12px solid #f2f3f6;
		padding: 30px 0;
	}
	.certy_box h3{
		color: #363636;
		font-size: 28px;
		padding: 0 30px 15px;
		border-bottom: 1px solid #EDEDED;
	}
	.certy_box ul li{
		overflow: hidden;
		padding: 30px;
		border-bottom: 1px solid #EDEDED;
		color: #7b7b7b;
		font-size: 24px;
		display: flex;
		align-items: center;
	}
	.certy_box ul li .cleft{
		width: 40%;
		float: left;
	}
	.certy_box ul li .cright{
		width: 60%;
		float: left;
	}
	.certy_box ul li .cright span{
		display: inline-block;
		padding: 10px 200px 10px 15px;
		border: 1px solid #EDEDED;
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
</style>