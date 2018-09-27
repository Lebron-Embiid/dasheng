<template>
	<div id="eval">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="eval_box">
			<div class="rate_box">
				<span>店铺评分</span>
				<ul class="star">
					<li v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item" @click="stars(index)" track-by="index"></li>
				</ul>
			</div>
			<div class="area_box">
				<textarea name="rate_content" v-model="rate_content" placeholder="请填写评价内容"></textarea>
			</div>
			<img-upload :count="count" :multiple="multiple"></img-upload>
		</div>
		<div class="buy_box">
			<a href="javascript:void(0);" @click="toSubmit">发布</a>
		</div>
		<router-link to="/Chat" class="customer_service"><img src="../../assets/img/service_ad.png"></router-link>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import imgUpload from '@/components/common/uploadPhoto'
import { MessageBox } from 'mint-ui'

export default{
	data(){
		return{
			headerTitle: "评价",
    		backshow: true,
			show: false,
			score: 0,
			rate_content: '',
      		count: 3,
      		multiple: true
		}
	},
	components:{
		dsHeader,
		'img-upload':imgUpload
	},
	computed:{ //计算属性
		itemClasses(){
			let result = []; // 返回的是一个数组,用来遍历输出星星
			let score = Math.floor(this.score * 2 ) / 2; // 计算所有星星的数量
			let hasDecimal = score % 1 !== 0; // 非整数星星判断
			let integer = Math.floor(score); // 整数星星判断
			for(let i=0;i<integer;i++){ // 整数星星使用on
				result.push("on"); // 一个整数星星就push一个CLS_ON到数组
			}
			if(hasDecimal){ // 非整数星星使用half
				result.push("half"); // 类似
			}
			while(result.length < 5){// 余下的用无星星补全,使用off
				result.push("off");
			}
			return result;
		}
	},
	methods:{
		stars:function(index){
			this.score = index + 1
		},
		toSubmit(){
			if(this.rate_content == ''){
				MessageBox('提示', '请填写评价内容！');
				return false
			}else{
				this.$router.push("/eOrder")
			}
		}
	}
}
</script>

<style scoped>
	#eval{
		padding: 88px 0 108px;
	}
	#eval #header{
		border-bottom: 2px solid #EBEBEB;
	}
	.eval_box{
		overflow: hidden;
		padding: 35px 30px;
	}
	.rate_box{
		margin-bottom: 35px;
		overflow: hidden;
	}
	.rate_box span{
		color: #707070;
		font-size: 24px;
		border: 1px solid #D3D3D3;
		padding: 10px 20px;
		margin-right: 25px;
		float: left;
	}

	.star{
		overflow: hidden;
		float: left;
	}
	.star-item{
		float: left;
		width: 45px;
		height: 43px;
		background: url(../../assets/img/icon/rate.png) center center no-repeat;
		background-size: 100%;
		margin-right: 23px;
	}
	.star-item.on{
		background: url(../../assets/img/icon/rate_on.png) center center no-repeat;
		background-size: 100%;
	}

	.area_box{
		overflow: hidden;
		border: 2px solid #D2D2D2;
		margin-bottom: 60px;
	}
	.area_box textarea{
		display: block;
		width: 100%;
		height: 385px;
		border: 0;
		color: #707070;
		font-size: 26px;
		padding: 20px;
		box-sizing: border-box;
	}


	/deep/ .image_upload{
		background: url(../../assets/img/upload_pic_bg.jpg) center center no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
	}
	/deep/ .image_upload, /deep/ .prewImg img{
		width: 179px;
		height: 179px;
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
