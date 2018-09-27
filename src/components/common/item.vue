<template>
	<div id="item">
		<div class="lawyer_item" @click="toLawyerDetail" v-for="(item,index) in list" :key="index">
      		<div class="top_img">
      			<img :src="item.background">
      			<div class="img_layer">
      				<div class="l_right">
      					<div>
      						<router-link to="/storeDetail">查看详情</router-link>
      						<span>已受理：{{item.nums}}</span>
      					</div>
      				</div>
					<h4>{{item.company}}</h4>
					<p>{{item.info}}</p>
      			</div>
      			<img src="../../assets/img/icon/top_three.png" class="top_three">
      		</div>
      		<div class="bottom_info">
      			<div class="left_words">
      				<h5>主律师：{{item.name}}</h5>
      				<p>已受理：{{item.nums}}件</p>
      				<p>好评度：<img src="../../assets/img/icon/star.png" alt="" v-for="(i,idx) in item.starNum" :key="idx"></p>
      				<p>执业年限：{{item.year}}年</p>
      				<p>专业擅长：{{item.love}}</p>
      			</div>
      			<div class="right_head">
      				<img src="../../assets/img/store_head.png">
      			</div>
      		</div>
      	</div>
	</div>
</template>

<script>
export default{
	data(){
		return{

		}
	},
	props:{
		list: Array
	},
	methods:{
		toLawyerDetail(){
			this.$router.push('/storeDetail');
		}
	}
}
</script>

<style scoped>
	.lawyer{
		/*overflow: hidden;*/
		padding: 0 25px;
	}
	.lawyer_item{
		border-radius: 20px;
		background: #fff;
		box-shadow: 0 0 20px #D1D1D1;
		margin-bottom: 50px;
	}
	.top_img{
		position: relative;
	}
	.top_img img{
		display: block;
		width: 100%;
	}
	.top_img .img_layer{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding-left: 30px;
		box-sizing: border-box;
	}
	.l_right{
		overflow: hidden;
		margin-bottom: 60px;
	}
	.l_right div{
		float: right;
		overflow: hidden;
		text-align: right;
	}
	.l_right a{
		display: inline-block;
		padding: 8px 15px;
		color: #fff;
		font-size: 24px;
		background: #169bd5;
		margin: 20px;
	}
	.l_right span{
		display: block;
		width: 200px;
		height: 48px;
		line-height: 48px;
		color: #fff;
		font-size: 22px;
		text-align: center;
		background: rgba(255,255,255,.28);
		border-radius: 50px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.img_layer h4{
		color: #fff;
		font-size: 28px;
		margin-bottom: 10px;
	}
	.img_layer p{
		color: #fff;
		font-size: 22px;
	}
	.top_img .top_three{
		position: absolute;
		display: block;
		width: 36px;
		height: 19px;
		left: 85px;
		bottom: 0;
	}

	.bottom_info{
		overflow: hidden;
		padding: 20px 15px 25px;
	}
	.left_words{
		width: 70%;
		float: left;
		padding-left: 30px;
		border-left: 3px solid #169bd5;
		box-sizing: border-box;
		position: relative;
	}
	.left_words::before{
		content:"";
		width: 20px;
		height: 27px;
		background: url(../../assets/img/icon/right_three.png)center center no-repeat;
		background-size: 100%;
		position: absolute;
		left: 0;
		top: 8px;
	}
	.left_words h5{
		color: #3c3c3c;
		font-size: 26px;
		margin-bottom: 10px;
	}
	.left_words p{
		color: #3c3c3c;
		font-size: 22px;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.left_words p:last-child{
		margin-bottom: 0;
	}
	.left_words p img{
		display: inline-block;
		width: 20px;
		height: 19px;
		margin-right: 6px;
	}
	.right_head{
		width: 30%;
		float: left;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.right_head img{
		width: 120px;
		height: 120px;
		border-radius: 50%;
		margin-top: 20px;
	}
</style>
