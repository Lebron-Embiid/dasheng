<template>
	<div id="collect">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
      <div class="collect_box">
        <div class="shop_item" v-for="(item,index) in lawyer_list" :key="index">
          <div class="shop_top">
            <div class="delete_box" @click="deleteCollect(index)">
              <img src="../../assets/img/icon/delete_icon.png" alt="">
              删除
            </div>
            <div class="shop_left">
              <img src="../../assets/img/store_head.png">
              <h4>{{item.name}}</h4>
            </div>
            <div class="shop_right">
              <p>{{item.address}}</p>
              <p>好评度：<img src="../../assets/img/icon/star1.png" v-for="(i,idx) in item.starNum" :key="idx" alt=""></p>
              <p>已受理：{{item.nums}}件</p>
              <p>执业年限：{{item.year}}年</p>
              <!-- <p>专业擅长：{{item.love}}</p> -->
            </div>
          </div>
          <div class="shop_bottom">
            <ul>
              <li><router-link to="/productDetail/1"><img src="../../assets/img/icon/show_icon1.png"><p>咨询</p></router-link></li>
              <li><router-link to="/productDetail/2"><img src="../../assets/img/icon/show_icon2.png"><p>和解</p></router-link></li>
              <li><router-link to="/productDetail/3"><img src="../../assets/img/icon/show_icon3.png"><p>起诉</p></router-link></li>
              <li><router-link to="/productDetail/4"><img src="../../assets/img/icon/show_icon4.png"><p>执行</p></router-link></li>
              <li><router-link to="/productDetail/5"><img src="../../assets/img/icon/show_icon5.png"><p>应诉</p></router-link></li>
              <li><router-link to="/productDetail/6"><img src="../../assets/img/icon/show_icon6.png"><p>会员卡</p></router-link></li>
            </ul>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import { MessageBox } from 'mint-ui'

export default{
	data(){
		return{
			headerTitle: "我的收藏",
      backshow: true,
			show: false,
			lawyer_list:[{
				nums: 300,
        name:"Alexander",
        address:"某某某律师事务所",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼..."
			},{
				nums: 300,
				name:"Alexander",
        address:"某某某律师事务所",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
			},{
				nums: 300,
				name:"Alexander",
        address:"某某某律师事务所",
				starNum: 5,
				year:10,
				love:"曾成功处理多起涉外非诉讼案件，熟知各类法律业务流程."
      }]
		}
	},
	components:{
		dsHeader
  },
  methods:{
    deleteCollect(e){
      MessageBox.confirm('确定执行此操作?').then(action => {
        console.log(e)
      });
    }
  }
}
</script>

<style scoped>
#collect{
  padding: 88px 0;
}
.collect_box{
		padding: 40px 30px 10px;
    border-top: 12px solid #f2f3f6;
	}
	.shop_item{
		border-radius: 20px;
		overflow: hidden;
		margin-bottom: 35px;
		box-shadow: 0 5px 10px #D0D0D0;
	}
	.shop_top{
		background: #67809f;
		padding: 15px 20px 25px;
		overflow: hidden;
    position: relative;
	}
  .delete_box{
    position: absolute;
    top: 30px;
    right: 20px;
    color: #fff;
    font-size: 20px;
  }
  .delete_box img{
    display: inline-block;
    width: 20px;
    height: 26px;
    vertical-align: middle;
    margin: 0 3px 8px 0;
  }
	.shop_left{
		width: 35%;
		float: left;
	}
	.shop_left img{
		display: block;
		width: 120px;
		height: 120px;
		margin: 5px auto 10px;
		border-radius: 50%;
	}
	.shop_left h4{
		color: #fff;
		font-size: 26px;
		text-align: center;
	}
	.shop_right{
		width: 50%;
		float: left;
		box-sizing: border-box;
		border-left: 1px solid #CFD7E0;
    padding: 20px 0 20px 35px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

	.shop_bottom{
		overflow: hidden;
		background: #fff;
		padding: 20px 0;
	}
	.shop_bottom ul{
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.shop_bottom ul li{
		float: left;
		text-align: center;
		border-right: 1px solid #F5F5F5;
	}
	.shop_bottom ul li a{
		color: #3e7bb1;
		font-size: 22px;
		display: block;
		padding: 10px 30px 5px;
		box-sizing: border-box;
	}
	.shop_bottom ul li:last-child{
		border-right: 0;
	}
	.shop_bottom ul li img{
		display: block;
		width: 36px;
		height: 36px;
		margin: 0 auto 10px;
	}
</style>
