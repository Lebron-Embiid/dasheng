<template>
	<div id="apply">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="apply_box">
			<h3>申请律师<span>|</span>第二步</h3>
			<div class="first_box">
				<div class="first_item">
					<div class="left">身份证号码</div>
					<div class="right"><div><input type="text" name="id_card" v-model="id_card" placeholder="填写身份证号码"></div></div>
				</div>
				<div class="first_item">
					<div class="left">律师证编号</div>
					<div class="right"><div><input type="text" name="lawyer_number" v-model="lawyer_number" placeholder="须填写律师证编号"></div></div>
				</div>
				<div class="first_item">
					<div class="left">注册时间</div>
					<div class="right"><div>
						<span @click="openPicker">{{registerTime}}</span>
						<mt-datetime-picker
					    ref="picker"
					    type="date"
					    @confirm="handleConfirm">
					  </mt-datetime-picker>
					</div></div>
				</div>
				<div class="first_item">
					<div class="left">律师证年鉴有效期</div>
					<div class="right"><div>
						<span @click="openPicker1">{{yearValue1}}</span>
						至
						<span @click="openPicker2">{{yearValue2}}</span>
						<mt-datetime-picker
					    ref="picker1"
					    type="date"
					    @confirm="yearValidity1">
					  </mt-datetime-picker>
					  <mt-datetime-picker
					    ref="picker2"
					    type="date"
					    @confirm="yearValidity2">
					  </mt-datetime-picker>
					</div></div>
				</div>
				<div class="first_item">
					<div class="left">任职律所名称</div>
					<div class="right"><div><input type="text" name="law_name" v-model="law_name" placeholder="须填写律所名称"></div></div>
				</div>
				<div class="first_item">
					<div class="left">执业地点</div>
					<div class="right"><div><input type="text" name="law_address" v-model="law_address" placeholder="须填写执业地点"></div></div>
				</div>
				<div class="first_item">
					<div class="left">律师证年鉴有效期</div>
					<div class="right"><div>
						<span @click="openPicker3">{{contractValue1}}</span>
						至
						<span @click="openPicker4">{{contractValue2}}</span>
						<mt-datetime-picker
					    ref="picker3"
					    type="date"
					    @confirm="contractValidity1">
					  </mt-datetime-picker>
					  <mt-datetime-picker
					    ref="picker4"
					    type="date"
					    @confirm="contractValidity2">
					  </mt-datetime-picker>
					</div></div>
				</div>
			</div>
		</div>
		<div class="buy_box">
			<a href="javascript:void(0);" @click="nextFinish">下一步</a>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import { DatetimePicker,MessageBox } from 'mint-ui'
Vue.use( DatetimePicker )
import moment from 'moment'

export default{
	data(){
		return{
			headerTitle: "申请律师",
  			backshow: true,
			show: false,
			id_card:"",
			lawyer_number:"",
			law_name:"",
			law_address:"",
  			registerTime: "2018-08-18",
  			yearValue1: "2018-08-18",
  			yearValue2: "2028-08-18",
  			contractValue1: "2018-08-18",
  			contractValue2: "2028-08-18",
		}
	},
	components:{
		dsHeader
	},
	methods:{
		openPicker() {
	      this.$refs.picker.open();
	    },
			openPicker1() {
	      this.$refs.picker1.open();
	    },
			openPicker2() {
	      this.$refs.picker2.open();
	    },
			openPicker3() {
	      this.$refs.picker3.open();
	    },
			openPicker4() {
	      this.$refs.picker4.open();
	    },
	    handleConfirm (data) {
     		this.registerTime = moment(data).format('YYYY-MM-DD')
		},
		yearValidity1 (data) {
     		this.yearValue1 = moment(data).format('YYYY-MM-DD')
		},
		yearValidity2 (data) {
     		this.yearValue2 = moment(data).format('YYYY-MM-DD')
		},
		contractValidity1 (data) {
     		this.contractValue1 = moment(data).format('YYYY-MM-DD')
		},
		contractValidity2 (data) {
     		this.contractValue2 = moment(data).format('YYYY-MM-DD')
		},
		nextFinish(){
			if(this.id_card=='' || this.lawyer_number=='' || this.law_name=='' || this.law_address==''){
		  		MessageBox('提示','请将信息填写完整！')
		  		return false
		  	}else{
		  		this.$router.push('/applyFinish')
		  	}
		}
	}
}
</script>

<style scoped>
	#apply{
		padding: 88px 0 108px;
	}

	.first_item .right,.first_item .right span{
	  color: #909090;
	  font-size: 24px;
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