<template>
	<div id="person">
    <dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
    <div class="vip_box">
      <div class="container">
        <div class="cell_box head_box">
          <h3>会员金卡<img @click="$router.push('/settings')" src="../assets/img/icon/settings.png" alt=""></h3>
          <img class="ls_head" :src="head_img">
          <h4>主律师：Alexander</h4>
        </div>
        <div class="collect_cell">
          <router-link to="">我的收藏<img src="../assets/img/icon/right_three2.png" alt=""></router-link>
        </div>
        <div class="cell_box">
          <h3>我的订单<span>More <img src="../assets/img/icon/down.png"></span></h3>
      	  <router-link to="/eOrder" v-for="(item,index) in cellLists" :key="index">
	          <mt-cell :title="item.title">
	            <span>{{item.date}}</span>
	            <img slot="icon" :src="item.img">
	          </mt-cell>
          </router-link>
        </div>
      </div>
    </div>
    <div class="vip_zone">
    	<h3>VIP专区</h3>
    	<ul>
    		<li @click="$router.push('/productDetail/1')"><img src="../assets/img/vip_img1.jpg" height="207" width="336"></li>
    		<li @click="$router.push('/productDetail/1')"><img src="../assets/img/vip_img2.jpg" height="207" width="336"></li>
    	</ul>
    </div>
    <div class="lawyer">
    	<router-link to="/lawyer">我是律师<img src="../assets/img/icon/right_three2.png" alt=""></router-link>
    </div>
    <dsFooter :selected="selected"></dsFooter>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import dsFooter from '@/components/footer'
import { Tabbar, TabItem,TabContainer, TabContainerItem, Cell  } from 'mint-ui'
Vue.use(Tabbar).use(TabItem).use(TabContainer).use(TabContainerItem).use(Cell)

export default {
  name: 'index',
  data () {
    return {
      headerTitle: "个人中心",
      backshow: false,
      show: false,
			selected: "person",

      head_img: require("../assets/img/ls_head.png"),
      head_name:"Alexander",
      cellLists: [{
        title:"e颂服务订单",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon1.png")
      },{
        title:"咨询服务订单",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon2.png")
      },{
        title:"文书服务订单",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon3.png")
      }],
      lsList:[{
        info: "已受理",
        icon: require("../assets/img/icon/ls_icon1.png"),
        num: 888
      },{
        info: "职业年限",
        icon: require("../assets/img/icon/ls_icon2.png"),
        num: 888
      },{
        info: "专业擅长",
        icon: require("../assets/img/icon/ls_icon3.png"),
        num: 888
      }],
    }
  },
  components:{
    dsHeader,
    dsFooter
  }
}
</script>

<style scoped>
#person{
  padding: 88px 0 98px;
}
.vip_box{
	margin: 35px 0 0;
	overflow: hidden;
	border-bottom: 12px solid #F2F3F6;
}
.cell_box{
  overflow: hidden;
  border: 1px solid #E9E9E9;
  padding: 20px 20px 25px;
  margin: 0 0 50px;
}
.collect_cell a{
  color: #2b2b2b;
  font-size: 30px;
}
.head_box{
	background: #f9f9f9;
}
.cell_box h3{
  font-size: 30px;
  margin: 0 0 20px;
  padding-bottom: 20px;
  font-weight: normal;
  border-bottom: 1px solid #F3F3F3;
}
.head_box h3{
	border-bottom: 0;
	margin-bottom: 0;
	padding-bottom: 0;
}
.head_box h3 img{
	display: block;
	width: 36px;
	height: 36px;
	float: right;
}
.cell_box h3 span{
  float: right;
  color: #3598dc;
  font-size: 22px;
  border: 2px solid #5BB8E0;
  border-radius: 20px;
  padding: 5px 15px;
  display: inline-block;
  vertical-align: top;
}
.cell_box h3 span img{
  width: 18px;
  height: 10px;
}
.cell_box h4{
  color: #3e3e3e;
  font-size: 30px;
  margin: 0 0 10px;
  text-align: center;
  font-weight: 500;
}
.ls_head{
  display: block;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 10px auto 20px;
  padding: 5px;
  border: 1px solid #ECECEC;
}
.mint-cell{
  background: #fafafa;
  margin-bottom: 15px;
}
/deep/ .mint-cell-wrapper{
  padding: 0 15px 0 0;
}
/deep/ .mint-cell-text{
  font-size: 26px;
}
/deep/ .mint-cell-value{
  font-size: 20px;
}
.cell_box a{
  color: #3e3e3e;
}
.cell_box a:hover{
  color: #3598dc;
}
.mint-cell:last-child{
  background: none;
  background: #fafafa;
}
.mint-cell img{
  width: 56px;
  height: 56px;
  margin-right: 10px;
}


.vip_zone{
	overflow: hidden;
	padding: 40px 30px;
	border-bottom: 12px solid #F2F3F6;
}
.vip_zone h3{
	color: #2b2b2b;
	font-size: 28px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E7E7E7;
	margin-bottom: 25px;
}
.vip_zone ul{
	overflow: hidden;
}
.vip_zone ul li{
	width: 49%;
	float: left;
}
.vip_zone ul li:last-child{
	float: right;
}
.vip_zone ul li img{
	display: block;
	width: 100%;
	height: auto;
}
.vip_zone ul li:active img{
  opacity: .8;
}

.lawyer{
	overflow: hidden;
	padding: 20px 30px 60px;
}
.lawyer a,.collect_cell a{
	display: block;
	padding: 20px 0;
	border-bottom: 1px solid #F1F1F1;
	color: #2b2b2b;
	font-size: 28px;
}
.collect_cell a{
  display: block;
  padding: 0;
  border-bottom: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid #E9E9E9;
  padding: 20px;
  margin: 0 0 30px;
}
.lawyer a img,.collect_cell a img{
	display: block;
	width: 16px;
	height: 19px;
	float: right;
	margin-top: 8px;
}
</style>
