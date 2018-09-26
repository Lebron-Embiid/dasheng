<template>
	<div id="complaint">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="complaint_box">
			<div class="area_title">
				<textarea name="title" v-model="title" placeholder="请填写投诉标题内容"></textarea>
			</div>
			<div class="area_content">
				<textarea name="content" v-model="content" placeholder="请填写投诉内容详情"></textarea>				
			</div>
		</div>
		<div class="buy_box">
			<a href="javascript:void(0);" @click='toSubmit'>提交</a>
		</div>
		<a href="javascript:void(0);" @click="$router.go(-1)" class="customer_service"><img src="../../assets/img/back_order.png"></a>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import { MessageBox } from 'mint-ui'

export default{
	data(){
		return{
			headerTitle: "投诉",
	    	backshow: true,
			show: false,
			title:'',
			content:''
		}
	},
	components:{
		dsHeader
	},
	methods:{
		toSubmit(){
			if(this.title == '' || this.content == ''){
				MessageBox('提示', '请填写评价内容或详情！');
				return false
			}else{
				this.$router.go(-1)
			}
		}
	}
}
</script>

<style scoped>
	#complaint{
		padding: 88px 0 108px;
	}
	#complaint #header{
		border-bottom: 2px solid #EBEBEB;		
	}
	.complaint_box{
		overflow: hidden;
		padding: 20px 30px;
	}
	.area_title{
		margin-bottom: 20px;
	}
	.area_title,.area_content{
		border: 2px solid  #DADADA;
	}
	.area_title textarea,.area_content textarea{
		display: block;
		width: 100%;
		border: 0;
		background: #f6f6f6;
		padding: 20px;
		box-sizing: border-box;
		color: #707070;
		font-size: 26px;
	}
	.area_title textarea{
		height: 160px;
	}
	.area_content textarea{
		height: 400px;
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