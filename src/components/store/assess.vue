<template>
	<div id="assess">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="raise_box">
			<div class="raise_item" v-for="(item,index) in raise_list" :key="index">
				<div class="raise_head">
					{{item.name}}
					<img src="../../assets/img/icon/star3.png" v-for="i in item.starNum">
					<span>{{item.time}}</span>
				</div>
				<div class="raise_content">{{item.content}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'

export default{
	data(){
		return{
			headerTitle: "全部评价",
    		backshow: true,
			show: false,
			raise_list:[{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			},{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			},{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			},{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			},{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			},{
				name:"张三",
				starNum: 5,
				time:"2018-08-17",
				content:"通过偶然的机会接触到企法优途，专业的态度、高效的服务、强大的团队让我最终在众多律所中选择了它作为公司的法律顾问，给我专业的法律建议，大大降低了公司经营过程中出现的法律风险。"
			}],
		}
	},
	components:{
		dsHeader
	}
}
</script>

<style scoped>
	#assess{
		padding: 88px 0 0;
	}
	.raise_box{
		overflow: hidden;
		padding: 30px;
	}
	.raise_item{
		overflow: hidden;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid #f2f3f6;
	}
	.raise_head{
		color: #2b2b2b;
		font-size: 20px;
		margin-bottom: 10px;
	}
	.raise_head img{
		display: inline-block;
		width: 20px;
		height: 19px;
		margin-right: 8px;
	}
	.raise_head img:first-child{
		margin-left: 15px;
	}
	.raise_head span{
		float: right;
		color: #939393;
	}
	.raise_content{
		color: #2b2b2b;
		font-size: 20px;
		line-height: 1.5;
	}
</style>