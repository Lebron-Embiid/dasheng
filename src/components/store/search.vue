<template>
	<div id="search">
		<div class="header">
			<div class="back" @click="$router.back(-1)"><img src="../../assets/img/icon/back.png" width="20" height="20"></div>
			<form class="search_box">
	      <div class="sleft"><input type="text" name="search" placeholder="搜服务商品" autocomplete="off"></div>
	      <div class="sright"><img src="../../assets/img/icon/search_w.png"></div>
	    </form>
		</div>
		<div class="select_nav">
			<ul class="navs">
				<li v-for="(item,index) in navList" :key="index" @click="showChild(index)">
					<a href="javascript:void(0);">
						{{item.nav}}
						<img src="../../assets/img/icon/down1.png">
					</a>
					<ul v-show="item.show">
						<li v-for="(val,idx) in item.child" :key="idx" @click.stop="selectChild(index,idx)">{{val}}</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="filter_box">
			<div class="filter_item">
				<div class="shop_item" @click="toProDetail" v-for="(item,index) in lawyer_list" :key="index">
					<div class="shop_top">
						<div class="shop_left">
							<img src="../../assets/img/store_head.png">
							<h4>主律师：{{item.name}}</h4>
							<h5>价 格：{{item.price}}元</h5>
						</div>
						<div class="shop_right">
							<p>已受理：{{item.nums}}件</p>
							<p>好评度：<img src="../../assets/img/icon/star1.png" v-for="(i,ix) in item.starNum" :key="ix" alt=""></p>
							<p>执业年限：{{item.year}}年</p>
							<p>专业擅长：{{item.love}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			navList:[{
				nav:"深圳",
				show: false,
				child:["广州","上海","北京","广西","武汉"]
			},{
				nav:"服务",
				show: false,
				child:["广州","上海","北京","广西","武汉"]
			},{
				nav:"类型",
				show: false,
				child:["广州","上海","北京","广西","武汉"]
			},{
				nav:"价格",
				show: false,
				child:["广州","上海","北京","广西","武汉"]
			}],
			lawyer_list:[{
				nums: 300,
				name:"Alexander",
				price:3500,
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			},{
				nums: 300,
				name:"Alexander",
				price:3500,
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			},{
				nums: 300,
				name:"Alexander",
				price:3500,
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			},{
				nums: 300,
				name:"Alexander",
				price:3500,
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			}]
		}
  },
  created(){
    console.log(this.$route.params.id)
  },
	methods:{
		showChild(index){
			for(var i=0;i<this.navList.length;i++){
				this.navList[i].show = false
			}
			this.navList[index].show = true
		},
		selectChild(index,idx){
			this.navList[index].nav = this.navList[index].child[idx]
			this.navList[index].show = false
    },
    toProDetail(){
      this.$router.push('/productDetail/'+this.$route.params.id)
    }
	}
}
</script>

<style scoped>
	#search{
		padding-top: 100px;
	}
	.header{
		overflow: hidden;
		padding: 15px 30px;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		z-index: 10;
	}
	.header .back{
		width: 18%;
		float: left;
	}
	.header .back img{
		display: inline-block;
	}
	.search_box{
		width: 82%;
		float: left;
		background: #e3e4e6;
		border-radius: 10px;
		overflow: hidden;
		box-sizing: border-box;
	}
	.search_box .sleft{
		width: 84%;
		float: left;
		padding: 15px 0 15px 30px;
		box-sizing: border-box;
	}
	.search_box .sright{
		width: 16%;
		float: right;
		background: #169bd5;
		padding: 15px 0;
	}
	.search_box .sright img{
		display: block;
		width: 32px;
		height: 32px;
		margin: 0 auto;
	}
  .search_box .sright:active{
    opacity: .8;
  }

	.navs{
		border: 1px solid #EAEAEA;
		border-left: 0;
		border-right: 0;
		display: flex;
		align-items: space-around
	}
	.navs > li{
		width: 25%;
		/*float: left;*/
		border-right: 1px solid #EAEAEA;
		box-sizing: border-box;
		position: relative;
	}
	.navs > li:last-child{
		border-right: 0;
	}
	.navs > li a{
		color: #404040;
		font-size: 26px;
		display: block;
		overflow: hidden;
		text-align: center;
		padding: 20px 0;
	}
	.navs > li a img{
		display: inline-block;
		width: 20px;
		height: 12px;
		vertical-align: middle;
		margin: 0 0 3px 10px;
	}

	.navs > li ul{
		position: absolute;
		/*background: #fff;*/
		left: 0;
		top: 100%;
		width: 100%;
		height: 220px;
		overflow-y: auto;
		border: 1px solid #EAEAEA;
		box-sizing: border-box;
		z-index: 5;
		display: none;
	}
	.navs > li:hover ul{
		display: block;
	}
	.navs > li ul li{
		color: #404040;
		background: #fff;
		font-size: 24px;
		text-align: center;
		padding: 15px 0;
		border-bottom: 1px solid #EAEAEA;
	}
	.navs > li ul li:hover{
		background: #eee;
	}
	.navs > li ul li:last-child{
		border-bottom: 0;
	}


	.filter_box{
		overflow: hidden;
		padding: 50px 30px;
	}
	.shop_item{
		border-radius: 20px;
		overflow: hidden;
		margin-bottom: 40px;
		box-shadow: 0 5px 10px #D0D0D0;
	}
	.shop_top{
		background: #67809f;
		padding: 20px 20px 20px 25px;
		overflow: hidden;
	}
	.shop_left{
		width: 40%;
		float: left;
	}
	.shop_left img{
		display: block;
		width: 120px;
		height: 120px;
		margin: 15px auto;
		border-radius: 50%;
	}
	.shop_left h4{
		color: #fff;
		font-size: 26px;
	}
	.shop_left h5{
		color: #fff;
		font-size: 22px;
		margin-top: 10px;
	}
	.shop_right{
		width: 60%;
		float: right;
		box-sizing: border-box;
		border-left: 1px solid #CFD7E0;
		padding: 30px 0 30px 35px;
	}
	.shop_right img{
		display: inline-block;
		width: 20px;
		height: 19px;
		margin-right: 6px;
	}
	.shop_right p{
		color: #fff;
		font-size: 22px;
		margin-bottom: 3px;
		line-height: 1.5;
	}
	.shop_right p:last-child{
		margin-bottom: 0;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-wrap: break-word;
		word-break: break-all;
	}
</style>
