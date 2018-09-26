<template>
	<div id="certify">
  	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<com-approve :title="title"></com-approve>
		<div class="buy_box">
			<router-link to="">确认提交</router-link>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import comApprove from '@/components/common/approve'
import { DatetimePicker } from 'mint-ui'
Vue.use(DatetimePicker)
import moment from 'moment'

export default{
	data(){
		return{
			headerTitle: "年审认证",
  		backshow: true,
			show: false,
  		count: 1,
  		multiple: false,
  		title:"年审认证信息",
  		dateValue: "2019-08-18"
		}
	},
	components:{
		dsHeader,
		'com-approve':comApprove
	}
}
</script>

<style scoped>
	#certify{
		padding: 88px 0 98px;
	}
</style>