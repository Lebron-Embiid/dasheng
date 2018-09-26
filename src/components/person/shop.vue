<template>
	<div id="shop">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="shop_box">
			<h3>填写申请信息</h3>
			<div class="write_box">
				<div class="write_item">
					<div class="item_left">店铺类型</div>
					<div class="item_right">
						<mt-radio
						  v-model="value"
						  :options="shop_type"
						  @change="selectRadio">
						</mt-radio>
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">店铺名称</div>
					<div class="item_right">
						<input type="text" name="shop_name" placeholder="请填写店铺名称" autocomplete="off" v-if="value == 'personal'">
						<div v-else>
							<span @click="showType" class="shop_name">{{pickerType}}<img src="../../assets/img/icon/down3.png" alt=""></span>
							<mt-popup v-model="shopVisible" position="bottom">
								<div class="edit_title">
									<!-- <div class="cancle" @click="hideType">取消</div> -->
									<div class="query" @click="hideType">确定</div>
								</div>
								<mt-picker width="100%" ref="picker" :slots="slots" @change="onValuesChange" v-model="pickerType"></mt-picker>
							</mt-popup>
						</div>
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">服务地点</div>
					<div class="item_right">
						<three-address></three-address>
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">店铺简介</div>
					<div class="item_right">
						<input type="text" name="shop_profile" placeholder="请输入店铺简介" autocomplete="off">
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">店铺简介</div>
					<div class="item_right">
						<div class="check_box">
							<mt-checklist
							  v-model="valueo"
							  :options="options">
							</mt-checklist>
						</div>
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">统一社会信用代码</div>
					<div class="item_right">
						<input type="text" name="credit" placeholder="请填写社会信用代码" autocomplete="off">
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">营业执照相片</div>
					<div class="item_right">
						<img-upload :count="count" :multiple="multiple"></img-upload>						
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">开户银行</div>
					<div class="item_right">
						<input type="text" name="bank" placeholder="请填写开户银行" autocomplete="off">
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">银行卡号</div>
					<div class="item_right">
						<input type="text" name="card" placeholder="请填写银行卡号" autocomplete="off">
					</div>
				</div>
				<div class="write_item">
					<div class="item_left">开户名称</div>
					<div class="item_right">
						<input type="text" name="card_name" placeholder="请填写开户名称" autocomplete="off">
					</div>
				</div>
			</div>
		</div>
		<div class="buy_box">
			<router-link to="">确认提交</router-link>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import imgUpload from '@/components/common/uploadPhoto'
import Address from '@/components/common/address'
import { Radio , Picker , Popup , Checklist } from 'mint-ui';
Vue.use( Radio , Picker , Popup , Checklist )

export default{
	data(){
		return{
			headerTitle: "店铺申请",
			backshow: true,
			show: false,

			value: "personal",
			shop_type:[{label:"个人店铺",value:"personal"},{label:"公司店铺",value:"company"}],

			shopVisible: false,
	      	pickerType:"律所名称（自动化体用律所名称在下拉框）",
	      	slots: [
	        {
	          flex: 1,
	          values: ['律所名称（自动化体用律所名称在下拉框）', '律所名称1（自动化体用律所名称在下拉框）', '律所名称2（自动化体用律所名称在下拉框）'],
	          className: 'slot1',
	          textAlign: 'center'
	        }
	      ],
	      valueo: [],
	      	options : [{
			    label: '婚姻家庭',
			    valueo: 'A'
			},{
			    label: '劳动争议',
			    valueo: 'B'
			},{
			    label: '遗产继承',
			    valueo: 'C'
			},{
			    label: '房产纠纷',
			    valueo: 'D'
			},{
			    label: '债券债务',
			    valueo: 'E'
			},{
			    label: '合同纠纷',
			    valueo: 'F'
			},{
			    label: '交通事故',
			    valueo: 'G'
			},{
			    label: '侵权索赔',
			    valueo: 'H'
			}],
      		count: 1,
      		multiple: false
		}
	},
	components:{
		dsHeader,
		'img-upload':imgUpload,
		'three-address':Address
	},
	methods:{
		selectRadio(){
			console.log(this.value)
		},
		onValuesChange(picker, values) {
        	this.pickerType = values[0]
	    },
	    showType(){
	    	this.shopVisible = true
	    },
	    hideType(){
	    	this.shopVisible = false
	    }
	}
}
</script>

<style scoped>
	#shop{
		padding: 88px 0 108px;
		margin-bottom: 108px;
	}
	.shop_box{
		border-top: 12px solid #f2f3f6;
	}
	.shop_box h3{
		color: #363636;
		font-size: 28px;
		padding: 25px 30px 10px;
		border-bottom: 1px solid #ECECEC;
	}

	.write_box{
		overflow: hidden;
		padding: 0 30px;
	}
	.write_item{
		overflow: hidden;
		border-bottom: 1px solid #ECECEC;
		padding: 30px 0 15px;
		display: flex;
		align-items: center;
	}
	.item_left{
		width: 30%;
		float: left;
		color: #5b5b5b;
		font-size: 24px;
	}
	.item_right{
		width: 70%;
		float: right;
	}
	.item_right input{
		color: #909090;
		font-size: 24px;
	}
	.item_right ul{
		overflow: hidden;
		margin-bottom: 12px;
	}
	.item_right ul li,.item_right .shop_name{
		float: left;
		width: 140px;
		margin-right: 20px;
		border: 1px solid #D2D2D2;
		border-radius: 10px;
		padding: 10px;
		box-sizing: border-box;
	}
	.item_right .shop_name{
		display: inline-block;
		width: 100%;
		color: #909090;
		font-size: 20px;
	}
	.item_right ul li:last-child{
		margin-right: 0;
	}
	.item_right ul li img,.item_right span img{
		display: block;
		float: right;
		width: 18px;
		height: 16px;
		margin-top: 6px;
	}

	/deep/ .mint-radiolist-title{
		display: none;
	}
	/deep/ .mint-radiolist{
		overflow: hidden;
	}
	/deep/ .mint-radiolist .mint-cell{
		float: left;
		margin-right: 50px;
	}
	/deep/ .mint-radiolist .mint-cell:last-child{
		margin-right: 0;
	}
	/deep/ .mint-radio-input:checked + .mint-radio-core{
		background-color: #e74f5b;
		border-color: #e74f5b;
	}
	/deep/ .mint-cell-wrapper{
		background: none;
		padding: 0;
	}
	/deep/ .mint-radio-label{
		color: #909090;
		font-size: 24px;
	}
	/deep/ .mint-radio-core{
		transform: scale(1.2);
		margin-right: 10px;
		border-radius: 50%;
	}


	/deep/ .mint-checklist-title{
		display: none;
	}
	/deep/ .mint-checklist .mint-cell{
		float: left;
	}
	/deep/ .mint-checklist-title{
		color: #7f7f7f;
		font-size: 24px;
	}
	/deep/ .mint-checkbox-core{
		border-radius: 0;
		transform: scale(1.5);
		margin-right: 12px;
	}
	/deep/ .mint-checkbox-label{
		color: #7c7c7c;
		font-size: 24px;
	}
	/deep/ .mint-checkbox-input:checked + .mint-checkbox-core{
		background-color: #e74f5b;
		border-color: #e74f5b;
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